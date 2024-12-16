/* eslint-disable unused-imports/no-unused-vars */
import type { Plugin } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { normalizeMiniProgramFilename, removeExt } from '@dcloudio/uni-cli-shared'
import MagicString from 'magic-string'
import { ROOT_DIR } from '../../constants'
import { type ArgumentLocation, calculateRelativePath, ensureDirectoryExists, findFirstNonConsecutiveBefore, kebabCase, lexDefaultImportWithQuery, resolveAliasPath, resolveSrcPath } from '../../utils'
import { AsyncComponents, type TemplateDescriptor } from '../common/AsyncComponents'

/**
 * 处理 `import xxx from "*.vue?async"` 形式的调用
 * @description `transform`阶段处理识别以上形式的导入语句，做相关的缓存处理；并将`?async`查询参数去除，避免后续编译处理识别不来该语句
 * @description `generateBundle`阶段处理生成相关页面的 page-json 文件，注入`componentPlaceholder`配置
 */
export function AsyncComponentProcessor(): Plugin {
  const inputDir = process.env.UNI_INPUT_DIR
  const platform = process.env.UNI_PLATFORM
  const AsyncComponentsInstance = new AsyncComponents()

  const isMP = platform.startsWith('mp-')

  return {
    name: 'async-component-processor',
    enforce: 'post',
    async transform(source, importer) {
      // 热更新时，由于含有 async 查询参数的导入语句会删除查询部分（为的是避免后续编译处理识别不来该语句）
      // 所以热更新代码时，已经被处理过的代码再次处理时，原本应该被处理的相关查询参数代码已经被删除了，将不会再处理该代码文件
      // TODO: 后续需要针对以上问题进行优化
      const parseResult = lexDefaultImportWithQuery(source).filter(({ modulePath }) => modulePath.value.toString().split('?')[0].endsWith('.vue'))

      if (!importer.split('?')[0].endsWith('.vue') || parseResult.length === 0 || !parseResult.some(({ query }) => query.some(({ value }) => value.toString().trim() === 'async'))) {
        return
      }

      // #region 提取引入路径数组，生成类型定义文件
      const typeDefinition = generateModuleDeclaration(parseResult)
      const typesFilePath = path.resolve(ROOT_DIR, 'async-component.d.ts')
      ensureDirectoryExists(typesFilePath)
      fs.writeFileSync(typesFilePath, typeDefinition)
      // #endregion

      const filename = removeExt(normalizeMiniProgramFilename(importer, inputDir))

      const tempBindings: TemplateDescriptor['bindingAsyncComponents'] = {}

      const magicString = new MagicString(source)
      parseResult.forEach(({ full, fullPath, defaultVariable, modulePath, query }) => {
        const cache: Record<number, ArgumentLocation> = {}
        query.forEach(({ start, end, value }, index, list) => {
          const prevChar = source[start - 1]

          if (['async', ''].includes(value.toString().trim()) && (start !== end)) {
            magicString.overwrite(start, end, '')

            if (prevChar === '&') {
              magicString.overwrite(start - 1, start, '')
            }
            cache[index] = { start, end, value }

            // ---- 记录异步组件 [小程序环境下] ----
            if (isMP) {
              const url = modulePath.value.toString()
              let normalizedPath = resolveAliasPath(url, true)
              // 根据调用主从关系，获取引用文件的相对路径
              normalizedPath = calculateRelativePath(importer, normalizedPath)
              // 去除 .vue 后缀
              normalizedPath = normalizedPath.replace(/\.vue$/, '')
              const tag = kebabCase(defaultVariable.value.toString())
              tempBindings[tag] = AsyncComponentsInstance.generateBinding(tag, normalizedPath)
            }
            // ---- 记录异步组件 | 其他步骤是全平台的都要的，因为在 transform 阶段需要把 `import xxx from "*.vue?async"` 查询参数去除，否则会影响后续编译 ----
          }
        })

        if (cache[0]) {
        // 查找第一个不连续的数字之前的数字
          const flag = findFirstNonConsecutiveBefore(Object.keys(cache).map(Number))

          const { start, end } = flag !== null ? query[flag + 1] : cache[0]
          const char = flag !== null ? '&' : '?'
          const prevChar = source[start - 1]
          if (prevChar === char) {
            magicString.overwrite(start - 1, start, '')
          }
        }
      })

      // ---- 异步组件数据加入缓存 [小程序环境下] ----
      if (isMP) {
        AsyncComponentsInstance.addScriptDescriptor(filename, tempBindings)
        AsyncComponentsInstance.addAsyncComponents(filename, tempBindings)
      }
      // ---- 异步组件数据加入缓存 ----

      return {
        code: magicString.toString(),
        map: magicString.generateMap({ hires: true }),
      }
    },
    generateBundle(_, bundle) {
      if (!isMP)
        return

      AsyncComponentsInstance.jsonAsyncComponentsCache.forEach((value, key) => {
        const chunk = bundle[`${key}.json`]
        // eslint-disable-next-line no-sequences
        const asyncComponents = Object.entries(value).reduce<Record<string, string>>((p, [key, value]) => (p[AsyncComponentsInstance.rename(key)] = value.value, p), {})

        // 命中缓存，说明有需要处理的文件 ｜ 注入`异步组件引用`配置
        if (chunk && chunk.type === 'asset' && AsyncComponentsInstance.jsonAsyncComponentsCache.get(key)) {
          // 读取 json 文件内容 | 没出错的话一定是 pages-json
          const jsonCode = JSON.parse(chunk.source.toString())
          jsonCode.componentPlaceholder = AsyncComponentsInstance.generateComponentPlaceholderJson(key, jsonCode.componentPlaceholder)

          jsonCode.usingComponents = Object.assign(jsonCode.usingComponents || {}, asyncComponents)
          chunk.source = JSON.stringify(jsonCode, null, 2)
        }
        else {
          const componentPlaceholder = AsyncComponentsInstance.generateComponentPlaceholderJson(key)
          const usingComponents = asyncComponents

          bundle[`${key}.json`] = {
            type: 'asset',
            name: key,
            fileName: `${key}.json`,
            source: JSON.stringify({ componentPlaceholder, usingComponents }, null, 2),
          } as typeof bundle.__proto__
        }
      })
    },
    buildStart() {
      // 每次新的打包时，清空`异步组件`缓存，主要避免热更新时的缓存问题
      AsyncComponentsInstance.jsonAsyncComponentsCache.clear()
      AsyncComponentsInstance.scriptDescriptors.clear()
    },
  }
}

/**
 * 生成类型定义
 */
function generateModuleDeclaration(parsedResults: ReturnType<typeof lexDefaultImportWithQuery>): string {
  let typeDefs = ''

  parsedResults.forEach((result) => {
    const modulePath = result.modulePath.value // 模块路径
    const fullPath = result.fullPath.value

    // 生成 declare module 语句
    typeDefs += `declare module '${fullPath}' {\n`
    typeDefs += `  const component: typeof import('${modulePath}')\n`
    typeDefs += `  export = component\n`
    typeDefs += `}\n`
  })

  return typeDefs
}

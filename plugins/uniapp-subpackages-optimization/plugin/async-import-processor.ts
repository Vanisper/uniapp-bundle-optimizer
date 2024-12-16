/* eslint-disable unused-imports/no-unused-vars */
import type { OutputChunk } from 'rollup'
import type { Plugin } from 'vite'
import type { IOptimizationOptions } from '../type'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import MagicString from 'magic-string'
import { EXT_RE, JS_TYPES_RE, ROOT_DIR, SRC_DIR_RE } from '../../constants'
import { calculateRelativePath, ensureDirectoryExists, hasExtension, moduleIdProcessor, parseAsyncImports, resolveAliasPath, resolveAssetsPath, resolveSrcPath } from '../../utils'

/**
 * 负责处理`AsyncImport`函数调用的传参路径
 *
 * @description `transform`阶段处理`AsyncImport()`函数的路径传参，将别名路径转换为真实路径
 * @description `generateBundle`阶段处理`AsyncImport()`函数的路径传参，进一步将路径转换为生产环境的路径（hash化的路径）
 */
export function AsyncImportProcessor(options: IOptimizationOptions): Plugin {
  const platform = process.env.UNI_PLATFORM
  /** 是否小程序 */
  const isMP = platform.startsWith('mp')

  return {
    name: 'async-import-processor',
    enforce: 'post', // 插件执行时机，在其他处理后执行

    transform(code, id) {
      const asyncImports = parseAsyncImports(code)

      const magicString = new MagicString(code)

      if (asyncImports.length > 0) {
        // #region 提取引入路径数组，生产类型定义文件
        const paths = asyncImports.map(item => item.args[0].value.toString())
        const typeDefinition = generateTypeDefinition(paths)
        const typesFilePath = path.resolve(ROOT_DIR, 'async-import.d.ts')
        ensureDirectoryExists(typesFilePath)
        fs.writeFileSync(typesFilePath, typeDefinition)
        // #endregion

        asyncImports.forEach(({ full, args }) => {
          args.forEach(({ start, end, value }) => {
            // h5 下的开发模式
            if (!isMP && options.command === 'serve' && options.mode === 'development') {
              magicString.overwrite(full.start, full.start + 'AsyncImport'.length, 'import', { contentOnly: true })
            }
            else {
              const url = value.toString()
              let normalizedPath = resolveAliasPath(url, true)
              // 把 `src` 目录下的文件路径转换为相对于根目录的路径
              normalizedPath = resolveSrcPath(normalizedPath)

              // 将别名路径转换为真实路径
              const rewrittenUrl = JSON.stringify(normalizedPath)
              // console.log({ url: value, rewrittenUrl, code: code.substring(start, end) })
              magicString.overwrite(start, end, rewrittenUrl, { contentOnly: true })
            }
          })
        })
      }

      return {
        code: magicString.toString(),
        map: magicString.generateMap({ hires: true }),
      }
    },
    generateBundle({ format }, bundle) {
      // 小程序端为cjs
      if (!['es', 'cjs'].includes(format))
        return

      // 页面被当作组件引入了，这是允许的，但是表现不一样，此处缓存记录
      const pageComponents: Record<string, { code: string, alias: string[] }> = {}

      const hashFileMap = Object.entries(bundle).reduce((acc, [file, chunk]) => {
        if (chunk.type === 'chunk') {
          let moduleId = chunk.facadeModuleId

          if (moduleId?.startsWith('uniPage://') || moduleId?.startsWith('uniComponent://')) {
            const moduleIds = chunk.moduleIds.filter(id => id !== moduleId).map(id => moduleIdProcessor(id))
            if (moduleIds.length >= 1 && moduleIds.length < chunk.moduleIds.length) {
              moduleId = moduleIds.at(-1)
            }
            else if (!moduleIds.length && chunk.fileName) {
              // TODO: 暂时发现页面被当作组件引入的时候，其code是一致的，所以此处以此为判断依据，可能判断依据不准确
              const index = Object.values(pageComponents).findIndex(item => item.code === chunk?.code)
              if (index !== -1) {
                const target = pageComponents[Object.keys(pageComponents)[index]]
                target.alias.push(chunk.fileName)
              }
              else {
                pageComponents[chunk.fileName] = { code: chunk.code, alias: [] }
              }
              return acc
            }
          }

          moduleId && (acc[moduleIdProcessor(moduleId)] = chunk.fileName)
        }

        return acc
      }, {} as Record<string, string | string[]>)

      if (Object.keys(pageComponents).length) {
        const temp = Object.values(bundle).filter(chunk => chunk.type === 'chunk' && chunk.facadeModuleId === null
          && chunk.moduleIds.length === 1 && chunk.moduleIds.length === Object.keys(chunk.modules).length
          && chunk.moduleIds[0] === Object.keys(chunk.modules)[0]) as OutputChunk[]

        temp.forEach((chunk) => {
          const moduleId = chunk.moduleIds[0]
          const fileName = moduleIdProcessor(moduleId)
          if (fileName.startsWith('src/')) {
            const target = Object.keys(pageComponents).find(key => key.replace(EXT_RE, '') === fileName.replace(EXT_RE, '').replace(SRC_DIR_RE, ''))
            if (target) {
              hashFileMap[fileName] = [target, ...pageComponents[target].alias]
            }
          }
        })
      }

      for (const file in bundle) {
        const chunk = bundle[file]
        if (chunk.type === 'chunk' && chunk.code.includes('AsyncImport')) {
          const code = chunk.code
          const asyncImports = parseAsyncImports(code)

          if (asyncImports.length > 0) {
            const magicString = new MagicString(code)

            asyncImports.forEach(({ full, args }) => {
              args.forEach(({ start, end, value }) => {
                const url = value.toString()
                const tempUrl = url.replace(/^\.\//, '') // 去掉路径前面的 './' 便于后续的 matchRecord 匹配
                const matchResult = matchRecord(hashFileMap, tempUrl)

                if (matchResult) {
                  let rewrittenUrl: string | undefined
                  if (!isMP) {
                    // `assets` 前缀转换为 `./` | TODO: 考虑一下`assets`关键字从配置文件中读取，`assets`只是默认的产物编译路径前缀
                    rewrittenUrl = JSON.stringify(resolveAssetsPath(matchResult[1]))
                  }
                  else {
                    // 小程序
                    rewrittenUrl = JSON.stringify(calculateRelativePath(chunk.fileName, matchResult[1]))
                  }
                  // console.log({ urlValue: value, rewrittenUrl, old: code.substring(start, end) })
                  rewrittenUrl && magicString.overwrite(start, end, rewrittenUrl, { contentOnly: true })
                  // 替换 `AsyncImport` 关键字为 `import` | `require.async`
                  magicString.overwrite(full.start, full.start + 'AsyncImport'.length, isMP ? 'require.async' : 'import', { contentOnly: true })
                }
              })
            })
            // 遍历完毕之后更新chunk的code
            chunk.code = magicString.toString()
          }
        }
      }
    },
  }
}

function matchRecord(record: Record<string, string | string[]>, id: string): [string, string] | undefined {
  for (const key in record) {
    const value = record[key]
    const result = Array.isArray(value) ? value[0] : value
    // 处理js/ts文件 ｜ 没有后缀，则认为是 js/ts/mjs 文件
    if ((!hasExtension(id) || JS_TYPES_RE.test(id)) && JS_TYPES_RE.test(key)) {
      // 去除key的后缀
      const keyWithoutExt = key.replace(JS_TYPES_RE, '')
      if (keyWithoutExt.endsWith(id.replace(JS_TYPES_RE, ''))) {
        return [key, result]
      }
    }
    else if (key.endsWith(id)) {
      return [key, result]
    }
  }
}

/**
 * 生成类型定义
 */
function generateTypeDefinition(paths: string[]): string {
  // 将路径组合成 ModuleMap 中的键
  const moduleMapEntries = paths
    .map((p) => {
      return `  '${p}': typeof import('${p}')`
    })
    .join('\n')

  // 返回类型定义
  return `export {}

interface ModuleMap {
${moduleMapEntries}
  [path: string]: any
}

declare global {
  function AsyncImport<T extends keyof ModuleMap>(arg: T): Promise<ModuleMap[T]>
}
`
}

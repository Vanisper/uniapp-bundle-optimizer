/* eslint-disable unused-imports/no-unused-vars */
import type { Plugin } from 'vite'
import process from 'node:process'
import MagicString from 'magic-string'
import { JS_TYPES_RE } from '../../constants'
import { calculateRelativePath, hasExtension, moduleIdProcessor, parseAsyncImports, resolveAliasPath, resolveAssetsPath, resolveSrcPath } from '../../utils'

/**
 * 负责处理`AsyncImport`函数调用的传参路径
 *
 * @description `transform`阶段处理`AsyncImport()`函数的路径传参，将别名路径转换为真实路径
 * @description `generateBundle`阶段处理`AsyncImport()`函数的路径传参，进一步将路径转换为生产环境的路径（hash化的路径）
 */
export function AsyncImportProcessor(): Plugin {
  const platform = process.env.UNI_PLATFORM

  return {
    name: 'async-import-processor',
    enforce: 'post', // 插件执行时机，在其他处理后执行

    transform(code, id) {
      const asyncImports = parseAsyncImports(code)

      const magicString = new MagicString(code)

      if (asyncImports.length > 0) {
        asyncImports.forEach(({ full, args }) => {
          args.forEach(({ start, end, value }) => {
            const url = value.toString()
            let normalizedPath = resolveAliasPath(url, true)
            // 把 `src` 目录下的文件路径转换为相对于根目录的路径
            normalizedPath = resolveSrcPath(normalizedPath)

            // 将别名路径转换为真实路径
            const rewrittenUrl = JSON.stringify(normalizedPath)
            // console.log({ url: value, rewrittenUrl, code: code.substring(start, end) })
            magicString.overwrite(start, end, rewrittenUrl, { contentOnly: true })
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

      const hashFileMap = Object.entries(bundle).reduce((acc, [file, chunk]) => {
        if (chunk.type === 'chunk') {
          let moduleId = chunk.facadeModuleId

          if (moduleId?.startsWith('uniPage://') || moduleId?.startsWith('uniComponent://')) {
            const moduleIds = chunk.moduleIds.filter(id => id !== moduleId).map(id => moduleIdProcessor(id))
            if (moduleIds.length >= 1 && moduleIds.length < chunk.moduleIds.length) {
              moduleId = moduleIds.at(-1)
            }
          }

          moduleId && (acc[moduleIdProcessor(moduleId)] = chunk.fileName)
        }

        return acc
      }, {} as Record<string, string>)

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
                  if (!platform.startsWith('mp')) {
                    // `assets` 前缀转换为 `./` | TODO: 考虑一下`assets`关键字从配置文件中读取，`assets`只是默认的产物编译路径前缀
                    rewrittenUrl = JSON.stringify(resolveAssetsPath(matchResult[1]))
                  }
                  else {
                    // 小程序
                    rewrittenUrl = JSON.stringify(calculateRelativePath(chunk.fileName, matchResult[1]))
                  }
                  // console.log({ urlValue: value, rewrittenUrl, old: code.substring(start, end) })
                  rewrittenUrl && magicString.overwrite(start, end, rewrittenUrl, { contentOnly: true })
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

function matchRecord(record: Record<string, string>, id: string): [string, string] | undefined {
  for (const key in record) {
    // 处理js/ts文件 ｜ 没有后缀，则认为是 js/ts/mjs 文件
    if ((!hasExtension(id) || JS_TYPES_RE.test(id)) && JS_TYPES_RE.test(key)) {
      // 去除key的后缀
      const keyWithoutExt = key.replace(JS_TYPES_RE, '')
      if (keyWithoutExt.endsWith(id.replace(JS_TYPES_RE, ''))) {
        return [key, record[key]]
      }
    }
    else if (key.endsWith(id)) {
      return [key, record[key]]
    }
  }
}

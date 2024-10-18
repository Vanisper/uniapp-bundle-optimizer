/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable node/prefer-global/process */
import type { GetManualChunk, GetModuleInfo, ModuleInfo, PreRenderedChunk, ResolvedId, RollupOptions } from 'rollup'
import type { Plugin } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import { EXTNAME_JS_RE, parseManifestJsonOnce, parseMiniProgramPagesJson } from '@dcloudio/uni-cli-shared'
import { normalizePath, replaceStringAtPosition } from '../utils'

/**
 * uniapp 分包优化插件
 */
export function UniappSubPackagesOptimization(): Plugin {
  const platform = process.env.UNI_PLATFORM
  const inputDir = process.env.UNI_INPUT_DIR

  // #region 分包优化参数获取
  const manifestJson = parseManifestJsonOnce(inputDir)
  const platformOptions = manifestJson[platform] || {}
  const optimization = platformOptions.optimization || {}
  process.env.UNI_OPT_TRACE = `${!!optimization.subPackages}`

  const pagesJsonPath = path.resolve(inputDir, 'pages.json')
  const jsonStr = fs.readFileSync(pagesJsonPath, 'utf8')
  const { appJson } = parseMiniProgramPagesJson(jsonStr, platform, { subpackages: true })
  process.UNI_SUBPACKAGES = appJson.subPackages || {}
  // #endregion

  // #region subpackage
  const UNI_SUBPACKAGES = process.UNI_SUBPACKAGES || {}
  const subPkgsInfo = Object.values(UNI_SUBPACKAGES)
  const normalFilter = ({ independent }) => !independent
  const independentFilter = ({ independent }) => independent
  const map2Root = ({ root }) => `${root}/`
  const subPackageRoots = subPkgsInfo.map(map2Root)
  const normalSubPackageRoots = subPkgsInfo.filter(normalFilter).map(map2Root)
  const independentSubpackageRoots = subPkgsInfo.filter(independentFilter).map(map2Root)

  /** id处理器：将id中的moduleId转换为相对于inputDir的路径并去除查询参数后缀 */
  function moduleIdProcessor(id: string) {
    let inputDir = normalizePath(process.env.UNI_INPUT_DIR)
    // 确保inputDir以斜杠结尾
    if (!inputDir.endsWith('/')) {
      inputDir += '/'
    }

    const normalized = normalizePath(id)
    const name = normalized.split('?')[0]
    // 从name中剔除inputDir前缀
    const updatedName = name.replace(inputDir, '')

    return updatedName
  }
  /** 查找模块列表中是否有属于子包的模块 */
  const findSubPackages = function (importers: readonly string[]) {
    return importers.reduce((pkgs, item) => {
      const pkgRoot = normalSubPackageRoots.find(root => moduleIdProcessor(item).indexOf(root) === 0)
      pkgRoot && pkgs.add(pkgRoot)
      return pkgs
    }, new Set<string>())
  }
  /** 判断是否有主包(是否被主包引用) */
  const hasMainPackage = function (importers: readonly string[]) {
    return importers.some((item) => {
      return !subPackageRoots.some(root => moduleIdProcessor(item).indexOf(root) === 0)
    })
  }
  /** 判断该模块引用的模块是否有跨包引用的组件 */
  const hasMainPackageComponent = function (moduleInfo: Partial<ModuleInfo>, subPackageRoot: string) {
    if (moduleInfo.id && moduleInfo.importedIdResolutions) {
      for (let index = 0; index < moduleInfo.importedIdResolutions.length; index++) {
        const m = moduleInfo.importedIdResolutions[index]

        if (m && m.id) {
          const name = moduleIdProcessor(m.id)
          // 判断是否为组件
          if (name.includes('.vue') || name.includes('.nvue')) {
          // 判断存在跨包引用的情况(该组件的引用路径不包含子包路径，就说明跨包引用了)
            if (!name.includes(subPackageRoot)) {
              if (process.env.UNI_OPT_TRACE) {
                console.log('move module to main chunk:', moduleInfo.id, 'from', subPackageRoot, 'for component in main package:', name)
              }

              // 独立分包除外
              const independentRoot = independentSubpackageRoots.find(root => name.includes(root))
              if (!independentRoot) {
                return true
              }
            }
          }
          else {
            return hasMainPackageComponent(m, subPackageRoot)
          }
        }
      }
    }
    return false
  }
  // #endregion

  return {
    name: 'uniapp-subpackages-optimization',
    enforce: 'post', // 控制执行顺序，post 保证在其他插件之后执行
    config(config, { command }) {
      if (!platform.startsWith('mp'))
        return

      const UNI_OPT_TRACE = process.env.UNI_OPT_TRACE === 'true'
      console.log('分包优化开启状态:', UNI_OPT_TRACE)
      if (!UNI_OPT_TRACE)
        return

      const originalOutput = config?.build?.rollupOptions?.output

      const existingManualChunks
      = (Array.isArray(originalOutput) ? originalOutput[0]?.manualChunks : originalOutput?.manualChunks) as GetManualChunk

      // 合并已有的 manualChunks 配置
      const mergedManualChunks: GetManualChunk = (id, meta) => {
        const normalizedId = normalizePath(id)
        const filename = normalizedId.split('?')[0]

        // #region ⚠️ 以下代码是分包优化的核心逻辑
        // 处理项目内的js,ts文件
        if (EXTNAME_JS_RE.test(filename) && (!filename.startsWith(inputDir) || filename.includes('node_modules'))) {
          // 如果这个资源只属于一个子包，并且其调用组件的不存在跨包调用的情况，那么这个模块就会被加入到对应的子包中。
          const moduleInfo = meta.getModuleInfo(id)
          const importers = moduleInfo.importers || [] // 依赖当前模块的模块id
          const matchSubPackages = findSubPackages(importers)
          if (
            matchSubPackages.size === 1
            && !hasMainPackage(importers)
            && !hasMainPackageComponent(moduleInfo, matchSubPackages.values().next().value)
          ) {
            return `${matchSubPackages.values().next().value}common/vendor`
          }
        }
        // #endregion

        // 如果已有的 manualChunks 存在且匹配，则优先使用
        if (existingManualChunks)
          return existingManualChunks(id, meta)
      }

      return {
        build: {
          rollupOptions: {
            output: {
              manualChunks: mergedManualChunks,
            },
          } as RollupOptions,
        },
      }
    },
  }
}

export default UniappSubPackagesOptimization

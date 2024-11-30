import type { IOptimizationOptions } from './type'
import AsyncImport from './async-import'
import UniappSubPackagesOptimization from './main'

export default (options: IOptimizationOptions) => {
  return [
    // 分包优化
    UniappSubPackagesOptimization(),
    // js/ts插件的异步调用
    AsyncImport(options),
  ]
}

export * from './type.d'

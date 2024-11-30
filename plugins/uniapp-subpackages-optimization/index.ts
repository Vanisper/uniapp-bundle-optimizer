import AsyncImport from './async-import'
import UniappSubPackagesOptimization from './main'

export default () => {
  return [
    // 分包优化
    UniappSubPackagesOptimization(),
    // js/ts插件的异步调用
    AsyncImport(),
  ]
}

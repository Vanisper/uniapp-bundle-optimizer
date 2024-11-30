import { AsyncImportProcessor } from './plugin/async-import-processor'
import { GlobalMethodPlugin } from './plugin/vite-plugin-global-method'

export default () => {
  return [
    // 全局注入 `AsyncImport` 方法
    GlobalMethodPlugin({
      methods: {
        AsyncImport: [
          async function AsyncImport(path: string) {
            return import(/* @vite-ignore */ path)
          },
          // TODO: 在类型生产方面是否可以有更好的解决方案？
          {
            paramsType: 'string',
            returnType: 'Promise<T | any>',
          },
        ],
      },
      // 只匹配 src 目录下的文件
      include: ['src/**/*'],
    }),
    // 处理 `AsyncImport` 函数调用的路径传参
    AsyncImportProcessor(),
  ]
}

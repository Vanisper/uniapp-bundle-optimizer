# uniapp分包优化解决办法

> 可以前往 [https://github.com/dcloudio/uni-app/issues/5025](https://github.com/dcloudio/uni-app/issues/5025) 查看本项目立项背景。

这是一个主分支，用于分包优化的效果测试，具体分包解决方案可以看一下另外的分支。

## TODO

* [X] 分包优化——补丁版
* [X] 异步分包——补丁版
* [ ] 插件化：实现中，见 [plugins/UniappSubPackagesOptimization](./plugins/UniappSubPackagesOptimization/index.ts) 目录，使用方法与其他vite插件一样，在 `vite.config.ts` 中引入即可（注意 [plugins/utils](./plugins/utils/index.ts) 中的相关被使用的方法）。

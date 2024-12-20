# uniapp分包优化解决办法

> 可以前往 [https://github.com/dcloudio/uni-app/issues/5025](https://github.com/dcloudio/uni-app/issues/5025) 查看本项目立项背景。

~~这是一个主分支，用于分包优化的效果测试，具体分包解决方案可以看一下另外的分支。~~

~~分支项目是pnpm补丁版实现，插件化实现在主分支，可以直接运行主分支项目查看分包优化插件化的效果。~~

**目前已经将研究成果整理成vite插件并发布到了npm市场，详情见 <https://github.com/uni-ku/bundle-optimizer>。**

本项目不会继续更新，后续的更新将会在以上的项目中进行。

## TODO

### 补丁版实现

* [X] 分包优化——补丁版
* [X] 组件异步跨包引用——补丁版

### 插件化实现

> 插件化：实现中，见 [plugins/uniapp-subpackages-optimization](./plugins/uniapp-subpackages-optimization/index.ts) 目录，
> 使用方法与其他vite插件一样，在 `vite.config.ts` 中引入即可
>（注意 [`plugins/utils`](./plugins/utils/index.ts) 和 [`plugins/constants`](./plugins/constants.ts) 中的相关被使用的方法）。

#### 实现阶段

* [X] `plugin_step0` 分包优化
* [X] `plugin_step1` 模块异步跨包调用
* [X] `plugin_step2` 组件异步跨包引用

#### 优化发布

* [X] 优化自定义语法的ts类型提示
* [X] 自定义异步导入函数 `AsyncImport` 的依赖收集的实现
* [X] 热更新导致的一些问题
* [X] `插件化` 的成果独立分支，发布到 `npm` 市场

> ！<b style="color: red;">暂时没有对App平台做兼容性实现</b>

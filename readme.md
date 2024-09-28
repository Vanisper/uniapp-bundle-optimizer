# uni-about-patch-dist/3.0.0-4020820240925001

> 关注 `该类` 分支的提交记录，首次正式提交的代码均为  `pnpm patch` 之后对应版本的库的原始源码。
>
> 后续的提交为对源码进行的更改。

## 分包优化

> 需要修改 `manifest.json` 中的 `mp-weixin.optimization.subPackages` 配置项为 `true`，开启方法与vue2版本的uniapp一致。
>
> ---
>
> 运行 `pnpm patch @dcloudio/uni-mp-vite@3.0.0-4020820240925001` （**注意此处的版本号是否与你的项目版本号一致，本分支仅对该分支的版本负责**）。
>
> 前往补丁编辑目录，下载 `releases` 中 `分包优化实现@3.0.0-4020820240925001` 的 `@dcloudio__uni-mp-vite@3.0.0-4020820240925001.zip` 全量覆盖即可（再次声明，**本分支仅对该分支的版本负责**）。
>
> 最后需要执行 `pnpm commit [之前的补丁编辑目录]`，使补丁生效。
>
> ---
>
> 同时提供了 `patches/@dcloudio__uni-mp-vite@3.0.0-4020820240925001.patch` ，使用方法（**可能有效，暂时不确定不同环境下补丁文件中的hash值是不是一致的**），
>
> 将补丁文件复制到项目的 `patches` 目录下，在项目的 `package.json` 中添加：
>
> ```json
> "pnpm": {
>   "patchedDependencies": {
>     "@dcloudio/uni-mp-vite@3.0.0-4020820240925001": "patches/@dcloudio__uni-mp-vite@3.0.0-4020820240925001.patch"
>   }
> },
> ```

## 异步分包

> 需要为 `@vue/runtime-core` 添加类型标注，添加以下代码到 `src/shims-vue.d.ts` 文件中（或者其他控制全局类型定义的文件，视项目具体情况而定）：
>
> ```ts
> import { ComponentOptionsBase } from '@vue/runtime-core';
>
> declare module '@vue/runtime-core' {
>   interface ComponentOptionsBase<Props, RawBindings, D, C extends ComputedOptions, M extends MethodOptions, E extends EmitsOptions, EE extends string = string> {
>     asyncCustomComponents?: Record<string, string>;
>   }
> }
> ```
> 这样之后，可以在 `vue` 文件中使用 `asyncCustomComponents` 字段，如：
>
> ```vue
> <script lang="ts">
> import DemoCopm from "@/subpackage/components/demo/index.vue"
>
> export default defineComponent({
>   components: {
>     DemoCopm,
>   },
>   asyncCustomComponents: {
>     DemoCopm: "../subpackage/components/demo/index",
>   },
> })
> </script>
> ```
> 这样就是显式注册了一个异步组件，允许跨包调用，这是由[微信小程序原生支持的](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/async.html)，uniapp并没有对其进行封装，本次补丁修改实现了这一功能。
>
> 本补丁也是依靠uniapp官方仓库下相关issue的讨论，后续有时间整理一下参考链接，感谢各位大佬们的讨论。
>
> ---
>
> 本补丁修改使用方法与上面的 `分包优化` 一致，只是需要下载的是 `异步分包实现@3.0.0-4020820240925001` 的 `@dcloudio__uni-cli-shared@3.0.0-4020820240925001.zip` 和 `@dcloudio__uni-mp-vite@3.0.0-4020820240925001.zip`。
>
> 注意，**此补丁的提交是增量提交**，所以按照操作打好此次补丁之后，`分包优化` 的补丁功能也会生效。

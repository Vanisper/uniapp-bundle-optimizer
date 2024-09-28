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
> 前往补丁编辑目录，下载分支 `releases` 中的 `@dcloudio__uni-mp-vite.zip` 全量覆盖即可（再次声明，**本分支仅对该分支的版本负责**）。
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

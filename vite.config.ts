import { fileURLToPath, URL } from 'node:url'

import uni from '@dcloudio/vite-plugin-uni'
import Components from '@uni-helper/vite-plugin-uni-components'
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
import { defineConfig } from 'vite'

import UniappSubPackagesOptimization from './plugins/UniappSubPackagesOptimization'

export default defineConfig(async () => {
  const UnoCSS = (await import('unocss/vite')).default

  return {
    base: './',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      // TODO: 开启此插件也能实现分包优化
      // UniappSubPackagesOptimization(),
      uni(),
      UnoCSS(),
      Components({
        dts: true,
        resolvers: [WotResolver()],
      }),
    ],
    build: {
      target: 'es6',
      cssTarget: 'chrome61',
    },
    optimizeDeps: {
      exclude: [
        'vue-demi',
      ],
    },
  }
})

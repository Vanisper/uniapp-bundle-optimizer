import { fileURLToPath, URL } from 'node:url'

import uni from '@dcloudio/vite-plugin-uni'
import Components from '@uni-helper/vite-plugin-uni-components'
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
import { defineConfig } from 'vite'

import Optimization, { type IOptimizationOptions } from './plugins/uniapp-subpackages-optimization'

export default defineConfig(async ({ mode, command }) => {
  const UnoCSS = (await import('unocss/vite')).default

  return {
    base: './',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      // TODO: 开启此插件能实现分包优化
      Optimization({ mode: mode as IOptimizationOptions['mode'], command }),
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

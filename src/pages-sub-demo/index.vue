<!-- eslint-disable no-console -->
<script lang="ts" setup>
import AsyncComponentDemo from '@/pages-sub-async/async-component/index.vue'
// import { groupBy } from 'lodash' // 这种全量引入到子包中
// import _ from 'lodash' // 主包会触发 `getDefaultExportFromCjs` 方法的生成，其他表现与上面的引入方式一致

// import groupBy from 'lodash/groupBy' // 按需引入，但是当前`groupBy`内部引入的依赖会被引入到主包中，TODO: 目前需要优化的地方
import groupBy from 'lodash-es/groupBy'
import { defineComponent, onMounted, ref } from 'vue'

const someData = ref(Array.from({ length: 10 }, (_, i) => ({ id: i, name: `name-${i}` })))

onMounted(async () => {
  try {
    // TODO: 如果没有显式有引入动作的时候，该模块不会打包到编译产物中，此处暂时如此处理 | 后续需要实现以`AsyncImport`为动态引入的关键字，将其打包到编译产物中
    await import('@/pages-sub-async/async-plugin/index').then((res) => {
      console.log('plugin', res)
    })
  }
  catch (error) {
    // console.log(error)
  }

  await AsyncImport('@/pages-sub-async/async-plugin/index').then((res) => {
    console.log(res?.AsyncPlugin())
  })
  // 小程序端如此异步引入组件是没有作用的，小程序端有自己的异步引入组件的方式
  AsyncImport('@/pages-sub-async/index.vue').then((res) => {
    console.log(res.default || res)
  })
})
</script>

<script lang="ts">
export default defineComponent({
  components: {
    AsyncComponentDemo,
  },
  asyncCustomComponents: {
    AsyncComponentDemo: '../pages-sub-async/async-component/index',
  },
})
</script>

<template>
  <view>
    <h1>子包</h1>
    <text>pages-sub-demo</text>
    <AsyncComponentDemo />
    <view>---- 对象数组 ---</view>
    <view>{{ someData }}</view>
    <view>---- lodash groupBy ---</view>
    <view>{{ groupBy(someData, 'id') }}</view>
  </view>
</template>

<!-- eslint-disable unused-imports/no-unused-vars -->
<!-- eslint-disable no-console -->
<script lang="ts" setup>
import AsyncComponentDemo from '@/pages-sub-async/async-component/index.vue?async'
import AsyncComponent from '@/pages-sub-async/index.vue?async'
// import { groupBy } from 'lodash' // 这种全量引入到子包中
// import _ from 'lodash' // 主包会触发 `getDefaultExportFromCjs` 方法的生成，其他表现与上面的引入方式一致

import groupBy from 'lodash/groupBy' // 按需引入，但是当前`groupBy`内部引入的依赖会被引入到主包中，
// import groupBy from 'lodash-es/groupBy'
import { defineComponent, onMounted, ref } from 'vue'

const someData = ref(Array.from({ length: 10 }, (_, i) => ({ id: i, name: `name-${i}` })))

onMounted(async () => {
  await AsyncImport('@/pages-sub-async/async-plugin/index').then((res) => {
    console.log(res?.AsyncPlugin())
  })

  AsyncImport('@/pages-sub-async/index.vue').then((res) => {
    console.log(res.default || res)
  })
  AsyncImport('@/pages-sub-async/async-component/index.vue').then((res) => {
    console.log(res.default || res)
  })
})
</script>

<template>
  <view>
    <h1>子包</h1>
    <text>pages-sub-demo</text>
    <AsyncComponentDemo text="传参测试" />
    <AsyncComponent />
    <view>---- 对象数组 ---</view>
    <view>{{ someData }}</view>
    <view>---- lodash groupBy ---</view>
    <view>{{ groupBy(someData, 'id') }}</view>
  </view>
</template>

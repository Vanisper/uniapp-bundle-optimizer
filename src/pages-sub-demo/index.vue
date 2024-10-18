<script lang="ts" setup>
import AsyncComponentDemo from '@/pages-sub-async/async-component/index.vue'
import _ from 'lodash'
import { defineComponent, ref } from 'vue'

const someData = ref(Array.from({ length: 10 }, (_, i) => ({ id: i, name: `name-${i}` })))
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
    <view>{{ _.groupBy(someData, 'id') }}</view>
  </view>
</template>

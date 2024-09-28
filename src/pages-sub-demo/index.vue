<script lang="ts" setup>
import _ from 'lodash'
import { ref } from 'vue'

const someData = ref(Array.from({ length: 10 }, (_, i) => ({ id: i, name: `name-${i}` })))
</script>

<template>
  <view>
    <h1>子包</h1>
    <text>pages-sub-demo</text>
    <view>---- 对象数组 ---</view>
    <view>{{ someData }}</view>
    <view>---- lodash groupBy ---</view>
    <view>{{ _.groupBy(someData, 'id') }}</view>
  </view>
</template>

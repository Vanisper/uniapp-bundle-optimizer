<script lang="ts" setup>
defineProps({
  text: String,
})
</script>

<template>
  <view class="font-bold">
    异步加载组件 - demo - {{ text }}
  </view>
</template>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue'
import AppLogos from '@/components/AppLogos.vue'
import InputEntry from '@/components/InputEntry.vue'

function goSubPackage() {
  uni.navigateTo({
    url: '/pages-sub-demo/index',
  })
}
</script>

<template>
  <view px-10 py-20 text-center>
    <AppLogos />
    <InputEntry />
    <AppFooter />
    <button @click="goSubPackage">
      前往子包
    </button>
  </view>
</template>

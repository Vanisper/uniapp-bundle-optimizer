<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue'
import AppLogos from '@/components/AppLogos.vue'
import InputEntry from '@/components/InputEntry.vue'
import AsyncComponentDemo from '@/pages-sub-async/async-component/index.vue?async'
import AsyncComponent from '@/pages-sub-async/index.vue?async'

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
    <AsyncComponentDemo text="传参测试" />
    <AsyncComponent />
  </view>
</template>

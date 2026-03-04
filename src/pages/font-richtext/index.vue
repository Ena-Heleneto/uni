<script setup lang="ts">
import { onMounted } from 'vue'
import { useAdobeFont } from './composables/use-adobe-font'
import { fontSamples } from './modules/font-samples'

const { adobeMessage, loadAdobeFont } = useAdobeFont()

onMounted(() => {
  // #ifdef H5
  loadAdobeFont()
  // #endif
})
</script>

<template>
  <view class="font-richtext-page">
    <view class="title">
      富文本字体渲染测试页
    </view>
    <view class="desc">
      覆盖：本地字体、远程字体、远程同源字体、Adobe Fonts 脚本字体。
    </view>
    <view class="adobe-status">
      {{ adobeMessage }}
    </view>

    <view
      v-for="sample in fontSamples"
      :key="sample.key"
      class="card"
    >
      <view class="card-title">
        {{ sample.title }}
      </view>
      <view class="card-desc">
        {{ sample.description }}
      </view>
      <rich-text
        class="sample-richtext"
        :nodes="sample.richTextHtml"
      />
    </view>
  </view>
</template>

<style lang="scss" src="./styles.scss"></style>

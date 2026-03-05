<script setup lang="ts">
// function handleBackHome() { }

// function handleBack() { }
</script>

<template>
  <view flex="~ col" size="screen" gap="2">
    <view>
      <LayoutDefaultHeader />
    </view>
    <view flex="1" size="full" min="h-0" overflow="visible">
      <slot />
    </view>
  </view>
</template>

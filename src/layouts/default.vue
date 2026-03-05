<script setup lang="ts">
function handleBackHome() { }

function handleBack() { }
</script>

<template>
  <view flex="~ col" size="screen">
    <view>
      <wd-navbar title="标题" left-text="返回" safe-area-inset-top left-arrow>
        <template #capsule>
          <wd-navbar-capsule @back="handleBack" @back-home="handleBackHome" />
        </template>
      </wd-navbar>
    </view>
    <view flex="1" size="full" min="h-0">
      <slot />
    </view>
  </view>
</template>

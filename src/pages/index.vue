<script setup lang="ts">
const router = useRouter({})

function handleClick() {
  router.navigate({ url: '/pages/richText' })
}
</script>

<template>
  <view size="full" p="4">
    <wd-button type="success" @click="handleClick">
      跳转
    </wd-button>
  </view>
</template>

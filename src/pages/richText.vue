<script setup lang="ts">
const { post } = useFetch()
const { log } = useLogger({ tag: 'RichTextHeader' })

const RichTextHeaderValue = ref<string>('')

watchEffect(async () => {
  const res = await post('/api/rich-text', { value: RichTextHeaderValue.value })
  log('RichTextHeader response:', res)
})
</script>

<template>
  <view size="full" p="4">
    <RichTextHeader v-model:value="RichTextHeaderValue" />
  </view>
</template>

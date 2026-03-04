<script setup lang="ts">
const value = defineModel<string>('value', { default: '' })
</script>

<template>
  <wd-textarea v-model="value" auto-height />
</template>

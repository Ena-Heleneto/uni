<script setup lang="ts">
const value = defineModel<string>('value', { default: '' })
</script>

<template>
  <view class="editor-panel">
    <text class="editor-title">
      输入测试富文本
    </text>
    <wd-textarea
      v-model="value"
      auto-height
      :maxlength="-1"
      placeholder="请输入 HTML 字符串，例如: <p style='font-family: serif'>Hello</p>"
    />
    <text class="editor-tip">
      输入后将自动调用接口并更新下方 4 组字体对比结果
    </text>
  </view>
</template>

<style lang="scss" scoped>
.editor-panel {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #fcd34d;
  background: linear-gradient(135deg, #fff7e6 0%, #fff1d6 100%);
}

.editor-title {
  font-size: 14px;
  font-weight: 600;
  color: #7c2d12;
}

.editor-tip {
  font-size: 12px;
  color: #9a3412;
}
</style>

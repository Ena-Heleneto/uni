<script setup lang="ts">
const routes = [
  { label: 'Base64 字体示例', url: '/pages/richText/base64' },
  { label: '旧版实验页', url: '/pages/richText/old' },
]

function go(url: string) {
  uni.navigateTo({ url })
}
</script>

<template>
  <view class="hub" min="h-full" p="5" flex="~ col" gap="5" bg="linear-65" from="white/90">
    <view class="header">
      <text class="eyebrow">
        Rich Text Lab
      </text>
      <text class="title">
        字体实验入口
      </text>
      <text class="subtitle">
        选择一个场景，开始验证小程序端的字体效果。
      </text>
    </view>

    <view class="list">
      <view
        v-for="item in routes"
        :key="item.url"
        class="card"
        @click="go(item.url)"
      >
        <view class="card-body">
          <text class="card-title">
            {{ item.label }}
          </text>
          <text class="card-meta">
            点击进入
          </text>
        </view>
        <view class="card-arrow">
          →
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.hub {
  min-height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background:
    linear-gradient(180deg, rgba(255, 245, 235, 0.9) 0%, rgba(240, 245, 255, 0.9) 100%),
    repeating-linear-gradient(135deg, rgba(15, 23, 42, 0.04) 0px, rgba(15, 23, 42, 0.04) 1px, transparent 1px, transparent 10px);
}

.header {
  padding: 18px;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.eyebrow {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #64748b;
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: #0f172a;
  font-family: "Georgia", "Times New Roman", serif;
}

.subtitle {
  font-size: 13px;
  line-height: 1.7;
  color: #475569;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.card:active {
  transform: translateY(1px);
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.1);
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
}

.card-meta {
  font-size: 12px;
  color: #64748b;
}

.card-arrow {
  font-size: 18px;
  color: #334155;
}
</style>

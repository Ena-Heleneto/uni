<script setup lang="ts">
const router = useRouter({})

function handleClick() {
  router.navigate({ url: '/pages/richText/index' })
}
</script>

<template>
  <view class="home">
    <view class="hero">
      <text class="eyebrow">
        Rich Text Lab
      </text>
      <text class="headline">
        字体实验入口
      </text>
      <text class="subhead">
        这里集中测试富文本字体渲染、加载方式与小程序兼容性。
      </text>
      <view class="actions">
        <button class="primary" @click="handleClick">
          进入实验室
        </button>
        <text class="note">
          建议在小程序端查看字体表现
        </text>
      </view>
    </view>

    <view class="panel">
      <view class="panel-card">
        <text class="panel-title">
          你可以做什么
        </text>
        <text class="panel-item">
          - 对比远端字体声明与本地加载效果
        </text>
        <text class="panel-item">
          - 验证 rich-text 解析与样式覆盖
        </text>
        <text class="panel-item">
          - 评估 base64 字体的可行性
        </text>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.home {
  min-height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background:
    radial-gradient(120% 80% at 10% 10%, #fff1e7 0%, rgba(255, 241, 231, 0) 55%),
    radial-gradient(90% 80% at 90% 15%, #e6f0ff 0%, rgba(230, 240, 255, 0) 55%),
    linear-gradient(180deg, #f9fafb 0%, #f1f5f9 100%);
}

.hero {
  padding: 20px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.eyebrow {
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #64748b;
}

.headline {
  font-size: 26px;
  font-weight: 700;
  color: #0f172a;
  font-family: "Georgia", "Times New Roman", serif;
}

.subhead {
  font-size: 14px;
  line-height: 1.7;
  color: #475569;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 6px;
}

.primary {
  background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
  color: #ffffff;
  border-radius: 999px;
  padding: 12px 18px;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  border: none;
}

.note {
  font-size: 12px;
  color: #64748b;
}

.panel {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.panel-card {
  padding: 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(226, 232, 240, 0.9);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
}

.panel-title {
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 8px;
}

.panel-item {
  font-size: 13px;
  color: #475569;
  line-height: 1.6;
}
</style>

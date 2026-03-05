<script setup lang="ts">
const router = useRouter({})

function handleClick() {
  router.navigate({ url: '/pages/richText/index' })
}
</script>

<template>
  <view
    style="background:
    radial-gradient(120% 80% at 10% 10%, #fff1e7 0%, rgba(255, 241, 231, 0) 55%),
    radial-gradient(90% 80% at 90% 15%, #e6f0ff 0%, rgba(230, 240, 255, 0) 55%),
    linear-gradient(180deg, #f9fafb 0%, #f1f5f9 100%);" min="h-full" p="6" flex="~ col" gap="5"
  >
    <view p="5" rounded="4" bg="white" flex="~ col" gap="3" shadow="xl #0f172a14">
      <text text="3 #0f172a" font="sans" tracking="widest">
        Rich Text Lab
      </text>
      <text text="6 #0f172a" font="bold sans">
        字体实验入口
      </text>
      <text text="3 #475569">
        这里集中测试富文本字体渲染、加载方式与小程序兼容性。
      </text>
      <view flex="~ col" gap="3" m="b-2">
        <button
          bg="linear-135" from="#0f172a" to="#334155" text="#ffffff 4 center" rounded="full" p="y-4 x-5"
          font="semibold" border="none" @click="handleClick"
        >
          进入实验室
        </button>
        <text text="3 #64748b">
          建议在小程序端查看字体表现
        </text>
      </view>
    </view>

    <view flex="~ col" gap="4">
      <view class="panel-card" p="4" rounded="4" bg="#ffffffe6" border="1px solid">
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
.panel-card {
  padding: 16px;
  border-radius: 16px;
  background: #ffffffe6;
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

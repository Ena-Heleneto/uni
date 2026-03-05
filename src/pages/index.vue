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
      <view flex="~ col" gap="4" m="b-2">
        <button
          bg="linear-[135deg]" from="#0f172a" to="#334155" text="#ffffff 4 center" rounded="full" p="y-1 x-7"
          font="semibold" border="none" @click="handleClick"
        >
          进入实验室
        </button>
        <text text="3 #64748b">
          建议在小程序端查看字体表现
        </text>
      </view>
    </view>

    <view flex="~ col" gap="1" p="4" rounded="4" bg="#ffffffe6" border="1px solid #e2e8f0e6" shadow="lg #0f172a0f">
      <text text="3 #0f172a" font="semibold" m="b-2">
        你可以做什么
      </text>
      <text text="4 #475569">
        - 对比远端字体声明与本地加载效果
      </text>
      <text text="4 #475569">
        - 验证 rich-text 解析与样式覆盖
      </text>
      <text text="4 #475569">
        - 评估 base64 字体的可行性
      </text>
    </view>
  </view>
</template>

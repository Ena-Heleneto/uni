<script setup lang="ts">
const router = useRouter({})

function handleClick() {
  router.navigate({ url: '/pages/richText/index' })
}
</script>

<template>
  <view class="p-5 bg-[radial-gradient(120%_80%_at_10%_10%,#fff1e7_0%,rgba(255,241,231,0)_55%),radial-gradient(90%_80%_at_90%_15%,#e6f0ff_0%,rgba(230,240,255,0)_55%),linear-gradient(180deg,#f9fafb_0%,#f1f5f9_100%)] flex flex-col gap-5 min-h-full">
    <view class="p-5 rounded-5 bg-white flex flex-col gap-3 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
      <text class="text-3 text-[#64748b] tracking-[0.12em] uppercase">
        Rich Text Lab
      </text>
      <text class="text-[26px] text-[#0f172a] font-700 font-serif">
        字体实验入口
      </text>
      <text class="text-3.5 text-[#475569] leading-relaxed">
        这里集中测试富文本字体渲染、加载方式与小程序兼容性。
      </text>
      <view class="mt-1.5 flex flex-col gap-2.5">
        <button class="text-3.75 text-white font-600 px-4.5 py-3 text-center border-0 rounded-full from-[#0f172a] to-[#334155] bg-gradient-to-br" @click="handleClick">
          进入实验室
        </button>
        <text class="text-3 text-[#64748b]">
          建议在小程序端查看字体表现
        </text>
      </view>
    </view>

    <view class="flex flex-col gap-3">
      <view class="p-4 border border-[#e2e8f0]/90 rounded-4 bg-white/90 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
        <text class="text-3.5 text-[#0f172a] font-600 mb-2">
          你可以做什么
        </text>
        <text class="text-3.25 text-[#475569] leading-relaxed">
          - 对比远端字体声明与本地加载效果
        </text>
        <text class="text-3.25 text-[#475569] leading-relaxed">
          - 验证 rich-text 解析与样式覆盖
        </text>
        <text class="text-3.25 text-[#475569] leading-relaxed">
          - 评估 base64 字体的可行性
        </text>
      </view>
    </view>
  </view>
</template>

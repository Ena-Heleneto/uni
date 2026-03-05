<script setup lang="ts">
// const { post } = useFetch()
// const { log } = useLogger({ tag: 'RichTextHeader' })

// interface RichTextTestResponse {
//   content?: string
//   family?: string
// }

// const defaultTemplate = `<div>这是一个富文本字体测试段落，包含 English 123 和符号 !@#。</div>
// <div><strong>你可以在上方输入任意 HTML 片段。</strong></div>`

// const richTextInput = ref<string>(defaultTemplate)
// const debouncedInput = useDebounce(richTextInput, 500)

// const isLoading = ref(false)
// const errorMessage = ref('')
// const responseFamily = ref('')

// const remoteOnlyContent = ref('')
// const localInstalledContent = ref('')
// const classOverrideContent = ref('')
// const styleOverrideContent = ref('')
// const localLiuJianMaoCaoContent = ref('')

// let latestRequestId = 0
// const REMOTE_FONT_FAMILY = 'Liu Jian Mao Cao'
// const GOOGLE_FONT_URL = 'https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&display=swap'
// const LOCAL_CLASS_FONT_FAMILY = 'Lobster'
// const LOCAL_CLASS_FONT_URL = '/static/fonts/Lobster-SameOrigin.woff2'
// const LOCAL_STYLE_FONT_FAMILY = 'Lobster'
// // const LOCAL_STYLE_FONT_URL = '/static/fonts/Lobster-SameOrigin.woff2'
// const LOCAL_LIU_JIAN_MAO_CAO_FONT_FAMILY = 'Liu Jian Mao Cao'
// const LOCAL_LIU_JIAN_MAO_CAO_FONT_URL = '/static/fonts/LiuJianMaoCao-Regular.ttf'
// const mpFontHint = ref('')
// const mpFontError = ref('')

// let isMp = false
// // #ifdef MP
// isMp = true
// // #endif

// onMounted(async () => {
//   if (!isMp)
//     return

//   if (typeof uni === 'undefined' || typeof uni.loadFontFace !== 'function') {
//     mpFontError.value = '当前小程序不支持动态加载字体'
//     return
//   }

//   mpFontHint.value = '小程序字体加载中...'
//   mpFontError.value = ''

//   try {
//     await uni.loadFontFace({
//       family: LOCAL_LIU_JIAN_MAO_CAO_FONT_FAMILY,
//       source: `url('${LOCAL_LIU_JIAN_MAO_CAO_FONT_URL}')`,
//     })
//     mpFontHint.value = '小程序字体已加载'
//   }
//   catch (error) {
//     mpFontHint.value = ''
//     mpFontError.value = '小程序字体加载失败'
//     log('RichTextHeader loadFontFace error:', error)
//   }
// })

// function withInlineFont(content: string, family: string) {
//   return `<div style="font-family: '${family}', serif;">${content}</div>`
// }

// function withRemoteFontImport(content: string) {
//   if (isMp)
//     return content

//   return `<style>
// @import url('${GOOGLE_FONT_URL}');
// </style>
// ${content}`
// }

// function withClassOverride(content: string) {
//   if (isMp)
//     return withInlineFont(content, LOCAL_CLASS_FONT_FAMILY)

//   return `<style>
// @font-face {
//   font-family: '${LOCAL_CLASS_FONT_FAMILY}';
//   src: url('${LOCAL_CLASS_FONT_URL}') format('woff2');
// }
// .font-force-local * {
//   font-family: '${LOCAL_CLASS_FONT_FAMILY}', serif !important;
// }
// </style>
// <div class="font-force-local">${content}</div>`
// }

// function withStyleOverride(content: string) {
//   // if (isMp)
//   return withInlineFont(content, LOCAL_STYLE_FONT_FAMILY)

//   //   const nextFont = `font-family: '${LOCAL_STYLE_FONT_FAMILY}', serif !important;`
//   //   let styledContent = ''
//   //   if (/font-family\s*:/i.test(content))
//   //     styledContent = content.replace(/font-family:[^;]+;?/i, nextFont)
//   //   else
//   //     styledContent = `<div style="${nextFont}">${content}</div>`

// //   return `<style>
// // @font-face {
// //   font-family: '${LOCAL_STYLE_FONT_FAMILY}';
// //   src: url('${LOCAL_STYLE_FONT_URL}') format('woff2');
// // }
// // </style>
// // ${styledContent}`
// }

// function withFallbackHint(content: string) {
//   if (content.trim())
//     return content

//   return `<p>暂无可预览内容，请检查接口响应。</p>`
// }

// function decodeHtmlEntities(value: string) {
//   return value
//     .replace(/&amp;lt;/g, '<')
//     .replace(/&amp;gt;/g, '>')
//     .replace(/&amp;quot;/g, '"')
//     .replace(/&amp;#39;/g, '\'')
//     .replace(/&lt;/g, '<')
//     .replace(/&gt;/g, '>')
//     .replace(/&quot;/g, '"')
//     .replace(/&#39;/g, '\'')
//     .replace(/&amp;/g, '&')
// }

// function normalizeHtml(content: string) {
//   if (!content)
//     return content

//   const decodePattern = /&(?:lt|gt|amp;lt|amp;gt|quot|#39|amp;quot|amp;#39);/i
//   if (decodePattern.test(content))
//     return decodeHtmlEntities(content)
//   return content
// }

// function withLocalLiuJianMaoCao(content: string) {
//   if (isMp)
//     return withInlineFont(content, LOCAL_LIU_JIAN_MAO_CAO_FONT_FAMILY)

//   return `<style>
// @font-face {
//   font-family: '${LOCAL_LIU_JIAN_MAO_CAO_FONT_FAMILY}';
//   src: url('${LOCAL_LIU_JIAN_MAO_CAO_FONT_URL}') format('truetype');
// }
// .font-local-liu * {
//   font-family: '${LOCAL_LIU_JIAN_MAO_CAO_FONT_FAMILY}', serif !important;
// }
// </style>
// <div class="font-local-liu">${content}</div>`
// }

// function resetPreviewContent() {
//   remoteOnlyContent.value = ''
//   localInstalledContent.value = ''
//   classOverrideContent.value = ''
//   styleOverrideContent.value = ''
//   localLiuJianMaoCaoContent.value = ''
// }

// function updateRichTextInput(value: string) {
//   richTextInput.value = value
// }

// watchEffect(async () => {
//   const currentInput = debouncedInput.value.trim()
//   if (!currentInput) {
//     resetPreviewContent()
//     responseFamily.value = ''
//     return
//   }

//   const requestId = ++latestRequestId
//   isLoading.value = true
//   errorMessage.value = ''

//   try {
//     const res = await post('/v1/rich-text/test', { content: currentInput }) as RichTextTestResponse
//     if (requestId !== latestRequestId)
//       return

//     const remoteContent = normalizeHtml(withFallbackHint(res.content || ''))
//     let remoteFamily
//     if (res.family) {
//       remoteFamily = res.family.trim()
//     }
//     else {
//       remoteFamily = ''
//     }
//     const resolvedRemoteFamily = remoteFamily || REMOTE_FONT_FAMILY

//     responseFamily.value = resolvedRemoteFamily
//     remoteOnlyContent.value = remoteContent
//     localInstalledContent.value = withRemoteFontImport(remoteContent)
//     classOverrideContent.value = withClassOverride(remoteContent)
//     styleOverrideContent.value = withStyleOverride(remoteContent)
//     localLiuJianMaoCaoContent.value = withLocalLiuJianMaoCao(remoteContent)

//     log('RichTextHeader response:', res)
//   }
//   catch (error) {
//     if (requestId !== latestRequestId)
//       return
//     errorMessage.value = '请求失败，请检查网络或服务是否可用'
//     resetPreviewContent()
//     log('RichTextHeader request error:', error)
//   }
//   finally {
//     if (requestId === latestRequestId)
//       isLoading.value = false
//   }
// })
</script>

<template>
  <view />
  <!-- <view class="rich-text-page" size="full" p="4">
    <RichTextHeader :value="richTextInput" @update:value="updateRichTextInput" />

    <view class="status-row">
      <text v-if="isMp && mpFontHint" class="status-item">
        {{ mpFontHint }}
      </text>
      <text v-if="isMp && mpFontError" class="status-item is-error">
        {{ mpFontError }}
      </text>
      <text v-if="responseFamily" class="status-item">
        远端字体: {{ responseFamily }}
      </text>
      <text v-if="isLoading" class="status-item">
        请求中...
      </text>
      <text v-if="errorMessage" class="status-item is-error">
        {{ errorMessage }}
      </text>
    </view>

    <view class="preview-card">
      <text class="preview-title">
        完整富文本
      </text>
      <text> {{ remoteOnlyContent }} </text>
    </view>

    <view class="preview-card">
      <text class="preview-title">
        远端声明字体，但是本地不安装字体
      </text>
      <rich-text :nodes="remoteOnlyContent" />
    </view>

    <view class="preview-card">
      <text class="preview-title">
        远端声明字体，在线加载字体
      </text>
      <rich-text :nodes="localInstalledContent" />
    </view>

    <view class="preview-card">
      <text class="preview-title">
        远端声明字体，在线加载字体 但是v-html
      </text>
      <div v-html="localInstalledContent" />
    </view>

    <view class="preview-card">
      <text class="preview-title">
        远端声明字体，通过class覆盖
      </text>
      <rich-text :nodes="classOverrideContent" />
    </view>

    <view class="preview-card">
      <text class="preview-title">
        远端声明字体，通过style覆盖
      </text>
      <rich-text :nodes="styleOverrideContent" />
    </view>

    <view class="preview-card">
      <text class="preview-title">
        本地引入 Liu Jian Mao Cao 字体
      </text>
      <rich-text :nodes="localLiuJianMaoCaoContent" />
    </view>
  </view> -->
</template>

<style lang="scss" scoped>
// .rich-text-page {
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
//   background: linear-gradient(180deg, #fff8f0 0%, #f4f8ff 100%);
//   min-height: 100%;
// }

// .status-row {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 8px;
// }

// .status-item {
//   padding: 4px 10px;
//   border-radius: 999px;
//   font-size: 12px;
//   color: #1f2937;
//   background-color: #ffffff;
//   border: 1px solid #e5e7eb;
// }

// .status-item.is-error {
//   color: #b42318;
//   border-color: #fda29b;
//   background-color: #fffbfa;
// }

// .preview-card {
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   padding: 14px;
//   border: 1px solid #e5e7eb;
//   border-radius: 12px;
//   background: #ffffff;
//   box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
// }

// .preview-title {
//   font-size: 14px;
//   font-weight: 600;
//   color: #0f172a;
// }
</style>

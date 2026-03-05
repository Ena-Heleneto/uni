<script lang="ts" setup>
// const { richTextInput } = useRichText()
// const { log } = useLogger({ tag: 'RichTextBase64' })
// const { post } = useFetch()

// interface RichTextTestResponse {
//   content?: string
//   family?: string
// }

// const DEFAULT_FONT_FAMILY = 'Liu Jian Mao Cao'
// const BASE64_FONT_URL = '/static/fonts/LiuJianMaoCao-Regular.ttf'
// const BASE64_FONT_MIME = 'font/ttf'

// const debouncedInput = useDebounce(richTextInput, 500)

// const isLoading = ref(false)
// const errorMessage = ref('')
// const responseContent = ref('')
// const responseFamily = ref(DEFAULT_FONT_FAMILY)

// const fontBase64 = ref('')
// const fontStatus = ref<'idle' | 'loading' | 'ready' | 'error'>('idle')
// const fontError = ref('')

// const base64FontFamily = computed(() => responseFamily.value || DEFAULT_FONT_FAMILY)
// const fontFaceCss = computed(() => {
//   if (!fontBase64.value)
//     return ''

//   return `@font-face {
//   font-family: '${base64FontFamily.value}';
//   src: url('data:${BASE64_FONT_MIME};base64,${fontBase64.value}') format('truetype');
//   font-weight: normal;
//   font-style: normal;
// }`
// })

// const fontFaceStyleTag = computed(() => {
//   if (!fontFaceCss.value)
//     return ''
//   return `<style>${fontFaceCss.value}</style>`
// })

// const externalStyleTag = computed(() => {
//   if (!fontFaceCss.value)
//     return ''

//   return `<style>
// ${fontFaceCss.value}
// .base64-external-style * {
//   font-family: '${base64FontFamily.value}', serif !important;
// }
// </style>`
// })

// const noOverrideContent = computed(() => responseContent.value)

// const internalClassContent = computed(() => {
//   if (!responseContent.value)
//     return ''
//   return `<div class="base64-inner-class">${responseContent.value}</div>`
// })

// const contentStyleOverrideContent = computed(() => {
//   if (!responseContent.value)
//     return ''
//   return `<div class="base64-content-style">${responseContent.value}
//   <style>
//   .base64-content-style * {
//     font-family: '${base64FontFamily.value}', serif !important;
//   }
//   </style>
//   </div>`
// })

// function updateRichTextInput(value: string) {
//   richTextInput.value = value
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

// function withFallbackHint(content: string) {
//   if (content.trim())
//     return content
//   return '<p>暂无可预览内容，请检查接口响应。</p>'
// }

// function arrayBufferToBase64(buffer: ArrayBuffer) {
//   if (typeof uni !== 'undefined' && typeof uni.arrayBufferToBase64 === 'function')
//     return uni.arrayBufferToBase64(buffer)
//   let binary = ''
//   const bytes = new Uint8Array(buffer)
//   const chunkSize = 8192
//   for (let i = 0; i < bytes.length; i += chunkSize) {
//     const chunk = bytes.subarray(i, i + chunkSize)
//     binary += String.fromCharCode(...chunk)
//   }
//   return btoa(binary)
// }

// async function loadFontBase64() {
//   if (fontStatus.value === 'loading' || fontStatus.value === 'ready')
//     return

//   fontStatus.value = 'loading'
//   fontError.value = ''
//   try {
//     const data = await new Promise<ArrayBuffer>((resolve, reject) => {
//       uni.request({
//         url: BASE64_FONT_URL,
//         responseType: 'arraybuffer',
//         success: res => resolve(res.data as ArrayBuffer),
//         fail: error => reject(error),
//       })
//     })
//     fontBase64.value = arrayBufferToBase64(data)
//     fontStatus.value = 'ready'
//   }
//   catch (error) {
//     fontStatus.value = 'error'
//     fontError.value = '字体 Base64 加载失败'
//     log('loadFontBase64 error:', error)
//   }
// }

// let latestRequestId = 0
// watchEffect(async () => {
//   const currentInput = debouncedInput.value.trim()
//   if (!currentInput) {
//     responseContent.value = ''
//     responseFamily.value = DEFAULT_FONT_FAMILY
//     errorMessage.value = ''
//     return
//   }

//   const requestId = ++latestRequestId
//   isLoading.value = true
//   errorMessage.value = ''

//   try {
//     const res = await post('/v1/rich-text/test', { content: currentInput }) as RichTextTestResponse
//     if (requestId !== latestRequestId)
//       return

//     let nextFamily = ''
//     if (res.family)
//       nextFamily = res.family.trim()
//     responseFamily.value = nextFamily || DEFAULT_FONT_FAMILY

//     let nextContent = ''
//     if (res.content)
//       nextContent = res.content
//     responseContent.value = normalizeHtml(withFallbackHint(nextContent))
//   }
//   catch (error) {
//     if (requestId !== latestRequestId)
//       return
//     errorMessage.value = '请求失败，请检查网络或服务是否可用'
//     responseContent.value = ''
//     log('rich text request error:', error)
//   }
//   finally {
//     if (requestId === latestRequestId)
//       isLoading.value = false
//   }
// })

// onMounted(() => {
//   loadFontBase64()
// })
</script>

<template>
  <!-- <view
    size="full" min="h-full" flex="~ col" gap="4" p="4" bg="[linear-gradient(180deg,#fff8f0_0%,#f4f8ff_100%)]"
    class="[&_.base64-inner-class_*]:[font-family:var(--base64-font-family,serif)!important]"
    :style="{ '--base64-font-family': base64FontFamily }"
  > -->
  <view />
  <!-- <div v-show="fontFaceStyleTag" v-html="fontFaceStyleTag" />

    <RichTextTextArea :value="richTextInput" @update:value="updateRichTextInput" />

    <view flex="~ wrap" gap="2">
      <text px="2.5" py="1" rounded="full" text="3 #1f2937" bg="white" border="~ #e5e7eb">
        Base64 字体: {{ fontStatus }}
      </text>
      <text v-show="fontError" px="2.5" py="1" rounded="full" text="3 #b42318" bg="#fffbfa" border="~ #fda29b">
        {{ fontError }}
      </text>
      <text v-show="responseFamily" px="2.5" py="1" rounded="full" text="3 #1f2937" bg="white" border="~ #e5e7eb">
        远端字体: {{ responseFamily }}
      </text>
      <text v-show="isLoading" px="2.5" py="1" rounded="full" text="3 #1f2937" bg="white" border="~ #e5e7eb">
        请求中...
      </text>
      <text v-show="errorMessage" px="2.5" py="1" rounded="full" text="3 #b42318" bg="#fffbfa" border="~ #fda29b">
        {{ errorMessage }}
      </text>
    </view>

    <view
      flex="~ col" gap="2.5" p="3.5" border="~ #e5e7eb" rounded="3" bg="white"
      shadow="[0_4px_16px_rgba(15,23,42,0.04)]"
    >
      <text text="sm #0f172a" font="600">
        Base64 字体已加载，不覆写富文本样式
      </text>
      <rich-text :nodes="noOverrideContent" />
    </view>

    <view
      flex="~ col" gap="2.5" p="3.5" border="~ #e5e7eb" rounded="3" bg="white"
      shadow="[0_4px_16px_rgba(15,23,42,0.04)]"
    >
      <text text="sm #0f172a" font="600">
        使用外部 class 覆写富文本样式
      </text>
      <view class="[&_*]:[font-family:var(--base64-font-family,serif)!important]">
        <rich-text :nodes="responseContent" />
      </view>
    </view>

    <view
      flex="~ col" gap="2.5" p="3.5" border="~ #e5e7eb" rounded="3" bg="white"
      shadow="[0_4px_16px_rgba(15,23,42,0.04)]"
    >
      <text text="sm #0f172a" font="600">
        使用外部 style 标签覆写样式
      </text>
      <div v-show="externalStyleTag" v-html="externalStyleTag" />
      <view class="base64-external-style">
        <rich-text :nodes="responseContent" />
      </view>
    </view>

    <view
      flex="~ col" gap="2.5" p="3.5" border="~ #e5e7eb" rounded="3" bg="white"
      shadow="[0_4px_16px_rgba(15,23,42,0.04)]"
    >
      <text text="sm #0f172a" font="600">
        注入内部 class 覆写样式
      </text>
      <rich-text :nodes="internalClassContent" />
    </view>

    <view
      flex="~ col" gap="2.5" p="3.5" border="~ #e5e7eb" rounded="3" bg="white"
      shadow="[0_4px_16px_rgba(15,23,42,0.04)]"
    >
      <text text="sm #0f172a" font="600">
        注入内容 style 标签覆写样式
      </text>
      <rich-text :nodes="contentStyleOverrideContent" />
    </view> -->
  <!-- </view> -->
</template>

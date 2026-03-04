import { ref } from 'vue'

const ADOBE_KIT_ID = 'xxxxxxx'

declare global {
  interface Window {
    Typekit?: {
      load: (options?: { async?: boolean }) => void
    }
  }
}

export function useAdobeFont() {
  const adobeStatus = ref<'idle' | 'loading' | 'loaded' | 'error'>('idle')
  const adobeMessage = ref('等待加载 Adobe Fonts...')

  const loadAdobeFont = () => {
    if (typeof window === 'undefined') {
      adobeStatus.value = 'error'
      adobeMessage.value = '当前环境不支持加载 Adobe 脚本。'
      return
    }

    adobeStatus.value = 'loading'
    adobeMessage.value = 'Adobe 脚本加载中...'

    const script = document.createElement('script')
    script.src = `https://use.typekit.net/${ADOBE_KIT_ID}.js`
    script.async = true

    script.onload = () => {
      try {
        window.Typekit?.load({ async: true })
        adobeStatus.value = 'loaded'
        adobeMessage.value = `Adobe 脚本已加载（kit: ${ADOBE_KIT_ID}）。`
      }
      catch {
        adobeStatus.value = 'error'
        adobeMessage.value = 'Adobe 脚本加载成功，但字体初始化失败。'
      }
    }

    script.onerror = () => {
      adobeStatus.value = 'error'
      adobeMessage.value = `Adobe 脚本加载失败，请替换有效 kit id（当前：${ADOBE_KIT_ID}）。`
    }

    document.head.appendChild(script)
  }

  return {
    adobeStatus,
    adobeMessage,
    loadAdobeFont,
  }
}

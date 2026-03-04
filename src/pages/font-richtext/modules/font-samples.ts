export interface FontSample {
  key: string
  title: string
  description: string
  richTextHtml: string
}

const content = '富文本字体渲染测试：The quick brown fox jumps over the lazy dog. 0123456789'

export const fontSamples: FontSample[] = [
  {
    key: 'system-default-font',
    title: '系统默认字体（对照组）',
    description: '不指定自定义字体，仅使用系统默认字体。',
    richTextHtml: `<div class="sample-content system-default-font">${content}</div>`,
  },
  {
    key: 'local-font',
    title: '本地字体（local）',
    description: '通过 local() 读取设备已安装字体（楷体链路）。',
    richTextHtml: `<div class="sample-content local-font">${content}</div>`,
  },
  {
    key: 'remote-cross-origin-font',
    title: '远程字体（跨域）',
    description: '通过 CDN 远程地址加载字体文件（Pacifico 手写体）。',
    richTextHtml: `<div class="sample-content remote-cross-origin-font">${content}</div>`,
  },
  {
    key: 'remote-same-origin-font',
    title: '远程同源字体（/static）',
    description: '通过同源静态资源地址加载字体文件（Lobster 手写体）。',
    richTextHtml: `<div class="sample-content remote-same-origin-font">${content}</div>`,
  },
  {
    key: 'adobe-font-script',
    title: 'Adobe Fonts 脚本',
    description: '通过 Adobe Typekit 脚本动态注入字体。',
    richTextHtml: `<div class="sample-content adobe-font-script">${content}</div>`,
  },
]

export function useRichText() {
  const richTextInput = ref<string>(`<div>这是一个富文本字体测试段落，包含 English 123 和符号 !@#。</div><div><strong>你可以在上方输入任意 HTML 片段。</strong></div>`)

  function handleLoadFontFace() {

  }
  return { richTextInput, handleLoadFontFace }
}

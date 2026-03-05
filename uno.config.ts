import { presetUni } from '@uni-helper/unocss-preset-uni'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import { defineConfig, presetAttributify, presetIcons, presetTagify, presetWebFonts, presetWind4, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUni(),
    presetWind4,
    presetAttributify,
    presetIcons({ scale: 1.2, warn: true, extraProperties: { 'display': 'inline-block', 'vertical-align': 'middle' } }),
    presetWebFonts({
      fonts: {
        sans: { name: 'DM Sans', weights: ['400', '700'], italic: false },
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
      processors: createLocalFontProcessor(),
    }),
    presetTagify(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})

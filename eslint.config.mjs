// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['**/*.md', 'dist/**', '.nuxt/**', '.output/**'],
}, {
  rules: {
    'node/prefer-global/process': 'off',
  },
})

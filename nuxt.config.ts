export default defineNuxtConfig({
  modules: ['@nuxthub/core', '@nuxt/image'],
  nitro: { preset: 'cloudflare_module', compatibilityDate: '2025-12-12' },
  devtools: { enabled: true }
})

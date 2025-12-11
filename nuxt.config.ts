export default defineNuxtConfig({
  modules: ['@nuxthub/core', '@nuxt/image'],
  hub: { blob: true },
  image: { provider: 'nuxthub' },
  devtools: { enabled: true }
})

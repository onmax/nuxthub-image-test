export default defineNuxtConfig({
  modules: ['@nuxthub/core', '@nuxt/image'],
  hub: { blob: { image: { path: '/images' } } },
  nitro: { preset: 'vercel' },
  devtools: { enabled: true }
})

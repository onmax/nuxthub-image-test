export default defineNuxtConfig({
  modules: ['@nuxthub/core', '@nuxt/image', '../nuxthub-image/src/module'],
  hub: { blob: true },
  devtools: { enabled: true },
})

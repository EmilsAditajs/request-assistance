// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  router: {
    base: '/',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '@/assets/scss/main.scss'
  ]
})
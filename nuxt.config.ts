// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  router: {
    base: "/",
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/google-fonts"],
  css: ["@/assets/scss/main.scss"],
  googleFonts: {
    families: {
      Roboto: [300, 400, 500, 700]
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
});
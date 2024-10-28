// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  css: ['assets/css/global.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          silenceDeprecations: ['mixed-decls'],
          additionalData: `
            @use "assets/scss/_variables.scss" as *;
            @use "assets/scss/_mixins.scss" as *;
          `,
        },
      },
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },
  modules: ['@nuxt/eslint', '@pinia/nuxt'],
});

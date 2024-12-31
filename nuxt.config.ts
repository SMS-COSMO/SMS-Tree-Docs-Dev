// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  content: {
    highlight: {
      langs: ['sql'],
    },
  },
  compatibilityDate: '2024-07-06',
});

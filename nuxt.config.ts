// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    tsConfig: {
      compilerOptions: {
        resolveJsonModule: true
      }
    }
  },

  app: {
    head: {
      title: 'TSI Designathon'
    }
  },

  modules: ['vuetify-nuxt-module'],
})
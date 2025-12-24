// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    "@clerk/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
  ],
  nitro: {
    preset: 'cloudflare_pages',
  },
  runtimeConfig: {
    geminiApiKey: process.env.NUXT_GEMINI_API_KEY,
  },
  app: {
    head: {
      title: 'MovieRoulette - Movie Night Made Easy',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Discover your next movie night with AI-powered recommendations' },
      ],
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
})

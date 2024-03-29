// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@unocss/nuxt'],
  // ssr: false,
  // nitro: {
  //   preset: 'service-worker'
  // },
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ]
})

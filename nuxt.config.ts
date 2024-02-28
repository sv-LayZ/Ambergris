// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss'],
  
  app: {
    head: {
      title: 'Pug !',
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/chart.js', hid: 'chart.js', defer: true }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})

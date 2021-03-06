export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'RSS-Styria',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/rss/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/rss/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/rss/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/rss/favicon-16x16.png' },
      { rel: 'manifest', href: '/rss/site.webmanifest' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.css',
    '@/assets/styles/animations.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['vue-scrollto/nuxt', {
      duration: 1000,
      easing: "ease-in-out",
      offset: 0,
      container: "body"
    }],
  ],
  router: {
    base: '/rss/'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

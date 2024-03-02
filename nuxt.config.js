export default {
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
 // Headers of the page
  head: {
    title: 'Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My Web Development Blog' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/main.css'
  ],

  // Customize the progress-bar color
  loading: { color: 'red', height: '4px', duration: 5000 },
  loadingIndicator: {
    name: 'circle',
    color: 'red'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-dc9d2-default-rtdb.firebaseio.com',
    credentials: false
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
    transpile: [
      '@sindresorhus/slugify',
      '@sindresorhus/transliterate',
      'hast-util-select',
    ],
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-dc9d2-default-rtdb.firebaseio.com',
    fbAPIKey: 'AIzaSyDJPqhp27Vrf6CcgM5KgxfXvJefWU8uCVg'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  // router: {
  //   middleware: 'log'
  // }
}

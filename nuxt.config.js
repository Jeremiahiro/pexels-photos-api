const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fe-task',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  generate: {
    route: [
      '/posts',
    ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],


  axios: {
    baseURL: API_BASE_URL,
    retry: { retries: 3 },
    // progress: false,
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization: API_KEY,
    },
    debug: false /* true */,
    credentials: true,
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  compilerOptions: {
    types: ["@nuxtjs/axios"],
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },

}

import colors from 'vuetify/es5/util/colors'
import appconfig from './appconfig'

export default {
  // ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: '%s',
    // title: 'ml_nuxt_ssr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#1A1A1A' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/app.scss',
    '~/assets/css/main.css',
    '~/assets/css/panel.css',
    '~/assets/css/ml-texts.css',
    '~/assets/css/mobile.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/material-design-icons', mode: 'client' },
    { src: '@/plugins/vue-js-modal', mode: 'client' },
    { src: '@/plugins/constants', mode: 'client' },
    { src: '@/plugins/font-awesome', mode: 'client' },
    { src: '@/plugins/axios' },
    // { src: '@/plugins/sw.client', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/fontawesome',
      {
        // useLayers: false,
        component: 'fa',
        suffix: false,
      },
    ],
  ],

  serverMiddleware: ['~/middleware/server/redirect.js'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-purgecss',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: appconfig.apiUrl,
  },

  fontawesome: {
    icons: {
      solid: [
        'faHome',
        'faChevronUp',
        'faChevronLeft',
        'faChevronRight',
        'faRedo',
        'faQuestion',
        'faExclamation',
        'faCircle',
        'faBars',
        'faTimes',
        'faPhone',
      ],
      regular: [],
      light: [],
      duotone: [],
      brands: [],
    },
  },

  purgeCSS: {
    enabled: false,
    // whitelistPatterns: [
    //   /svg.*/,
    //   /fa.*/,
    //   /v-btn.*/,
    //   /v-size.*/,
    //   /item.*/,
    //   /v-modal.*/,
    //   /v--modal.*/,
    //   /theme--light.*/,
    //   /v-tab.*/,
    //   /v-item.*/,
    //   /v-slide.*/,
    //   /madals-container.*/,
    //   /v-application.*/,
    //   /partner-filter-tag.*/,
    //   /swiper.*/,
    // ],
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'PWA MLoyalty System',
      short_name: 'MLoyalty',
      description: '???????????? ?????? ?????????????? ????????????????????',
      lang: 'en',
      icons: null,
    },
    // workbox: {
    //   importScripts: ['/js/sw.js'],
    // },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    // defaultAssets: { icons: 'fa' },
    defaultAssets: false,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

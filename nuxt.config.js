export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sulphur',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sulphur Surgical Clinic' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/vars.scss',
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/sanityImage.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/sanity/module'
  ],

  sanity: {
    projectId: process.env.SANITY_ID,
    token:process.env.SANITY_TOKEN,
    dataset:'production'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader'

  ],

  webfontloader: {
    typekit: {
      id: process.env.TYPEKIT_ID
    }
  },

  styleResources: {
    scss: [
      '~/assets/scss/vars.scss'
    ]
  },



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

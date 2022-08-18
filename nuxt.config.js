module.exports = {
  components: true,
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseUrl: process.env.ENDPOINT_URL || 'http://localhost:5000/'
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.ENDPOINT_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.ENDPOINT_URL
    }
  },
  // create extra file for netlify
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mass Recruitment',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'Mass Recruitment', name: 'Mass Recruitment', content: 'Mass Recruitment Platform' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    '~/plugins/vue-notifications',
    '~/plugins/axios.js',
    '~/plugins/smooth-scroll.js',
    '~/plugins/material-icon.js'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  buildModules: [
    '@nuxt/postcss8',
    ['@nuxtjs/dotenv', { /* module options */ }]
  ],
  css: [
    '@/assets/css/main.css',
    'aos/dist/aos.css'
  ],
  devtools: true,
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
        'cssnano': {
          preset: [
            "default",
            {
              "calc": false
            }
          ]
        }
      },
    },
    /*
    ** Run ESLint on save
    // */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}

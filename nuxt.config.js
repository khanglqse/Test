module.exports = {
  components: true,
  loading: '@/components/Loading.vue',
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxt/image',
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
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Mass Recruitment',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Mass Recruitment Jobs', name: "Mass Recruitment", content: 'Mass Recruitment Platform using for find the jobs.',
        description: "Mass Recruitment Platform using for find the jobs."
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    '~/plugins/vue-notifications',
    '~/plugins/axios.js',
    '~/plugins/smooth-scroll.js',
    '~/plugins/material-icon.js',
    '~/plugins/i18n.js',
  ],
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  /*
  ** Customize the progress bar color
  */
  // loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  buildModules: [
    '@nuxt/postcss8',
    '@nuxt/image',
    ['@nuxtjs/dotenv', { /* module options */ },]
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
    toast: {
      position: 'top-center',
      register: [ // Register custom toasts
        {
          name: 'my-error',
          message: 'Oops...Something went wrong',
          options: {
            type: 'error'
          }
        }
      ]
    },
  },
  image: {
    provider: 'ipx',
    ipx: {}
  }, 
  serverMiddleware: {
    '/_ipx': '@/server/middleware/ipx.js'
  },
}

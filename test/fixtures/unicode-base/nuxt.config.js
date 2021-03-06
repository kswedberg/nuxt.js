export default {
  modern: 'server',
  router: {
    base: '/%C3%B6/'
  },
  loading: false,
  loadingIndicator: false,
  fetch: {
    client: false,
    server: false
  },
  features: {
    store: false,
    layouts: false,
    meta: false,
    middleware: false,
    transitions: false,
    deprecations: false,
    validate: false,
    asyncData: false,
    fetch: false,
    clientOnline: false,
    clientPrefetch: false,
    clientUseUrl: true,
    componentAliases: false,
    componentClientOnly: false
  },
  build: {
    indicator: false,
    terser: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          nuxtApp: {
            test: /[\\/]\.nuxt[\\/]/,
            filename: 'vue-app.nuxt.js',
            enforce: true
          }
        }
      }
    }
  }
}

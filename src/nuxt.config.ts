// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        // Simple usage
        'nuxt-jsonapi',
    
        // With options
        [
          'nuxt-jsonapi',
          {
            baseURL: 'http://localhost:3000/api',
            /* other module options */
          },
        ],
      ]
})

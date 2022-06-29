import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    runtimeConfig: {
        public: {
            GQL_HOST: 'https://mockend.com/manoj-ap/mockbackend/graphql'
        }
    },
    modules: ['@nuxtjs/tailwindcss', 'nuxt-graphql-client']
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // nitro config
    nitro: {
        plugins: ['~/server/index.ts']
    },
    // appearance config
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.css'],
    build: {
        transpile: ['vuetify'],
    },
    // pinia config
    modules: [
        [
            '@pinia/nuxt', 
            {
                autoImports: [
                    // automatically imports `defineStore`
                    'defineStore', // import { defineStore } from 'pinia'
                    ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
                ],
            }
        ]
    ],
    // custom directives import
    imports: {
        dirs: ['stores']
    },
    // runtime varriables
    runtimeConfig: {
        mongodburl: process.env.MONGODB_URL,
    }
})

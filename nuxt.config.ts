import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  mode: 'universal',

  target: 'server',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: [{ path: '@/components', prefix: 'ntt' }],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxt/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],

  modules: ['@nuxtjs/pwa'],

  build: {},
};

export default config;

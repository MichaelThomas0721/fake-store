import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          'postcss-import': {},
          'tailwindcss/nesting': {},
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ['~/css/main.css'],
  resolve: {
    alias: {
      fs: require.resolve('rollup-plugin-node-builtins')
    }
  }
});
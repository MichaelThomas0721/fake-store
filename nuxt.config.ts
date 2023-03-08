import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  plugins: [{ src: "~/plugins/vue-stripe.js", ssr: false, mode: 'client' }],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          "postcss-import": {},
          "tailwindcss/nesting": {},
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    transpile: ["oh-vue-icons"],
  },
  css: ["@/assets/css/main.css"],
  resolve: {
    alias: {
      fs: require.resolve("rollup-plugin-node-builtins"),
    },
  },
  head: {
    title: "Sneak Easy",
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  }
});

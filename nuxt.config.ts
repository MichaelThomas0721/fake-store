import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
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
});

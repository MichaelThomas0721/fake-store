/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "!./node_modules",
  ],
  theme: {
    extend: {
      colors: {
        header: "#1C2C40",
        primary: "#6387A6",
        secondary: "#AAADBF",
        tertiary: "#3C5973",
        background: "#F2F2F2",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};
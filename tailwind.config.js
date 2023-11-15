/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2a2185",
        "light-white": "rgba(255,255,255,0.17)"
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}


/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "xs": "400px",
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        "dark": "#0D0D0F",
        "dark-light": "#161616",
        "primary-green": "#00CE79",
        "primary-grey": "#898989",
      }
    },
    container: {
      center: true,
      padding: {
        "2xl": "7rem",
      },
    }
  },
  plugins: [],
}
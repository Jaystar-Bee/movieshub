/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#0D0D0F",
        "dark-light": "#161616",
        "primary-green": "#0D0D0F",
        "primary-grey": "#898989",
      }
    },
  },
  plugins: [],
}
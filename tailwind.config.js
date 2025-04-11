/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // pastikan jsx dan tsx masuk
  theme: {
    extend: {
      colors : {
        darkbrown : 'rgb(37, 31, 15)',
        goldenrod : '#DAA520'
      }
    },
  },
  plugins: [],
}

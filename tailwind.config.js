/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // pastikan jsx dan tsx masuk
  theme: {
    extend: {
      colors : {
        darkbrown : 'rgb(37, 31, 15)',
        goldenrod : '#DAA520',
        lightgold : "#B59494"
      },
      keyframes: {
        'fade-slide': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-slide': 'fade-slide 0.3s ease-out',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'clarity-orange': '#FF6B00',
        'clarity-blue': '#00D2FF',
        'clarity-purple': '#9D4EDD',
      },
    },
  },
  plugins: [],
}

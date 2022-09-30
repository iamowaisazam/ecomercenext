/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{html,js,jsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        worksans:['Work Sans','Arial','Helvetica','sans-serif'],
      }
    },
  },
  plugins: [],
}
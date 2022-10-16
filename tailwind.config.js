/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutro': '#E7E8E3',
        'neutroLogin': '#B8BAAB',
        'blackController': '#1B1C17',
        'blackLogin': ' #35392D',
        'greenSearch':'#B4C43B',
        'boxShadow': '#000000'

      },
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

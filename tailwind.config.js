/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'marker': "./src/assets/Eco_marker2x (2).png",
        // 'movil': "url('https://i.pinimg.com/564x/bd/80/d2/bd80d286df3ae415c50e20fe61b86373.jpg')"
        
      },
      colors: {
        'neutro': '#E7E8E3',
        'neutroLogin': '#B8BAAB',
        'blackController': '#1B1C17',
        'blackLogin': ' #35392D',
        'blackProfile': '##1E1E1E',
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

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Lato', 'sans-serif'],
        'JMH': ['JMH', 'sans-serif']
      },

      colors: {
        'green': '#55FC10'
      }
    },
  },
  plugins: [],
}


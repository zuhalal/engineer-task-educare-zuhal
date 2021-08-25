const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Build your palette here
        sky: colors.sky,
        blueGoogle: "#4285F4"
      }
    },
  },
  variants: {
    extend: {
      outline: ['active']
    },
  },
  plugins: [],
}

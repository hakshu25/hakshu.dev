const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {},
    colors: {
      midnight: '#28293E',
      white: colors.white,
    },
  },
  plugins: [],
};

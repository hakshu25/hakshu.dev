const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      height: {
        128: '32rem',
      },
    },
    colors: {
      midnight: '#28293E',
      white: colors.white,
      skin: '#F3D1BF',
      blue: colors.blue,
      dark: '#391400',
      darkgray: '#391400A3',
    },
  },
  plugins: [],
};

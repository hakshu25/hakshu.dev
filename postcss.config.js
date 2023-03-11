module.exports = {
  plugins: {
    'tailwindcss/nesting': {}, // この plugin は tailwindcss より前に有効化する必要がある https://tailwindcss.com/docs/using-with-preprocessors#nesting
    tailwindcss: {},
    autoprefixer: {},
  },
};

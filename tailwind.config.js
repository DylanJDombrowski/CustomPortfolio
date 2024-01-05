/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './js/**/*.js',   // Use a single forward slash before **
  './css/**/*.css', // Use a single forward slash before **
],

  theme: {
    extend: {},
  },
  plugins: [],
}


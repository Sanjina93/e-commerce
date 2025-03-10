/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
      }
     
    },
  },
  colors: {
    'primary': '#23A6F0',
    'secondary':'#252B42',
  }
}
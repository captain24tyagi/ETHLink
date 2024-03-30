/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 
        'background': "url('/src/images/bg.png')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}


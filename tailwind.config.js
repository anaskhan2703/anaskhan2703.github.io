/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens:{
      'phone': '374px',
      'tablet': '768px',
      'laptop': '1024px'
    },
    extend: {
      fontFamily:{
        'Varela': ['Varela Round'],
      },
      colors: {
        'darkblack': '#0B0C10',
        'grey': '#1F2833',
        'lightgrey': '#C5C6C7',
        'lightcyan': '#66FCF1',
        'darkcyan': '#45A29E',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};



/** @type {import('tailwindcss').Config} */

import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1/12': '8.3333%',
        '2/12': '16.6667%',
        '3/12': '25%',
        '4/12': '33.3333%',
        '5/12': '41.6667%',
        '6/12': '50%',
        '7/12': '58.3333%',
        '8/12': '66.6667%',
        '9/12': '75%',
        '10/12': '83.3333%',
        '11/12': '91.6667%',
      },
      lineHeight: {
        '12': '3.00rem', // 44px
      },
      rotate:{
        '20': '20deg',
      },
      dropShadow: {
        '5px': '5px 5px 5px rgba(0, 0, 0, 0.8)',
      },
      top:{
        '1/5': '20%',
      },
    },
  },
  plugins: [
    scrollbarHide,
  ],
}


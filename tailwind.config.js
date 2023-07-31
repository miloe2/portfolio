/** @type {import('tailwindcss').Config} */

import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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


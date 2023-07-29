/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate:{
        '15': '20deg',
      },
      dropShadow: {
        '5px': '5px 5px 5px rgba(0, 0, 0, 0.8)',
      },
      top:{
        '1/5': '20%',
      },
      height: ['responsive'],
      maxWidth: ['responsive'],
    },
  },
  plugins: [],
}


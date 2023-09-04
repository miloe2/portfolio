/** @type {import('tailwindcss').Config} */

import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1.5s infinite',
        'my-animation': 'my-animation 0.5s forwards',
      },
      
      keyframes: {
        //바운스 애니메이션
        bounce: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '5%': { transform: 'translateY(1px)' },
          '10%': { transform: 'translateY(2px)' },
          '15%': { transform: 'translateY(1px)' },
          '20%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateY(-1px)' },
          '30%': { transform: 'translateY(-2px)' },
          '35%': { transform: 'translateY(-1px)' },
          '40%': { transform: 'translateY(0px)' },
          '45%': { transform: 'translateY(1px)' },
          '50%': { transform: 'translateY(2px)' },
          '55%': { transform: 'translateY(1px)' },
          '60%': { transform: 'translateY(0px)' },
          '65%': { transform: 'translateY(-1px)' },
          '70%': { transform: 'translateY(-2px)' },
          '75%': { transform: 'translateY(-1px)' },
          '80%': { transform: 'translateY(0px)' },
          '85%': { transform: 'translateY(1px)' },
          '90%': { transform: 'translateY(2px)' },
          '95%': { transform: 'translateY(1px)' },
        },
        'my-animation': {
          '0%': { 
            clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
          },
          // '50%': { 
          //   clipPath: 'polygon(100% 0, 30% 0, 30% 100%, 100% 100%)',
          // },
          '60%': { 
            clipPath: 'polygon(100% 0, 20% 0, 40% 100%, 100% 100%)',
          },
          '70%': { 
            clipPath: 'polygon(100% 0, 15% 0, 30% 100%, 100% 100%)',
          },
          '80%': { 
            clipPath: 'polygon(100% 0, 10% 0, 20% 100%, 100% 100%)',
          },
          '90%': { 
            clipPath: 'polygon(100% 0, 5% 0, 10% 100%, 100% 100%)',
          },
          '100%': {
            clipPath: 'polygon(100% 0, 0% 0, 0% 100%, 100% 100%)'
          }
        },
      },
      inset: {
        '1/5': '20%', // 여기에 1/5를 위한 값 20% 추가
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
      borderWidth: {
        '1': '1px',
      },
      right:{
        '1/5': '20%',
      },
      left:{
        '1/5': '20%',
      }
    },
  },
  plugins: [
    scrollbarHide,
  ],
}


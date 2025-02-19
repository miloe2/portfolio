function generateFractions(limit = 12) {
  const fractions = {};
  for (let i = 1; i <= limit; i++) {
    fractions[`${i}/${limit}`] = `${(i / limit) * 100}%`;
  }
  return fractions;
}

function generateSpacing(start = 100, end = 200, step = 4) {
  const spacing = {};
  for (let i = start; i <= end; i += step) {
    spacing[i] = `${i / 4}rem`; // 1rem == 4를 기반으로
  }
  return spacing;
}

/** @type {import('tailwindcss').Config} */

import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "hello-heading": "clamp(3rem, 9vw, 8.5rem)",
        "hello-title": "clamp(1.875rem, 3vw, 3rem)",
        "introduce-heading": "clamp(3rem, 6.5vw, 8rem)",
        "exp-title": "clamp(2.1rem, 9vw, 8.5rem)",
      },
      // animation
      animation: {
        bounce: "bounce 1.5s infinite ease-in-out",
        "my-animation": "my-animation 0.5s forwards ease-out",
      },

      // keyframes
      keyframes: {
        // 바운스 애니메이션
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(2px)" },
          "40%": { transform: "translateY(-2px)" },
          "60%": { transform: "translateY(2px)" },
          "80%": { transform: "translateY(-2px)" },
        },

        "my-animation": {
          "0%": { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" },
          "60%": { clipPath: "polygon(100% 0, 20% 0, 40% 100%, 100% 100%)" },
          "80%": { clipPath: "polygon(100% 0, 10% 0, 20% 100%, 100% 100%)" },
          "100%": { clipPath: "polygon(100% 0, 0% 0, 0% 100%, 100% 100%)" },
        },
      },
      spacing: {
        ...generateSpacing(),
        ...generateFractions(),
      },
    },
  },
  plugins: [scrollbarHide],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        fade: ['"Rubik 80s Fade"', "cursive"],
        glitch: ['"Rubik Glitch"', "cursive"],
        spray: ['"Rubik Spray Paint"', "cursive"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};

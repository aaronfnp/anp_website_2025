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
        futura: ['"Futura"', "sans-serif"],
      },
      fontWeight: {
        avantRegular: 400,
        avantBold: 700,
        futuraRegular: 400,
        futuraBold: 700,
      },
    },
  },
  plugins: [],
};

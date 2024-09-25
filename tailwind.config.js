/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        bgDark: "rgba(37, 43, 66, 1)",
        bgWhite: "rgba(255, 255, 255, 1)",
        bgGray: "rgba(115, 115, 115, 1)",
      },
    },
  },
  plugins: [],
};

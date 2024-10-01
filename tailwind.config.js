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
        bgBlue: "rgba(35, 166, 240, 1)",
        bgDarkBlue: "rgba(42, 124, 199, 1)",
        bgLightBlue: "rgba(45, 139, 192, 0.75)",
        bgFooterGray: "rgba(250, 250, 250, 1)",
      },
      backgroundImage: {
        "lineer-blue":
          "linear-gradient(to right, rgba(150, 233, 251, 1), rgba(171, 236, 214, 1))",
      },
      aspectRatio: {
        "1/3": "1 / 3",
      },
    },
  },
  plugins: [],
};

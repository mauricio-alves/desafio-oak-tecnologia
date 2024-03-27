/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#ffffff",
      metal: "#565584",
      teal: "#115e59",
      tahiti: "#24908c",
      bermuda: "#3aa675",
    },
    screens: {
      sm: { max: "400px" },
      // => @media (max-width: 767px) { ... }

      md: { min: "401px", max: "767px" },
      // => @media (max-width: 767px) { ... }

      lg: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      xl: { min: "1024px" },
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};

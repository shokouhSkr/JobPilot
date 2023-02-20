/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tp}"],
  important: "#root",
  theme: {
    screens: {
      xs: "375",
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        main: "#263238",
        primary: "#6d8692",
      },
    },
    plugins: [],
  },
};

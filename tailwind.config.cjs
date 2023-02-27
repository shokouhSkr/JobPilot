/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    screens: {
      xs: "375",
      sm: "576px",
      md: "960px",
      lg: "1240px",
      xl: "1440px",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        screen: "#f5f7f8",
        main: "#263238",
        primary: "#6d8692",
        hover: "#ffffff1a",
        form: "#fff",
      },
    },
    plugins: [],
  },
};

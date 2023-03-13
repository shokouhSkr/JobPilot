/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    screens: {
      xs: "375px",
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
        screen: "#f3f5f7",
        primaryTxt: "#4d3757",
        secondaryTxt: "#c2b2b1",
        primaryBg: "#5932b6",
        primaryBgDark: "#1b1629",
        secondaryBg: "#F5B661",
        secondaryBgDark: "#231b2a",
        tertiaryBgDark: "#4f3e60",
        white: "#fcfbfc",
      },
    },
    plugins: [],
  },
};

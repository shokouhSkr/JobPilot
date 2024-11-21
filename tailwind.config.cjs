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
				secondaryBg: "#F5B661",
				primaryBgDark: "#1f1f1f",
				secondaryBgDark: "#2a2a2a",
				tertiaryBgDark: "#353535",

				white: "#fcfbfc",
			},
		},
		plugins: [],
	},
};

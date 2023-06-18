/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"deep-blue": "#0D1B2A",
				turquoise: "#1DBACC",
				"dark-gray": "#1D2330",
				yellow: "#FFD700",
				pink: "#ED3192",
				"light-pink": "#FFC0CB",
				"primary-blue": "#087FBF",
				"light-gray": "#E0E0E0",
				white: "#FFFFFF",
				black: "#000000",
				"opaque-black": "rgba(0,0,0,0.35)",
			},
			screens: {
				xs: "480px",
				ss: "620px",
				sm: "768px",
				md: "1060px",
				lg: "1280px",
				xl: "1440px",
				xxl: "1920px",
			},
			fontFamily: {
				monospace: "VT323, monospace",
			},
		},
	},
	plugins: [],
};

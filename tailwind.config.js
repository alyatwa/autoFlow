/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#E0E7FF",
					600: "#4f46e5",
					700: "#4338CA",
					800: "#3730a3",
				},
				gray:{
					100:'#f7f9fb',
					200:'#f1f5f9',
					300:'#e2e8f0'
				},
				warning:{
					100:'#FEF9C3',
					400:'#FACC15',
					800:'#854D0E'
				},
				success:{
					100:'#DCFCE7',
					400:'#4ADE80',
					800:'#166534'
				}
			},
		},
	},
	plugins: [],
};

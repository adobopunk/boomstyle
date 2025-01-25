/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./_site/**/*.html'],
	darkMode: 'class', // Enables dark mode via class toggle
	theme: {
		extend: {
			colors: {
				background: '#121212',
				text: '#eaeaea',
				primary: '#bb86fc',
				secondary: '#3700b3',
				border: '#333333',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

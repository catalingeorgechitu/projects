/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}', './index.html'],
	theme: {
		height: {
			container: '40rem',
		},
		extend: {
			fontFamily: {
				body: ['Nunito'],
			},
		},
	},
	plugins: [],
};

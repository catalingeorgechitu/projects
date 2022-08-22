/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
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

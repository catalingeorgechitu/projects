/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}', './index.html'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Nunito'],
			},
			backgroundImage: {
				'landing-bg': "url('/public/img/landing-bg.jpg')",
			},
		},
	},
	plugins: [],
};

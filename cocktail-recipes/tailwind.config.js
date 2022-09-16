/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js}',
		'./index.html',
		'./drink.html',
		'./alcoholic-drinks.html',
		'./non-alcoholic-drinks.html',
		'./search-drinks-ingredients.html',
		'./search-drinks-name.html',
		'./measures.html',
	],
	theme: {
		extend: {
			maxHeight: {
				128: '32rem',
			},
			fontFamily: {
				body: ['Lato'],
				title: ['Luxurious Script'],
			},
			colors: {
				customBrown: '#b68c4e',
			},
		},
	},
	plugins: [],
};

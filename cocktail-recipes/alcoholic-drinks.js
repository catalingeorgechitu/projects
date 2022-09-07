'use strict';
import { BASE_URL, getDrinks } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
	getDrinks('alcoholic');

	let drinks = document.getElementsByClassName('drinks-container')[0].children;
	for (let i = 0; i <= drinks.length; i++) {
		console.log(
			document.getElementsByClassName('drinks-container')[0].children
		);
	}
});

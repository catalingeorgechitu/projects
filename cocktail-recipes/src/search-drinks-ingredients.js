'use strict';
import { getDrinksByIngredients, getDate, goToHomepage } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
	let inputValueName = localStorage.getItem('searchInputIngredients');
	getDrinksByIngredients(inputValueName);
	getDate();

	const logoButton = document.getElementsByClassName('logo')[0];
	logoButton.addEventListener('click', goToHomepage);
});

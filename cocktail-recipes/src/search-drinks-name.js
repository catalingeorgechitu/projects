'use strict';
import { getDrinksByName, getDate, goToHomepage } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
	let inputValueName = localStorage.getItem('searchInputName');
	getDrinksByName(inputValueName);
	getDate();

	const logoButton = document.getElementsByClassName('logo')[0];
	logoButton.addEventListener('click', goToHomepage);
});

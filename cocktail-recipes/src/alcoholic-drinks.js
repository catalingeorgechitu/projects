'use strict';
import { getDrinksByType, getDate, goToHomepage } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
	getDrinksByType('alcoholic');
	getDate();

	const logoButton = document.getElementsByClassName('logo')[0];
	logoButton.addEventListener('click', goToHomepage);
});

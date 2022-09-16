'use strict';
import { getDrinksByType, getDate, goToHomepage } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
	getDrinksByType('alcoholic');
	getDate();

	// adds listener to logo for sending the user to homepage when tapped
	const logoButton = document.getElementsByClassName('logo')[0];
	logoButton.addEventListener('click', goToHomepage);
});

'use strict';
import { getDate, goToHomepage } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
	getDate();

	// adds listener to logo for sending the user to homepage when tapped
	const logoButton = document.getElementsByClassName('logo')[0];
	logoButton.addEventListener('click', goToHomepage);
});

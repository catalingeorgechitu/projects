'use strict';
import {
	BASE_URL,
	getDate,
	goToHomepage,
	createDrinks,
	catchError,
} from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
	getDate();
	getDrinksFromLocalStorage();

	// adds listener to logo for sending the user to homepage when tapped
	const logoButton = document.getElementsByClassName('logo')[0];
	logoButton.addEventListener('click', goToHomepage);
});

function getDrinksFromLocalStorage() {
	let favorites = [];
	if (localStorage.getItem('favorites') !== null) {
		favorites = JSON.parse(`[${localStorage.getItem('favorites')}]`);
	} else return;

	if (favorites.length == null || favorites.length === 0) {
		catchError(
			"Ooopppsss, looks like you don't have any favorite drink added yet..."
		);
	} else {
		favorites.forEach(id => {
			fetch(`${BASE_URL}lookup.php?i=${id}`).then(response =>
				response.json().then(data => {
					createDrinks(data);
				})
			);
		});
	}
}

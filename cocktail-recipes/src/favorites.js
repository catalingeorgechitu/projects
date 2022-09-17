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

// gets favorite drinks from the localStorage, if there are none, throws an error to the user
function getDrinksFromLocalStorage() {
	let favorites = [];
	favorites = localStorage.getItem('favorites');

	if (favorites === null || favorites === undefined) {
		catchError(
			"Ooopppsss, looks like you don't have any favorite drink added yet..."
		);
	} else if (favorites.length === 0) {
		catchError(
			"Ooopppsss, looks like you don't have any favorite drink added yet..."
		);
	} else {
		favorites = JSON.parse(`[${localStorage.getItem('favorites')}]`);
		favorites.forEach(id => {
			fetch(`${BASE_URL}lookup.php?i=${id}`).then(response =>
				response.json().then(data => {
					createDrinks(data);
				})
			);
		});
	}
}

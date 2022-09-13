'use strict';
export const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

// fetches the drinks by their type when the user selects the options from the homepage
export function getDrinksByType(type) {
	fetch(`${BASE_URL}filter.php?a=${type}`)
		.then(response => response.json())
		.then(data => {
			createDrinks(data);
		});
}

// fetches the drinks by their name when the user uses search input, throws an error if nothing found
export function getDrinksByName(inputValueName) {
	fetch(`${BASE_URL}search.php?s=${inputValueName}`)
		.then(response => response.json())
		.then(data => {
			createDrinks(data);
		})
		.catch(() => {
			catchError("Ooopppsss, looks like your drink hasn't been found...");
		});
}

// fetches the drinks by ingredients when the user uses search input, throws an error if nothing found
export function getDrinksByIngredients(inputValueIngredients) {
	fetch(`${BASE_URL}filter.php?i=${inputValueIngredients}`)
		.then(response => response.json())
		.then(data => {
			createDrinks(data);
		})
		.catch(() => {
			catchError(
				"Ooopppsss, looks like a drink with this ingredient hasn't been found..."
			);
		});
}

// error function to throw custom messages
function catchError(message) {
	let errorMessage = document.createElement('h3');
	let sadFace = document.createElement('i');
	let sadFaceContainer = document.createElement('div');
	let errorContainer = document.createElement('span');

	errorContainer.setAttribute('class', 'error-container');
	sadFaceContainer.setAttribute('class', 'sad-face-container');
	sadFace.setAttribute('class', 'fas fa-sad-cry');
	errorMessage.setAttribute('class', 'error');

	errorMessage.appendChild(document.createTextNode(message));
	sadFaceContainer.appendChild(sadFace);
	errorContainer.appendChild(errorMessage);
	errorContainer.append(sadFaceContainer);

	document
		.getElementsByClassName('drinks-container')[0]
		.appendChild(errorContainer);
}

// fetches a random drink when the user selects the option from the homepage
export function getRandomDrink() {
	fetch(BASE_URL + `random.php`)
		.then(response => response.json())
		.then(data => {
			localStorage.setItem('id', data.drinks[0].idDrink);
			window.location.pathname = 'drink.html';
		});
}

// function that creates and appends the items to their elements, navigates to the drink page
export function createDrinks(data) {
	data.drinks.forEach(elem => {
		// creates elements and appends them to the drinks container
		let eachDrink = document.createElement('div');
		let drinkThumbnail = document.createElement('img');
		let drinkTitle = document.createElement('h3');

		drinkTitle.appendChild(document.createTextNode(elem.strDrink));
		eachDrink.appendChild(drinkThumbnail);
		eachDrink.appendChild(drinkTitle);
		document
			.getElementsByClassName('drinks-container')[0]
			.appendChild(eachDrink);

		// sets drink id as id for div, sets thumbnail, sets class
		eachDrink.setAttribute('id', elem.idDrink);
		drinkThumbnail.setAttribute('src', `${elem.strDrinkThumb}/preview`);
		drinkTitle.setAttribute('class', 'drinks-title');

		// adds an event listener for click on each drink in order to get the id of drink, then sets the id to localStorage and navigates to the drink page
		eachDrink.addEventListener('click', function (e) {
			let isNull = e.target.getAttribute('id');

			if (isNull == null) {
				let id = e.target.parentNode.getAttribute('id');
				goToDrink(id);
			} else {
				let id = e.target.getAttribute('id');
				goToDrink(id);
			}
			function goToDrink(id) {
				localStorage.setItem('id', id);
				window.location.pathname = 'drink.html';
			}
		});
	});
}

// gets the actual year and appends it to the footer
export function getDate() {
	let year = new Date();
	let actualYear = year.getFullYear();
	let copyrights = document.getElementsByClassName('copyrights')[0];
	copyrights.innerText = `Copyright © ${actualYear} Catalin Chitu`;
}

// sends the user to the homepage
export function goToHomepage() {
	window.location.pathname = 'index.html';
}

'use strict';
import { BASE_URL, getDate, goToHomepage } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
	let id = localStorage.getItem('id');
	getDrink(id);
	getDate();
	// adds listener to logo for sending the user to homepage when tapped
	const logoButton = document.getElementsByClassName('logo')[0];
	logoButton.addEventListener('click', goToHomepage);
});

// fetch the drink from the API URL and pass data to function
function getDrink(id) {
	fetch(`${BASE_URL}lookup.php?i=${id}`).then(response =>
		response.json().then(data => {
			createDrink(data);
		})
	);
}

// creates every element and appends data from the API to them
function createDrink(data) {
	let cocktail = data.drinks[0];

	// DO NOT REMOVE, this makes the code formatter (Prettier) ignore the next block of code
	// added brackets { } in order to not repeat prettier-ignore for each line
	// prettier-ignore
	{
	let notFavorite = document.createElement('i');
	notFavorite.addEventListener('click', favoritesClicked)	
	notFavorite.setAttribute('class', 'like-icon fa-regular fa-heart'); 	
	notFavorite.setAttribute('id', cocktail.idDrink);

	document.getElementsByClassName('cocktailImg')[0].setAttribute('src', cocktail.strDrinkThumb);
	document.getElementsByClassName('drink-title')[0].innerText =cocktail.strDrink;
	document.getElementsByClassName('type')[0].innerText = cocktail.strAlcoholic;
	document.getElementsByClassName('img-container')[0].appendChild(notFavorite);
	
	
	}

	// loops through object keys and checks if conditions are fullfiled
	// if fullfiled then creates elements and appends object values to them
	for (const [key, value] of Object.entries(cocktail)) {
		if (key == 'strInstructions' && value != null) {
			let ingredient = document.createElement('p');
			let instructions = document.getElementsByClassName('instructions')[0];

			ingredient.appendChild(document.createTextNode(value));
			instructions.appendChild(ingredient);
		}

		if (key.includes('strMeasure') && value != null) {
			let ingredient = document.createElement('p');
			let measures = document.getElementsByClassName('measures')[0];
			ingredient.appendChild(document.createTextNode(`${value} -`));
			measures.appendChild(ingredient);
		}

		if (key.includes('strIngredient') && value != null) {
			let ingredient = document.createElement('p');
			ingredient.appendChild(document.createTextNode(value));
			document.getElementsByClassName('ingredients')[0].appendChild(ingredient);
		}
	}
	checkFavorites();
}

// gets the id of the drink from the localStorage and compares to the drinks already set to favorites
// if found, it gets deleted from localStorage
// if not found, the addToFavorites function is called
function favoritesClicked() {
	let id = parseInt(localStorage.getItem('id'));
	let favorites = [];
	favorites = JSON.parse(`[${localStorage.getItem('favorites')}]`);

	if (favorites.includes(id)) {
		let index = favorites.indexOf(id);
		if (index > -1) {
			favorites.splice(index, 1);
		}
		document
			.getElementsByClassName('like-icon')[0]
			.setAttribute('class', 'like-icon fa-regular fa-heart');
		localStorage.setItem('favorites', favorites);
	} else {
		document
			.getElementsByClassName('like-icon')[0]
			.setAttribute('class', 'like-icon fa-solid fa-heart');
		addToFavorites();
	}
}

// adds the drink to favorites when like icon is pressed
function addToFavorites() {
	let favorites = localStorage.getItem('favorites');
	let id = localStorage.getItem('id');

	if (favorites === null || favorites === '') {
		localStorage.setItem('favorites', id);
	} else {
		let newFavorites = [];
		newFavorites.push(favorites, id);
		localStorage.setItem('favorites', newFavorites);
	}
}

// checks if the drink is already at the favorites and fills the like icon
function checkFavorites() {
	let id = parseInt(localStorage.getItem('id'));
	let favorites = [];
	favorites = JSON.parse(`[${localStorage.getItem('favorites')}]`);
	if (favorites.includes(id)) {
		document
			.getElementsByClassName('like-icon')[0]
			.setAttribute('class', 'like-icon fa-solid fa-heart');
	} else {
		document
			.getElementsByClassName('like-icon')[0]
			.setAttribute('class', 'like-icon fa-regular fa-heart');
	}
}

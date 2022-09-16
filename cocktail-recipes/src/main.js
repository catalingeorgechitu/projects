'use strict';
import { getRandomDrink, getDate, goToHomepage } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
	getDate();
});

// declares variables and adds listeners to them
const logoButton = document.getElementsByClassName('logo')[0];
logoButton.addEventListener('click', goToHomepage);

const menuBurger = document.getElementsByClassName('menu-burger')[0];
menuBurger.addEventListener('click', menuBurgerClicked);

const favoritesButton = document.getElementsByClassName('favorites-button')[0];
const hiddenFavoritesButton =
	document.getElementsByClassName('favorites-button')[1];
favoritesButton.addEventListener('click', favoritesClicked);
hiddenFavoritesButton.addEventListener('click', favoritesClicked);

const measuresButton = document.getElementsByClassName('measures-button')[0];
const hiddenMeasuresButton =
	document.getElementsByClassName('measures-button')[1];
measuresButton.addEventListener('click', measuresClicked);
hiddenMeasuresButton.addEventListener('click', measuresClicked);

const searchFormName = document.getElementsByClassName('form-name')[0];
searchFormName.addEventListener('submit', getInputValueName);

const searchFormIngredients =
	document.getElementsByClassName('form-ingredients')[0];
searchFormIngredients.addEventListener('submit', getInputValueIngredients);

const alcoholicDrinksButton =
	document.getElementsByClassName('alcoholic-drinks')[0];
alcoholicDrinksButton.addEventListener('click', alcoholicDrinksClicked);

const nonAlcoholicDrinksButton = document.getElementsByClassName(
	'non-alcoholic-drinks'
)[0];
nonAlcoholicDrinksButton.addEventListener('click', nonAlcoholicDrinksClicked);

const randomDrinksButton = document.getElementsByClassName('random-drinks')[0];
randomDrinksButton.addEventListener('click', randomDrinksClicked);

// functions for search inputs and clicks

function menuBurgerClicked() {
	let hiddenMenu = document.getElementsByClassName('hidden-menu')[0];

	if (hiddenMenu.classList.contains('!hidden')) {
		hiddenMenu.classList.remove('!hidden');
	} else {
		hiddenMenu.classList.add('!hidden');
	}
}

function getInputValueName() {
	let inputValueName = document.getElementsByClassName('search-input-name')[0];
	localStorage.setItem('searchInputName', inputValueName.value);
	inputValueName.value = null;
}

function getInputValueIngredients() {
	let inputValueIngredients = document.getElementsByClassName(
		'search-input-ingredients'
	)[0];
	localStorage.setItem('searchInputIngredients', inputValueIngredients.value);
	inputValueIngredients.value = null;
}

function alcoholicDrinksClicked() {
	window.location.pathname = 'alcoholic-drinks.html';
}

function nonAlcoholicDrinksClicked() {
	window.location.pathname = 'non-alcoholic-drinks.html';
}

function favoritesClicked() {
	window.location.pathname = 'favorites.html';
}

function measuresClicked() {
	window.location.pathname = 'measures.html';
}

function randomDrinksClicked() {
	getRandomDrink();
}

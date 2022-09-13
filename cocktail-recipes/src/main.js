'use strict';
import { getRandomDrink, getDate, goToHomepage } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
	getDate();
});

const logoButton = document.getElementsByClassName('logo')[0];
logoButton.addEventListener('click', goToHomepage);

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

const footer = document.getElementsByClassName('copyrights')[0];

// functions

function getInputValueName() {
	let inputValueName =
		document.getElementsByClassName('search-input-name')[0].value;
	localStorage.setItem('searchInputName', inputValueName);
}

function getInputValueIngredients() {
	let inputValueIngredients = document.getElementsByClassName(
		'search-input-ingredients'
	)[0].value;
	localStorage.setItem('searchInputIngredients', inputValueIngredients);
}

function alcoholicDrinksClicked() {
	window.location.pathname = 'alcoholic-drinks.html';
}

function nonAlcoholicDrinksClicked() {
	window.location.pathname = 'non-alcoholic-drinks.html';
}

function randomDrinksClicked() {
	getRandomDrink();
}

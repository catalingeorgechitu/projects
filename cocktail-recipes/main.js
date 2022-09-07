'use strict';

const alcoholicDrinksButton =
	document.getElementsByClassName('alcoholic-drinks')[0];
alcoholicDrinksButton.addEventListener('click', alcoholicDrinksClicked);

const nonAlcoholicDrinksButton = document.getElementsByClassName(
	'non-alcoholic-drinks'
)[0];
nonAlcoholicDrinksButton.addEventListener('click', nonAlcoholicDrinksClicked);

const randomDrinksButton = document.getElementsByClassName('random-drinks')[0];
randomDrinksButton.addEventListener('click', randomDrinksClicked);

function alcoholicDrinksClicked() {
	window.location.replace(window.location.href + 'alcoholic-drinks.html');
}

function nonAlcoholicDrinksClicked() {
	window.location.replace(window.location.href + 'non-alcoholic-drinks.html');
	console.log('non-alcoholic-drinks clicked');
}

function randomDrinksClicked() {
	console.log('random drinks clicked');
}

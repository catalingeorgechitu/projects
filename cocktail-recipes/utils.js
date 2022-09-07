export const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export function getDrinks(type) {
	fetch(BASE_URL + `filter.php?a=${type}`)
		.then(response => response.json())
		.then(data => {
			data.drinks.forEach(elem => {
				let eachDrink = document.createElement('div');
				let drinkThumbnail = document.createElement('img');
				let drinkTitle = document.createElement('h1');

				// creates elements and appends them to the drinks container
				drinkTitle.appendChild(document.createTextNode(elem.strDrink));
				eachDrink.appendChild(drinkThumbnail);
				document
					.getElementsByClassName('drinks-container')[0]
					.appendChild(eachDrink);
				eachDrink.appendChild(drinkTitle);

				// sets drink id as id for div, sets thumbnail
				eachDrink.setAttribute('id', elem.idDrink);
				drinkThumbnail.setAttribute('src', `${elem.strDrinkThumb}/preview`);
			});
		});
}

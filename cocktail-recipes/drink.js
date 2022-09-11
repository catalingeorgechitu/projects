"use strict";
import { BASE_URL } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  let id = localStorage.getItem("id");
  getDrink(id);
});

function getDrink(id) {
  fetch(`${BASE_URL}lookup.php?i=${id}`).then((response) =>
    response.json().then((data) => {
      createDrink(data);
    })
  );
}

function createDrink(data) {
  let cocktail = data.drinks[0];

  document.getElementsByClassName("title")[0].innerText = cocktail.strDrink;
  document
    .getElementsByClassName("cocktailImg")[0]
    .setAttribute("src", cocktail.strDrinkThumb);
  document.getElementsByClassName("type")[0].innerText = cocktail.strAlcoholic;

  for (const [key, value] of Object.entries(cocktail)) {
    if (key == "strInstructions" && value != null) {
      let ingredient = document.createElement("p");
      ingredient.appendChild(document.createTextNode(value));
      document
        .getElementsByClassName("instructions")[0]
        .appendChild(ingredient);
    }

    if (key.includes("strMeasure") && value != null) {
      let ingredient = document.createElement("p");
      ingredient.appendChild(document.createTextNode(value));
      document.getElementsByClassName("measures")[0].appendChild(ingredient);
    }

    if (key.includes("strIngredient") && value != null) {
      let ingredient = document.createElement("p");
      ingredient.appendChild(document.createTextNode(value));
      document.getElementsByClassName("ingredients")[0].appendChild(ingredient);
    }
  }
}

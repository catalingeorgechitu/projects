"use strict";
import { getRandomDrink } from "./utils.js";

const alcoholicDrinksButton =
  document.getElementsByClassName("alcoholic-drinks")[0];
alcoholicDrinksButton.addEventListener("click", alcoholicDrinksClicked);

const nonAlcoholicDrinksButton = document.getElementsByClassName(
  "non-alcoholic-drinks"
)[0];
nonAlcoholicDrinksButton.addEventListener("click", nonAlcoholicDrinksClicked);

const randomDrinksButton = document.getElementsByClassName("random-drinks")[0];
randomDrinksButton.addEventListener("click", randomDrinksClicked);

const searchForm = document.getElementsByClassName("form")[0];
searchForm.addEventListener("submit", getInputValue);

// functions

function getInputValue() {
  let inputValue = document.getElementsByClassName("search-input")[0].value;
  localStorage.setItem("searchInput", inputValue);
}

function alcoholicDrinksClicked() {
  window.location.pathname = "alcoholic-drinks.html";
}

function nonAlcoholicDrinksClicked() {
  window.location.pathname = "non-alcoholic-drinks.html";
}

function randomDrinksClicked() {
  getRandomDrink();
}

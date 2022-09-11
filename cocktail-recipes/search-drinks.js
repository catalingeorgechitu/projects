"use strict";
import { getDrinksByName } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  let inputValue = localStorage.getItem("searchInput");
  getDrinksByName(inputValue);
});

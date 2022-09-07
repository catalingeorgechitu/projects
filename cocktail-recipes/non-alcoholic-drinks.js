'use strict';
import { BASE_URL, getDrinks } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
	getDrinks('non_alcoholic');
});

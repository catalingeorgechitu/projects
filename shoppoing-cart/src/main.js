console.log('Hello');

// The array of products
// const products = [
// 	{
// 		id: 'apa',
// 		name: 'Apa plata',
// 		price: 3.1,
// 	},
// 	{
// 		id: 'paine',
// 		name: 'Paine',
// 		price: 2.56,
// 	},
// 	{
// 		id: 'faina',
// 		name: 'Faina alba',
// 		price: 4.99,
// 	},
// 	{
// 		id: 'ulei',
// 		name: 'Ulei floarea soarelui',
// 		price: 11.59,
// 	},
// 	{
// 		id: 'iaurt',
// 		name: 'Iaurt natural',
// 		price: 3.59,
// 	},
// 	{
// 		id: 'orez',
// 		name: 'Orez',
// 		price: 5.99,
// 	},
// ];

const selectedProduct = document.getElementsByClassName('product');
const addQuantity = document.getElementsByClassName('item-add');
const substractQuantity = document.getElementsByClassName('item-substract');
const rowPrice = document.getElementsByClassName('cart-price');

for (let i = 0; i < selectedProduct.length; i++) {
	let button = selectedProduct[i];
	button.addEventListener('click', function () {
		updateCartTotal();
	});
}

for (let i = 0; i < addQuantity.length; i++) {
	let button = addQuantity[i];
	button.addEventListener('click', addQuantityFunction);
}

for (let i = 0; i < substractQuantity.length; i++) {
	let button = substractQuantity[i];
	button.addEventListener('click', substractQuantityFunction);
}

function substractQuantityFunction(e) {
	let target = e.currentTarget.parentNode;
	let targetQuantity = parseInt(
		target.getElementsByClassName('cart-quantity')[0].innerText
	);
	if (targetQuantity > 1) {
		target.getElementsByClassName('cart-quantity')[0].innerText =
			targetQuantity - 1;
	} else {
		target.getElementsByClassName('cart-quantity')[0].innerText = 1;
	}
	updateCartTotal();
}

function addQuantityFunction(e) {
	let target = e.currentTarget.parentNode;
	let targetQuantity = parseInt(
		target.getElementsByClassName('cart-quantity')[0].innerText
	);

	if (targetQuantity >= 1) {
		target.getElementsByClassName('cart-quantity')[0].innerText =
			targetQuantity + 1;
	} else {
		target.getElementsByClassName('cart-quantity')[0].innerText = 1;
	}
	updateCartTotal();
}

function updateCartTotal() {
	let cartItemContainer = document.getElementsByClassName('cart-container')[0];
	let cartRows = cartItemContainer.getElementsByClassName('cart-row');
	let total = 0;

	for (let i = 0; i < cartRows.length; i++) {
		let cartRow = cartRows[i];
		let quantityElement = parseInt(
			cartRow.getElementsByClassName('cart-quantity')[0].innerText
		);
		let itemPriceElement = parseFloat(
			cartRow.getElementsByClassName('item-price')[0].innerText
		);
		price = itemPriceElement * quantityElement;

		document.getElementsByClassName('cart-price')[i].innerText =
			price.toFixed(2);
		total += price;
	}

	document.getElementsByClassName(
		'total-price'
	)[0].innerText = `RON ${total.toFixed(2)}`;
}

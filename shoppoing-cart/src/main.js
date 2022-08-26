// Select the buttons on the page
const selectedProduct = document.getElementsByClassName('product');
const addQuantity = document.getElementsByClassName('item-add');
const substractQuantity = document.getElementsByClassName('item-substract');
const payButton = document.getElementsByClassName('pay');
let totalPrice = 0;

// Add the selected product to cart
for (let i = 0; i < selectedProduct.length; i++) {
	let product = selectedProduct[i];
	product.addEventListener('click', function () {
		let title = product.getElementsByClassName('product-title')[0].innerText;
		let price = parseFloat(
			product
				.getElementsByClassName('product-price')[0]
				.innerText.replace(' Lei', '')
		).toFixed(2);

		addToCart(title, price);
		updateCartPrice();
	});
}

// Add click event to increase the quantity of the product in cart
for (let i = 0; i < addQuantity.length; i++) {
	let button = addQuantity[i];
	button.addEventListener('click', addQuantityFunction);
}

// Add click event to decrease the quantity of the product in cart
for (let i = 0; i < substractQuantity.length; i++) {
	let button = substractQuantity[i];
	button.addEventListener('click', substractQuantityFunction);
}

// Decrease the quantity of the product in cart function
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
	updateCartPrice();
}

// Increase the quantity of the product in cart function
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
	updateCartPrice();
}

// Updates row prices and total price of the cart function
function updateCartPrice() {
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

// Adds the selected item to cart and creates the structure for the cart row
function addToCart(title, price) {
	let cartRow = document.createElement('div');
	cartRow.classList.add('cart-row', 'mx-6', 'my-2', 'flex');
	let container = document.getElementsByClassName('cart-container')[0];
	let cartItemNames = container.getElementsByClassName('cart-title');
	for (let i = 0; i < cartItemNames.length; i++) {
		if (cartItemNames[i].innerText == title) {
			alert('Produsul a fost deja adaugat in cos');
			return;
		}
	}

	let cartRowContents = `
		<div class="cart-title w-7/12">${title}</div>
		<div
		class="item-substract mr-2 flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 transition duration-100 hover:cursor-pointer hover:bg-slate-900 hover:text-white"
		>
		<i class="fas fa-minus"></i>
		</div>
		<p>x</p>
		<div class="cart-quantity">1</div>
		<div
		class="item-add ml-2 flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 transition duration-100 hover:cursor-pointer hover:bg-slate-900 hover:text-white"
		>
		<i class="fas fa-plus"></i>
		</div>
		<div class="item-price hidden">${price}</div>
		<div class="cart-price ml-12 w-2/12">0</div>

	`;
	cartRow.innerHTML = cartRowContents;
	container.append(cartRow);
	cartRow
		.getElementsByClassName('item-add')[0]
		.addEventListener('click', addQuantityFunction);
	cartRow
		.getElementsByClassName('item-substract')[0]
		.addEventListener('click', substractQuantityFunction);
	updateCartPrice();
}

// Stores the total cart price onto the local storage
function payNow() {
	total = parseFloat(
		document
			.getElementsByClassName('total-price')[0]
			.innerText.replace('RON ', '')
	);
	localStorage.setItem('cartPrice', total);
	if (total > 0) {
		window.location.replace(window.location.href.replace('index', '/src/payment'));
	} else {
		alert('Cosul tau de cumparaturi este gol');
	}
}


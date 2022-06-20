const changeColors1 = document.querySelector('.ball1');
const changeColors2 = document.querySelector('.ball2');
const changeColors3 = document.querySelector('.ball3');

changeColors1.addEventListener('click', () => {
	if (changeColors1.classList.contains('bg-purple-300')) {
		changeColors1.classList.remove('bg-purple-300');
		changeColors1.classList.add('bg-red-300');
	} else {
		changeColors1.classList.remove('bg-red-300');
		changeColors1.classList.add('bg-purple-300');
	}
});
changeColors2.addEventListener('click', () => {
	if (changeColors2.classList.contains('bg-pink-300')) {
		changeColors2.classList.remove('bg-pink-300');
		changeColors2.classList.add('bg-green-300');
	} else {
		changeColors2.classList.remove('bg-green-300');
		changeColors2.classList.add('bg-pink-300');
	}
});
changeColors3.addEventListener('click', () => {
	if (changeColors3.classList.contains('bg-yellow-300')) {
		changeColors3.classList.remove('bg-yellow-300');
		changeColors3.classList.add('bg-blue-300');
	} else {
		changeColors3.classList.remove('bg-blue-300');
		changeColors3.classList.add('bg-yellow-300');
	}
});

// switch (true) {
// 	case changeColors1.classList.contains('bg-purple-300'):
// 		changeColors1.classList.remove('bg-purple-300');
// 		changeColors1.classList.add('bg-red-300');
// 		break;

// 	case changeColors2.classList.contains('bg-pink-300'):
// 		changeColors2.classList.remove('bg-pink-300');
// 		changeColors2.classList.add('bg-green-300');
// 		break;

// 	case changeColors3.classList.contains('bg-yellow-300'):
// 		changeColors3.classList.remove('bg-yellow-300');
// 		changeColors3.classList.add('bg-blue-300');

// 	case changeColors1.classList.contains('bg-red-300'):
// 		changeColors1.classList.remove('bg-red-300');
// 		changeColors1.classList.add('bg-purple-300');
// 		break;

// 	case changeColors2.classList.contains('bg-green-300'):
// 		changeColors2.classList.remove('bg-green-300');
// 		changeColors2.classList.add('bg-pink-300');
// 		break;
// }

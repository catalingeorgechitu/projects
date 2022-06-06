const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');

menuBtn.addEventListener('click', () => {
	if (menuList.classList.contains('hidden')) {
		menuList.classList.remove('hidden');
	} else {
		menuList.classList.add('hidden');
	}
});

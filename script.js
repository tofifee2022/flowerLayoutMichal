const dots = document.querySelectorAll('.section__btn');
const items = document.querySelectorAll('.section__item');

function changeItems() {
	dots.forEach((e) => {
		e.classList.remove('active');
	});
	this.classList.add('active');

	for (let i = 0; i < dots.length; i++) {
		if (dots[i].classList.contains('active')) {
			items[i].style.visibility = 'visible';
		} else {
			items[i].style.visibility = 'hidden';
		}
	}
}

dots.forEach((el) => {
	el.addEventListener('click', changeItems);
});

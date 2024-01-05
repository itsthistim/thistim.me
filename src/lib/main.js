import 'https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js';

export function typeEffect(typeSpeed = 100, backSpeed = 50, backDelay = 2000) {
	const typed = document.querySelector('.typed');
	if (typed) {
		let typed_strings = typed.getAttribute('data-typed-items');
		typed_strings = typed_strings.split(',');
		new Typed('.typed', {
			strings: typed_strings,
			loop: true,
			typeSpeed: typeSpeed,
			backSpeed: backSpeed,
			backDelay: backDelay
		});
	}
}

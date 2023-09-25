import "https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js";

export function select(el, all = false) {
	el = el.trim();
	if (all) {
		return [...document.querySelectorAll(el)];
	} else {
		return document.querySelector(el);
	}
}

/**
 * Add a typing animation to an element using [typed.js](https://github.com/mattboldt/typed.js)
 * To define the strings to be typed, add a data-typed-items attribute to the element.
 * @example <p><span class="typed" data-typed-items="First Item, Second Item, Third Item, ..."></span></p>
 * @param {*} typeSpeed 
 * @param {*} backSpeed 
 * @param {*} backDelay 
 */
export function typeEffect(typeSpeed = 100, backSpeed = 50, backDelay = 2000) {
	const typed = select('.typed');
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
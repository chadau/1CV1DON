class Counter {
	#counter = 0;
	#dom_element;

	constructor(begin, id) {
		this.#counter = begin;
		this.#dom_element = document.getElementById(id);

		this.init();
	}

	init() {
		this.#dom_element.innerText = this.#counter;
		this.#dom_element.addEventListener("click", () => this.increase());
	}

	increase() {
		this.#counter++;
		this.#dom_element.innerText = this.#counter;
	}
}

let don_1 = new Counter(0, "don_1");
let don_2 = new Counter(0, "don_2");
let don_3 = new Counter(0, "don_3");
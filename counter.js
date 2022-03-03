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

	getValue() {
		return this.#counter;
	}
}

class PercentBar {
	#dom_element;

	constructor(id) {
		this.#dom_element = document.getElementById(id);
		this.eventHandler();
	}

	eventHandler() {
		document.addEventListener(
			'CounterEvent', 
			(event) => {
				const counter = event.detail;
				let don_1 = this.#dom_element.querySelector(".don_1");
				let don_2 = this.#dom_element.querySelector(".don_2");
				let don_3 = this.#dom_element.querySelector(".don_3");

				don_1.style.width = 100 * counter.don_1 / counter.total + '%';
				don_2.style.width = 100 * counter.don_2 / counter.total + '%';
				don_3.style.width = 100 * counter.don_3 / counter.total + '%';
			}
		)
	}
}

let don_1 = new Counter(0, "don_1");
let don_2 = new Counter(0, "don_2");
let don_3 = new Counter(0, "don_3");
let percent = new PercentBar("percent-bar");

document.getElementById("counter").addEventListener(
	"click",
	() => {
		let event = new CustomEvent(
			'CounterEvent', 
			{ 
				'detail': 
				{
					'don_1': don_1.getValue(),
					'don_2': don_2.getValue(),
					'don_3': don_3.getValue(),
					'total': don_1.getValue() + don_2.getValue() + don_3.getValue()
				}, 
				bubbles: true 
			}
		);
		document.dispatchEvent(event);
	}
);

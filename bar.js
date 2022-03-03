export class PercentBar {
	#dom_element;

	constructor(id) {
		this.#dom_element = document.getElementById(id);
		this.eventHandler();
	}

	eventHandler() {
		this.#dom_element.addEventListener(
			'CounterIncreaseEvent', 
			(event) => {
				let elm = this.#dom_element.querySelector<HTMLElement>(".don_1");

				elm.style.width = event.counter * 200 + "px";
			}
		)
	}
}
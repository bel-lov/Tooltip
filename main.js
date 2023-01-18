/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/tooltip.js
class Tooltip {
  constructor(container) {
    this.container = container;
  }
  addTooltip() {
    this.bindToDOM();
    this.button = this.container.querySelector(".btn");
    this.button.addEventListener("click", e => {
      e.preventDefault();
      this.showTooltip();
    });
  }
  static get markUp() {
    return `
	<div class="tooltip">
			<h3 class="tooltip-title">Popover title</h3>
			<p class="tooltip-text">And here's some amazing content.It's very engaging.Right?</p>
</div>
`;
  }
  get tooltip() {
    return this.container.querySelector(".tooltip");
  }
  bindToDOM() {
    this.container.insertAdjacentHTML("beforeend", this.constructor.markUp);
  }
  showTooltip() {
    this.tooltip.classList.toggle("active");
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const container = document.querySelector(".container");
const popover = new Tooltip(container);
popover.addTooltip();
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;
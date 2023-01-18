import Tooltip from "./tooltip";

const container = document.querySelector(".container");
const popover = new Tooltip(container);
popover.addTooltip();

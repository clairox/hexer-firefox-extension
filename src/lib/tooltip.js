const TOOLTIP_OFFSET = 70;

function Tooltip() {
    const tooltip = document.createElement("div");
    tooltip.id = "hexer_tooltip";
    tooltip.style.width = "100px";
    tooltip.style.height = "100px";
    tooltip.style.position = "fixed";
    tooltip.style.zIndex = "10000";
    tooltip.style.display = "hidden";
    document.body.appendChild(tooltip);

    this.tooltip = tooltip;
}

Tooltip.prototype.show = function (hex, x, y) {
    const left = x - this.tooltip.offsetWidth / 2 + TOOLTIP_OFFSET + "px";
    const top = y - this.tooltip.offsetHeight / 2 - TOOLTIP_OFFSET + "px";

    this.tooltip.style.backgroundColor = hex;
    this.tooltip.style.left = left;
    this.tooltip.style.top = top;
    this.tooltip.style.display = "block";
};

Tooltip.prototype.hide = function () {
    this.tooltip.style.backgroundColor = "unset";
    this.tooltip.style.left = "unset";
    this.tooltip.style.top = "unset";
    this.tooltip.style.display = "none";
};

export { Tooltip };

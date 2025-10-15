const showTooltip = false;

export const displayTooltip = (hex, x, y) => {
    tooltip.style.backgroundColor = hex;
    tooltip.style.left = x - tooltip.offsetWidth / 2 + TOOLTIP_OFFSET + "px";
    tooltip.style.top = y - tooltip.offsetHeight / 2 - TOOLTIP_OFFSET + "px";
    tooltip.style.display = "block";
    showTooltip = true;
};

export const hideTooltip = () => {
    tooltip.style.backgroundColor = "unset";
    tooltip.style.left = "unset";
    tooltip.style.top = "unset";
    tooltip.style.display = "none";
    showTooltip = false;
};

export const initializeTooltip = () => {
    const tooltip = document.createElement("div");
    tooltip.id = "hexer_tooltip";
    tooltip.style.width = "100px";
    tooltip.style.height = "100px";
    tooltip.style.position = "fixed";
    tooltip.style.zIndex = "10000";
    tooltip.style.display = "hidden";

    return tooltip;
};

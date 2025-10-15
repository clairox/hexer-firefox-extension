const HEX_MATCHER = /#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/;
const TOOLTIP_OFFSET = 70;
const TOOLTIP_DELAY = 500;

const tooltip = initializeTooltip();
const showTooltip = false;
let timeoutID = null;

document.body.appendChild(tooltip);

document.addEventListener("mousemove", function (event) {
    if (showTooltip && timeoutID) {
        clearTimeout(timeoutID);
        showTooltip = false;
        return;
    }
    timeoutID = setTimeout(() => handleMouseMove(event), TOOLTIP_DELAY);
});

function handleMouseMove(event) {
    const caretPosition = document.caretPositionFromPoint(
        event.clientX,
        event.clientY,
    );

    if (caretPosition == null) {
        return;
    }

    const node = caretPosition.offsetNode;
    if (node == null || node.nodeType !== Node.TEXT_NODE) return;

    const text = node.textContent;
    const offset = caretPosition.offset;

    const word = getWordAt(text, offset);
    if (word) {
        result = word.match(HEX_MATCHER);
        if (result && !showTooltip) {
            displayTooltip(result[0], event.clientX, event.clientY);
        }
    }
}

function getWordAt(text, position) {
    const left = text.slice(0, position).search(/\S+$/);
    const right = text.slice(position).search(/\s/);
    if (right < 0) {
        return text.slice(left);
    }
    return text.slice(left, position + right);
}

function displayTooltip(hex, x, y) {
    tooltip.style.backgroundColor = hex;
    tooltip.style.left = x - tooltip.offsetWidth / 2 + TOOLTIP_OFFSET + "px";
    tooltip.style.top = y - tooltip.offsetHeight / 2 - TOOLTIP_OFFSET + "px";
    tooltip.style.display = "block";
    showTooltip = true;
}

function hideTooltip() {
    tooltip.style.backgroundColor = "unset";
    tooltip.style.left = "unset";
    tooltip.style.top = "unset";
    tooltip.style.display = "none";
    showTooltip = false;
}

function initializeTooltip() {
    const tooltip = document.createElement("div");
    tooltip.id = "hexer_tooltip";
    tooltip.style.width = "100px";
    tooltip.style.height = "100px";
    tooltip.style.position = "fixed";
    tooltip.style.zIndex = "10000";
    tooltip.style.display = "hidden";

    return tooltip;
}

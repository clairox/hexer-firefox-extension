import { Tooltip } from "./lib/tooltip.js";
import { Point } from "./utils/point.js";
import { getWordUnderCursor } from "./utils/text.js";

export const HEX_MATCHER = /#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/;
export const TOOLTIP_DELAY = 500;

const tooltip = new Tooltip();

let timeoutID = null;
let predelayMousePos = null;

document.addEventListener("mousemove", function (event) {
    const currentMousePos = new Point(event.clientX, event.clientY);
    if (predelayMousePos == null) {
        predelayMousePos = currentMousePos;
    }

    if (!Point.isEqual(predelayMousePos, currentMousePos)) {
        clearTimeout(timeoutID);
        tooltip.hide();
        predelayMousePos = currentMousePos;
        return;
    }

    const hex = getHexUnderCursor(event);
    if (hex) {
        timeoutID = setTimeout(
            () => tooltip.show(hex, event.clientX, event.clientY),
            TOOLTIP_DELAY,
        );
    }
});

export function getHexUnderCursor(event) {
    const word = getWordUnderCursor(event);
    const result = word ? word.match(HEX_MATCHER) : null;
    if (!result) {
        return null;
    }

    return result[0];
}

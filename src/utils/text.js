function getWordUnderCursor(event) {
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
    return word;
}

function getWordAt(text, position) {
    const left = text.slice(0, position).search(/\S+$/);
    const right = text.slice(position).search(/\s/);
    if (right < 0) {
        return text.slice(left);
    }
    return text.slice(left, position + right);
}

export { getWordUnderCursor, getWordAt };

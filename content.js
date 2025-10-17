function injectScript(src) {
    const element = document.createElement("script");
    element.type = "module";
    element.src = chrome.runtime.getURL(src);
    (document.head || document.documentElement).appendChild(element);
}

injectScript("src/inject.js");

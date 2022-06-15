import ThemeColorScheme from "ts/colorScheme";
import { renderCopyButton } from "ts/copyButton";
import { renderFootnotes } from "ts/footnotes";

let enableFootnotes = false;
let paramValue = document.currentScript.dataset.enableFootnotes == "true"; // Hugo parameter value

function sideFootnotes() {
  let appropriateWindowSize = window.innerWidth >= 865 + 270 + 100; // Window width
  return (enableFootnotes = paramValue && appropriateWindowSize);
}

// FIXME 2022-06-15: Doesn't go to normal footnotes on window resize once side footnotes have been rendered initially. See renderFootnotes in footnotes.ts
function showFootnotes() {
  new ThemeColorScheme(document.getElementById("dark-mode-button"));
  enableFootnotes = sideFootnotes();

  if (enableFootnotes) {
    renderFootnotes();
  }
  renderCopyButton();
}

if (document.currentScript) {
  enableFootnotes = sideFootnotes();
}

window.addEventListener("load", () => {
  setTimeout(function () {
    showFootnotes();
  }, 0);
});

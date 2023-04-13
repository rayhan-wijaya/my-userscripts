// ==UserScript==
// @name         AutoTranspose
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically activate the "Transpose" extension when a YouTube video loads
// @author       You
// @match        https://www.youtube.com/watch?v=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

"use strict";

const registerKeyDown = (keyboardEventOptions: KeyboardEventInit) => {
  const keyboardEvent = new KeyboardEvent("keydown", keyboardEventOptions);
  document.body.dispatchEvent(keyboardEvent);
};

const onYoutubePageLoad = (handleYoutubePageLoad: () => void) => {
  document.body.addEventListener("transitionend", (event) => {
    if (!event.target) {
      return false;
    }

    const bodyElement = event.target as HTMLBodyElement;

    if (bodyElement.id !== "progress") {
      return false;
    }

    handleYoutubePageLoad();
  });
};

const transposeVideo = () => {
  registerKeyDown({
    key: "t",
    ctrlKey: true,
    shiftKey: true,
  });

  setTimeout(() => {
    registerKeyDown({
      key: "esc",
    });
  }, 0.5 * 1000);
};

const main = () => {
  transposeVideo();
  onYoutubePageLoad(transposeVideo);
};

main();

// ==UserScript==
// @name         Remove Youtube Header
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the youtube header in the front page
// @author       You
// @match        https://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

console.log("Ran 'Remove Youtube Header'")

const getHeader = () => {
  return document.getElementById("chips-wrapper");
}

let header = getHeader();
console.log("remove-youtube-header:", "Initial header = ", header);

(async () => {
  while (!header) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    header = getHeader();
    console.log("remove-youtube-header:", "Refreshed header = ", header);
  }

  console.log("remove-youtube-header:", "Final header = ", header);

  if (header) {
    console.log("remove-youtube-header:", "Header exists", header);

    const newWindow = window as Window & { header?: HTMLElement };
    newWindow.header = header;

    header.style.opacity = "0";
  }
})()

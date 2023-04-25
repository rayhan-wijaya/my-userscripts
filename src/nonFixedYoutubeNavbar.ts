// ==UserScript==
// @name         Non-Fixed Youtube Header
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the fixed position property from the youtube header
// @author       You
// @match        https://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let navbar = document.getElementById("masthead-container");

(async () => {
  while (!navbar) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    navbar = document.getElementById("masthead-container");
  }

  if (navbar) {
    navbar.style.position = "absolute";
  }
})()

// ==UserScript==
// @name         Disable GitHub Font
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Sets the font family in GitHub to "sans-serif", allowing for a custom font to be set
// @author       You
// @match        https://github.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

document.body.style.fontFamily = "sans-serif";

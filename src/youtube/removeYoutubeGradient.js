"use strict";

// ==UserScript==
// @name         Remove Youtube Search
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the youtube search input and button
// @author       You
// @match        https://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

const elementToRemove = "#center"

const waitForElement = window.waitForElement || ((selector) => {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
})

window.waitForElement = waitForElement

const removeSearch = async () => {
	const header = await waitForElement(elementToRemove);
	header.remove()
}

removeSearch()

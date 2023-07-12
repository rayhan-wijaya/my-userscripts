"use strict";
// ==UserScript==
// @name         Remove Youtube Logo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the Youtube Logo
// @author       You
// @match        https://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

const logoSelector = "#logo";

const waitForElement = window.waitForElement || ((selector) => {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(_ => {
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

window.waitForElement = waitForElement;

const removeLogoElement = async () => {
	const logo = await waitForElement(logoSelector);
    logo.remove();
}

removeLogoElement();

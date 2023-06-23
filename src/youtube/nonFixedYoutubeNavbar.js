"use strict";
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

const elementToSetPositionProperty = "#masthead-container"

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

const setNavbarPositionProperty = async (positionProperty) => {
	const navbar = await waitForElement(elementToSetPositionProperty);
	navbar.style.position = positionProperty;
}

setNavbarPositionProperty("absolute");

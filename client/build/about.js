/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/about_us.js":
/*!****************************!*\
  !*** ./src/js/about_us.js ***!
  \****************************/
/***/ (() => {

eval("const { About$Values } = window.AppData;\r\n\r\nconst tabsContainer = document.querySelector('#tabs_container'),\r\n      mainContentContainer = document.querySelector('#about_us-content');\r\n      tabsContainer.innerHTML = null; \r\n\r\nAbout$Values.forEach(obj => {\r\n    tabsContainer.innerHTML += obj.title;\r\n});\r\n\r\nconst tabs = document.querySelectorAll('.about_us-tab');\r\n\r\ntabs.forEach((tab, i) => {\r\n    tab.addEventListener('click', () => {\r\n        mainContentContainer.innerHTML = null;\r\n        fillContainer(About$Values[i]);\r\n        \r\n        tabs.forEach(item => item.classList.remove('active', 'shadow'))\r\n        tab.classList.add('active', 'shadow');\r\n    })\r\n})\r\n\r\n\r\nfunction fillContainer(OBJ) {\r\n  \r\n    $('.about_bg-img-container .main-title').text(OBJ.htmlTitle)\r\n    mainContentContainer.innerHTML += `\r\n        ${OBJ.text.map(item => `<div class=\"py-4\"><h4>${item.subtitle}</h4><div>${item.subtext}</div></div>`).join('')}\r\n        `;\r\n\r\n}\r\n\r\nfillContainer(About$Values[0])\r\n\r\n\n\n//# sourceURL=webpack://lawbridge/./src/js/about_us.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/about_us.js"]();
/******/ 	
/******/ })()
;
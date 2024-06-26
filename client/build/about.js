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

eval("const { About$Values } = window.AppData;\n\nconst tabsContainer = document.querySelector('#tabs_container'),\n      mainContentContainer = document.querySelector('#about_us-content');\n      tabsContainer.innerHTML = null; \n\nAbout$Values.forEach(obj => {\n    tabsContainer.innerHTML += obj.title;\n});\n\nconst tabs = document.querySelectorAll('.about_us-tab');\n\ntabs.forEach((tab, i) => {\n    tab.addEventListener('click', () => {\n        mainContentContainer.innerHTML = null;\n        fillContainer(About$Values[i]);\n        \n        tabs.forEach(item => item.classList.remove('active', 'shadow'))\n        tab.classList.add('active', 'shadow');\n    })\n})\n\n\nfunction fillContainer(OBJ) {\n  \n    $('.about_bg-img-container .main-title').text(OBJ.htmlTitle)\n    mainContentContainer.innerHTML += `\n        ${OBJ.text.map(item => `<div class=\"py-4\"><h4>${item.subtitle}</h4><div>${item.subtext}</div></div>`).join('')}\n        `;\n\n}\n\nfillContainer(About$Values[0])\n\n\n\n//# sourceURL=webpack://lawbridge/./src/js/about_us.js?");

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
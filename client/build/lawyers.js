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

/***/ "./src/js/lawyers.js":
/*!***************************!*\
  !*** ./src/js/lawyers.js ***!
  \***************************/
/***/ (() => {

eval("\r\n\r\nconst {Lawyers} = window.AppData;\r\n\r\nconst concord_body = document.querySelector('#concord-lawyer-card_container');\r\nconcord_body.innerHTML = null;\r\n\r\nLawyers.concord.forEach((lawyer, index) => {\r\n    const div = document.createElement('div');\r\n    div.classList.add('col-sm-6', 'col-lg-4', 'col-xl-3',  'mb-5', 'concord_employee');\r\n    div.setAttribute('data-id', index);\r\n    div.innerHTML = `\r\n    \r\n        <div class=\"lawyer-card_container\">\r\n            <div class=\"lawyer-card_content\">\r\n                <div class=\"mb-3 img-lawyer-card_container\">\r\n                    <img src=\"../../src/img/concord-lawyers/${lawyer.image}\" alt=\"lawyer\">\r\n                </div>\r\n                <div class=\"lawyer-info_container\">\r\n                    <div class=\"lawyer-name\">${lawyer.name + ' ' + lawyer.surname}</div>\r\n                    <div class=\"lawyer-city\">${lawyer.city}</div>\r\n                    \r\n                    <a class=\"lawyer-email\" href=\"mailto:${lawyer.email}\">\r\n                        ${lawyer.email}\r\n                    </a>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n    `;\r\n\r\n    concord_body.append(div);\r\n})\r\n\r\n\r\nconst likewood_body = document.querySelector('#likewood-lawyer-card_container');\r\nlikewood_body.innerHTML = null;\r\n\r\nlikewood_body.innerHTML = Lawyers.likewood.map((lawyer, index) => {\r\n    return `\r\n    \r\n        <div data-id=\"${index}\" class=\"col-sm-6 col-lg-4 mb-5 likewood_employee\">\r\n        <div class=\"lawyer-card_container\">\r\n        <div class=\"lawyer-card_content\">\r\n            <div class=\"mb-3 likewood-img-lawyer-card_container\">\r\n                <img src=\"../../src/img/likewood-lawyers/${lawyer.image}\" alt=\"\">\r\n            </div>\r\n            <div class=\"likewood-lawyer-info_container px-2\">\r\n                <div class=\"lawyer-name fw-bolder\">${lawyer.name}</div>\r\n                \r\n                    <ul>\r\n                        ${lawyer.competences.map(item => `<li>${item}</li>`).join('')}\r\n                    </ul>\r\n                \r\n                \r\n                <a class=\"lawyer-email\" href=\"mailto:${lawyer.email}\">\r\n                    ${lawyer.email}\r\n                </a>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n        </div>\r\n    `;\r\n       \r\n}).join(\"\");\r\n\n\n//# sourceURL=webpack://lawbridge/./src/js/lawyers.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/lawyers.js"]();
/******/ 	
/******/ })()
;
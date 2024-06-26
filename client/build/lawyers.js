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

eval("\n\nconst {Lawyers} = window.AppData;\n\nconst concord_body = document.querySelector('#concord-lawyer-card_container');\nconcord_body.innerHTML = null;\n\nLawyers.continental.forEach((lawyer, index) => {\n    const div = document.createElement('div');\n    div.classList.add('col-sm-6', 'col-lg-4', 'col-xl-3',  'mb-5', 'concord_employee');\n    div.setAttribute('data-id', index);\n    div.innerHTML = `\n    \n        <div class=\"lawyer-card_container\">\n            <div class=\"lawyer-card_content\">\n                <div class=\"mb-3 img-lawyer-card_container\">\n                    <img src=\"../../src/img/lawyers/${lawyer.image}\" alt=\"lawyer\">\n                </div>\n                <div class=\"lawyer-info_container\">\n                    <div class=\"lawyer-name\">${lawyer.name + ' ' + lawyer.surname}</div>\n                    <div class=\"lawyer-city\">${lawyer.city}</div>\n                    \n                    <a class=\"lawyer-email\" href=\"mailto:${lawyer.email}\">\n                        ${lawyer.email}\n                    </a>\n                    \n                </div>\n            </div>\n        </div>\n    \n    `;\n\n    concord_body.append(div);\n})\n\n\n// const likewood_body = document.querySelector('#likewood-lawyer-card_container');\n// likewood_body.innerHTML = null;\n\n// likewood_body.innerHTML = Lawyers.likewood.map((lawyer, index) => {\n//     return `\n    \n//         <div data-id=\"${index}\" class=\"col-sm-6 col-lg-4 mb-5 likewood_employee\">\n//         <div class=\"lawyer-card_container\">\n//         <div class=\"lawyer-card_content\">\n//             <div class=\"mb-3 likewood-img-lawyer-card_container\">\n//                 <img src=\"../../src/img/likewood-lawyers/${lawyer.image}\" alt=\"\">\n//             </div>\n//             <div class=\"likewood-lawyer-info_container px-2\">\n//                 <div class=\"lawyer-name fw-bolder\">${lawyer.name}</div>\n                \n//                     <ul>\n//                         ${lawyer.competences.map(item => `<li>${item}</li>`).join('')}\n//                     </ul>\n                \n                \n//                 <a class=\"lawyer-email\" href=\"mailto:${lawyer.email}\">\n//                     ${lawyer.email}\n//                 </a>\n                \n//             </div>\n//         </div>\n//     </div>\n\n//         </div>\n//     `;\n       \n// }).join(\"\");\n\n\n//# sourceURL=webpack://lawbridge/./src/js/lawyers.js?");

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
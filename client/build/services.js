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

/***/ "./src/js/services.js":
/*!****************************!*\
  !*** ./src/js/services.js ***!
  \****************************/
/***/ (() => {

eval("const {ServicesData} = window.AppData;\r\n\r\nconst data = ServicesData, // Получение заголовков и статей \r\n\r\n          titles = document.querySelector('.services-titles'), // Контейнер заголовков\r\n          content = document.querySelector('.services-content'); // Контейнер статей\r\n\r\n// Перебор данных и отрисовка заголовков \r\n\r\n    data.forEach((obj, index) => {\r\n        titles.innerHTML += `\r\n            <div data-id=\"${index}\" class=\"serive-title-item d-flex flex-column flex-lg-row align-items-center justify-content-between mx-1 mx-lg-0 mb-lg-3\">\r\n                <div class=\"serive-title-item-text text-center\">\r\n                    ${obj.title}\r\n                </div>\r\n                <div class=\"serive-title-item-arrow\">\r\n                    <i class=\"fa-solid fa-chevron-right\" ></i>\r\n                </div>\r\n            </div>\r\n        `;\r\n    })\r\n//Слушатель событий клика по заголовкам \r\n\r\n    titles.addEventListener(\"click\", (e) => { \r\n        const target = e.target.closest('.serive-title-item'); // Фильтрация и поиск подходящего\r\n        if(!target.classList.contains('active')) {\r\n            clearActive();\r\n            activeTab(target);\r\n            setTimeout(() => {\r\n                showArticle(Number(target.getAttribute('data-id')));\r\n            }, 450);\r\n            \r\n        }\r\n    })\r\n\r\n    function clearActive(){\r\n        const titleItems = document.querySelectorAll('.serive-title-item'),\r\n              serviceContentContainer = document.querySelector('.services-content-container');\r\n        titleItems.forEach(elem => {\r\n            const titleIcon = elem.querySelector('.serive-title-item-arrow');\r\n            titleIcon.classList.remove('active');\r\n            elem.classList.remove('active');\r\n            elem.classList.remove('shadow');\r\n        })\r\n        serviceContentContainer.classList.remove('element-to-fadeIn');\r\n        serviceContentContainer.classList.add('element-to-fade');\r\n\r\n        setTimeout(() => {\r\n            content.innerHTML = null;\r\n        }, 350);\r\n        \r\n    }\r\n\r\n    function activeTab(elem){\r\n        const titleIcon = elem.querySelector('.serive-title-item-arrow');\r\n        titleIcon.classList.add('active');\r\n        elem.classList.add('active');\r\n        elem.classList.add('shadow');\r\n        \r\n    }\r\n\r\n    function showArticle(id) {\r\n        content.innerHTML = `\r\n        <div class=\"p-3 services-content-container shadow rounded element-to-fadeIn\">\r\n            ${data[id].description.map((obj, i) => {\r\n                return `<div class=\"py-2\"><div style=\"font-weight: 700;\" class=\"py-1\">${obj.subtitle}</div><div style=\"font-size: 1rem\">${obj.subdescr}</div></div>`\r\n            }).join('')}\r\n        </div>\r\n        `;\r\n    }\r\n    showArticle(0);\r\n    activeTab(document.querySelector('.serive-title-item'));\r\n\n\n//# sourceURL=webpack://lawbridge/./src/js/services.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/services.js"]();
/******/ 	
/******/ })()
;
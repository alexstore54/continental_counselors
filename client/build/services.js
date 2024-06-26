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

eval("const {ServicesData} = window.AppData;\n\nconst data = ServicesData, // Получение заголовков и статей \n\n          titles = document.querySelector('.services-titles'), // Контейнер заголовков\n          content = document.querySelector('.services-content'); // Контейнер статей\n\n// Перебор данных и отрисовка заголовков \n\n    data.forEach((obj, index) => {\n        titles.innerHTML += `\n            <div data-id=\"${index}\" class=\"serive-title-item d-flex flex-column flex-lg-row align-items-center justify-content-between mx-1 mx-lg-0 mb-lg-3\">\n                <div class=\"serive-title-item-text text-center\">\n                    ${obj.title}\n                </div>\n                <div class=\"serive-title-item-arrow\">\n                    <i class=\"fa-solid fa-chevron-right\" ></i>\n                </div>\n            </div>\n        `;\n    })\n//Слушатель событий клика по заголовкам \n\n    titles.addEventListener(\"click\", (e) => { \n        const target = e.target.closest('.serive-title-item'); // Фильтрация и поиск подходящего\n        if(!target.classList.contains('active')) {\n            clearActive();\n            activeTab(target);\n            setTimeout(() => {\n                showArticle(Number(target.getAttribute('data-id')));\n            }, 450);\n            \n        }\n    })\n\n    function clearActive(){\n        const titleItems = document.querySelectorAll('.serive-title-item'),\n              serviceContentContainer = document.querySelector('.services-content-container');\n        titleItems.forEach(elem => {\n            const titleIcon = elem.querySelector('.serive-title-item-arrow');\n            titleIcon.classList.remove('active');\n            elem.classList.remove('active');\n            elem.classList.remove('shadow');\n        })\n        serviceContentContainer.classList.remove('element-to-fadeIn');\n        serviceContentContainer.classList.add('element-to-fade');\n\n        setTimeout(() => {\n            content.innerHTML = null;\n        }, 350);\n        \n    }\n\n    function activeTab(elem){\n        const titleIcon = elem.querySelector('.serive-title-item-arrow');\n        titleIcon.classList.add('active');\n        elem.classList.add('active');\n        elem.classList.add('shadow');\n        \n    }\n\n    function showArticle(id) {\n        content.innerHTML = `\n        <div class=\"p-3 services-content-container shadow rounded element-to-fadeIn\">\n            ${data[id].description.map((obj, i) => {\n                return `<div class=\"py-2\"><div style=\"font-weight: 700;\" class=\"py-1\">${obj.subtitle}</div><div style=\"font-size: 1rem\">${obj.subdescr}</div></div>`\n            }).join('')}\n        </div>\n        `;\n    }\n    showArticle(0);\n    activeTab(document.querySelector('.serive-title-item'));\n\n\n//# sourceURL=webpack://lawbridge/./src/js/services.js?");

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
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contactContent = () => {
    const contactCard = document.createElement('div');
    contactCard.textContent = 'contact content';
    return contactCard;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactContent);


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const homeContent = () => {
    const homeContent = document.createElement('div');
    const homeMessage = document.createElement('h3');
    homeMessage.textContent =
        'To the citizens of Windhelm, Candlehearth Hall is a place of warmth, comfort, and security, where all the troubles of the outside world are drowned away by cold mead. ';
    homeContent.appendChild(homeMessage);
    return homeContent;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeContent);


/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createMenuCard = function (name, imageSrc) {
    const menuCard = document.createElement('div');
    const itemName = document.createElement('h2');
    itemName.textContent = name;
    menuCard.setAttribute('id', 'menu-card');
    menuCard.appendChild(itemName);
    menuCard.appendChild(getImage(imageSrc));

    return menuCard;
};

const getImage = function (imageSrc) {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.height = 200;
    img.width = 200;

    return img;
};

const menuContent = function () {
    const menuList = document.createElement('div');
    menuList.setAttribute('id', 'menu-list');

    menuList.appendChild(createMenuCard('Sweet Roll', './images/sweetroll.png'));
    menuList.appendChild(createMenuCard('Skooma', './images/skooma.png'));
    menuList.appendChild(createMenuCard('Ale', './images/ale.png'));
    menuList.appendChild(createMenuCard('Potato', './images/potato.png'));

    return menuList;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContent);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");




const createHeader = (() => {
    const createTabs = function (tabName) {
        const li = document.createElement('li');
        li.textContent = tabName;
        li.setAttribute('id', 'tabs');
        li.setAttribute('data-content', tabName);
        return li;
    };

    const onClickTabs = function (callback) {
        const tabs = document.querySelectorAll('.tabs');
        tabs.forEach((tab) => {
            tab.addEventListener('click', callback);
        });
    };

    const changeTab = function (e) {
        const content = document.querySelector('#content');
        content.innerHTML = '';
        console.log(e.target.dataset.content);
        switch (e.target.dataset.content) {
            case 'HOME':
                content.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.default)());
                break;
            case 'MENU':
                content.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.default)());
                break;
            case 'CONTACT':
                content.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_0__.default)());
        }
    };

    const header = document.createElement('header');
    const restaurantNameHeading = document.createElement('h1');
    restaurantNameHeading.textContent = 'Candlehearth Hall';

    header.appendChild(restaurantNameHeading);

    const nav = document.createElement('nav');

    const ul = document.createElement('ul');
    ul.setAttribute('class', 'tabs');

    ul.appendChild(createTabs('HOME'));
    ul.appendChild(createTabs('MENU'));
    ul.appendChild(createTabs('CONTACT'));

    nav.appendChild(ul);

    header.appendChild(nav);

    document.body.insertBefore(header, document.querySelector('#content'));
    document.querySelector('#content').appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.default)());
    onClickTabs(changeTab);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTjlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNUM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7VUMvQjNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOK0M7QUFDTjtBQUNBOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxzREFBVztBQUMvQztBQUNBO0FBQ0Esb0NBQW9DLHNEQUFXO0FBQy9DO0FBQ0E7QUFDQSxvQ0FBb0MseURBQWM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxtREFBbUQsc0RBQVc7QUFDOUQ7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWN0Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RDYXJkLnRleHRDb250ZW50ID0gJ2NvbnRhY3QgY29udGVudCc7XG4gICAgcmV0dXJuIGNvbnRhY3RDYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdENvbnRlbnQ7XG4iLCJjb25zdCBob21lQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvbWVNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBob21lTWVzc2FnZS50ZXh0Q29udGVudCA9XG4gICAgICAgICdUbyB0aGUgY2l0aXplbnMgb2YgV2luZGhlbG0sIENhbmRsZWhlYXJ0aCBIYWxsIGlzIGEgcGxhY2Ugb2Ygd2FybXRoLCBjb21mb3J0LCBhbmQgc2VjdXJpdHksIHdoZXJlIGFsbCB0aGUgdHJvdWJsZXMgb2YgdGhlIG91dHNpZGUgd29ybGQgYXJlIGRyb3duZWQgYXdheSBieSBjb2xkIG1lYWQuICc7XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZU1lc3NhZ2UpO1xuICAgIHJldHVybiBob21lQ29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVDb250ZW50O1xuIiwiY29uc3QgY3JlYXRlTWVudUNhcmQgPSBmdW5jdGlvbiAobmFtZSwgaW1hZ2VTcmMpIHtcbiAgICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgbWVudUNhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWNhcmQnKTtcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoZ2V0SW1hZ2UoaW1hZ2VTcmMpKTtcblxuICAgIHJldHVybiBtZW51Q2FyZDtcbn07XG5cbmNvbnN0IGdldEltYWdlID0gZnVuY3Rpb24gKGltYWdlU3JjKSB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9IGltYWdlU3JjO1xuICAgIGltZy5oZWlnaHQgPSAyMDA7XG4gICAgaW1nLndpZHRoID0gMjAwO1xuXG4gICAgcmV0dXJuIGltZztcbn07XG5cbmNvbnN0IG1lbnVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWxpc3QnKTtcblxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDYXJkKCdTd2VldCBSb2xsJywgJy4vaW1hZ2VzL3N3ZWV0cm9sbC5wbmcnKSk7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNhcmQoJ1Nrb29tYScsICcuL2ltYWdlcy9za29vbWEucG5nJykpO1xuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDYXJkKCdBbGUnLCAnLi9pbWFnZXMvYWxlLnBuZycpKTtcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChjcmVhdGVNZW51Q2FyZCgnUG90YXRvJywgJy4vaW1hZ2VzL3BvdGF0by5wbmcnKSk7XG5cbiAgICByZXR1cm4gbWVudUxpc3Q7XG59O1xuZXhwb3J0IGRlZmF1bHQgbWVudUNvbnRlbnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjb250YWN0Q29udGVudCBmcm9tICcuL21vZHVsZXMvY29udGFjdCc7XG5pbXBvcnQgaG9tZUNvbnRlbnQgZnJvbSAnLi9tb2R1bGVzL2hvbWUnO1xuaW1wb3J0IG1lbnVDb250ZW50IGZyb20gJy4vbW9kdWxlcy9tZW51JztcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVUYWJzID0gZnVuY3Rpb24gKHRhYk5hbWUpIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IHRhYk5hbWU7XG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFicycpO1xuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcsIHRhYk5hbWUpO1xuICAgICAgICByZXR1cm4gbGk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2xpY2tUYWJzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpO1xuICAgICAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hhbmdlVGFiID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQuY29udGVudCk7XG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQuZGF0YXNldC5jb250ZW50KSB7XG4gICAgICAgICAgICBjYXNlICdIT01FJzpcbiAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVDb250ZW50KCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTUVOVSc6XG4gICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGVudCgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0NPTlRBQ1QnOlxuICAgICAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICByZXN0YXVyYW50TmFtZUhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ2FuZGxlaGVhcnRoIEhhbGwnO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lSGVhZGluZyk7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RhYnMnKTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGNyZWF0ZVRhYnMoJ0hPTUUnKSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoY3JlYXRlVGFicygnTUVOVScpKTtcbiAgICB1bC5hcHBlbmRDaGlsZChjcmVhdGVUYWJzKCdDT05UQUNUJykpO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoaGVhZGVyLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGhvbWVDb250ZW50KCkpO1xuICAgIG9uQ2xpY2tUYWJzKGNoYW5nZVRhYik7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
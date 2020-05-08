(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/app.scss */ "./assets/sass/app.scss");
/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var css_gg_icons_all_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css.gg/icons/all.scss */ "./node_modules/css.gg/icons/all.scss");
/* harmony import */ var css_gg_icons_all_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(css_gg_icons_all_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll */ "./assets/js/scroll.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./assets/js/menu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)

 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';



console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ }),

/***/ "./assets/js/menu.js":
/*!***************************!*\
  !*** ./assets/js/menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  getActive();
})();

function getActive() {
  var fullpath = window.location.host + window.location.pathname;
  var links = document.getElementsByClassName("navbar-item").getAttribute("href");

  for (var i = 0; i < links.length; i++) {
    console.log(links);
  }
  /*
  if (fullpath == ) {
    }
  */

}
/*
const links = document.querySelectorAll('.scroll');
links.forEach(each => (each.onclick = scrollAnchors));
*/

/***/ }),

/***/ "./assets/js/scroll.js":
/*!*****************************!*\
  !*** ./assets/js/scroll.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

// Vanilla JavaScript Scroll to Anchor
// @ https://perishablepress.com/vanilla-javascript-scroll-anchor/
(function () {
  scrollTo();
})();

function scrollTo() {
  var links = document.querySelectorAll('.scroll');
  links.forEach(function (each) {
    return each.onclick = scrollAnchors;
  });
}

function scrollAnchors(e) {
  var respond = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var distanceToTop = function distanceToTop(el) {
    return Math.floor(el.getBoundingClientRect().top);
  };

  e.preventDefault();
  var targetID = respond ? respond.getAttribute('href') : this.getAttribute('href');
  var targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  var originalTop = distanceToTop(targetAnchor);
  window.scrollBy({
    top: originalTop,
    left: 0,
    behavior: 'smooth'
  });
  var checkIfDone = setInterval(function () {
    var atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;

    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1';
      targetAnchor.focus();
      window.history.pushState('', '', targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

/***/ }),

/***/ "./assets/sass/app.scss":
/*!******************************!*\
  !*** ./assets/sass/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nhc3MvYXBwLnNjc3MiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImdldEFjdGl2ZSIsImZ1bGxwYXRoIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0IiwicGF0aG5hbWUiLCJsaW5rcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImdldEF0dHJpYnV0ZSIsImkiLCJsZW5ndGgiLCJzY3JvbGxUbyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWFjaCIsIm9uY2xpY2siLCJzY3JvbGxBbmNob3JzIiwiZSIsInJlc3BvbmQiLCJkaXN0YW5jZVRvVG9wIiwiZWwiLCJNYXRoIiwiZmxvb3IiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldElEIiwidGFyZ2V0QW5jaG9yIiwicXVlcnlTZWxlY3RvciIsIm9yaWdpbmFsVG9wIiwic2Nyb2xsQnkiLCJsZWZ0IiwiYmVoYXZpb3IiLCJjaGVja0lmRG9uZSIsInNldEludGVydmFsIiwiYXRCb3R0b20iLCJpbm5lckhlaWdodCIsInBhZ2VZT2Zmc2V0IiwiYm9keSIsIm9mZnNldEhlaWdodCIsInRhYkluZGV4IiwiZm9jdXMiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiY2xlYXJJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTtBQUNBO0NBSUE7QUFDQTs7QUFDQTtBQUNBO0FBRUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1EQUFaLEU7Ozs7Ozs7Ozs7O0FDaEJBLENBQUMsWUFBVztBQUNSQyxXQUFTO0FBQ1osQ0FGRDs7QUFJQSxTQUFTQSxTQUFULEdBQXFCO0FBQ2pCLE1BQUlDLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QkYsTUFBTSxDQUFDQyxRQUFQLENBQWdCRSxRQUF0RDtBQUVBLE1BQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxhQUFoQyxFQUErQ0MsWUFBL0MsQ0FBNEQsTUFBNUQsQ0FBWjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUNKLEtBQUssQ0FBQ0ssTUFBeEIsRUFBZ0NELENBQUMsRUFBakMsRUFDQTtBQUNJWixXQUFPLENBQUNDLEdBQVIsQ0FBWU8sS0FBWjtBQUNIO0FBR0Q7Ozs7O0FBS0g7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUVBLENBQUMsWUFBVztBQUNSTSxVQUFRO0FBQ1gsQ0FGRDs7QUFJQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2hCLE1BQU1OLEtBQUssR0FBR0MsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQixTQUExQixDQUFkO0FBQ0FQLE9BQUssQ0FBQ1EsT0FBTixDQUFjLFVBQUFDLElBQUk7QUFBQSxXQUFLQSxJQUFJLENBQUNDLE9BQUwsR0FBZUMsYUFBcEI7QUFBQSxHQUFsQjtBQUNIOztBQUVELFNBQVNBLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBDO0FBQUEsTUFBaEJDLE9BQWdCLHVFQUFOLElBQU07O0FBQ3RDLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsRUFBRTtBQUFBLFdBQUlDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixFQUFFLENBQUNHLHFCQUFILEdBQTJCQyxHQUF0QyxDQUFKO0FBQUEsR0FBeEI7O0FBQ0FQLEdBQUMsQ0FBQ1EsY0FBRjtBQUNBLE1BQUlDLFFBQVEsR0FBSVIsT0FBRCxHQUFZQSxPQUFPLENBQUNWLFlBQVIsQ0FBcUIsTUFBckIsQ0FBWixHQUEyQyxLQUFLQSxZQUFMLENBQWtCLE1BQWxCLENBQTFEO0FBQ0EsTUFBTW1CLFlBQVksR0FBR3JCLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUJGLFFBQXZCLENBQXJCO0FBQ0EsTUFBSSxDQUFDQyxZQUFMLEVBQW1CO0FBQ25CLE1BQU1FLFdBQVcsR0FBR1YsYUFBYSxDQUFDUSxZQUFELENBQWpDO0FBQ0ExQixRQUFNLENBQUM2QixRQUFQLENBQWdCO0FBQUVOLE9BQUcsRUFBRUssV0FBUDtBQUFvQkUsUUFBSSxFQUFFLENBQTFCO0FBQTZCQyxZQUFRLEVBQUU7QUFBdkMsR0FBaEI7QUFDQSxNQUFNQyxXQUFXLEdBQUdDLFdBQVcsQ0FBQyxZQUFXO0FBQ3ZDLFFBQU1DLFFBQVEsR0FBR2xDLE1BQU0sQ0FBQ21DLFdBQVAsR0FBcUJuQyxNQUFNLENBQUNvQyxXQUE1QixJQUEyQy9CLFFBQVEsQ0FBQ2dDLElBQVQsQ0FBY0MsWUFBZCxHQUE2QixDQUF6Rjs7QUFDQSxRQUFJcEIsYUFBYSxDQUFDUSxZQUFELENBQWIsS0FBZ0MsQ0FBaEMsSUFBcUNRLFFBQXpDLEVBQW1EO0FBQy9DUixrQkFBWSxDQUFDYSxRQUFiLEdBQXdCLElBQXhCO0FBQ0FiLGtCQUFZLENBQUNjLEtBQWI7QUFDQXhDLFlBQU0sQ0FBQ3lDLE9BQVAsQ0FBZUMsU0FBZixDQUF5QixFQUF6QixFQUE2QixFQUE3QixFQUFpQ2pCLFFBQWpDO0FBQ0FrQixtQkFBYSxDQUFDWCxXQUFELENBQWI7QUFDSDtBQUNKLEdBUjhCLEVBUTVCLEdBUjRCLENBQS9CO0FBU0gsQzs7Ozs7Ozs7Ozs7QUM3QkQsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi4vc2Fzcy9hcHAuc2Nzcyc7XG5pbXBvcnQgJ2Nzcy5nZy9pY29ucy9hbGwuc2Nzcyc7XG5cblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byBpbXBvcnQgaXQuXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICcuL3Njcm9sbCc7XG5pbXBvcnQgJy4vbWVudSc7XG5cbmNvbnNvbGUubG9nKCdIZWxsbyBXZWJwYWNrIEVuY29yZSEgRWRpdCBtZSBpbiBhc3NldHMvanMvYXBwLmpzJyk7XG4iLCJcclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgZ2V0QWN0aXZlKCk7XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBnZXRBY3RpdmUoKSB7XHJcbiAgICBsZXQgZnVsbHBhdGggPSB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHJcbiAgICBsZXQgbGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2YmFyLWl0ZW1cIikuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpPGxpbmtzLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxpbmtzKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgaWYgKGZ1bGxwYXRoID09ICkge1xyXG5cclxuICAgIH1cclxuICAgICovXHJcbn1cclxuLypcclxuY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Nyb2xsJyk7XHJcbmxpbmtzLmZvckVhY2goZWFjaCA9PiAoZWFjaC5vbmNsaWNrID0gc2Nyb2xsQW5jaG9ycykpO1xyXG4qL1xyXG4iLCIvLyBWYW5pbGxhIEphdmFTY3JpcHQgU2Nyb2xsIHRvIEFuY2hvclxyXG4vLyBAIGh0dHBzOi8vcGVyaXNoYWJsZXByZXNzLmNvbS92YW5pbGxhLWphdmFzY3JpcHQtc2Nyb2xsLWFuY2hvci9cclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAgIHNjcm9sbFRvKCk7XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxUbygpIHtcclxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjcm9sbCcpO1xyXG4gICAgbGlua3MuZm9yRWFjaChlYWNoID0+IChlYWNoLm9uY2xpY2sgPSBzY3JvbGxBbmNob3JzKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjcm9sbEFuY2hvcnMoZSwgcmVzcG9uZCA9IG51bGwpIHtcclxuICAgIGNvbnN0IGRpc3RhbmNlVG9Ub3AgPSBlbCA9PiBNYXRoLmZsb29yKGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgdGFyZ2V0SUQgPSAocmVzcG9uZCkgPyByZXNwb25kLmdldEF0dHJpYnV0ZSgnaHJlZicpIDogdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgIGNvbnN0IHRhcmdldEFuY2hvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0SUQpO1xyXG4gICAgaWYgKCF0YXJnZXRBbmNob3IpIHJldHVybjtcclxuICAgIGNvbnN0IG9yaWdpbmFsVG9wID0gZGlzdGFuY2VUb1RvcCh0YXJnZXRBbmNob3IpO1xyXG4gICAgd2luZG93LnNjcm9sbEJ5KHsgdG9wOiBvcmlnaW5hbFRvcCwgbGVmdDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgY29uc3QgY2hlY2tJZkRvbmUgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBhdEJvdHRvbSA9IHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldCA+PSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCAtIDI7XHJcbiAgICAgICAgaWYgKGRpc3RhbmNlVG9Ub3AodGFyZ2V0QW5jaG9yKSA9PT0gMCB8fCBhdEJvdHRvbSkge1xyXG4gICAgICAgICAgICB0YXJnZXRBbmNob3IudGFiSW5kZXggPSAnLTEnO1xyXG4gICAgICAgICAgICB0YXJnZXRBbmNob3IuZm9jdXMoKTtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgdGFyZ2V0SUQpO1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGNoZWNrSWZEb25lKTtcclxuICAgICAgICB9XHJcbiAgICB9LCAxMDApO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
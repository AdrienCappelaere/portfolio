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
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification */ "./assets/js/notification.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_notification__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)

 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';


 // import './menu';
// import 'clipboard/dist/clipboard.min';

(function (h, o, t, j, a, r) {
  h.hj = h.hj || function () {
    (h.hj.q = h.hj.q || []).push(arguments);
  };

  h._hjSettings = {
    hjid: 1819780,
    hjsv: 6
  };
  a = o.getElementsByTagName('head')[0];
  r = o.createElement('script');
  r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

var btn = document.getElementsByClassName('copy');
console.log(btn);
var clipboard = new ClipboardJS(btn);
clipboard.on('success', function (e) {
  console.log(e);
});
clipboard.on('error', function (e) {
  console.log(e);
});
console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ }),

/***/ "./assets/js/notification.js":
/*!***********************************!*\
  !*** ./assets/js/notification.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function notificationDesktop() {
  var box = document.getElementById("notificationDesktop");
  box.classList.remove("is-hidden");
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyJoIiwibyIsInQiLCJqIiwiYSIsInIiLCJoaiIsInEiLCJwdXNoIiwiYXJndW1lbnRzIiwiX2hqU2V0dGluZ3MiLCJoamlkIiwiaGpzdiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRWxlbWVudCIsImFzeW5jIiwic3JjIiwiYXBwZW5kQ2hpbGQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImJ0biIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb25zb2xlIiwibG9nIiwiY2xpcGJvYXJkIiwiQ2xpcGJvYXJkSlMiLCJvbiIsImUiLCJub3RpZmljYXRpb25EZXNrdG9wIiwiYm94IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzY3JvbGxUbyIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlYWNoIiwib25jbGljayIsInNjcm9sbEFuY2hvcnMiLCJyZXNwb25kIiwiZGlzdGFuY2VUb1RvcCIsImVsIiwiTWF0aCIsImZsb29yIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXRJRCIsImdldEF0dHJpYnV0ZSIsInRhcmdldEFuY2hvciIsInF1ZXJ5U2VsZWN0b3IiLCJvcmlnaW5hbFRvcCIsInNjcm9sbEJ5IiwibGVmdCIsImJlaGF2aW9yIiwiY2hlY2tJZkRvbmUiLCJzZXRJbnRlcnZhbCIsImF0Qm90dG9tIiwiaW5uZXJIZWlnaHQiLCJwYWdlWU9mZnNldCIsImJvZHkiLCJvZmZzZXRIZWlnaHQiLCJ0YWJJbmRleCIsImZvY3VzIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFDQTtDQUlBO0FBQ0E7O0FBQ0E7Q0FFQTtBQUNBOztBQUVBLENBQUMsVUFBU0EsQ0FBVCxFQUFXQyxDQUFYLEVBQWFDLENBQWIsRUFBZUMsQ0FBZixFQUFpQkMsQ0FBakIsRUFBbUJDLENBQW5CLEVBQXFCO0FBQ2xCTCxHQUFDLENBQUNNLEVBQUYsR0FBS04sQ0FBQyxDQUFDTSxFQUFGLElBQU0sWUFBVTtBQUFDLEtBQUNOLENBQUMsQ0FBQ00sRUFBRixDQUFLQyxDQUFMLEdBQU9QLENBQUMsQ0FBQ00sRUFBRixDQUFLQyxDQUFMLElBQVEsRUFBaEIsRUFBb0JDLElBQXBCLENBQXlCQyxTQUF6QjtBQUFvQyxHQUExRDs7QUFDQVQsR0FBQyxDQUFDVSxXQUFGLEdBQWM7QUFBQ0MsUUFBSSxFQUFDLE9BQU47QUFBY0MsUUFBSSxFQUFDO0FBQW5CLEdBQWQ7QUFDQVIsR0FBQyxHQUFDSCxDQUFDLENBQUNZLG9CQUFGLENBQXVCLE1BQXZCLEVBQStCLENBQS9CLENBQUY7QUFDQVIsR0FBQyxHQUFDSixDQUFDLENBQUNhLGFBQUYsQ0FBZ0IsUUFBaEIsQ0FBRjtBQUE0QlQsR0FBQyxDQUFDVSxLQUFGLEdBQVEsQ0FBUjtBQUM1QlYsR0FBQyxDQUFDVyxHQUFGLEdBQU1kLENBQUMsR0FBQ0YsQ0FBQyxDQUFDVSxXQUFGLENBQWNDLElBQWhCLEdBQXFCUixDQUFyQixHQUF1QkgsQ0FBQyxDQUFDVSxXQUFGLENBQWNFLElBQTNDO0FBQ0FSLEdBQUMsQ0FBQ2EsV0FBRixDQUFjWixDQUFkO0FBQ0gsQ0FQRCxFQU9HYSxNQVBILEVBT1VDLFFBUFYsRUFPbUIscUNBUG5CLEVBT3lELFNBUHpEOztBQVNBLElBQUlDLEdBQUcsR0FBR0QsUUFBUSxDQUFDRSxzQkFBVCxDQUFnQyxNQUFoQyxDQUFWO0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0EsSUFBSUksU0FBUyxHQUFHLElBQUlDLFdBQUosQ0FBZ0JMLEdBQWhCLENBQWhCO0FBRUFJLFNBQVMsQ0FBQ0UsRUFBVixDQUFhLFNBQWIsRUFBd0IsVUFBU0MsQ0FBVCxFQUFZO0FBQ2hDTCxTQUFPLENBQUNDLEdBQVIsQ0FBWUksQ0FBWjtBQUNILENBRkQ7QUFJQUgsU0FBUyxDQUFDRSxFQUFWLENBQWEsT0FBYixFQUFzQixVQUFTQyxDQUFULEVBQVk7QUFDOUJMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSSxDQUFaO0FBQ0gsQ0FGRDtBQUtBTCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtREFBWixFOzs7Ozs7Ozs7OztBQ3RDQSxTQUFTSyxtQkFBVCxHQUErQjtBQUMzQixNQUFJQyxHQUFHLEdBQUdWLFFBQVEsQ0FBQ1csY0FBVCxDQUF3QixxQkFBeEIsQ0FBVjtBQUNBRCxLQUFHLENBQUNFLFNBQUosQ0FBY0MsTUFBZCxDQUFxQixXQUFyQjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7QUFDQTtBQUVBLENBQUMsWUFBVztBQUNSQyxVQUFRO0FBQ1gsQ0FGRDs7QUFJQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2hCLE1BQU1DLEtBQUssR0FBR2YsUUFBUSxDQUFDZ0IsZ0JBQVQsQ0FBMEIsU0FBMUIsQ0FBZDtBQUNBRCxPQUFLLENBQUNFLE9BQU4sQ0FBYyxVQUFBQyxJQUFJO0FBQUEsV0FBS0EsSUFBSSxDQUFDQyxPQUFMLEdBQWVDLGFBQXBCO0FBQUEsR0FBbEI7QUFDSDs7QUFFRCxTQUFTQSxhQUFULENBQXVCWixDQUF2QixFQUEwQztBQUFBLE1BQWhCYSxPQUFnQix1RUFBTixJQUFNOztBQUN0QyxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLEVBQUU7QUFBQSxXQUFJQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsRUFBRSxDQUFDRyxxQkFBSCxHQUEyQkMsR0FBdEMsQ0FBSjtBQUFBLEdBQXhCOztBQUNBbkIsR0FBQyxDQUFDb0IsY0FBRjtBQUNBLE1BQUlDLFFBQVEsR0FBSVIsT0FBRCxHQUFZQSxPQUFPLENBQUNTLFlBQVIsQ0FBcUIsTUFBckIsQ0FBWixHQUEyQyxLQUFLQSxZQUFMLENBQWtCLE1BQWxCLENBQTFEO0FBQ0EsTUFBTUMsWUFBWSxHQUFHL0IsUUFBUSxDQUFDZ0MsYUFBVCxDQUF1QkgsUUFBdkIsQ0FBckI7QUFDQSxNQUFJLENBQUNFLFlBQUwsRUFBbUI7QUFDbkIsTUFBTUUsV0FBVyxHQUFHWCxhQUFhLENBQUNTLFlBQUQsQ0FBakM7QUFDQWhDLFFBQU0sQ0FBQ21DLFFBQVAsQ0FBZ0I7QUFBRVAsT0FBRyxFQUFFTSxXQUFQO0FBQW9CRSxRQUFJLEVBQUUsQ0FBMUI7QUFBNkJDLFlBQVEsRUFBRTtBQUF2QyxHQUFoQjtBQUNBLE1BQU1DLFdBQVcsR0FBR0MsV0FBVyxDQUFDLFlBQVc7QUFDdkMsUUFBTUMsUUFBUSxHQUFHeEMsTUFBTSxDQUFDeUMsV0FBUCxHQUFxQnpDLE1BQU0sQ0FBQzBDLFdBQTVCLElBQTJDekMsUUFBUSxDQUFDMEMsSUFBVCxDQUFjQyxZQUFkLEdBQTZCLENBQXpGOztBQUNBLFFBQUlyQixhQUFhLENBQUNTLFlBQUQsQ0FBYixLQUFnQyxDQUFoQyxJQUFxQ1EsUUFBekMsRUFBbUQ7QUFDL0NSLGtCQUFZLENBQUNhLFFBQWIsR0FBd0IsSUFBeEI7QUFDQWIsa0JBQVksQ0FBQ2MsS0FBYjtBQUNBOUMsWUFBTSxDQUFDK0MsT0FBUCxDQUFlQyxTQUFmLENBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDbEIsUUFBakM7QUFDQW1CLG1CQUFhLENBQUNYLFdBQUQsQ0FBYjtBQUNIO0FBQ0osR0FSOEIsRUFRNUIsR0FSNEIsQ0FBL0I7QUFTSCxDOzs7Ozs7Ozs7OztBQzdCRCx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi4vc2Fzcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnY3NzLmdnL2ljb25zL2FsbC5zY3NzJztcclxuXHJcblxyXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0ICcuL3Njcm9sbCc7XHJcbmltcG9ydCAnLi9ub3RpZmljYXRpb24nO1xyXG4vLyBpbXBvcnQgJy4vbWVudSc7XHJcbi8vIGltcG9ydCAnY2xpcGJvYXJkL2Rpc3QvY2xpcGJvYXJkLm1pbic7XHJcblxyXG4oZnVuY3Rpb24oaCxvLHQsaixhLHIpe1xyXG4gICAgaC5oaj1oLmhqfHxmdW5jdGlvbigpeyhoLmhqLnE9aC5oai5xfHxbXSkucHVzaChhcmd1bWVudHMpfTtcclxuICAgIGguX2hqU2V0dGluZ3M9e2hqaWQ6MTgxOTc4MCxoanN2OjZ9O1xyXG4gICAgYT1vLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XHJcbiAgICByPW8uY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7ci5hc3luYz0xO1xyXG4gICAgci5zcmM9dCtoLl9oalNldHRpbmdzLmhqaWQraitoLl9oalNldHRpbmdzLmhqc3Y7XHJcbiAgICBhLmFwcGVuZENoaWxkKHIpO1xyXG59KSh3aW5kb3csZG9jdW1lbnQsJ2h0dHBzOi8vc3RhdGljLmhvdGphci5jb20vYy9ob3RqYXItJywnLmpzP3N2PScpO1xyXG5cclxudmFyIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvcHknKTtcclxuY29uc29sZS5sb2coYnRuKTtcclxudmFyIGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmRKUyhidG4pO1xyXG5cclxuY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbn0pO1xyXG5cclxuY2xpcGJvYXJkLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG59KTtcclxuXHJcblxyXG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gYXNzZXRzL2pzL2FwcC5qcycpO1xyXG4iLCJcclxuXHJcblxyXG5mdW5jdGlvbiBub3RpZmljYXRpb25EZXNrdG9wKCkge1xyXG4gICAgbGV0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90aWZpY2F0aW9uRGVza3RvcFwiKTtcclxuICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGlkZGVuXCIpO1xyXG59IiwiLy8gVmFuaWxsYSBKYXZhU2NyaXB0IFNjcm9sbCB0byBBbmNob3JcclxuLy8gQCBodHRwczovL3BlcmlzaGFibGVwcmVzcy5jb20vdmFuaWxsYS1qYXZhc2NyaXB0LXNjcm9sbC1hbmNob3IvXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICBzY3JvbGxUbygpO1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gc2Nyb2xsVG8oKSB7XHJcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY3JvbGwnKTtcclxuICAgIGxpbmtzLmZvckVhY2goZWFjaCA9PiAoZWFjaC5vbmNsaWNrID0gc2Nyb2xsQW5jaG9ycykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxBbmNob3JzKGUsIHJlc3BvbmQgPSBudWxsKSB7XHJcbiAgICBjb25zdCBkaXN0YW5jZVRvVG9wID0gZWwgPT4gTWF0aC5mbG9vcihlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIHRhcmdldElEID0gKHJlc3BvbmQpID8gcmVzcG9uZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA6IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICBjb25zdCB0YXJnZXRBbmNob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldElEKTtcclxuICAgIGlmICghdGFyZ2V0QW5jaG9yKSByZXR1cm47XHJcbiAgICBjb25zdCBvcmlnaW5hbFRvcCA9IGRpc3RhbmNlVG9Ub3AodGFyZ2V0QW5jaG9yKTtcclxuICAgIHdpbmRvdy5zY3JvbGxCeSh7IHRvcDogb3JpZ2luYWxUb3AsIGxlZnQ6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIGNvbnN0IGNoZWNrSWZEb25lID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgYXRCb3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyB3aW5kb3cucGFnZVlPZmZzZXQgPj0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQgLSAyO1xyXG4gICAgICAgIGlmIChkaXN0YW5jZVRvVG9wKHRhcmdldEFuY2hvcikgPT09IDAgfHwgYXRCb3R0b20pIHtcclxuICAgICAgICAgICAgdGFyZ2V0QW5jaG9yLnRhYkluZGV4ID0gJy0xJztcclxuICAgICAgICAgICAgdGFyZ2V0QW5jaG9yLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSgnJywgJycsIHRhcmdldElEKTtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja0lmRG9uZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgMTAwKTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=
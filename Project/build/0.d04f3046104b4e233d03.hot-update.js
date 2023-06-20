"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 47:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RandomImg: () => (/* binding */ RandomImg)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);



var newImgBasic = document.querySelector(".workout_basic");
var newImgIntermediate = document.querySelector(".workout_intermediate");
var newImgAdvanced = document.querySelector(".workout_advanced");

// export const RandomImg = () => {
//
//     if (newImgBasic) {
//         const createImg = createRoot(newImgBasic);
//
//         const RandomImgFunction = () => {
//             const randomImgArray = [];
//             for (let n = 0; n < figures.length; n++) {
//                 if (randomImgArray.length === 6) {
//                     return <ul>{randomImgArray.map((element) => <li key={figures.id} className={"workout_image"}>{element}</li>)}</ul>;
//                 } else {
//                     const randomObj = Math.floor(Math.random() * figures.length);
//                             if (figures[randomObj].level === "basic" && randomImgArray.includes(figures[randomObj].src) === false) {
//                                 const sourceImg = figures[randomObj].src;
//                                 randomImgArray.push(sourceImg);
//                             }
//                 }
//             }
//         }
//             createImg.render(<RandomImgFunction/>);
//         }
// }

var RandomImg = function RandomImg() {
  if (newImgBasic) {
    var createImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(newImgBasic);
    RandomImgFunction('basic');
    createImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RandomImgFunction, null));
  }
  var RandomImgFunction = function RandomImgFunction(level) {
    var randomImgArray = [];
    for (var n = 0; n < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; n++) {
      if (randomImgArray.length === 6) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, randomImgArray.map(function (element) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
            key: _figures__WEBPACK_IMPORTED_MODULE_1__.figures.id,
            className: "workout_image"
          }, element);
        }));
      } else {
        var randomObj = Math.floor(Math.random() * _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length);
        if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].level === level && randomImgArray.includes(_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src) === false) {
          var sourceImg = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src;
          randomImgArray.push(sourceImg);
        }
      }
    }
  };
};

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _RandomImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);





var container = document.getElementById("app");
if (container) {
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
  var App = function App() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, "cos cos", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_RandomImg__WEBPACK_IMPORTED_MODULE_3__.RandomImg, null));
  };
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(App, null));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("71361ec673c9a0507099")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtjcmVhdGVFbGVtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IG5ld0ltZ0Jhc2ljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrb3V0X2Jhc2ljXCIpO1xyXG5jb25zdCBuZXdJbWdJbnRlcm1lZGlhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtvdXRfaW50ZXJtZWRpYXRlXCIpO1xyXG5jb25zdCBuZXdJbWdBZHZhbmNlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya291dF9hZHZhbmNlZFwiKTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBSYW5kb21JbWcgPSAoKSA9PiB7XHJcbi8vXHJcbi8vICAgICBpZiAobmV3SW1nQmFzaWMpIHtcclxuLy8gICAgICAgICBjb25zdCBjcmVhdGVJbWcgPSBjcmVhdGVSb290KG5ld0ltZ0Jhc2ljKTtcclxuLy9cclxuLy8gICAgICAgICBjb25zdCBSYW5kb21JbWdGdW5jdGlvbiA9ICgpID0+IHtcclxuLy8gICAgICAgICAgICAgY29uc3QgcmFuZG9tSW1nQXJyYXkgPSBbXTtcclxuLy8gICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBmaWd1cmVzLmxlbmd0aDsgbisrKSB7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAocmFuZG9tSW1nQXJyYXkubGVuZ3RoID09PSA2KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx1bD57cmFuZG9tSW1nQXJyYXkubWFwKChlbGVtZW50KSA9PiA8bGkga2V5PXtmaWd1cmVzLmlkfSBjbGFzc05hbWU9e1wid29ya291dF9pbWFnZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW3JhbmRvbU9ial0ubGV2ZWwgPT09IFwiYmFzaWNcIiAmJiByYW5kb21JbWdBcnJheS5pbmNsdWRlcyhmaWd1cmVzW3JhbmRvbU9ial0uc3JjKSA9PT0gZmFsc2UpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbWcgPSBmaWd1cmVzW3JhbmRvbU9ial0uc3JjO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgY3JlYXRlSW1nLnJlbmRlcig8UmFuZG9tSW1nRnVuY3Rpb24vPik7XHJcbi8vICAgICAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBSYW5kb21JbWcgPSAoKSA9PiB7XHJcbiAgICBpZiAobmV3SW1nQmFzaWMpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVJbWcgPSBjcmVhdGVSb290KG5ld0ltZ0Jhc2ljKTtcclxuICAgICAgICBSYW5kb21JbWdGdW5jdGlvbiAoJ2Jhc2ljJyk7XHJcbiAgICAgICAgY3JlYXRlSW1nLnJlbmRlcig8UmFuZG9tSW1nRnVuY3Rpb24vPik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgUmFuZG9tSW1nRnVuY3Rpb24gPSAobGV2ZWwpID0+IHtcclxuICAgICAgICBjb25zdCByYW5kb21JbWdBcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgZmlndXJlcy5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICBpZiAocmFuZG9tSW1nQXJyYXkubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPHVsPntyYW5kb21JbWdBcnJheS5tYXAoKGVsZW1lbnQpID0+IDxsaSBrZXk9e2ZpZ3VyZXMuaWR9IGNsYXNzTmFtZT17XCJ3b3Jrb3V0X2ltYWdlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW3JhbmRvbU9ial0ubGV2ZWwgPT09IGxldmVsICYmIHJhbmRvbUltZ0FycmF5LmluY2x1ZGVzKGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmMpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tSW1nQXJyYXkucHVzaChzb3VyY2VJbWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgXCIuLi9zY3NzL2luZGV4LnNjc3NcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuaW1wb3J0IHtSYW5kb21JbWd9IGZyb20gXCIuL1JhbmRvbUltZ1wiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5cclxuaWYgKGNvbnRhaW5lcikge1xyXG4gICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIGNvcyBjb3NcclxuICAgICAgICAgICAgICAgIDxSYW5kb21JbWcgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByb290LnJlbmRlcig8QXBwLz4pO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3MTM2MWVjNjczYzlhMDUwNzA5OVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJmaWd1cmVzIiwiY3JlYXRlUm9vdCIsIm5ld0ltZ0Jhc2ljIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmV3SW1nSW50ZXJtZWRpYXRlIiwibmV3SW1nQWR2YW5jZWQiLCJSYW5kb21JbWciLCJjcmVhdGVJbWciLCJSYW5kb21JbWdGdW5jdGlvbiIsInJlbmRlciIsImxldmVsIiwicmFuZG9tSW1nQXJyYXkiLCJuIiwibGVuZ3RoIiwibWFwIiwiZWxlbWVudCIsImtleSIsImlkIiwiY2xhc3NOYW1lIiwicmFuZG9tT2JqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaW5jbHVkZXMiLCJzcmMiLCJzb3VyY2VJbWciLCJwdXNoIiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwiRnJhZ21lbnQiXSwic291cmNlUm9vdCI6IiJ9
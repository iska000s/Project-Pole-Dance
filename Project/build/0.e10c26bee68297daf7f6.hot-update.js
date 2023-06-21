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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var newImgBasic = document.querySelector(".workout_basic");
var newImgIntermediate = document.querySelector(".workout_intermediate");
var newImgAdvanced = document.querySelector(".workout_advanced");

// // const newImgBasicI = document.querySelector(".workout_image")
//     newImgBasicI.addEventListener ("click", function (event) {
//     this.style.height = "900px";
// })

var RandomImg = function RandomImg() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    maxHeight = _useState2[0],
    setHeight = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    maxWidth = _useState4[0],
    setWidth = _useState4[1];
  var handleClick = function handleClick() {
    setHeight(maxHeight === "500px" ? "260px" : "500px");
  };
  if (newImgBasic) {
    var createImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(newImgBasic);
    var RandomImgFunction = function RandomImgFunction() {
      var randomImgArray = [];
      for (var n = 0; n < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; n++) {
        if (randomImgArray.length === 6) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, randomImgArray.map(function (element) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
              key: _figures__WEBPACK_IMPORTED_MODULE_1__.figures.id,
              className: "workout_image"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
              alt: 'figure',
              src: "../img/27.jpg"
            }), ">");
          }));
        } else {
          var randomObj = Math.floor(Math.random() * _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length);
          if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].level === "basic" && randomImgArray.includes(_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src) === false) {
            var sourceImg = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src;
            randomImgArray.push(sourceImg);
          }
        }
      }
    };
    createImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RandomImgFunction, null));
  }
  if (newImgIntermediate) {
    var _createImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(newImgIntermediate);
    var _RandomImgFunction = function _RandomImgFunction() {
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
          if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].level === "intermediate" && randomImgArray.includes(_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src) === false) {
            var sourceImg = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src;
            randomImgArray.push(sourceImg);
          }
        }
      }
    };
    _createImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RandomImgFunction, null));
  }
  if (newImgAdvanced) {
    var _createImg2 = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(newImgAdvanced);
    var _RandomImgFunction2 = function _RandomImgFunction2() {
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
          if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].level === "advanced" && randomImgArray.includes(_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src) === false) {
            var sourceImg = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src;
            randomImgArray.push(sourceImg);
          }
        }
      }
    };
    _createImg2.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RandomImgFunction2, null));
  }
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
/* harmony import */ var _categoryOfFiures__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony import */ var _categoryOfFiures__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_categoryOfFiures__WEBPACK_IMPORTED_MODULE_5__);
// import "../scss/index.scss"
// import React from "react";
// import { createRoot } from "react-dom/client";
//
// import {RandomImg} from "./RandomImg";
// import {figures} from "./figures";
//
// const container = document.getElementById("app");
//
// if (container) {
//     const root = createRoot(container);
//
//     const App = () => {
//         return (
//             <>
//                 cos cos
//                 <RandomImg />
//             </>
//         )
//     }
//
//
//     root.render(<App/>);
//
// }







var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, "cos cos", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_RandomImg__WEBPACK_IMPORTED_MODULE_3__.RandomImg, null));
};
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c9069e9e3401f1ea2232")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkI7QUFDRDtBQUNvQjtBQUVSO0FBQ0o7QUFDZ0I7QUFFbEQsSUFBTUUsU0FBUyxHQUFHdkMsUUFBUSxDQUFDd0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUczQyw0REFBVSxDQUFDeUMsU0FBUyxDQUFDO0FBRWxDLElBQU1HLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQVM7RUFDVixvQkFDSWhELDBEQUFBLENBQUFBLHVEQUFBLFFBQUUsU0FFRSxlQUFBQSwwREFBQSxDQUFDVSxpREFBUyxNQUFFLENBQ2QsQ0FBQztBQUVYLENBQUM7QUFHRHFDLElBQUksQ0FBQ04sTUFBTSxlQUFDekMsMERBQUEsQ0FBQ2dELEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDaER2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvUmFuZG9tSW1nLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlRWxlbWVudCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuY29uc3QgbmV3SW1nQmFzaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtvdXRfYmFzaWNcIik7XHJcbmNvbnN0IG5ld0ltZ0ludGVybWVkaWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya291dF9pbnRlcm1lZGlhdGVcIik7XHJcbmNvbnN0IG5ld0ltZ0FkdmFuY2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrb3V0X2FkdmFuY2VkXCIpO1xyXG5cclxuLy8gLy8gY29uc3QgbmV3SW1nQmFzaWNJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrb3V0X2ltYWdlXCIpXHJcbi8vICAgICBuZXdJbWdCYXNpY0kuYWRkRXZlbnRMaXN0ZW5lciAoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuLy8gICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gXCI5MDBweFwiO1xyXG4vLyB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IFJhbmRvbUltZyA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IFttYXhIZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IFttYXhXaWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEhlaWdodChtYXhIZWlnaHQgPT09IFwiNTAwcHhcIiA/IFwiMjYwcHhcIiA6IFwiNTAwcHhcIik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICBpZiAobmV3SW1nQmFzaWMpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVJbWcgPSBjcmVhdGVSb290KG5ld0ltZ0Jhc2ljKTtcclxuXHJcbiAgICAgICAgY29uc3QgUmFuZG9tSW1nRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUltZ0FycmF5ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgZmlndXJlcy5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmRvbUltZ0FycmF5Lmxlbmd0aCA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dWw+e3JhbmRvbUltZ0FycmF5Lm1hcCgoZWxlbWVudCkgPT4gPGxpIGtleT17ZmlndXJlcy5pZH0gY2xhc3NOYW1lPXtcIndvcmtvdXRfaW1hZ2VcIn0+PGltZyBhbHQ9eydmaWd1cmUnfSBzcmM9XCIuLi9pbWcvMjcuanBnXCIvPj48L2xpPil9PC91bD47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW3JhbmRvbU9ial0ubGV2ZWwgPT09IFwiYmFzaWNcIiAmJiByYW5kb21JbWdBcnJheS5pbmNsdWRlcyhmaWd1cmVzW3JhbmRvbU9ial0uc3JjKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbWcgPSBmaWd1cmVzW3JhbmRvbU9ial0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNyZWF0ZUltZy5yZW5kZXIoPFJhbmRvbUltZ0Z1bmN0aW9uLz4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBpZiAobmV3SW1nSW50ZXJtZWRpYXRlKSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlSW1nID0gY3JlYXRlUm9vdChuZXdJbWdJbnRlcm1lZGlhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCBSYW5kb21JbWdGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tSW1nQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBmaWd1cmVzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tSW1nQXJyYXkubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx1bD57cmFuZG9tSW1nQXJyYXkubWFwKChlbGVtZW50KSA9PiA8bGkga2V5PXtmaWd1cmVzLmlkfSBjbGFzc05hbWU9e1wid29ya291dF9pbWFnZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tyYW5kb21PYmpdLmxldmVsID09PSBcImludGVybWVkaWF0ZVwiICYmIHJhbmRvbUltZ0FycmF5LmluY2x1ZGVzKGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmMpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbWcgPSBmaWd1cmVzW3JhbmRvbU9ial0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb21JbWdBcnJheS5wdXNoKHNvdXJjZUltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZUltZy5yZW5kZXIoPFJhbmRvbUltZ0Z1bmN0aW9uLz4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAobmV3SW1nQWR2YW5jZWQpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVJbWcgPSBjcmVhdGVSb290KG5ld0ltZ0FkdmFuY2VkKTtcclxuXHJcbiAgICAgICAgY29uc3QgUmFuZG9tSW1nRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUltZ0FycmF5ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgZmlndXJlcy5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmRvbUltZ0FycmF5Lmxlbmd0aCA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dWw+e3JhbmRvbUltZ0FycmF5Lm1hcCgoZWxlbWVudCkgPT4gPGxpIGtleT17ZmlndXJlcy5pZH0gY2xhc3NOYW1lPXtcIndvcmtvdXRfaW1hZ2VcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21PYmogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWd1cmVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbcmFuZG9tT2JqXS5sZXZlbCA9PT0gXCJhZHZhbmNlZFwiICYmIHJhbmRvbUltZ0FycmF5LmluY2x1ZGVzKGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmMpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbWcgPSBmaWd1cmVzW3JhbmRvbU9ial0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb21JbWdBcnJheS5wdXNoKHNvdXJjZUltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZUltZy5yZW5kZXIoPFJhbmRvbUltZ0Z1bmN0aW9uLz4pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbiIsIi8vIGltcG9ydCBcIi4uL3Njc3MvaW5kZXguc2Nzc1wiXHJcbi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbi8vXHJcbi8vIGltcG9ydCB7UmFuZG9tSW1nfSBmcm9tIFwiLi9SYW5kb21JbWdcIjtcclxuLy8gaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbi8vXHJcbi8vIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG4vL1xyXG4vLyBpZiAoY29udGFpbmVyKSB7XHJcbi8vICAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG4vL1xyXG4vLyAgICAgY29uc3QgQXBwID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgICAgICBjb3MgY29zXHJcbi8vICAgICAgICAgICAgICAgICA8UmFuZG9tSW1nIC8+XHJcbi8vICAgICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgIClcclxuLy8gICAgIH1cclxuLy9cclxuLy9cclxuLy8gICAgIHJvb3QucmVuZGVyKDxBcHAvPik7XHJcbi8vXHJcbi8vIH1cclxuXHJcblxyXG5pbXBvcnQgXCIuLi9zY3NzL2luZGV4LnNjc3NcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuaW1wb3J0IHtSYW5kb21JbWd9IGZyb20gXCIuL1JhbmRvbUltZ1wiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IENhdGVnb3J5T2ZGaXVyZXMgZnJvbSBcIi4vY2F0ZWdvcnlPZkZpdXJlc1wiO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIGNvcyBjb3NcclxuICAgICAgICAgICAgICAgIDxSYW5kb21JbWcgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByb290LnJlbmRlcig8QXBwLz4pO1xyXG5cclxuXHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjOTA2OWU5ZTM0MDFmMWVhMjIzMlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VTdGF0ZSIsImZpZ3VyZXMiLCJjcmVhdGVSb290IiwibmV3SW1nQmFzaWMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuZXdJbWdJbnRlcm1lZGlhdGUiLCJuZXdJbWdBZHZhbmNlZCIsIlJhbmRvbUltZyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm1heEhlaWdodCIsInNldEhlaWdodCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwibWF4V2lkdGgiLCJzZXRXaWR0aCIsImhhbmRsZUNsaWNrIiwiY3JlYXRlSW1nIiwiUmFuZG9tSW1nRnVuY3Rpb24iLCJyYW5kb21JbWdBcnJheSIsIm4iLCJsZW5ndGgiLCJtYXAiLCJlbGVtZW50Iiwia2V5IiwiaWQiLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJyYW5kb21PYmoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZXZlbCIsImluY2x1ZGVzIiwic291cmNlSW1nIiwicHVzaCIsInJlbmRlciIsIl9SYW5kb21JbWdGdW5jdGlvbiIsIl9SYW5kb21JbWdGdW5jdGlvbjIiLCJDYXRlZ29yeU9mRml1cmVzIiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwiRnJhZ21lbnQiXSwic291cmNlUm9vdCI6IiJ9
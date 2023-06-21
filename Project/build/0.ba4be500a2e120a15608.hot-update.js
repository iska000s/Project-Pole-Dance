"use strict";
self["webpackHotUpdatees6_react"](0,{

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

/***/ }),

/***/ 49:
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
var RandomImg = function RandomImg() {
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
            }, element);
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
};
if (newImgAdvanced) {
  var createImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(newImgAdvanced);
  var RandomImgFunction = function RandomImgFunction() {
    var randomImgArray = [];
    for (var n = 0; n < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; n++) {
      if (randomImgArray.length == 3) {
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
  createImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RandomImgFunction, null));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d9eb9cb33a20e3440c80")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iYTRiZTUwMGEyZTEyMGExNTYwOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRzJCO0FBQ0Q7QUFDb0I7QUFFUjtBQUNKO0FBQ2dCO0FBRWxELElBQU1LLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR1AsNERBQVUsQ0FBQ0ksU0FBUyxDQUFDO0FBRWxDLElBQU1JLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQVM7RUFDVixvQkFDSVQsMERBQUEsQ0FBQUEsdURBQUEsUUFBRSxTQUVFLGVBQUFBLDBEQUFBLENBQUNFLGlEQUFTLE1BQUUsQ0FDZCxDQUFDO0FBRVgsQ0FBQztBQUdETSxJQUFJLENBQUNJLE1BQU0sZUFBQ1osMERBQUEsQ0FBQ1MsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaERHO0FBQ1E7QUFDVTtBQUU1QyxJQUFNSSxXQUFXLEdBQUdQLFFBQVEsQ0FBQ1EsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQzVELElBQU1DLGtCQUFrQixHQUFHVCxRQUFRLENBQUNRLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztBQUMxRSxJQUFNRSxjQUFjLEdBQUdWLFFBQVEsQ0FBQ1EsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0FBRzNELElBQU1aLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQVM7RUFFM0IsSUFBSVcsV0FBVyxFQUFFO0lBQ2IsSUFBTUksU0FBUyxHQUFHaEIsNERBQVUsQ0FBQ1ksV0FBVyxDQUFDO0lBRXpDLElBQU1LLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBUztNQUM1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NUIsSUFBTUMsY0FBYyxHQUFHLEVBQUU7SUFDekIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdqQiw2Q0FBTyxDQUFDa0IsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNyQyxJQUFJRCxjQUFjLENBQUNFLE1BQU0sSUFBSSxDQUFDLEVBQUU7UUFDNUIsb0JBQU9yQiwwREFBQSxhQUFLbUIsY0FBYyxDQUFDRyxHQUFHLENBQUMsVUFBQ0MsT0FBTztVQUFBLG9CQUFLdkIsMERBQUE7WUFBSXdCLEdBQUcsRUFBRXJCLDZDQUFPLENBQUNzQixFQUFHO1lBQUNDLFNBQVMsRUFBRTtVQUFnQixHQUFFSCxPQUFZLENBQUM7UUFBQSxFQUFNLENBQUM7TUFDdEgsQ0FBQyxNQUFNO1FBQ0gsSUFBTUksU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHM0IsNkNBQU8sQ0FBQ2tCLE1BQU0sQ0FBQztRQUM1RCxJQUFJbEIsNkNBQU8sQ0FBQ3dCLFNBQVMsQ0FBQyxDQUFDSSxLQUFLLEtBQUssVUFBVSxJQUFJWixjQUFjLENBQUNhLFFBQVEsQ0FBQzdCLDZDQUFPLENBQUN3QixTQUFTLENBQUMsQ0FBQ00sR0FBRyxDQUFDLEtBQUssS0FBSyxFQUFFO1VBQ3RHLElBQU1DLFNBQVMsR0FBRy9CLDZDQUFPLENBQUN3QixTQUFTLENBQUMsQ0FBQ00sR0FBRztVQUN4Q2QsY0FBYyxDQUFDZ0IsSUFBSSxDQUFDRCxTQUFTLENBQUM7UUFDbEM7TUFDSjtJQUNKO0VBQ0osQ0FBQztFQUNEakIsU0FBUyxDQUFDTCxNQUFNLGVBQUNaLDBEQUFBLENBQUNrQixpQkFBaUIsTUFBQyxDQUFDLENBQUM7QUFDMUM7Ozs7Ozs7O1VDM0VBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9jYXRlZ29yeU9mRml1cmVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFwiLi4vc2Nzcy9pbmRleC5zY3NzXCJcclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuLy9cclxuLy8gaW1wb3J0IHtSYW5kb21JbWd9IGZyb20gXCIuL1JhbmRvbUltZ1wiO1xyXG4vLyBpbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuLy9cclxuLy8gY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbi8vXHJcbi8vIGlmIChjb250YWluZXIpIHtcclxuLy8gICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbi8vXHJcbi8vICAgICBjb25zdCBBcHAgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgICAgIGNvcyBjb3NcclxuLy8gICAgICAgICAgICAgICAgIDxSYW5kb21JbWcgLz5cclxuLy8gICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgKVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgcm9vdC5yZW5kZXIoPEFwcC8+KTtcclxuLy9cclxuLy8gfVxyXG5cclxuXHJcbmltcG9ydCBcIi4uL3Njc3MvaW5kZXguc2Nzc1wiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5pbXBvcnQge1JhbmRvbUltZ30gZnJvbSBcIi4vUmFuZG9tSW1nXCI7XHJcbmltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlPZkZpdXJlcyBmcm9tIFwiLi9jYXRlZ29yeU9mRml1cmVzXCI7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgY29zIGNvc1xyXG4gICAgICAgICAgICAgICAgPFJhbmRvbUltZyAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJvb3QucmVuZGVyKDxBcHAvPik7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IG5ld0ltZ0Jhc2ljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrb3V0X2Jhc2ljXCIpO1xyXG5jb25zdCBuZXdJbWdJbnRlcm1lZGlhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtvdXRfaW50ZXJtZWRpYXRlXCIpO1xyXG5jb25zdCBuZXdJbWdBZHZhbmNlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya291dF9hZHZhbmNlZFwiKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUmFuZG9tSW1nID0gKCkgPT4ge1xyXG5cclxuICAgIGlmIChuZXdJbWdCYXNpYykge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUltZyA9IGNyZWF0ZVJvb3QobmV3SW1nQmFzaWMpO1xyXG5cclxuICAgICAgICBjb25zdCBSYW5kb21JbWdGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tSW1nQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBmaWd1cmVzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tSW1nQXJyYXkubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx1bD57cmFuZG9tSW1nQXJyYXkubWFwKChlbGVtZW50KSA9PiA8bGkga2V5PXtmaWd1cmVzLmlkfSBjbGFzc05hbWU9e1wid29ya291dF9pbWFnZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tyYW5kb21PYmpdLmxldmVsID09PSBcImJhc2ljXCIgJiYgcmFuZG9tSW1nQXJyYXkuaW5jbHVkZXMoZmlndXJlc1tyYW5kb21PYmpdLnNyYykgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjcmVhdGVJbWcucmVuZGVyKDxSYW5kb21JbWdGdW5jdGlvbi8+KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3SW1nSW50ZXJtZWRpYXRlKSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlSW1nID0gY3JlYXRlUm9vdChuZXdJbWdJbnRlcm1lZGlhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCBSYW5kb21JbWdGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tSW1nQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBmaWd1cmVzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tSW1nQXJyYXkubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx1bD57cmFuZG9tSW1nQXJyYXkubWFwKChlbGVtZW50KSA9PiA8bGkga2V5PXtmaWd1cmVzLmlkfSBjbGFzc05hbWU9e1wid29ya291dF9pbWFnZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tyYW5kb21PYmpdLmxldmVsID09PSBcImludGVybWVkaWF0ZVwiICYmIHJhbmRvbUltZ0FycmF5LmluY2x1ZGVzKGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmMpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbWcgPSBmaWd1cmVzW3JhbmRvbU9ial0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb21JbWdBcnJheS5wdXNoKHNvdXJjZUltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZUltZy5yZW5kZXIoPFJhbmRvbUltZ0Z1bmN0aW9uLz4pO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5pZiAobmV3SW1nQWR2YW5jZWQpIHtcclxuICAgIGNvbnN0IGNyZWF0ZUltZyA9IGNyZWF0ZVJvb3QobmV3SW1nQWR2YW5jZWQpO1xyXG5cclxuICAgIGNvbnN0IFJhbmRvbUltZ0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUltZ0FycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBmaWd1cmVzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgIGlmIChyYW5kb21JbWdBcnJheS5sZW5ndGggPT0gMykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDx1bD57cmFuZG9tSW1nQXJyYXkubWFwKChlbGVtZW50KSA9PiA8bGkga2V5PXtmaWd1cmVzLmlkfSBjbGFzc05hbWU9e1wid29ya291dF9pbWFnZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21PYmogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWd1cmVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tyYW5kb21PYmpdLmxldmVsID09PSBcImFkdmFuY2VkXCIgJiYgcmFuZG9tSW1nQXJyYXkuaW5jbHVkZXMoZmlndXJlc1tyYW5kb21PYmpdLnNyYykgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc291cmNlSW1nID0gZmlndXJlc1tyYW5kb21PYmpdLnNyYztcclxuICAgICAgICAgICAgICAgICAgICByYW5kb21JbWdBcnJheS5wdXNoKHNvdXJjZUltZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjcmVhdGVJbWcucmVuZGVyKDxSYW5kb21JbWdGdW5jdGlvbi8+KTtcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ5ZWI5Y2IzM2EyMGUzNDQwYzgwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIlJhbmRvbUltZyIsImZpZ3VyZXMiLCJDYXRlZ29yeU9mRml1cmVzIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJyZW5kZXIiLCJuZXdJbWdCYXNpYyIsInF1ZXJ5U2VsZWN0b3IiLCJuZXdJbWdJbnRlcm1lZGlhdGUiLCJuZXdJbWdBZHZhbmNlZCIsImNyZWF0ZUltZyIsIlJhbmRvbUltZ0Z1bmN0aW9uIiwicmFuZG9tSW1nQXJyYXkiLCJuIiwibGVuZ3RoIiwibWFwIiwiZWxlbWVudCIsImtleSIsImlkIiwiY2xhc3NOYW1lIiwicmFuZG9tT2JqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGV2ZWwiLCJpbmNsdWRlcyIsInNyYyIsInNvdXJjZUltZyIsInB1c2giLCJfUmFuZG9tSW1nRnVuY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9
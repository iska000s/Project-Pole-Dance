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
var _this = undefined;
// import React, {createElement} from "react";
// import {figures} from "./figures";
// import {createRoot} from "react-dom/client";
//
// const newImgBasic = document.querySelector(".workout_basic");
// const newImgIntermediate = document.querySelector(".workout_intermediate");
// const newImgAdvanced = document.querySelector(".workout_advanced");

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
//
//     if (newImgIntermediate) {
//         const createImg = createRoot(newImgIntermediate);
//
//         const RandomImgFunction = () => {
//             const randomImgArray = [];
//             for (let n = 0; n < figures.length; n++) {
//                 if (randomImgArray.length === 6) {
//                     return <ul>{randomImgArray.map((element) => <li key={figures.id} className={"workout_image"}>{element}</li>)}</ul>;
//                 } else {
//                     const randomObj = Math.floor(Math.random() * figures.length);
//                     if (figures[randomObj].level === "intermediate" && randomImgArray.includes(figures[randomObj].src) === false) {
//                         const sourceImg = figures[randomObj].src;
//                         randomImgArray.push(sourceImg);
//                     }
//                 }
//             }
//         }
//         createImg.render(<RandomImgFunction/>);
//     }
// }




var newImgBasic = document.querySelector(".workout_basic");
var newImgIntermediate = document.querySelector(".workout_intermediate");
var newImgAdvanced = document.querySelector(".workout_advanced");
var RandomImg = function RandomImg() {
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
        if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].level === "".concat(_this.level) && randomImgArray.includes(_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src) === false) {
          var sourceImg = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src;
          randomImgArray.push(sourceImg);
        }
      }
    }
  };
  if (newImgBasic) {
    RandomImgFunction("basic");
    var createImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(newImgBasic);
    createImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RandomImgFunction, null));
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("07ece84136114f9cf3e2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41NjZiYWYzZjY4YzUyNThhMmE3ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTMkM7QUFDVDtBQUNVO0FBRTVDLElBQU1JLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDNUQsSUFBTUMsa0JBQWtCLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBQzFFLElBQU1FLGNBQWMsR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7QUFFM0QsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUztFQUMzQixJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFJQyxLQUFLLEVBQUs7SUFDakMsSUFBTUMsY0FBYyxHQUFHLEVBQUU7SUFDekIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdYLDZDQUFPLENBQUNZLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDckMsSUFBSUQsY0FBYyxDQUFDRSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzdCLG9CQUFPZCwwREFBQSxhQUFLWSxjQUFjLENBQUNHLEdBQUcsQ0FBQyxVQUFDQyxPQUFPO1VBQUEsb0JBQUtoQiwwREFBQTtZQUFJaUIsR0FBRyxFQUFFZiw2Q0FBTyxDQUFDZ0IsRUFBRztZQUFDQyxTQUFTLEVBQUU7VUFBZ0IsR0FBRUgsT0FBWSxDQUFDO1FBQUEsRUFBTSxDQUFDO01BQ3RILENBQUMsTUFBTTtRQUNILElBQU1JLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR3JCLDZDQUFPLENBQUNZLE1BQU0sQ0FBQztRQUM1RCxJQUFJWiw2Q0FBTyxDQUFDa0IsU0FBUyxDQUFDLENBQUNULEtBQUssUUFBQWEsTUFBQSxDQUFRQyxLQUFJLENBQUNkLEtBQUssQ0FBRSxJQUFJQyxjQUFjLENBQUNjLFFBQVEsQ0FBQ3hCLDZDQUFPLENBQUNrQixTQUFTLENBQUMsQ0FBQ08sR0FBRyxDQUFDLEtBQUssS0FBSyxFQUFFO1VBQzNHLElBQU1DLFNBQVMsR0FBRzFCLDZDQUFPLENBQUNrQixTQUFTLENBQUMsQ0FBQ08sR0FBRztVQUN4Q2YsY0FBYyxDQUFDaUIsSUFBSSxDQUFDRCxTQUFTLENBQUM7UUFDbEM7TUFDSjtJQUNKO0VBQ0osQ0FBQztFQUVELElBQUl4QixXQUFXLEVBQUU7SUFFYk0saUJBQWlCLENBQUMsT0FBTyxDQUFDO0lBQzFCLElBQU1vQixTQUFTLEdBQUczQiw0REFBVSxDQUFDQyxXQUFXLENBQUM7SUFDekMwQixTQUFTLENBQUNDLE1BQU0sZUFBQy9CLDBEQUFBLENBQUNVLGlCQUFpQixNQUFDLENBQUMsQ0FBQztFQUMxQztBQUVKLENBQUM7Ozs7Ozs7O1VDekZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9SYW5kb21JbWcuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHtjcmVhdGVFbGVtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbi8vIGltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuLy9cclxuLy8gY29uc3QgbmV3SW1nQmFzaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtvdXRfYmFzaWNcIik7XHJcbi8vIGNvbnN0IG5ld0ltZ0ludGVybWVkaWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya291dF9pbnRlcm1lZGlhdGVcIik7XHJcbi8vIGNvbnN0IG5ld0ltZ0FkdmFuY2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrb3V0X2FkdmFuY2VkXCIpO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IFJhbmRvbUltZyA9ICgpID0+IHtcclxuLy9cclxuLy8gICAgIGlmIChuZXdJbWdCYXNpYykge1xyXG4vLyAgICAgICAgIGNvbnN0IGNyZWF0ZUltZyA9IGNyZWF0ZVJvb3QobmV3SW1nQmFzaWMpO1xyXG4vL1xyXG4vLyAgICAgICAgIGNvbnN0IFJhbmRvbUltZ0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBjb25zdCByYW5kb21JbWdBcnJheSA9IFtdO1xyXG4vLyAgICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGZpZ3VyZXMubGVuZ3RoOyBuKyspIHtcclxuLy8gICAgICAgICAgICAgICAgIGlmIChyYW5kb21JbWdBcnJheS5sZW5ndGggPT09IDYpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHVsPntyYW5kb21JbWdBcnJheS5tYXAoKGVsZW1lbnQpID0+IDxsaSBrZXk9e2ZpZ3VyZXMuaWR9IGNsYXNzTmFtZT17XCJ3b3Jrb3V0X2ltYWdlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tT2JqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlndXJlcy5sZW5ndGgpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbcmFuZG9tT2JqXS5sZXZlbCA9PT0gXCJiYXNpY1wiICYmIHJhbmRvbUltZ0FycmF5LmluY2x1ZGVzKGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmMpID09PSBmYWxzZSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tSW1nQXJyYXkucHVzaChzb3VyY2VJbWcpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBjcmVhdGVJbWcucmVuZGVyKDxSYW5kb21JbWdGdW5jdGlvbi8+KTtcclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICBpZiAobmV3SW1nSW50ZXJtZWRpYXRlKSB7XHJcbi8vICAgICAgICAgY29uc3QgY3JlYXRlSW1nID0gY3JlYXRlUm9vdChuZXdJbWdJbnRlcm1lZGlhdGUpO1xyXG4vL1xyXG4vLyAgICAgICAgIGNvbnN0IFJhbmRvbUltZ0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBjb25zdCByYW5kb21JbWdBcnJheSA9IFtdO1xyXG4vLyAgICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGZpZ3VyZXMubGVuZ3RoOyBuKyspIHtcclxuLy8gICAgICAgICAgICAgICAgIGlmIChyYW5kb21JbWdBcnJheS5sZW5ndGggPT09IDYpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHVsPntyYW5kb21JbWdBcnJheS5tYXAoKGVsZW1lbnQpID0+IDxsaSBrZXk9e2ZpZ3VyZXMuaWR9IGNsYXNzTmFtZT17XCJ3b3Jrb3V0X2ltYWdlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tT2JqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlndXJlcy5sZW5ndGgpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW3JhbmRvbU9ial0ubGV2ZWwgPT09IFwiaW50ZXJtZWRpYXRlXCIgJiYgcmFuZG9tSW1nQXJyYXkuaW5jbHVkZXMoZmlndXJlc1tyYW5kb21PYmpdLnNyYykgPT09IGZhbHNlKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY3JlYXRlSW1nLnJlbmRlcig8UmFuZG9tSW1nRnVuY3Rpb24vPik7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgUmVhY3QsIHtjcmVhdGVFbGVtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IG5ld0ltZ0Jhc2ljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrb3V0X2Jhc2ljXCIpO1xyXG5jb25zdCBuZXdJbWdJbnRlcm1lZGlhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtvdXRfaW50ZXJtZWRpYXRlXCIpO1xyXG5jb25zdCBuZXdJbWdBZHZhbmNlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya291dF9hZHZhbmNlZFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBSYW5kb21JbWcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBSYW5kb21JbWdGdW5jdGlvbiA9IChsZXZlbCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUltZ0FycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBmaWd1cmVzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgIGlmIChyYW5kb21JbWdBcnJheS5sZW5ndGggPT09IDYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8dWw+e3JhbmRvbUltZ0FycmF5Lm1hcCgoZWxlbWVudCkgPT4gPGxpIGtleT17ZmlndXJlcy5pZH0gY2xhc3NOYW1lPXtcIndvcmtvdXRfaW1hZ2VcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tT2JqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlndXJlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbcmFuZG9tT2JqXS5sZXZlbCA9PT0gYCR7dGhpcy5sZXZlbH1gICYmIHJhbmRvbUltZ0FycmF5LmluY2x1ZGVzKGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmMpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tSW1nQXJyYXkucHVzaChzb3VyY2VJbWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXdJbWdCYXNpYykge1xyXG5cclxuICAgICAgICBSYW5kb21JbWdGdW5jdGlvbihcImJhc2ljXCIpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUltZyA9IGNyZWF0ZVJvb3QobmV3SW1nQmFzaWMpO1xyXG4gICAgICAgIGNyZWF0ZUltZy5yZW5kZXIoPFJhbmRvbUltZ0Z1bmN0aW9uLz4pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDdlY2U4NDEzNjExNGY5Y2YzZTJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiZmlndXJlcyIsImNyZWF0ZVJvb3QiLCJuZXdJbWdCYXNpYyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5ld0ltZ0ludGVybWVkaWF0ZSIsIm5ld0ltZ0FkdmFuY2VkIiwiUmFuZG9tSW1nIiwiUmFuZG9tSW1nRnVuY3Rpb24iLCJsZXZlbCIsInJhbmRvbUltZ0FycmF5IiwibiIsImxlbmd0aCIsIm1hcCIsImVsZW1lbnQiLCJrZXkiLCJpZCIsImNsYXNzTmFtZSIsInJhbmRvbU9iaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbmNhdCIsIl90aGlzIiwiaW5jbHVkZXMiLCJzcmMiLCJzb3VyY2VJbWciLCJwdXNoIiwiY3JlYXRlSW1nIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==
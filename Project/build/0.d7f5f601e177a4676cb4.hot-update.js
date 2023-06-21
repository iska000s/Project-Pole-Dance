"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FigureCategory: () => (/* binding */ FigureCategory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);



var imgSit = document.querySelector(".figures_chair");
var newImgIntermediate = document.querySelector(".workout_intermediate");
var newImgAdvanced = document.querySelector(".workout_advanced");
var FigureCategory = function FigureCategory() {
  var figuresArray = [];
  if (imgSit) {
    var createImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgSit);
    var ImgFunction = function ImgFunction() {
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures.category === "siedzące") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, _figures__WEBPACK_IMPORTED_MODULE_1__.figures.map(function (element) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
            key: _figures__WEBPACK_IMPORTED_MODULE_1__.figures.id,
            className: "workout_image"
          }, element.src);
        }));
      }
      createImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RandomImgFunction, null));
    };
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
/* harmony import */ var _FigureCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, "cos cos", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_RandomImg__WEBPACK_IMPORTED_MODULE_3__.RandomImg, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FigureCategory__WEBPACK_IMPORTED_MODULE_5__.FigureCategory, null));
};
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3976769c49c5f193482f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kN2Y1ZjYwMWUxNzdhNDY3NmNiNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1E7QUFDVTtBQUU1QyxJQUFNRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQ3ZELElBQU1DLGtCQUFrQixHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztBQUMxRSxJQUFNRSxjQUFjLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0FBRzNELElBQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0VBQ2hDLElBQU1DLFlBQVksR0FBRyxFQUFFO0VBRXZCLElBQUlOLE1BQU0sRUFBRTtJQUNSLElBQU1PLFNBQVMsR0FBR1IsNERBQVUsQ0FBQ0MsTUFBTSxDQUFDO0lBQ3BDLElBQU1RLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7TUFFdEIsSUFBSVYsNkNBQU8sQ0FBQ1csUUFBUSxLQUFLLFVBQVUsRUFBQztRQUNwQyxvQkFBT1osMERBQUEsYUFBS0MsNkNBQU8sQ0FBQ2EsR0FBRyxDQUFDLFVBQUFDLE9BQU87VUFBQSxvQkFBSWYsMERBQUE7WUFBSWdCLEdBQUcsRUFBRWYsNkNBQU8sQ0FBQ2dCLEVBQUc7WUFBQ0MsU0FBUyxFQUFFO1VBQWdCLEdBQUVILE9BQU8sQ0FBQ0ksR0FBUSxDQUFDO1FBQUEsRUFBTSxDQUFDO01BR2pIO01BRUFULFNBQVMsQ0FBQ1UsTUFBTSxlQUFDcEIsMERBQUEsQ0FBQ3FCLGlCQUFpQixNQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0VBQ0w7QUFBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN4QkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRzJCO0FBQ0Q7QUFDb0I7QUFFUjtBQUNKO0FBQ2M7QUFDaEQsSUFBTUUsU0FBUyxHQUFHbkIsUUFBUSxDQUFDb0IsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUd2Qiw0REFBVSxDQUFDcUIsU0FBUyxDQUFDO0FBRWxDLElBQU1HLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQVM7RUFDVixvQkFDSTFCLDBEQUFBLENBQUFBLHVEQUFBLFFBQUUsU0FFRSxlQUFBQSwwREFBQSxDQUFDc0IsaURBQVMsTUFBRSxDQUFDLGVBQ2J0QiwwREFBQSxDQUFDUSwyREFBYyxNQUFDLENBQ2xCLENBQUM7QUFFWCxDQUFDO0FBR0RpQixJQUFJLENBQUNMLE1BQU0sZUFBQ3BCLDBEQUFBLENBQUMwQixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ2hEdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL0ZpZ3VyZUNhdGVnb3J5LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuY29uc3QgaW1nU2l0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2NoYWlyXCIpO1xyXG5jb25zdCBuZXdJbWdJbnRlcm1lZGlhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtvdXRfaW50ZXJtZWRpYXRlXCIpO1xyXG5jb25zdCBuZXdJbWdBZHZhbmNlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya291dF9hZHZhbmNlZFwiKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmaWd1cmVzQXJyYXkgPSBbXTtcclxuXHJcbiAgICBpZiAoaW1nU2l0KSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlSW1nID0gY3JlYXRlUm9vdChpbWdTaXQpO1xyXG4gICAgICAgIGNvbnN0IEltZ0Z1bmN0aW9uID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKGZpZ3VyZXMuY2F0ZWdvcnkgPT09IFwic2llZHrEhWNlXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gPHVsPntmaWd1cmVzLm1hcChlbGVtZW50ID0+IDxsaSBrZXk9e2ZpZ3VyZXMuaWR9IGNsYXNzTmFtZT17XCJ3b3Jrb3V0X2ltYWdlXCJ9PntlbGVtZW50LnNyY308L2xpPil9PC91bD47XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNyZWF0ZUltZy5yZW5kZXIoPFJhbmRvbUltZ0Z1bmN0aW9uLz4pO1xyXG4gICAgfVxyXG59fSIsIi8vIGltcG9ydCBcIi4uL3Njc3MvaW5kZXguc2Nzc1wiXHJcbi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbi8vXHJcbi8vIGltcG9ydCB7UmFuZG9tSW1nfSBmcm9tIFwiLi9SYW5kb21JbWdcIjtcclxuLy8gaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbi8vXHJcbi8vIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG4vL1xyXG4vLyBpZiAoY29udGFpbmVyKSB7XHJcbi8vICAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG4vL1xyXG4vLyAgICAgY29uc3QgQXBwID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgICAgICBjb3MgY29zXHJcbi8vICAgICAgICAgICAgICAgICA8UmFuZG9tSW1nIC8+XHJcbi8vICAgICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgIClcclxuLy8gICAgIH1cclxuLy9cclxuLy9cclxuLy8gICAgIHJvb3QucmVuZGVyKDxBcHAvPik7XHJcbi8vXHJcbi8vIH1cclxuXHJcblxyXG5pbXBvcnQgXCIuLi9zY3NzL2luZGV4LnNjc3NcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuaW1wb3J0IHtSYW5kb21JbWd9IGZyb20gXCIuL1JhbmRvbUltZ1wiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IHtGaWd1cmVDYXRlZ29yeX0gZnJvbSBcIi4vRmlndXJlQ2F0ZWdvcnlcIjtcclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIGNvcyBjb3NcclxuICAgICAgICAgICAgICAgIDxSYW5kb21JbWcgLz5cclxuICAgICAgICAgICAgICAgIDxGaWd1cmVDYXRlZ29yeS8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcm9vdC5yZW5kZXIoPEFwcC8+KTtcclxuXHJcblxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzk3Njc2OWM0OWM1ZjE5MzQ4MmZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJmaWd1cmVzIiwiY3JlYXRlUm9vdCIsImltZ1NpdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5ld0ltZ0ludGVybWVkaWF0ZSIsIm5ld0ltZ0FkdmFuY2VkIiwiRmlndXJlQ2F0ZWdvcnkiLCJmaWd1cmVzQXJyYXkiLCJjcmVhdGVJbWciLCJJbWdGdW5jdGlvbiIsImNhdGVnb3J5IiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImVsZW1lbnQiLCJrZXkiLCJpZCIsImNsYXNzTmFtZSIsInNyYyIsInJlbmRlciIsIlJhbmRvbUltZ0Z1bmN0aW9uIiwiUmFuZG9tSW1nIiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwiRnJhZ21lbnQiXSwic291cmNlUm9vdCI6IiJ9
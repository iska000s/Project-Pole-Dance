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
// const imgSit = document.querySelector(".figures_chair");

var FigureCategory = function FigureCategory() {
  if (imgSit) {
    var ctImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgSit);
    var _FigureCategory = function _FigureCategory() {
      var categoryArray = [];
      for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
        if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'siedzące') {
          var newSrc = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].src;
          categoryArray.push(newSrc);
        }
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, categoryArray.map(function (element) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          className: "figure"
        }, element);
      }));
    };
    ctImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FigureCategory, null));
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
/******/ 	__webpack_require__.h = () => ("7b023ceed68557b9799c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40OGVmY2RlN2VlYjRkMTczNzkyNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1E7QUFDVTtBQUU1QyxJQUFNRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQ3ZEOztBQUVPLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0VBQ2hDLElBQUlILE1BQU0sRUFBRTtJQUNSLElBQU1JLEtBQUssR0FBR0wsNERBQVUsQ0FBQ0MsTUFBTSxDQUFDO0lBRWhDLElBQU1HLGVBQWMsR0FBRyxTQUFqQkEsZUFBY0EsQ0FBQSxFQUFTO01BQ3pCLElBQU1FLGFBQWEsR0FBRyxFQUFFO01BRXhCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHUiw2Q0FBTyxDQUFDUyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQ3JDLElBQUlSLDZDQUFPLENBQUNRLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEtBQUssVUFBVSxFQUFFO1VBQ3BDLElBQU1DLE1BQU0sR0FBR1gsNkNBQU8sQ0FBQ1EsQ0FBQyxDQUFDLENBQUNJLEdBQUc7VUFDN0JMLGFBQWEsQ0FBQ00sSUFBSSxDQUFDRixNQUFNLENBQUM7UUFDOUI7TUFDSjtNQUNBLG9CQUFPWiwwREFBQSxhQUFLUSxhQUFhLENBQUNRLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO1FBQUEsb0JBQUlqQiwwREFBQTtVQUFJa0IsU0FBUyxFQUFFO1FBQVMsR0FBRUQsT0FBWSxDQUFDO01BQUEsRUFBTSxDQUFDO0lBQzNGLENBQUM7SUFFRFYsS0FBSyxDQUFDWSxNQUFNLGVBQUNuQiwwREFBQSxDQUFDb0IsZUFBYyxNQUFDLENBQUMsQ0FBQztFQUNuQztBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHMkI7QUFDRDtBQUNvQjtBQUVSO0FBQ0o7QUFDYztBQUNoRCxJQUFNRSxTQUFTLEdBQUdsQixRQUFRLENBQUNtQixjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR3RCLDREQUFVLENBQUNvQixTQUFTLENBQUM7QUFFbEMsSUFBTUcsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNWLG9CQUNJekIsMERBQUEsQ0FBQUEsdURBQUEsUUFBRSxTQUVFLGVBQUFBLDBEQUFBLENBQUNxQixpREFBUyxNQUFFLENBQUMsZUFDYnJCLDBEQUFBLENBQUNNLDJEQUFjLE1BQUMsQ0FDbEIsQ0FBQztBQUVYLENBQUM7QUFHRGtCLElBQUksQ0FBQ0wsTUFBTSxlQUFDbkIsMERBQUEsQ0FBQ3lCLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDaER2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvRmlndXJlQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5jb25zdCBpbWdTaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfY2hhaXJcIik7XHJcbi8vIGNvbnN0IGltZ1NpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19jaGFpclwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIGlmIChpbWdTaXQpIHtcclxuICAgICAgICBjb25zdCBjdEltZyA9IGNyZWF0ZVJvb3QoaW1nU2l0KTtcclxuXHJcbiAgICAgICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ3NpZWR6xIVjZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0SW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gaW1wb3J0IFwiLi4vc2Nzcy9pbmRleC5zY3NzXCJcclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuLy9cclxuLy8gaW1wb3J0IHtSYW5kb21JbWd9IGZyb20gXCIuL1JhbmRvbUltZ1wiO1xyXG4vLyBpbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuLy9cclxuLy8gY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbi8vXHJcbi8vIGlmIChjb250YWluZXIpIHtcclxuLy8gICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbi8vXHJcbi8vICAgICBjb25zdCBBcHAgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgICAgIGNvcyBjb3NcclxuLy8gICAgICAgICAgICAgICAgIDxSYW5kb21JbWcgLz5cclxuLy8gICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgKVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgcm9vdC5yZW5kZXIoPEFwcC8+KTtcclxuLy9cclxuLy8gfVxyXG5cclxuXHJcbmltcG9ydCBcIi4uL3Njc3MvaW5kZXguc2Nzc1wiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5pbXBvcnQge1JhbmRvbUltZ30gZnJvbSBcIi4vUmFuZG9tSW1nXCI7XHJcbmltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG5pbXBvcnQge0ZpZ3VyZUNhdGVnb3J5fSBmcm9tIFwiLi9GaWd1cmVDYXRlZ29yeVwiO1xyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgY29zIGNvc1xyXG4gICAgICAgICAgICAgICAgPFJhbmRvbUltZyAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZ3VyZUNhdGVnb3J5Lz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByb290LnJlbmRlcig8QXBwLz4pO1xyXG5cclxuXHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3YjAyM2NlZWQ2ODU1N2I5Nzk5Y1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImZpZ3VyZXMiLCJjcmVhdGVSb290IiwiaW1nU2l0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiRmlndXJlQ2F0ZWdvcnkiLCJjdEltZyIsImNhdGVnb3J5QXJyYXkiLCJpIiwibGVuZ3RoIiwiY2F0ZWdvcnkiLCJuZXdTcmMiLCJzcmMiLCJwdXNoIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJyZW5kZXIiLCJfRmlndXJlQ2F0ZWdvcnkiLCJSYW5kb21JbWciLCJjb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHAiLCJGcmFnbWVudCJdLCJzb3VyY2VSb290IjoiIn0=
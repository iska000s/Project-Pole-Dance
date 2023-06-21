"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);



var imgSit = document.querySelector(".figures_chair");
if (imgSit) {
  var ctImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgCategory);
  var FigureCategory = function FigureCategory() {
    var categoryArray = [];
    for (var i = 0; i <= _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
      var categoryFigure = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category;
      if (categoryFigure === "siedzące") {
        categoryArray.push(_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].src);
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, categoryArray.map(function (element) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "figure"
      }, element);
    }));
  };
  ctImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FigureCategory, null));
}

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
/******/ 	__webpack_require__.h = () => ("e189d70c0857ce8f57ff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lNTQ1Zjg2YmI2YjRmNWNmNGQ5MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1E7QUFDVTtBQUU1QyxJQUFNRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBR3ZELElBQUlGLE1BQU0sRUFBRTtFQUNSLElBQU1HLEtBQUssR0FBR0osNERBQVUsQ0FBQ0ssV0FBVyxDQUFDO0VBRXBDLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0lBRTFCLElBQU1DLGFBQWEsR0FBRyxFQUFFO0lBRXhCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJVCw2Q0FBTyxDQUFDVSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFDO01BQ3JDLElBQU1FLGNBQWMsR0FBR1gsNkNBQU8sQ0FBQ1MsQ0FBQyxDQUFDLENBQUNHLFFBQVE7TUFDMUMsSUFBSUQsY0FBYyxLQUFLLFVBQVUsRUFBRTtRQUMvQkgsYUFBYSxDQUFDSyxJQUFJLENBQUNiLDZDQUFPLENBQUNTLENBQUMsQ0FBQyxDQUFDSyxHQUFHLENBQUM7TUFDdEM7SUFDSjtJQUNBLG9CQUFPZiwwREFBQSxhQUFLUyxhQUFhLENBQUNRLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO01BQUEsb0JBQUlsQiwwREFBQTtRQUFJbUIsU0FBUyxFQUFFO01BQVMsR0FBRUQsT0FBWSxDQUFDO0lBQUEsRUFBTSxDQUFDO0VBQzNGLENBQUM7RUFFRFosS0FBSyxDQUFDYyxNQUFNLGVBQUNwQiwwREFBQSxDQUFDUSxjQUFjLE1BQUMsQ0FBQyxDQUFDO0FBQ25DOzs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRzJCO0FBQ0Q7QUFDb0I7QUFFUjtBQUNKO0FBQ2M7QUFDaEQsSUFBTWMsU0FBUyxHQUFHbEIsUUFBUSxDQUFDbUIsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUd0Qiw0REFBVSxDQUFDb0IsU0FBUyxDQUFDO0FBRWxDLElBQU1HLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQVM7RUFDVixvQkFDSXpCLDBEQUFBLENBQUFBLHVEQUFBLFFBQUUsU0FFRSxlQUFBQSwwREFBQSxDQUFDcUIsaURBQVMsTUFBRSxDQUFDLGVBQ2JyQiwwREFBQSxDQUFDUSwyREFBYyxNQUFDLENBQ2xCLENBQUM7QUFFWCxDQUFDO0FBR0RnQixJQUFJLENBQUNKLE1BQU0sZUFBQ3BCLDBEQUFBLENBQUN5QixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ2hEdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL0ZpZ3VyZUNhdGVnb3J5LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuY29uc3QgaW1nU2l0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2NoYWlyXCIpO1xyXG5cclxuXHJcbmlmIChpbWdTaXQpIHtcclxuICAgIGNvbnN0IGN0SW1nID0gY3JlYXRlUm9vdChpbWdDYXRlZ29yeSk7XHJcblxyXG4gICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZmlndXJlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5RmlndXJlID0gZmlndXJlc1tpXS5jYXRlZ29yeVxyXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnlGaWd1cmUgPT09IFwic2llZHrEhWNlXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChmaWd1cmVzW2ldLnNyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcblxyXG4gICAgY3RJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxufVxyXG4iLCIvLyBpbXBvcnQgXCIuLi9zY3NzL2luZGV4LnNjc3NcIlxyXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG4vL1xyXG4vLyBpbXBvcnQge1JhbmRvbUltZ30gZnJvbSBcIi4vUmFuZG9tSW1nXCI7XHJcbi8vIGltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG4vL1xyXG4vLyBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuLy9cclxuLy8gaWYgKGNvbnRhaW5lcikge1xyXG4vLyAgICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxuLy9cclxuLy8gICAgIGNvbnN0IEFwcCA9ICgpID0+IHtcclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgICAgY29zIGNvc1xyXG4vLyAgICAgICAgICAgICAgICAgPFJhbmRvbUltZyAvPlxyXG4vLyAgICAgICAgICAgICA8Lz5cclxuLy8gICAgICAgICApXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vXHJcbi8vICAgICByb290LnJlbmRlcig8QXBwLz4pO1xyXG4vL1xyXG4vLyB9XHJcblxyXG5cclxuaW1wb3J0IFwiLi4vc2Nzcy9pbmRleC5zY3NzXCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmltcG9ydCB7UmFuZG9tSW1nfSBmcm9tIFwiLi9SYW5kb21JbWdcIjtcclxuaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbmltcG9ydCB7RmlndXJlQ2F0ZWdvcnl9IGZyb20gXCIuL0ZpZ3VyZUNhdGVnb3J5XCI7XHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICBjb3MgY29zXHJcbiAgICAgICAgICAgICAgICA8UmFuZG9tSW1nIC8+XHJcbiAgICAgICAgICAgICAgICA8RmlndXJlQ2F0ZWdvcnkvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJvb3QucmVuZGVyKDxBcHAvPik7XHJcblxyXG5cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUxODlkNzBjMDg1N2NlOGY1N2ZmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmlndXJlcyIsImNyZWF0ZVJvb3QiLCJpbWdTaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjdEltZyIsImltZ0NhdGVnb3J5IiwiRmlndXJlQ2F0ZWdvcnkiLCJjYXRlZ29yeUFycmF5IiwiaSIsImxlbmd0aCIsImNhdGVnb3J5RmlndXJlIiwiY2F0ZWdvcnkiLCJwdXNoIiwic3JjIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJyZW5kZXIiLCJSYW5kb21JbWciLCJjb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHAiLCJGcmFnbWVudCJdLCJzb3VyY2VSb290IjoiIn0=
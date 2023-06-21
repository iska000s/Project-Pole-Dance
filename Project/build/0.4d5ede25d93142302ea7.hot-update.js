self["webpackHotUpdatees6_react"](0,{

/***/ 47:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\Project\\js\\RandomImg.js: Unexpected token, expected \"}\" (31:79)\n\n\u001b[0m \u001b[90m 29 |\u001b[39m                         \u001b[33m<\u001b[39m\u001b[33mul\u001b[39m\u001b[33m>\u001b[39m{randomImgArray\u001b[33m.\u001b[39mmap((element) \u001b[33m=>\u001b[39m \u001b[33m<\u001b[39m\u001b[33mli\u001b[39m key\u001b[33m=\u001b[39m{figures\u001b[33m.\u001b[39mid} className\u001b[33m=\u001b[39m{\u001b[32m\"workout_image\"\u001b[39m}\u001b[33m>\u001b[39m{element}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mli\u001b[39m\u001b[33m>\u001b[39m)}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mul\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 30 |\u001b[39m                     {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 31 |\u001b[39m                         randomImgArray\u001b[33m.\u001b[39mforEach(element \u001b[33m=>\u001b[39m onclick(handleClick))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                                                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 32 |\u001b[39m                     }\u001b[0m\n\u001b[0m \u001b[90m 33 |\u001b[39m                         \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 34 |\u001b[39m                     )\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:63:32)\n    at constructor (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:358:12)\n    at JSXParserMixin.raise (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:3255:19)\n    at JSXParserMixin.unexpected (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:3285:16)\n    at JSXParserMixin.expect (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:3627:28)\n    at JSXParserMixin.jsxParseExpressionContainer (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:6839:10)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:6913:36)\n    at JSXParserMixin.jsxParseElement (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:6957:17)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:6969:19)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:10890:23)");

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _RandomImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _RandomImg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RandomImg__WEBPACK_IMPORTED_MODULE_3__);
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
/******/ 	__webpack_require__.h = () => ("1e4f60a36c3148e806d2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40ZDVlZGUyNWQ5MzE0MjMwMmVhNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRzJCO0FBQ0Q7QUFDb0I7QUFFUjtBQUNKO0FBQ2dCO0FBRWxELElBQU1LLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR1AsNERBQVUsQ0FBQ0ksU0FBUyxDQUFDO0FBRWxDLElBQU1JLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQVM7RUFDVixvQkFDSVQsMERBQUEsQ0FBQUEsdURBQUEsUUFBRSxTQUVFLGVBQUFBLDBEQUFBLENBQUNFLGlEQUFTLE1BQUUsQ0FDZCxDQUFDO0FBRVgsQ0FBQztBQUdETSxJQUFJLENBQUNJLE1BQU0sZUFBQ1osMERBQUEsQ0FBQ1MsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNoRHZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCIuLi9zY3NzL2luZGV4LnNjc3NcIlxyXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG4vL1xyXG4vLyBpbXBvcnQge1JhbmRvbUltZ30gZnJvbSBcIi4vUmFuZG9tSW1nXCI7XHJcbi8vIGltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG4vL1xyXG4vLyBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuLy9cclxuLy8gaWYgKGNvbnRhaW5lcikge1xyXG4vLyAgICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxuLy9cclxuLy8gICAgIGNvbnN0IEFwcCA9ICgpID0+IHtcclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgICAgY29zIGNvc1xyXG4vLyAgICAgICAgICAgICAgICAgPFJhbmRvbUltZyAvPlxyXG4vLyAgICAgICAgICAgICA8Lz5cclxuLy8gICAgICAgICApXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vXHJcbi8vICAgICByb290LnJlbmRlcig8QXBwLz4pO1xyXG4vL1xyXG4vLyB9XHJcblxyXG5cclxuaW1wb3J0IFwiLi4vc2Nzcy9pbmRleC5zY3NzXCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmltcG9ydCB7UmFuZG9tSW1nfSBmcm9tIFwiLi9SYW5kb21JbWdcIjtcclxuaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbmltcG9ydCBDYXRlZ29yeU9mRml1cmVzIGZyb20gXCIuL2NhdGVnb3J5T2ZGaXVyZXNcIjtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICBjb3MgY29zXHJcbiAgICAgICAgICAgICAgICA8UmFuZG9tSW1nIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcm9vdC5yZW5kZXIoPEFwcC8+KTtcclxuXHJcblxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWU0ZjYwYTM2YzMxNDhlODA2ZDJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiUmFuZG9tSW1nIiwiZmlndXJlcyIsIkNhdGVnb3J5T2ZGaXVyZXMiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=
self["webpackHotUpdatees6_react"](0,{

/***/ 47:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\Project\\js\\RandomImg.js: Unexpected token (37:81)\n\n\u001b[0m \u001b[90m 35 |\u001b[39m             \u001b[36mfor\u001b[39m (\u001b[36mlet\u001b[39m n \u001b[33m=\u001b[39m \u001b[35m0\u001b[39m\u001b[33m;\u001b[39m n \u001b[33m<\u001b[39m figures\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39m n\u001b[33m++\u001b[39m) {\u001b[0m\n\u001b[0m \u001b[90m 36 |\u001b[39m                 \u001b[36mif\u001b[39m (randomImgArray\u001b[33m.\u001b[39mlength \u001b[33m===\u001b[39m \u001b[35m6\u001b[39m) {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 37 |\u001b[39m                     \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mul\u001b[39m\u001b[33m>\u001b[39m{randomImgArray\u001b[33m.\u001b[39mmap((element) \u001b[33m=>\u001b[39m \u001b[33m<\u001b[39m\u001b[33mli\u001b[39m key\u001b[33m=\u001b[39m{figures\u001b[33m.\u001b[39m[name]\u001b[33m.\u001b[39mid} className\u001b[33m=\u001b[39m{\u001b[32m\"workout_image\"\u001b[39m}\u001b[33m>\u001b[39m{element}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mli\u001b[39m\u001b[33m>\u001b[39m)}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mul\u001b[39m\u001b[33m>\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 38 |\u001b[39m                 } \u001b[36melse\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 39 |\u001b[39m                     \u001b[36mconst\u001b[39m randomObj \u001b[33m=\u001b[39m \u001b[33mMath\u001b[39m\u001b[33m.\u001b[39mfloor(\u001b[33mMath\u001b[39m\u001b[33m.\u001b[39mrandom() \u001b[33m*\u001b[39m figures\u001b[33m.\u001b[39mlength)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 40 |\u001b[39m                     \u001b[90m// for (let j = 0; j <= randomImgArray.length; j++) {\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:63:32)\n    at constructor (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:358:12)\n    at JSXParserMixin.raise (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:3255:19)\n    at JSXParserMixin.unexpected (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:3285:16)\n    at JSXParserMixin.parseIdentifierName (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:12055:12)\n    at JSXParserMixin.parseIdentifier (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:12038:23)\n    at JSXParserMixin.parseMember (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:10959:28)\n    at JSXParserMixin.parseSubscript (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:10936:21)\n    at JSXParserMixin.parseSubscripts (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:10903:19)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:10894:17)");

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
/******/ 	__webpack_require__.h = () => ("b481cbe5f945503f79e1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kOWI2NzRiYWE0M2Q3Zjg0MGE4OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJCO0FBQ0Q7QUFDb0I7QUFFUjtBQUV0QyxJQUFNRyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUVoRCxJQUFJRixTQUFTLEVBQUU7RUFDWCxJQUFNRyxJQUFJLEdBQUdMLDREQUFVLENBQUNFLFNBQVMsQ0FBQztFQUVsQyxJQUFNSSxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0lBQ2Qsb0JBQ0lQLDBEQUFBLENBQUFBLHVEQUFBLFFBQUUsU0FFRSxlQUFBQSwwREFBQSxDQUFDRSxpREFBUyxNQUFFLENBQ2QsQ0FBQztFQUVYLENBQUM7RUFHREksSUFBSSxDQUFDSSxNQUFNLGVBQUNWLDBEQUFBLENBQUNPLEdBQUcsTUFBQyxDQUFDLENBQUM7QUFFdkI7Ozs7Ozs7O1VDdkJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zY3NzL2luZGV4LnNjc3NcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuaW1wb3J0IHtSYW5kb21JbWd9IGZyb20gXCIuL1JhbmRvbUltZ1wiO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcblxyXG5pZiAoY29udGFpbmVyKSB7XHJcbiAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgY29zIGNvc1xyXG4gICAgICAgICAgICAgICAgPFJhbmRvbUltZyAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJvb3QucmVuZGVyKDxBcHAvPik7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI0ODFjYmU1Zjk0NTUwM2Y3OWUxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIlJhbmRvbUltZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==
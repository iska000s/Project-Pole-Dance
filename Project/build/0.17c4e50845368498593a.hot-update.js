self["webpackHotUpdatees6_react"](0,{

/***/ 47:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\Project\\js\\RandomImg.js: JSX attributes must only be assigned a non-empty expression. (37:72)\n\n\u001b[0m \u001b[90m 35 |\u001b[39m             \u001b[36mfor\u001b[39m (\u001b[36mlet\u001b[39m n \u001b[33m=\u001b[39m \u001b[35m0\u001b[39m\u001b[33m;\u001b[39m n \u001b[33m<\u001b[39m figures\u001b[33m.\u001b[39mlength\u001b[33m;\u001b[39m n\u001b[33m++\u001b[39m) {\u001b[0m\n\u001b[0m \u001b[90m 36 |\u001b[39m                 \u001b[36mif\u001b[39m (randomImgArray\u001b[33m.\u001b[39mlength \u001b[33m===\u001b[39m \u001b[35m6\u001b[39m) {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 37 |\u001b[39m                     \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mul\u001b[39m\u001b[33m>\u001b[39m{randomImgArray\u001b[33m.\u001b[39mmap((element) \u001b[33m=>\u001b[39m \u001b[33m<\u001b[39m\u001b[33mli\u001b[39m key\u001b[33m=\u001b[39m{} className\u001b[33m=\u001b[39m{\u001b[32m\"workout_image\"\u001b[39m}\u001b[33m>\u001b[39m{element}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mli\u001b[39m\u001b[33m>\u001b[39m)}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mul\u001b[39m\u001b[33m>\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                                         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 38 |\u001b[39m                 } \u001b[36melse\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 39 |\u001b[39m                     \u001b[36mconst\u001b[39m randomObj \u001b[33m=\u001b[39m \u001b[33mMath\u001b[39m\u001b[33m.\u001b[39mfloor(\u001b[33mMath\u001b[39m\u001b[33m.\u001b[39mrandom() \u001b[33m*\u001b[39m figures\u001b[33m.\u001b[39mlength)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 40 |\u001b[39m                     \u001b[90m// for (let j = 0; j <= randomImgArray.length; j++) {\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:63:32)\n    at constructor (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:358:12)\n    at JSXParserMixin.raise (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:3255:19)\n    at JSXParserMixin.jsxParseAttributeValue (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:6804:16)\n    at JSXParserMixin.jsxParseAttribute (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:6855:38)\n    at JSXParserMixin.jsxParseOpeningElementAfterName (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:6869:28)\n    at JSXParserMixin.jsxParseOpeningElementAt (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:6864:17)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:6888:33)\n    at JSXParserMixin.jsxParseElement (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:6957:17)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:6969:19)");

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





var container = document.getElementById("app");
if (container) {
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
  var App = function App() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, "cos cos", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_RandomImg__WEBPACK_IMPORTED_MODULE_3__.RandomImg, {
      imgObj: _figures__WEBPACK_IMPORTED_MODULE_4__.figures
    }));
  };
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(App, null));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("18dd53c1a77bec8db6e6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xN2M0ZTUwODQ1MzY4NDk4NTkzYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQjtBQUNEO0FBQ29CO0FBRVI7QUFDSjtBQUVsQyxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUVoRCxJQUFJRixTQUFTLEVBQUU7RUFDWCxJQUFNRyxJQUFJLEdBQUdOLDREQUFVLENBQUNHLFNBQVMsQ0FBQztFQUVsQyxJQUFNSSxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0lBQ2Qsb0JBQ0lSLDBEQUFBLENBQUFBLHVEQUFBLFFBQUUsU0FFRSxlQUFBQSwwREFBQSxDQUFDRSxpREFBUztNQUFDUyxNQUFNLEVBQUlSLDZDQUFPQTtJQUFDLENBQUUsQ0FDakMsQ0FBQztFQUVYLENBQUM7RUFHREksSUFBSSxDQUFDSyxNQUFNLGVBQUNaLDBEQUFBLENBQUNRLEdBQUcsTUFBQyxDQUFDLENBQUM7QUFFdkI7Ozs7Ozs7O1VDeEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zY3NzL2luZGV4LnNjc3NcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuaW1wb3J0IHtSYW5kb21JbWd9IGZyb20gXCIuL1JhbmRvbUltZ1wiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5cclxuaWYgKGNvbnRhaW5lcikge1xyXG4gICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIGNvcyBjb3NcclxuICAgICAgICAgICAgICAgIDxSYW5kb21JbWcgaW1nT2JqID0ge2ZpZ3VyZXN9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcm9vdC5yZW5kZXIoPEFwcC8+KTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMThkZDUzYzFhNzdiZWM4ZGI2ZTZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiUmFuZG9tSW1nIiwiZmlndXJlcyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiaW1nT2JqIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==
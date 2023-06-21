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
    };
    ctImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FigureCategory, null));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, categoryArray.map(function (element) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "figure"
    }, element);
  }));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0ac781b428d850f65f53")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43YmVlYjc1NDU2NDk0MzkyZjBiZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1E7QUFDVTtBQUU1QyxJQUFNRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBRWhELElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0VBQ2hDLElBQUlILE1BQU0sRUFBRTtJQUNSLElBQU1JLEtBQUssR0FBR0wsNERBQVUsQ0FBQ0MsTUFBTSxDQUFDO0lBRWhDLElBQU1HLGVBQWMsR0FBRyxTQUFqQkEsZUFBY0EsQ0FBQSxFQUFTO01BQ3pCLElBQU1FLGFBQWEsR0FBRyxFQUFFO01BRXhCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHUiw2Q0FBTyxDQUFDUyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQ3JDLElBQUlSLDZDQUFPLENBQUNRLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEtBQUssVUFBVSxFQUFFO1VBQ3BDLElBQU1DLE1BQU0sR0FBR1gsNkNBQU8sQ0FBQ1EsQ0FBQyxDQUFDLENBQUNJLEdBQUc7VUFDN0JMLGFBQWEsQ0FBQ00sSUFBSSxDQUFDRixNQUFNLENBQUM7UUFDOUI7TUFDSjtJQUNKLENBQUM7SUFDREwsS0FBSyxDQUFDUSxNQUFNLGVBQUNmLDBEQUFBLENBQUNpQixlQUFjLE1BQUMsQ0FBQyxDQUFDO0VBRW5DO0VBQ0Esb0JBQU9qQiwwREFBQSxhQUFLUSxhQUFhLENBQUNVLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO0lBQUEsb0JBQUluQiwwREFBQTtNQUFJb0IsU0FBUyxFQUFFO0lBQVMsR0FBRUQsT0FBWSxDQUFDO0VBQUEsRUFBTSxDQUFDO0FBQzNGLENBQUM7Ozs7Ozs7O1VDeEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9GaWd1cmVDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGltZ1NpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19jaGFpclwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIGlmIChpbWdTaXQpIHtcclxuICAgICAgICBjb25zdCBjdEltZyA9IGNyZWF0ZVJvb3QoaW1nU2l0KTtcclxuXHJcbiAgICAgICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ3NpZWR6xIVjZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjdEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5Lz4pO1xyXG5cclxuICAgIH1cclxuICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBhYzc4MWI0MjhkODUwZjY1ZjUzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmlndXJlcyIsImNyZWF0ZVJvb3QiLCJpbWdTaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJGaWd1cmVDYXRlZ29yeSIsImN0SW1nIiwiY2F0ZWdvcnlBcnJheSIsImkiLCJsZW5ndGgiLCJjYXRlZ29yeSIsIm5ld1NyYyIsInNyYyIsInB1c2giLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiX0ZpZ3VyZUNhdGVnb3J5IiwibWFwIiwiZWxlbWVudCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=
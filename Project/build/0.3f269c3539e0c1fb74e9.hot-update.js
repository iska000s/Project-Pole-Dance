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
      for (var i = 0; i <= _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
        var categoryFigure = "".concat(_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category);
        if (categoryFigure == "siedzące") {
          categoryArray.push(_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].src);
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d7edfef9b303152288db")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zZjI2OWMzNTM5ZTBjMWZiNzRlOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1E7QUFDVTtBQUU1QyxJQUFNRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBRWhELElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0VBQ2hDLElBQUlILE1BQU0sRUFBRTtJQUNSLElBQU1JLEtBQUssR0FBR0wsNERBQVUsQ0FBQ0MsTUFBTSxDQUFDO0lBRWhDLElBQU1HLGVBQWMsR0FBRyxTQUFqQkEsZUFBY0EsQ0FBQSxFQUFTO01BQ3pCLElBQU1FLGFBQWEsR0FBRyxFQUFFO01BRXhCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJUiw2Q0FBTyxDQUFDUyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQ3RDLElBQU1FLGNBQWMsTUFBQUMsTUFBQSxDQUFNWCw2Q0FBTyxDQUFDUSxDQUFDLENBQUMsQ0FBQ0ksUUFBUSxDQUFFO1FBQy9DLElBQUlGLGNBQWMsSUFBSSxVQUFVLEVBQUU7VUFDOUJILGFBQWEsQ0FBQ00sSUFBSSxDQUFDYiw2Q0FBTyxDQUFDUSxDQUFDLENBQUMsQ0FBQ00sR0FBRyxDQUFDO1FBQ3RDO01BQ0o7TUFDQSxvQkFBT2YsMERBQUEsYUFBS1EsYUFBYSxDQUFDUyxHQUFHLENBQUMsVUFBQUMsT0FBTztRQUFBLG9CQUFJbEIsMERBQUE7VUFBSW1CLFNBQVMsRUFBRTtRQUFTLEdBQUVELE9BQVksQ0FBQztNQUFBLEVBQU0sQ0FBQztJQUMzRixDQUFDO0lBRURYLEtBQUssQ0FBQ2EsTUFBTSxlQUFDcEIsMERBQUEsQ0FBQ3FCLGVBQWMsTUFBQyxDQUFDLENBQUM7RUFDbkM7QUFDSixDQUFDOzs7Ozs7OztVQ3hCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvRmlndXJlQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5jb25zdCBpbWdTaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfY2hhaXJcIik7XHJcblxyXG5leHBvcnQgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBpZiAoaW1nU2l0KSB7XHJcbiAgICAgICAgY29uc3QgY3RJbWcgPSBjcmVhdGVSb290KGltZ1NpdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5RmlndXJlID0gYCR7ZmlndXJlc1tpXS5jYXRlZ29yeX1gXHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlGaWd1cmUgPT0gXCJzaWVkesSFY2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChmaWd1cmVzW2ldLnNyYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5Lz4pO1xyXG4gICAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ3ZWRmZWY5YjMwMzE1MjI4OGRiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmlndXJlcyIsImNyZWF0ZVJvb3QiLCJpbWdTaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJGaWd1cmVDYXRlZ29yeSIsImN0SW1nIiwiY2F0ZWdvcnlBcnJheSIsImkiLCJsZW5ndGgiLCJjYXRlZ29yeUZpZ3VyZSIsImNvbmNhdCIsImNhdGVnb3J5IiwicHVzaCIsInNyYyIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwicmVuZGVyIiwiX0ZpZ3VyZUNhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==
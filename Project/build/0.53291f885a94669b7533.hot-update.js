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
        var categoryFigure = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category;
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
/******/ 	__webpack_require__.h = () => ("f2d378134dd65fadd492")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MzI5MWY4ODVhOTQ2NjliNzUzMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1E7QUFDVTtBQUU1QyxJQUFNRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBRWhELElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0VBQ2hDLElBQUlILE1BQU0sRUFBRTtJQUNSLElBQU1JLEtBQUssR0FBR0wsNERBQVUsQ0FBQ0MsTUFBTSxDQUFDO0lBRWhDLElBQU1HLGVBQWMsR0FBRyxTQUFqQkEsZUFBY0EsQ0FBQSxFQUFTO01BQ3pCLElBQU1FLGFBQWEsR0FBRyxFQUFFO01BRXhCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJUiw2Q0FBTyxDQUFDUyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQ3RDLElBQU1FLGNBQWMsR0FBR1YsNkNBQU8sQ0FBQ1EsQ0FBQyxDQUFDLENBQUNHLFFBQVE7UUFDMUMsSUFBSUQsY0FBYyxJQUFJLFVBQVUsRUFBRTtVQUM5QkgsYUFBYSxDQUFDSyxJQUFJLENBQUNaLDZDQUFPLENBQUNRLENBQUMsQ0FBQyxDQUFDSyxHQUFHLENBQUM7UUFDdEM7TUFDSjtNQUNBLG9CQUFPZCwwREFBQSxhQUFLUSxhQUFhLENBQUNRLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO1FBQUEsb0JBQUlqQiwwREFBQTtVQUFJa0IsU0FBUyxFQUFFO1FBQVMsR0FBRUQsT0FBWSxDQUFDO01BQUEsRUFBTSxDQUFDO0lBQzNGLENBQUM7SUFFRFYsS0FBSyxDQUFDWSxNQUFNLGVBQUNuQiwwREFBQSxDQUFDb0IsZUFBYyxNQUFDLENBQUMsQ0FBQztFQUNuQztBQUNKLENBQUM7Ozs7Ozs7O1VDeEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9GaWd1cmVDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGltZ1NpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19jaGFpclwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIGlmIChpbWdTaXQpIHtcclxuICAgICAgICBjb25zdCBjdEltZyA9IGNyZWF0ZVJvb3QoaW1nU2l0KTtcclxuXHJcbiAgICAgICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlGaWd1cmUgPSBmaWd1cmVzW2ldLmNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlGaWd1cmUgPT0gXCJzaWVkesSFY2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChmaWd1cmVzW2ldLnNyYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5Lz4pO1xyXG4gICAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImYyZDM3ODEzNGRkNjVmYWRkNDkyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmlndXJlcyIsImNyZWF0ZVJvb3QiLCJpbWdTaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJGaWd1cmVDYXRlZ29yeSIsImN0SW1nIiwiY2F0ZWdvcnlBcnJheSIsImkiLCJsZW5ndGgiLCJjYXRlZ29yeUZpZ3VyZSIsImNhdGVnb3J5IiwicHVzaCIsInNyYyIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwicmVuZGVyIiwiX0ZpZ3VyZUNhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==
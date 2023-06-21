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
var imgTwin = document.querySelector(".figures_twin");
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
  if (imgTwin) {
    var twinImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgTwin);
    var FigureCategoryTwin = function FigureCategoryTwin() {
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
    twinImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FigureCategoryTwin, null));
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5b8df4197aeca2c6d1fe")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xYTMyZDVjOGNiOTUxZmMzMDg5Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1E7QUFDVTtBQUU1QyxJQUFNRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQ3ZELElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBRWhELElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0VBQ2hDLElBQUlKLE1BQU0sRUFBRTtJQUNSLElBQU1LLEtBQUssR0FBR04sNERBQVUsQ0FBQ0MsTUFBTSxDQUFDO0lBRWhDLElBQU1JLGVBQWMsR0FBRyxTQUFqQkEsZUFBY0EsQ0FBQSxFQUFTO01BQ3pCLElBQU1FLGFBQWEsR0FBRyxFQUFFO01BRXhCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHVCw2Q0FBTyxDQUFDVSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQ3JDLElBQUlULDZDQUFPLENBQUNTLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEtBQUssVUFBVSxFQUFFO1VBQ3BDLElBQU1DLE1BQU0sR0FBR1osNkNBQU8sQ0FBQ1MsQ0FBQyxDQUFDLENBQUNJLEdBQUc7VUFDN0JMLGFBQWEsQ0FBQ00sSUFBSSxDQUFDRixNQUFNLENBQUM7UUFDOUI7TUFDSjtNQUNBLG9CQUFPYiwwREFBQSxhQUFLUyxhQUFhLENBQUNRLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO1FBQUEsb0JBQUlsQiwwREFBQTtVQUFJbUIsU0FBUyxFQUFFO1FBQVMsR0FBRUQsT0FBWSxDQUFDO01BQUEsRUFBTSxDQUFDO0lBQzNGLENBQUM7SUFFRFYsS0FBSyxDQUFDWSxNQUFNLGVBQUNwQiwwREFBQSxDQUFDcUIsZUFBYyxNQUFDLENBQUMsQ0FBQztFQUNuQztFQUNBLElBQUlmLE9BQU8sRUFBRTtJQUNULElBQU1nQixPQUFPLEdBQUdwQiw0REFBVSxDQUFDSSxPQUFPLENBQUM7SUFFbkMsSUFBTWlCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUEsRUFBUztNQUM3QixJQUFNZCxhQUFhLEdBQUcsRUFBRTtNQUV4QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1QsNkNBQU8sQ0FBQ1UsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtRQUNyQyxJQUFJVCw2Q0FBTyxDQUFDUyxDQUFDLENBQUMsQ0FBQ0UsUUFBUSxLQUFLLFVBQVUsRUFBRTtVQUNwQyxJQUFNQyxNQUFNLEdBQUdaLDZDQUFPLENBQUNTLENBQUMsQ0FBQyxDQUFDSSxHQUFHO1VBQzdCTCxhQUFhLENBQUNNLElBQUksQ0FBQ0YsTUFBTSxDQUFDO1FBQzlCO01BQ0o7TUFDQSxvQkFBT2IsMERBQUEsYUFBS1MsYUFBYSxDQUFDUSxHQUFHLENBQUMsVUFBQUMsT0FBTztRQUFBLG9CQUFJbEIsMERBQUE7VUFBSW1CLFNBQVMsRUFBRTtRQUFTLEdBQUVELE9BQVksQ0FBQztNQUFBLEVBQU0sQ0FBQztJQUMzRixDQUFDO0lBRURJLE9BQU8sQ0FBQ0YsTUFBTSxlQUFDcEIsMERBQUEsQ0FBQ3VCLGtCQUFrQixNQUFDLENBQUMsQ0FBQztFQUN6QztBQUNKLENBQUM7Ozs7Ozs7O1VDMUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9GaWd1cmVDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGltZ1NpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19jaGFpclwiKTtcclxuY29uc3QgaW1nVHdpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc190d2luXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZpZ3VyZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgaWYgKGltZ1NpdCkge1xyXG4gICAgICAgIGNvbnN0IGN0SW1nID0gY3JlYXRlUm9vdChpbWdTaXQpO1xyXG5cclxuICAgICAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnc2llZHrEhWNlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3RJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxuICAgIH1cclxuICAgIGlmIChpbWdUd2luKSB7XHJcbiAgICAgICAgY29uc3QgdHdpbkltZyA9IGNyZWF0ZVJvb3QoaW1nVHdpbik7XHJcblxyXG4gICAgICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5VHdpbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnc2llZHrEhWNlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHdpbkltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5VHdpbi8+KTtcclxuICAgIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1YjhkZjQxOTdhZWNhMmM2ZDFmZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImZpZ3VyZXMiLCJjcmVhdGVSb290IiwiaW1nU2l0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW1nVHdpbiIsIkZpZ3VyZUNhdGVnb3J5IiwiY3RJbWciLCJjYXRlZ29yeUFycmF5IiwiaSIsImxlbmd0aCIsImNhdGVnb3J5IiwibmV3U3JjIiwic3JjIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwicmVuZGVyIiwiX0ZpZ3VyZUNhdGVnb3J5IiwidHdpbkltZyIsIkZpZ3VyZUNhdGVnb3J5VHdpbiJdLCJzb3VyY2VSb290IjoiIn0=
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
var imgTwine = document.querySelector(".figures_twine");
var imgInvert = document.querySelector(".figures_twine");
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
  if (imgTwine) {
    var twineImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgTwine);
    var FigureCategoryTwin = function FigureCategoryTwin() {
      var categoryArray = [];
      for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
        if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'szpagaty') {
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
    twineImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FigureCategoryTwin, null));
  }
  if (imgInvert) {
    var invertImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgInvert);
    var _FigureCategoryTwin = function _FigureCategoryTwin() {
      var categoryArray = [];
      for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
        if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'szpagaty') {
          var newSrc = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].src;
          categoryArray.push(newSrc);
        }
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, categoryArray.map(function (element) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          className: "invert"
        }, element);
      }));
    };
    invertImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FigureCategoryTwin, null));
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0e683177a1cd0898ccb6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41YmQ3MzliYmFjNTg1NjBkM2Y2NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1E7QUFDVTtBQUU1QyxJQUFNRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQ3ZELElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDekQsSUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUVuRCxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUEsRUFBUztFQUNoQyxJQUFJTCxNQUFNLEVBQUU7SUFDUixJQUFNTSxLQUFLLEdBQUdQLDREQUFVLENBQUNDLE1BQU0sQ0FBQztJQUVoQyxJQUFNSyxlQUFjLEdBQUcsU0FBakJBLGVBQWNBLENBQUEsRUFBUztNQUN6QixJQUFNRSxhQUFhLEdBQUcsRUFBRTtNQUV4QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1YsNkNBQU8sQ0FBQ1csTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtRQUNyQyxJQUFJViw2Q0FBTyxDQUFDVSxDQUFDLENBQUMsQ0FBQ0UsUUFBUSxLQUFLLFVBQVUsRUFBRTtVQUNwQyxJQUFNQyxNQUFNLEdBQUdiLDZDQUFPLENBQUNVLENBQUMsQ0FBQyxDQUFDSSxHQUFHO1VBQzdCTCxhQUFhLENBQUNNLElBQUksQ0FBQ0YsTUFBTSxDQUFDO1FBQzlCO01BQ0o7TUFDQSxvQkFBT2QsMERBQUEsYUFBS1UsYUFBYSxDQUFDUSxHQUFHLENBQUMsVUFBQUMsT0FBTztRQUFBLG9CQUFJbkIsMERBQUE7VUFBSW9CLFNBQVMsRUFBRTtRQUFTLEdBQUVELE9BQVksQ0FBQztNQUFBLEVBQU0sQ0FBQztJQUMzRixDQUFDO0lBRURWLEtBQUssQ0FBQ1ksTUFBTSxlQUFDckIsMERBQUEsQ0FBQ3NCLGVBQWMsTUFBQyxDQUFDLENBQUM7RUFDbkM7RUFFQSxJQUFJaEIsUUFBUSxFQUFFO0lBQ1YsSUFBTWlCLFFBQVEsR0FBR3JCLDREQUFVLENBQUNJLFFBQVEsQ0FBQztJQUVyQyxJQUFNa0Isa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUFTO01BQzdCLElBQU1kLGFBQWEsR0FBRyxFQUFFO01BRXhCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHViw2Q0FBTyxDQUFDVyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQ3JDLElBQUlWLDZDQUFPLENBQUNVLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEtBQUssVUFBVSxFQUFFO1VBQ3BDLElBQU1DLE1BQU0sR0FBR2IsNkNBQU8sQ0FBQ1UsQ0FBQyxDQUFDLENBQUNJLEdBQUc7VUFDN0JMLGFBQWEsQ0FBQ00sSUFBSSxDQUFDRixNQUFNLENBQUM7UUFDOUI7TUFDSjtNQUNBLG9CQUFPZCwwREFBQSxhQUFLVSxhQUFhLENBQUNRLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO1FBQUEsb0JBQUluQiwwREFBQTtVQUFJb0IsU0FBUyxFQUFFO1FBQVMsR0FBRUQsT0FBWSxDQUFDO01BQUEsRUFBTSxDQUFDO0lBQzNGLENBQUM7SUFFREksUUFBUSxDQUFDRixNQUFNLGVBQUNyQiwwREFBQSxDQUFDd0Isa0JBQWtCLE1BQUMsQ0FBQyxDQUFDO0VBQzFDO0VBRUEsSUFBSWpCLFNBQVMsRUFBRTtJQUNYLElBQU1rQixTQUFTLEdBQUd2Qiw0REFBVSxDQUFDSyxTQUFTLENBQUM7SUFFdkMsSUFBTWlCLG1CQUFrQixHQUFHLFNBQXJCQSxtQkFBa0JBLENBQUEsRUFBUztNQUM3QixJQUFNZCxhQUFhLEdBQUcsRUFBRTtNQUV4QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1YsNkNBQU8sQ0FBQ1csTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtRQUNyQyxJQUFJViw2Q0FBTyxDQUFDVSxDQUFDLENBQUMsQ0FBQ0UsUUFBUSxLQUFLLFVBQVUsRUFBRTtVQUNwQyxJQUFNQyxNQUFNLEdBQUdiLDZDQUFPLENBQUNVLENBQUMsQ0FBQyxDQUFDSSxHQUFHO1VBQzdCTCxhQUFhLENBQUNNLElBQUksQ0FBQ0YsTUFBTSxDQUFDO1FBQzlCO01BQ0o7TUFDQSxvQkFBT2QsMERBQUEsYUFBS1UsYUFBYSxDQUFDUSxHQUFHLENBQUMsVUFBQUMsT0FBTztRQUFBLG9CQUFJbkIsMERBQUE7VUFBSW9CLFNBQVMsRUFBRTtRQUFTLEdBQUVELE9BQVksQ0FBQztNQUFBLEVBQU0sQ0FBQztJQUMzRixDQUFDO0lBRURNLFNBQVMsQ0FBQ0osTUFBTSxlQUFDckIsMERBQUEsQ0FBQzBCLG1CQUFrQixNQUFDLENBQUMsQ0FBQztFQUMzQztBQUNKLENBQUM7Ozs7Ozs7O1VDOUREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9GaWd1cmVDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGltZ1NpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19jaGFpclwiKTtcclxuY29uc3QgaW1nVHdpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfdHdpbmVcIik7XHJcbmNvbnN0IGltZ0ludmVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc190d2luZVwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIGlmIChpbWdTaXQpIHtcclxuICAgICAgICBjb25zdCBjdEltZyA9IGNyZWF0ZVJvb3QoaW1nU2l0KTtcclxuXHJcbiAgICAgICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ3NpZWR6xIVjZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0SW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGltZ1R3aW5lKSB7XHJcbiAgICAgICAgY29uc3QgdHdpbmVJbWcgPSBjcmVhdGVSb290KGltZ1R3aW5lKTtcclxuXHJcbiAgICAgICAgY29uc3QgRmlndXJlQ2F0ZWdvcnlUd2luID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdzenBhZ2F0eScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHR3aW5lSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnlUd2luLz4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbWdJbnZlcnQpIHtcclxuICAgICAgICBjb25zdCBpbnZlcnRJbWcgPSBjcmVhdGVSb290KGltZ0ludmVydCk7XHJcblxyXG4gICAgICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5VHdpbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnc3pwYWdhdHknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImludmVydFwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnZlcnRJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeVR3aW4vPik7XHJcbiAgICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGU2ODMxNzdhMWNkMDg5OGNjYjZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJmaWd1cmVzIiwiY3JlYXRlUm9vdCIsImltZ1NpdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImltZ1R3aW5lIiwiaW1nSW52ZXJ0IiwiRmlndXJlQ2F0ZWdvcnkiLCJjdEltZyIsImNhdGVnb3J5QXJyYXkiLCJpIiwibGVuZ3RoIiwiY2F0ZWdvcnkiLCJuZXdTcmMiLCJzcmMiLCJwdXNoIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJyZW5kZXIiLCJfRmlndXJlQ2F0ZWdvcnkiLCJ0d2luZUltZyIsIkZpZ3VyZUNhdGVnb3J5VHdpbiIsImludmVydEltZyIsIl9GaWd1cmVDYXRlZ29yeVR3aW4iXSwic291cmNlUm9vdCI6IiJ9
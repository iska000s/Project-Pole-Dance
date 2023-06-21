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
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8eeb3810b480ba8b0a36")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yOTJiNWJiM2RkMjA1NWJjNmE1My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1E7QUFDVTtBQUU1QyxJQUFNRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQ3ZELElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFbEQsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQVM7RUFDaEMsSUFBSUosTUFBTSxFQUFFO0lBQ1IsSUFBTUssS0FBSyxHQUFHTiw0REFBVSxDQUFDQyxNQUFNLENBQUM7SUFFaEMsSUFBTUksZUFBYyxHQUFHLFNBQWpCQSxlQUFjQSxDQUFBLEVBQVM7TUFDekIsSUFBTUUsYUFBYSxHQUFHLEVBQUU7TUFFeEIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdULDZDQUFPLENBQUNVLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBSVQsNkNBQU8sQ0FBQ1MsQ0FBQyxDQUFDLENBQUNFLFFBQVEsS0FBSyxVQUFVLEVBQUU7VUFDcEMsSUFBTUMsTUFBTSxHQUFHWiw2Q0FBTyxDQUFDUyxDQUFDLENBQUMsQ0FBQ0ksR0FBRztVQUM3QkwsYUFBYSxDQUFDTSxJQUFJLENBQUNGLE1BQU0sQ0FBQztRQUM5QjtNQUNKO01BQ0Esb0JBQU9iLDBEQUFBLGFBQUtTLGFBQWEsQ0FBQ1EsR0FBRyxDQUFDLFVBQUFDLE9BQU87UUFBQSxvQkFBSWxCLDBEQUFBO1VBQUltQixTQUFTLEVBQUU7UUFBUyxHQUFFRCxPQUFZLENBQUM7TUFBQSxFQUFNLENBQUM7SUFDM0YsQ0FBQztJQUVEVixLQUFLLENBQUNZLE1BQU0sZUFBQ3BCLDBEQUFBLENBQUNxQixlQUFjLE1BQUMsQ0FBQyxDQUFDO0VBQ25DO0VBRUEsSUFBSWYsUUFBUSxFQUFFO0lBQ1YsSUFBTWdCLFFBQVEsR0FBR3BCLDREQUFVLENBQUNJLFFBQVEsQ0FBQztJQUVyQyxJQUFNaUIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUFTO01BQzdCLElBQU1kLGFBQWEsR0FBRyxFQUFFO01BRXhCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHVCw2Q0FBTyxDQUFDVSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQ3JDLElBQUlULDZDQUFPLENBQUNTLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEtBQUssVUFBVSxFQUFFO1VBQ3BDLElBQU1DLE1BQU0sR0FBR1osNkNBQU8sQ0FBQ1MsQ0FBQyxDQUFDLENBQUNJLEdBQUc7VUFDN0JMLGFBQWEsQ0FBQ00sSUFBSSxDQUFDRixNQUFNLENBQUM7UUFDOUI7TUFDSjtNQUNBLG9CQUFPYiwwREFBQSxhQUFLUyxhQUFhLENBQUNRLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO1FBQUEsb0JBQUlsQiwwREFBQTtVQUFJbUIsU0FBUyxFQUFFO1FBQVMsR0FBRUQsT0FBWSxDQUFDO01BQUEsRUFBTSxDQUFDO0lBQzNGLENBQUM7SUFFREksUUFBUSxDQUFDRixNQUFNLGVBQUNwQiwwREFBQSxDQUFDdUIsa0JBQWtCLE1BQUMsQ0FBQyxDQUFDO0VBQzFDO0FBQ0osQ0FBQzs7Ozs7Ozs7VUMzQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL0ZpZ3VyZUNhdGVnb3J5LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuY29uc3QgaW1nU2l0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2NoYWlyXCIpO1xyXG5jb25zdCBpbWdUd2luZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc190d2luZVwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIGlmIChpbWdTaXQpIHtcclxuICAgICAgICBjb25zdCBjdEltZyA9IGNyZWF0ZVJvb3QoaW1nU2l0KTtcclxuXHJcbiAgICAgICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ3NpZWR6xIVjZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0SW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGltZ1R3aW5lKSB7XHJcbiAgICAgICAgY29uc3QgdHdpbmVJbWcgPSBjcmVhdGVSb290KGltZ1R3aW5lKTtcclxuXHJcbiAgICAgICAgY29uc3QgRmlndXJlQ2F0ZWdvcnlUd2luID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdzenBhZ2F0eScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHR3aW5lSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnlUd2luLz4pO1xyXG4gICAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhlZWIzODEwYjQ4MGJhOGIwYTM2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmlndXJlcyIsImNyZWF0ZVJvb3QiLCJpbWdTaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbWdUd2luZSIsIkZpZ3VyZUNhdGVnb3J5IiwiY3RJbWciLCJjYXRlZ29yeUFycmF5IiwiaSIsImxlbmd0aCIsImNhdGVnb3J5IiwibmV3U3JjIiwic3JjIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwicmVuZGVyIiwiX0ZpZ3VyZUNhdGVnb3J5IiwidHdpbmVJbWciLCJGaWd1cmVDYXRlZ29yeVR3aW4iXSwic291cmNlUm9vdCI6IiJ9
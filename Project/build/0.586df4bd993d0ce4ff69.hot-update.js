"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);



var imgSit = document.querySelector(".figures_chair");
var imgTwine = document.querySelector(".figures_twine");
var imgInvert = document.querySelector(".figures_invert");
var imgHandstand = document.querySelector(".figures_handstand");
var imgHandspring = document.querySelector(".figures_handspring");
var imgStrength = document.querySelector(".figures_strength");
if (imgSit) {
  var ctImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgSit);
  var Click = function Click(e) {
    e.style.height =  true ? e.style.height = "200px" : 0;
  };
  var FigureCategory = function FigureCategory() {
    var categoryArray = [];
    for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'siedzące') {
        var newSrc = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].src;
        categoryArray.push(newSrc);
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      style: {
        height: "200px"
      },
      onClick: Click
    }, categoryArray.map(function (element) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "figure"
      }, element);
    }));
    // return <ul>{categoryArray.map(element => <li className={"figure"}>{element}</li>)}</ul>;
  };

  ctImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FigureCategory, null));
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
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'inverty') {
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
  invertImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FigureCategoryTwin, null));
}
if (imgHandstand) {
  var handstandImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgHandstand);
  var _FigureCategory = function _FigureCategory() {
    var categoryArray = [];
    for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'handstandy') {
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
  handstandImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FigureCategory, null));
}
if (imgHandspring) {
  var handspringImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgHandspring);
  var _FigureCategory2 = function _FigureCategory2() {
    var categoryArray = [];
    for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'handspringi') {
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
  handspringImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FigureCategory2, null));
}
if (imgStrength) {
  var strengthImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgStrength);
  var _FigureCategory3 = function _FigureCategory3() {
    var categoryArray = [];
    for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'siłowe') {
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
  strengthImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FigureCategory3, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("FigureCategory");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7e5836efcb56e28f5375")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtNQUFTLEdBQUVELE9BQVksQ0FBQztJQUFBLEVBQU0sQ0FBQztFQUMzRixDQUFDO0VBRURTLGFBQWEsQ0FBQ1AsTUFBTSxlQUFDN0IsMERBQUEsQ0FBQ3FDLGdCQUFjLE1BQUMsQ0FBQyxDQUFDO0FBQzNDO0FBR0EsSUFBSTNCLFdBQVcsRUFBRTtFQUNiLElBQU00QixXQUFXLEdBQUdwQyw0REFBVSxDQUFDUSxXQUFXLENBQUM7RUFFM0MsSUFBTU0sZ0JBQWMsR0FBRyxTQUFqQkEsZ0JBQWNBLENBQUEsRUFBUztJQUN6QixJQUFNQyxhQUFhLEdBQUcsRUFBRTtJQUV4QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2pCLDZDQUFPLENBQUNrQixNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ3JDLElBQUlqQiw2Q0FBTyxDQUFDaUIsQ0FBQyxDQUFDLENBQUNFLFFBQVEsS0FBSyxRQUFRLEVBQUU7UUFDbEMsSUFBTUMsTUFBTSxHQUFHcEIsNkNBQU8sQ0FBQ2lCLENBQUMsQ0FBQyxDQUFDSSxHQUFHO1FBQzdCTCxhQUFhLENBQUNNLElBQUksQ0FBQ0YsTUFBTSxDQUFDO01BQzlCO0lBQ0o7SUFDQSxvQkFBT3JCLDBEQUFBLGFBQUtpQixhQUFhLENBQUNTLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO01BQUEsb0JBQUkzQiwwREFBQTtRQUFJNEIsU0FBUyxFQUFFO01BQVMsR0FBRUQsT0FBWSxDQUFDO0lBQUEsRUFBTSxDQUFDO0VBQzNGLENBQUM7RUFFRFcsV0FBVyxDQUFDVCxNQUFNLGVBQUM3QiwwREFBQSxDQUFDdUMsZ0JBQWMsTUFBQyxDQUFDLENBQUM7QUFDekM7QUFFQSxpRUFBZSxnQkFBZ0I7Ozs7Ozs7O1VDOUgvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvRmlndXJlQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5jb25zdCBpbWdTaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfY2hhaXJcIik7XHJcbmNvbnN0IGltZ1R3aW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX3R3aW5lXCIpO1xyXG5jb25zdCBpbWdJbnZlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfaW52ZXJ0XCIpO1xyXG5jb25zdCBpbWdIYW5kc3RhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfaGFuZHN0YW5kXCIpO1xyXG5jb25zdCBpbWdIYW5kc3ByaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2hhbmRzcHJpbmdcIik7XHJcbmNvbnN0IGltZ1N0cmVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX3N0cmVuZ3RoXCIpO1xyXG5cclxuaWYgKGltZ1NpdCkge1xyXG4gICAgY29uc3QgY3RJbWcgPSBjcmVhdGVSb290KGltZ1NpdCk7XHJcblxyXG4gICAgY29uc3QgQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUuc3R5bGUuaGVpZ2h0ID0gXCI5MDBweFwiID8gZS5zdHlsZS5oZWlnaHQgPSBcIjIwMHB4XCIgOiBlLnN0eWxlLmhlaWdodCA9IFwiOTAwcHhcIjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnc2llZHrEhWNlJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPHVsIHN0eWxlPXt7aGVpZ2h0OiBcIjIwMHB4XCJ9fSBvbkNsaWNrPXtDbGlja30+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpICAgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgLy8gcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcblxyXG4gICAgY3RJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxufVxyXG5cclxuaWYgKGltZ1R3aW5lKSB7XHJcbiAgICBjb25zdCB0d2luZUltZyA9IGNyZWF0ZVJvb3QoaW1nVHdpbmUpO1xyXG5cclxuICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5VHdpbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnc3pwYWdhdHknKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIHR3aW5lSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnlUd2luLz4pO1xyXG59XHJcblxyXG5pZiAoaW1nSW52ZXJ0KSB7XHJcbiAgICBjb25zdCBpbnZlcnRJbWcgPSBjcmVhdGVSb290KGltZ0ludmVydCk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnlUd2luID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdpbnZlcnR5Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgIH1cclxuXHJcbiAgICBpbnZlcnRJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeVR3aW4vPik7XHJcbn1cclxuXHJcblxyXG5pZiAoaW1nSGFuZHN0YW5kKSB7XHJcbiAgICBjb25zdCBoYW5kc3RhbmRJbWcgPSBjcmVhdGVSb290KGltZ0hhbmRzdGFuZCk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ2hhbmRzdGFuZHknKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRzdGFuZEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5Lz4pO1xyXG59XHJcblxyXG5pZiAoaW1nSGFuZHNwcmluZykge1xyXG4gICAgY29uc3QgaGFuZHNwcmluZ0ltZyA9IGNyZWF0ZVJvb3QoaW1nSGFuZHNwcmluZyk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ2hhbmRzcHJpbmdpJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kc3ByaW5nSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbn1cclxuXHJcblxyXG5pZiAoaW1nU3RyZW5ndGgpIHtcclxuICAgIGNvbnN0IHN0cmVuZ3RoSW1nID0gY3JlYXRlUm9vdChpbWdTdHJlbmd0aCk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ3NpxYJvd2UnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIHN0cmVuZ3RoSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFwiRmlndXJlQ2F0ZWdvcnlcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3ZTU4MzZlZmNiNTZlMjhmNTM3NVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImZpZ3VyZXMiLCJjcmVhdGVSb290IiwiaW1nU2l0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW1nVHdpbmUiLCJpbWdJbnZlcnQiLCJpbWdIYW5kc3RhbmQiLCJpbWdIYW5kc3ByaW5nIiwiaW1nU3RyZW5ndGgiLCJjdEltZyIsIkNsaWNrIiwiZSIsInN0eWxlIiwiaGVpZ2h0IiwiRmlndXJlQ2F0ZWdvcnkiLCJjYXRlZ29yeUFycmF5IiwiaSIsImxlbmd0aCIsImNhdGVnb3J5IiwibmV3U3JjIiwic3JjIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwibWFwIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsInJlbmRlciIsInR3aW5lSW1nIiwiRmlndXJlQ2F0ZWdvcnlUd2luIiwiaW52ZXJ0SW1nIiwiX0ZpZ3VyZUNhdGVnb3J5VHdpbiIsImhhbmRzdGFuZEltZyIsIl9GaWd1cmVDYXRlZ29yeSIsImhhbmRzcHJpbmdJbWciLCJfRmlndXJlQ2F0ZWdvcnkyIiwic3RyZW5ndGhJbWciLCJfRmlndXJlQ2F0ZWdvcnkzIl0sInNvdXJjZVJvb3QiOiIifQ==
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
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var imgSit = document.querySelector(".figures_chair");
var imgTwine = document.querySelector(".figures_twine");
var imgInvert = document.querySelector(".figures_invert");
var imgHandstand = document.querySelector(".figures_handstand");
var imgHandspring = document.querySelector(".figures_handspring");
var imgStrength = document.querySelector(".figures_strength");
if (imgSit) {
  var ctImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgSit);

  // const Click = (e) => {
  //     e.height = "900px" ? e.height = "200px" : e.height = "900px";
  // }

  var FigureCategory = function FigureCategory() {
    var categoryArray = [];
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("200px"),
      _useState2 = _slicedToArray(_useState, 2),
      prevHeight = _useState2[0],
      setHeight = _useState2[1];
    var Click = function Click(e) {
      setHeight(function () {
        return "900px", _readOnlyError("prevHeight");
      }
      // e.height = "900px" ? e.height = "200px" : e.height = "900px";
      );
    };

    for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'siedzące') {
        var newSrc = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].src;
        categoryArray.push(newSrc);
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      style: {
        height: prevHeight
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
/******/ 	__webpack_require__.h = () => ("248303651857e316c7a6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvRmlndXJlQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5jb25zdCBpbWdTaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfY2hhaXJcIik7XHJcbmNvbnN0IGltZ1R3aW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX3R3aW5lXCIpO1xyXG5jb25zdCBpbWdJbnZlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfaW52ZXJ0XCIpO1xyXG5jb25zdCBpbWdIYW5kc3RhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfaGFuZHN0YW5kXCIpO1xyXG5jb25zdCBpbWdIYW5kc3ByaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2hhbmRzcHJpbmdcIik7XHJcbmNvbnN0IGltZ1N0cmVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX3N0cmVuZ3RoXCIpO1xyXG5cclxuaWYgKGltZ1NpdCkge1xyXG4gICAgY29uc3QgY3RJbWcgPSBjcmVhdGVSb290KGltZ1NpdCk7XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IENsaWNrID0gKGUpID0+IHtcclxuICAgIC8vICAgICBlLmhlaWdodCA9IFwiOTAwcHhcIiA/IGUuaGVpZ2h0ID0gXCIyMDBweFwiIDogZS5oZWlnaHQgPSBcIjkwMHB4XCI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcbiAgICAgICAgY29uc3QgW3ByZXZIZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZShcIjIwMHB4XCIpO1xyXG4gICAgICAgIGNvbnN0IENsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgc2V0SGVpZ2h0KCgpID0+IHByZXZIZWlnaHQgPSBcIjkwMHB4XCJcclxuICAgICAgICAgICAgICAgIC8vIGUuaGVpZ2h0ID0gXCI5MDBweFwiID8gZS5oZWlnaHQgPSBcIjIwMHB4XCIgOiBlLmhlaWdodCA9IFwiOTAwcHhcIjtcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdzaWVkesSFY2UnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWwgc3R5bGU9e3toZWlnaHQ6IHByZXZIZWlnaHR9fSBvbkNsaWNrPXtDbGlja30+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpICAgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgLy8gcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcblxyXG4gICAgY3RJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxufVxyXG5cclxuaWYgKGltZ1R3aW5lKSB7XHJcbiAgICBjb25zdCB0d2luZUltZyA9IGNyZWF0ZVJvb3QoaW1nVHdpbmUpO1xyXG5cclxuICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5VHdpbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnc3pwYWdhdHknKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIHR3aW5lSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnlUd2luLz4pO1xyXG59XHJcblxyXG5pZiAoaW1nSW52ZXJ0KSB7XHJcbiAgICBjb25zdCBpbnZlcnRJbWcgPSBjcmVhdGVSb290KGltZ0ludmVydCk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnlUd2luID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdpbnZlcnR5Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgIH1cclxuXHJcbiAgICBpbnZlcnRJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeVR3aW4vPik7XHJcbn1cclxuXHJcblxyXG5pZiAoaW1nSGFuZHN0YW5kKSB7XHJcbiAgICBjb25zdCBoYW5kc3RhbmRJbWcgPSBjcmVhdGVSb290KGltZ0hhbmRzdGFuZCk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ2hhbmRzdGFuZHknKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRzdGFuZEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5Lz4pO1xyXG59XHJcblxyXG5pZiAoaW1nSGFuZHNwcmluZykge1xyXG4gICAgY29uc3QgaGFuZHNwcmluZ0ltZyA9IGNyZWF0ZVJvb3QoaW1nSGFuZHNwcmluZyk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ2hhbmRzcHJpbmdpJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kc3ByaW5nSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbn1cclxuXHJcblxyXG5pZiAoaW1nU3RyZW5ndGgpIHtcclxuICAgIGNvbnN0IHN0cmVuZ3RoSW1nID0gY3JlYXRlUm9vdChpbWdTdHJlbmd0aCk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ3NpxYJvd2UnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIHN0cmVuZ3RoSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFwiRmlndXJlQ2F0ZWdvcnlcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNDgzMDM2NTE4NTdlMzE2YzdhNlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZmlndXJlcyIsImNyZWF0ZVJvb3QiLCJpbWdTaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbWdUd2luZSIsImltZ0ludmVydCIsImltZ0hhbmRzdGFuZCIsImltZ0hhbmRzcHJpbmciLCJpbWdTdHJlbmd0aCIsImN0SW1nIiwiRmlndXJlQ2F0ZWdvcnkiLCJjYXRlZ29yeUFycmF5IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicHJldkhlaWdodCIsInNldEhlaWdodCIsIkNsaWNrIiwiZSIsIl9yZWFkT25seUVycm9yIiwiaSIsImxlbmd0aCIsImNhdGVnb3J5IiwibmV3U3JjIiwic3JjIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImhlaWdodCIsIm9uQ2xpY2siLCJtYXAiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwicmVuZGVyIiwidHdpbmVJbWciLCJGaWd1cmVDYXRlZ29yeVR3aW4iLCJpbnZlcnRJbWciLCJfRmlndXJlQ2F0ZWdvcnlUd2luIiwiaGFuZHN0YW5kSW1nIiwiX0ZpZ3VyZUNhdGVnb3J5IiwiaGFuZHNwcmluZ0ltZyIsIl9GaWd1cmVDYXRlZ29yeTIiLCJzdHJlbmd0aEltZyIsIl9GaWd1cmVDYXRlZ29yeTMiXSwic291cmNlUm9vdCI6IiJ9
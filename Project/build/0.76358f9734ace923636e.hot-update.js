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
    var Click = function Click() {
      setHeight(function () {
        return  true ? "900px" : 0;
      });
    };
    for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'siedzące') {
        var newSrc = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].src;
        categoryArray.push(newSrc);
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, categoryArray.map(function (element) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        style: {
          height: prevHeight
        },
        onClick: Click,
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
/******/ 	__webpack_require__.h = () => ("04d5697e81f4f83ccae6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dC8uL1Byb2plY3QvanMvRmlndXJlQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5jb25zdCBpbWdTaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfY2hhaXJcIik7XHJcbmNvbnN0IGltZ1R3aW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX3R3aW5lXCIpO1xyXG5jb25zdCBpbWdJbnZlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfaW52ZXJ0XCIpO1xyXG5jb25zdCBpbWdIYW5kc3RhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfaGFuZHN0YW5kXCIpO1xyXG5jb25zdCBpbWdIYW5kc3ByaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2hhbmRzcHJpbmdcIik7XHJcbmNvbnN0IGltZ1N0cmVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX3N0cmVuZ3RoXCIpO1xyXG5cclxuaWYgKGltZ1NpdCkge1xyXG4gICAgY29uc3QgY3RJbWcgPSBjcmVhdGVSb290KGltZ1NpdCk7XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IENsaWNrID0gKGUpID0+IHtcclxuICAgIC8vICAgICBlLmhlaWdodCA9IFwiOTAwcHhcIiA/IGUuaGVpZ2h0ID0gXCIyMDBweFwiIDogZS5oZWlnaHQgPSBcIjkwMHB4XCI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcbiAgICAgICAgY29uc3QgW3ByZXZIZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZShcIjIwMHB4XCIpO1xyXG4gICAgICAgIGNvbnN0IENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRIZWlnaHQoKCkgPT4gXCIyMDBweFwiID8gXCI5MDBweFwiIDogXCIyMDBweFwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ3NpZWR6xIVjZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDx1bCA+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpICBzdHlsZT17e2hlaWdodDogcHJldkhlaWdodH19IG9uQ2xpY2s9e0NsaWNrfSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICAvLyByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgIH1cclxuXHJcbiAgICBjdEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5Lz4pO1xyXG59XHJcblxyXG5pZiAoaW1nVHdpbmUpIHtcclxuICAgIGNvbnN0IHR3aW5lSW1nID0gY3JlYXRlUm9vdChpbWdUd2luZSk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnlUd2luID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdzenBhZ2F0eScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcblxyXG4gICAgdHdpbmVJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeVR3aW4vPik7XHJcbn1cclxuXHJcbmlmIChpbWdJbnZlcnQpIHtcclxuICAgIGNvbnN0IGludmVydEltZyA9IGNyZWF0ZVJvb3QoaW1nSW52ZXJ0KTtcclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeVR3aW4gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ2ludmVydHknKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIGludmVydEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5VHdpbi8+KTtcclxufVxyXG5cclxuXHJcbmlmIChpbWdIYW5kc3RhbmQpIHtcclxuICAgIGNvbnN0IGhhbmRzdGFuZEltZyA9IGNyZWF0ZVJvb3QoaW1nSGFuZHN0YW5kKTtcclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnaGFuZHN0YW5keScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZHN0YW5kSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbn1cclxuXHJcbmlmIChpbWdIYW5kc3ByaW5nKSB7XHJcbiAgICBjb25zdCBoYW5kc3ByaW5nSW1nID0gY3JlYXRlUm9vdChpbWdIYW5kc3ByaW5nKTtcclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnaGFuZHNwcmluZ2knKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRzcHJpbmdJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxufVxyXG5cclxuXHJcbmlmIChpbWdTdHJlbmd0aCkge1xyXG4gICAgY29uc3Qgc3RyZW5ndGhJbWcgPSBjcmVhdGVSb290KGltZ1N0cmVuZ3RoKTtcclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnc2nFgm93ZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcblxyXG4gICAgc3RyZW5ndGhJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgXCJGaWd1cmVDYXRlZ29yeVwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA0ZDU2OTdlODFmNGY4M2NjYWU2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJmaWd1cmVzIiwiY3JlYXRlUm9vdCIsImltZ1NpdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImltZ1R3aW5lIiwiaW1nSW52ZXJ0IiwiaW1nSGFuZHN0YW5kIiwiaW1nSGFuZHNwcmluZyIsImltZ1N0cmVuZ3RoIiwiY3RJbWciLCJGaWd1cmVDYXRlZ29yeSIsImNhdGVnb3J5QXJyYXkiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJwcmV2SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiQ2xpY2siLCJpIiwibGVuZ3RoIiwiY2F0ZWdvcnkiLCJuZXdTcmMiLCJzcmMiLCJwdXNoIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImVsZW1lbnQiLCJzdHlsZSIsImhlaWdodCIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJyZW5kZXIiLCJ0d2luZUltZyIsIkZpZ3VyZUNhdGVnb3J5VHdpbiIsImludmVydEltZyIsIl9GaWd1cmVDYXRlZ29yeVR3aW4iLCJoYW5kc3RhbmRJbWciLCJfRmlndXJlQ2F0ZWdvcnkiLCJoYW5kc3ByaW5nSW1nIiwiX0ZpZ3VyZUNhdGVnb3J5MiIsInN0cmVuZ3RoSW1nIiwiX0ZpZ3VyZUNhdGVnb3J5MyJdLCJzb3VyY2VSb290IjoiIn0=
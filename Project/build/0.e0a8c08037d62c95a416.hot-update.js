"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 50:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
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
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("230px"),
      _useState2 = _slicedToArray(_useState, 2),
      prevHeight = _useState2[0],
      setHeight = _useState2[1];
    var Click = function Click(e) {
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
        className: "ccccc"
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
/******/ 	__webpack_require__.h = () => ("cd6b9e89d01de4aff21f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LXJlYWN0Ly4vUHJvamVjdC9qcy9GaWd1cmVDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGltZ1NpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19jaGFpclwiKTtcclxuY29uc3QgaW1nVHdpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfdHdpbmVcIik7XHJcbmNvbnN0IGltZ0ludmVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19pbnZlcnRcIik7XHJcbmNvbnN0IGltZ0hhbmRzdGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19oYW5kc3RhbmRcIik7XHJcbmNvbnN0IGltZ0hhbmRzcHJpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfaGFuZHNwcmluZ1wiKTtcclxuY29uc3QgaW1nU3RyZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfc3RyZW5ndGhcIik7XHJcblxyXG5pZiAoaW1nU2l0KSB7XHJcbiAgICBjb25zdCBjdEltZyA9IGNyZWF0ZVJvb3QoaW1nU2l0KTtcclxuXHJcblxyXG4gICAgLy8gY29uc3QgQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgLy8gICAgIGUuaGVpZ2h0ID0gXCI5MDBweFwiID8gZS5oZWlnaHQgPSBcIjIwMHB4XCIgOiBlLmhlaWdodCA9IFwiOTAwcHhcIjtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuICAgICAgICBjb25zdCBbcHJldkhlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKFwiMjMwcHhcIik7XHJcbiAgICAgICAgY29uc3QgQ2xpY2sgPSAoZSkgPT4geyBzZXRIZWlnaHQoKCkgPT4gXCIyMzBweFwiID8gXCI5MDBweFwiIDogXCIyMzBweFwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ3NpZWR6xIVjZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDx1bCA+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIHN0eWxlPXt7aGVpZ2h0OiBwcmV2SGVpZ2h0fX0gb25DbGljaz17Q2xpY2t9IGNsYXNzTmFtZT17XCJjY2NjY1wifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgLy8gcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcbiAgICBjdEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5Lz4pO1xyXG59XHJcblxyXG5pZiAoaW1nVHdpbmUpIHtcclxuICAgIGNvbnN0IHR3aW5lSW1nID0gY3JlYXRlUm9vdChpbWdUd2luZSk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnlUd2luID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdzenBhZ2F0eScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcblxyXG4gICAgdHdpbmVJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeVR3aW4vPik7XHJcbn1cclxuXHJcbmlmIChpbWdJbnZlcnQpIHtcclxuICAgIGNvbnN0IGludmVydEltZyA9IGNyZWF0ZVJvb3QoaW1nSW52ZXJ0KTtcclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeVR3aW4gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ2ludmVydHknKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIGludmVydEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5VHdpbi8+KTtcclxufVxyXG5cclxuXHJcbmlmIChpbWdIYW5kc3RhbmQpIHtcclxuICAgIGNvbnN0IGhhbmRzdGFuZEltZyA9IGNyZWF0ZVJvb3QoaW1nSGFuZHN0YW5kKTtcclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnaGFuZHN0YW5keScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZHN0YW5kSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbn1cclxuXHJcbmlmIChpbWdIYW5kc3ByaW5nKSB7XHJcbiAgICBjb25zdCBoYW5kc3ByaW5nSW1nID0gY3JlYXRlUm9vdChpbWdIYW5kc3ByaW5nKTtcclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnaGFuZHNwcmluZ2knKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRzcHJpbmdJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxufVxyXG5cclxuXHJcbmlmIChpbWdTdHJlbmd0aCkge1xyXG4gICAgY29uc3Qgc3RyZW5ndGhJbWcgPSBjcmVhdGVSb290KGltZ1N0cmVuZ3RoKTtcclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnc2nFgm93ZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcblxyXG4gICAgc3RyZW5ndGhJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgXCJGaWd1cmVDYXRlZ29yeVwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNkNmI5ZTg5ZDAxZGU0YWZmMjFmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJmaWd1cmVzIiwiY3JlYXRlUm9vdCIsImltZ1NpdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImltZ1R3aW5lIiwiaW1nSW52ZXJ0IiwiaW1nSGFuZHN0YW5kIiwiaW1nSGFuZHNwcmluZyIsImltZ1N0cmVuZ3RoIiwiY3RJbWciLCJGaWd1cmVDYXRlZ29yeSIsImNhdGVnb3J5QXJyYXkiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJwcmV2SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiQ2xpY2siLCJlIiwiaSIsImxlbmd0aCIsImNhdGVnb3J5IiwibmV3U3JjIiwic3JjIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJlbGVtZW50Iiwic3R5bGUiLCJoZWlnaHQiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwicmVuZGVyIiwidHdpbmVJbWciLCJGaWd1cmVDYXRlZ29yeVR3aW4iLCJpbnZlcnRJbWciLCJfRmlndXJlQ2F0ZWdvcnlUd2luIiwiaGFuZHN0YW5kSW1nIiwiX0ZpZ3VyZUNhdGVnb3J5IiwiaGFuZHNwcmluZ0ltZyIsIl9GaWd1cmVDYXRlZ29yeTIiLCJzdHJlbmd0aEltZyIsIl9GaWd1cmVDYXRlZ29yeTMiXSwic291cmNlUm9vdCI6IiJ9
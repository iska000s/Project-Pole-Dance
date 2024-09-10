self["webpackHotUpdatees6_react"](0,{

/***/ 50:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_figures__WEBPACK_IMPORTED_MODULE_1__);
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
    // const Click = (e) => { setHeight(() => "230px" ? "900px" : "230px"
    //     )
    // }

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

/***/ }),

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_figures__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);



var newImgBasic = document.querySelector(".workout_basic");
var newImgIntermediate = document.querySelector(".workout_intermediate");
var newImgAdvanced = document.querySelector(".workout_advanced");
if (newImgBasic) {
  var createImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(newImgBasic);
  var RandomImgFunction = function RandomImgFunction() {
    var randomImgArray = [];
    for (var n = 0; n < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; n++) {
      if (randomImgArray.length === 6) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, randomImgArray.map(function (element) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
            key: _figures__WEBPACK_IMPORTED_MODULE_1__.figures.id,
            className: "workout_image"
          }, element);
        }));
      } else {
        var randomObj = Math.floor(Math.random() * _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length);
        if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].level === "basic" && randomImgArray.includes(_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src) === false) {
          var sourceImg = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src;
          randomImgArray.push(sourceImg);
        }
      }
    }
  };
  createImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RandomImgFunction, null));
}
if (newImgIntermediate) {
  var _createImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(newImgIntermediate);
  var _RandomImgFunction = function _RandomImgFunction() {
    var randomImgArray = [];
    for (var n = 0; n < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; n++) {
      if (randomImgArray.length === 6) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, randomImgArray.map(function (element) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
            key: _figures__WEBPACK_IMPORTED_MODULE_1__.figures.id,
            className: "workout_image"
          }, element);
        }));
      } else {
        var randomObj = Math.floor(Math.random() * _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length);
        if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].level === "intermediate" && randomImgArray.includes(_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src) === false) {
          var sourceImg = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src;
          randomImgArray.push(sourceImg);
        }
      }
    }
  };
  _createImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RandomImgFunction, null));
}
if (newImgAdvanced) {
  var _createImg2 = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(newImgAdvanced);
  var _RandomImgFunction2 = function _RandomImgFunction2() {
    var randomImgArray = [];
    for (var n = 0; n < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; n++) {
      if (randomImgArray.length == 3) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, randomImgArray.map(function (element) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
            key: _figures__WEBPACK_IMPORTED_MODULE_1__.figures.id,
            className: "workout_image"
          }, element);
        }));
      } else {
        var randomObj = Math.floor(Math.random() * _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length);
        if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].level === "advanced" && randomImgArray.includes(_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src) === false) {
          var sourceImg = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src;
          randomImgArray.push(sourceImg);
        }
      }
    }
  };
  _createImg2.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RandomImgFunction2, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("RandomImg");

/***/ }),

/***/ 49:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\Project\\js\\figures.js: Unexpected token (8:8)\n\n\u001b[0m \u001b[90m  6 |\u001b[39m         id\u001b[33m:\u001b[39m \u001b[35m1\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  7 |\u001b[39m         level\u001b[33m:\u001b[39m \u001b[32m'basic'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'intermediate'\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  8 |\u001b[39m         category\u001b[33m:\u001b[39m \u001b[32m'inverty'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 |\u001b[39m         src\u001b[33m:\u001b[39m \u001b[33m<\u001b[39m\u001b[33mimg\u001b[39m alt\u001b[33m=\u001b[39m{\u001b[32m\"figure\"\u001b[39m} src\u001b[33m=\u001b[39m\u001b[32m\"../img/1.jpeg\"\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m     }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 |\u001b[39m     {\u001b[0m\n    at instantiate (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:63:32)\n    at constructor (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:358:12)\n    at JSXParserMixin.raise (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:3255:19)\n    at JSXParserMixin.unexpected (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:3285:16)\n    at JSXParserMixin.parseObjPropValue (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:11824:21)\n    at JSXParserMixin.parsePropertyDefinition (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:11757:17)\n    at JSXParserMixin.parseObjectLike (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:11672:21)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:11182:23)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:6974:20)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\izabe\\CodersLab\\Project-Pole-Dance\\node_modules\\@babel\\parser\\lib\\index.js:10890:23)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a7880b4bfbac9fa754ed")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFDMUM7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7VUN4RTFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9GaWd1cmVDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL1JhbmRvbUltZy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGltZ1NpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19jaGFpclwiKTtcclxuY29uc3QgaW1nVHdpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfdHdpbmVcIik7XHJcbmNvbnN0IGltZ0ludmVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19pbnZlcnRcIik7XHJcbmNvbnN0IGltZ0hhbmRzdGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19oYW5kc3RhbmRcIik7XHJcbmNvbnN0IGltZ0hhbmRzcHJpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfaGFuZHNwcmluZ1wiKTtcclxuY29uc3QgaW1nU3RyZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfc3RyZW5ndGhcIik7XHJcblxyXG5pZiAoaW1nU2l0KSB7XHJcbiAgICBjb25zdCBjdEltZyA9IGNyZWF0ZVJvb3QoaW1nU2l0KTtcclxuXHJcblxyXG4gICAgLy8gY29uc3QgQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgLy8gICAgIGUuaGVpZ2h0ID0gXCI5MDBweFwiID8gZS5oZWlnaHQgPSBcIjIwMHB4XCIgOiBlLmhlaWdodCA9IFwiOTAwcHhcIjtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuICAgICAgICBjb25zdCBbcHJldkhlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKFwiMjMwcHhcIik7XHJcbiAgICAgICAgLy8gY29uc3QgQ2xpY2sgPSAoZSkgPT4geyBzZXRIZWlnaHQoKCkgPT4gXCIyMzBweFwiID8gXCI5MDBweFwiIDogXCIyMzBweFwiXHJcbiAgICAgICAgLy8gICAgIClcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ3NpZWR6xIVjZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDx1bCA+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgIC8vIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG4gICAgY3RJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxufVxyXG5cclxuaWYgKGltZ1R3aW5lKSB7XHJcbiAgICBjb25zdCB0d2luZUltZyA9IGNyZWF0ZVJvb3QoaW1nVHdpbmUpO1xyXG5cclxuICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5VHdpbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnc3pwYWdhdHknKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIHR3aW5lSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnlUd2luLz4pO1xyXG59XHJcblxyXG5pZiAoaW1nSW52ZXJ0KSB7XHJcbiAgICBjb25zdCBpbnZlcnRJbWcgPSBjcmVhdGVSb290KGltZ0ludmVydCk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnlUd2luID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdpbnZlcnR5Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgIH1cclxuXHJcbiAgICBpbnZlcnRJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeVR3aW4vPik7XHJcbn1cclxuXHJcblxyXG5pZiAoaW1nSGFuZHN0YW5kKSB7XHJcbiAgICBjb25zdCBoYW5kc3RhbmRJbWcgPSBjcmVhdGVSb290KGltZ0hhbmRzdGFuZCk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ2hhbmRzdGFuZHknKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRzdGFuZEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5Lz4pO1xyXG59XHJcblxyXG5pZiAoaW1nSGFuZHNwcmluZykge1xyXG4gICAgY29uc3QgaGFuZHNwcmluZ0ltZyA9IGNyZWF0ZVJvb3QoaW1nSGFuZHNwcmluZyk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ2hhbmRzcHJpbmdpJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kc3ByaW5nSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbn1cclxuXHJcblxyXG5pZiAoaW1nU3RyZW5ndGgpIHtcclxuICAgIGNvbnN0IHN0cmVuZ3RoSW1nID0gY3JlYXRlUm9vdChpbWdTdHJlbmd0aCk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ3NpxYJvd2UnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIHN0cmVuZ3RoSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFwiRmlndXJlQ2F0ZWdvcnlcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5jb25zdCBuZXdJbWdCYXNpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya291dF9iYXNpY1wiKTtcclxuY29uc3QgbmV3SW1nSW50ZXJtZWRpYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrb3V0X2ludGVybWVkaWF0ZVwiKTtcclxuY29uc3QgbmV3SW1nQWR2YW5jZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtvdXRfYWR2YW5jZWRcIik7XHJcblxyXG5pZiAobmV3SW1nQmFzaWMpIHtcclxuICAgIGNvbnN0IGNyZWF0ZUltZyA9IGNyZWF0ZVJvb3QobmV3SW1nQmFzaWMpO1xyXG5cclxuICAgIGNvbnN0IFJhbmRvbUltZ0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUltZ0FycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBmaWd1cmVzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgIGlmIChyYW5kb21JbWdBcnJheS5sZW5ndGggPT09IDYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8dWw+e3JhbmRvbUltZ0FycmF5Lm1hcCgoZWxlbWVudCkgPT4gPGxpIGtleT17ZmlndXJlcy5pZH0gY2xhc3NOYW1lPXtcIndvcmtvdXRfaW1hZ2VcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tT2JqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlndXJlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbcmFuZG9tT2JqXS5sZXZlbCA9PT0gXCJiYXNpY1wiICYmIHJhbmRvbUltZ0FycmF5LmluY2x1ZGVzKGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmMpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tSW1nQXJyYXkucHVzaChzb3VyY2VJbWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUltZy5yZW5kZXIoPFJhbmRvbUltZ0Z1bmN0aW9uLz4pO1xyXG59XHJcblxyXG5cclxuaWYgKG5ld0ltZ0ludGVybWVkaWF0ZSkge1xyXG4gICAgY29uc3QgY3JlYXRlSW1nID0gY3JlYXRlUm9vdChuZXdJbWdJbnRlcm1lZGlhdGUpO1xyXG5cclxuICAgIGNvbnN0IFJhbmRvbUltZ0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUltZ0FycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBmaWd1cmVzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgIGlmIChyYW5kb21JbWdBcnJheS5sZW5ndGggPT09IDYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8dWw+e3JhbmRvbUltZ0FycmF5Lm1hcCgoZWxlbWVudCkgPT4gPGxpIGtleT17ZmlndXJlcy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJ3b3Jrb3V0X2ltYWdlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW3JhbmRvbU9ial0ubGV2ZWwgPT09IFwiaW50ZXJtZWRpYXRlXCIgJiYgcmFuZG9tSW1nQXJyYXkuaW5jbHVkZXMoZmlndXJlc1tyYW5kb21PYmpdLnNyYykgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc291cmNlSW1nID0gZmlndXJlc1tyYW5kb21PYmpdLnNyYztcclxuICAgICAgICAgICAgICAgICAgICByYW5kb21JbWdBcnJheS5wdXNoKHNvdXJjZUltZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjcmVhdGVJbWcucmVuZGVyKDxSYW5kb21JbWdGdW5jdGlvbi8+KTtcclxufVxyXG5cclxuaWYgKG5ld0ltZ0FkdmFuY2VkKSB7XHJcbiAgICBjb25zdCBjcmVhdGVJbWcgPSBjcmVhdGVSb290KG5ld0ltZ0FkdmFuY2VkKTtcclxuXHJcbiAgICBjb25zdCBSYW5kb21JbWdGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByYW5kb21JbWdBcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgZmlndXJlcy5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICBpZiAocmFuZG9tSW1nQXJyYXkubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8dWw+e3JhbmRvbUltZ0FycmF5Lm1hcCgoZWxlbWVudCkgPT4gPGxpIGtleT17ZmlndXJlcy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJ3b3Jrb3V0X2ltYWdlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW3JhbmRvbU9ial0ubGV2ZWwgPT09IFwiYWR2YW5jZWRcIiAmJiByYW5kb21JbWdBcnJheS5pbmNsdWRlcyhmaWd1cmVzW3JhbmRvbU9ial0uc3JjKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbWcgPSBmaWd1cmVzW3JhbmRvbU9ial0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNyZWF0ZUltZy5yZW5kZXIoPFJhbmRvbUltZ0Z1bmN0aW9uLz4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBcIlJhbmRvbUltZ1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE3ODgwYjRiZmJhYzlmYTc1NGVkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJmaWd1cmVzIiwiY3JlYXRlUm9vdCIsImltZ1NpdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImltZ1R3aW5lIiwiaW1nSW52ZXJ0IiwiaW1nSGFuZHN0YW5kIiwiaW1nSGFuZHNwcmluZyIsImltZ1N0cmVuZ3RoIiwiY3RJbWciLCJGaWd1cmVDYXRlZ29yeSIsImNhdGVnb3J5QXJyYXkiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJwcmV2SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiaSIsImxlbmd0aCIsImNhdGVnb3J5IiwibmV3U3JjIiwic3JjIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwicmVuZGVyIiwidHdpbmVJbWciLCJGaWd1cmVDYXRlZ29yeVR3aW4iLCJpbnZlcnRJbWciLCJfRmlndXJlQ2F0ZWdvcnlUd2luIiwiaGFuZHN0YW5kSW1nIiwiX0ZpZ3VyZUNhdGVnb3J5IiwiaGFuZHNwcmluZ0ltZyIsIl9GaWd1cmVDYXRlZ29yeTIiLCJzdHJlbmd0aEltZyIsIl9GaWd1cmVDYXRlZ29yeTMiLCJuZXdJbWdCYXNpYyIsIm5ld0ltZ0ludGVybWVkaWF0ZSIsIm5ld0ltZ0FkdmFuY2VkIiwiY3JlYXRlSW1nIiwiUmFuZG9tSW1nRnVuY3Rpb24iLCJyYW5kb21JbWdBcnJheSIsIm4iLCJrZXkiLCJpZCIsInJhbmRvbU9iaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxldmVsIiwiaW5jbHVkZXMiLCJzb3VyY2VJbWciLCJfUmFuZG9tSW1nRnVuY3Rpb24iLCJfUmFuZG9tSW1nRnVuY3Rpb24yIl0sInNvdXJjZVJvb3QiOiIifQ==
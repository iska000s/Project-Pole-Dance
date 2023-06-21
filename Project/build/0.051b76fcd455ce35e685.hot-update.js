"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 47:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RandomImg: () => (/* binding */ RandomImg)
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



var newImgBasic = document.querySelector(".workout_basic");
var newImgIntermediate = document.querySelector(".workout_intermediate");
var newImgAdvanced = document.querySelector(".workout_advanced");

// // const newImgBasicI = document.querySelector(".workout_image")
//     newImgBasicI.addEventListener ("click", function (event) {
//     this.style.height = "900px";
// })

var RandomImg = function RandomImg() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    maxHeight = _useState2[0],
    setHeight = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    maxWidth = _useState4[0],
    setWidth = _useState4[1];
  var handleClick = function handleClick() {
    setHeight(maxHeight === "500px" ? "260px" : "500px");
  };
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
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
              style: {
                height: maxHeight
              },
              onClick: handleClick,
              alt: 'figure',
              src: "../img/27.jpg"
            }), ">");
          }));
          li.forEach(function (e) {
            return handleClick();
          });
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
        if (randomImgArray.length === 6) {
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
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("671c32cafc0fc452c924")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7Ozs7Ozs7O1VDMUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9SYW5kb21JbWcuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtjcmVhdGVFbGVtZW50LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5jb25zdCBuZXdJbWdCYXNpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya291dF9iYXNpY1wiKTtcclxuY29uc3QgbmV3SW1nSW50ZXJtZWRpYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrb3V0X2ludGVybWVkaWF0ZVwiKTtcclxuY29uc3QgbmV3SW1nQWR2YW5jZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtvdXRfYWR2YW5jZWRcIik7XHJcblxyXG4vLyAvLyBjb25zdCBuZXdJbWdCYXNpY0kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtvdXRfaW1hZ2VcIilcclxuLy8gICAgIG5ld0ltZ0Jhc2ljSS5hZGRFdmVudExpc3RlbmVyIChcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4vLyAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBcIjkwMHB4XCI7XHJcbi8vIH0pXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBSYW5kb21JbWcgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBbbWF4SGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUoKTtcclxuICAgICAgICBjb25zdCBbbWF4V2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRIZWlnaHQobWF4SGVpZ2h0ID09PSBcIjUwMHB4XCIgPyBcIjI2MHB4XCIgOiBcIjUwMHB4XCIpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgaWYgKG5ld0ltZ0Jhc2ljKSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlSW1nID0gY3JlYXRlUm9vdChuZXdJbWdCYXNpYyk7XHJcblxyXG4gICAgICAgIGNvbnN0IFJhbmRvbUltZ0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21JbWdBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGZpZ3VyZXMubGVuZ3RoOyBuKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChyYW5kb21JbWdBcnJheS5sZW5ndGggPT09IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHVsPntyYW5kb21JbWdBcnJheS5tYXAoKGVsZW1lbnQpID0+IDxsaSBrZXk9e2ZpZ3VyZXMuaWR9IGNsYXNzTmFtZT17XCJ3b3Jrb3V0X2ltYWdlXCJ9PjxpbWcgc3R5bGU9e3toZWlnaHQ6IG1heEhlaWdodH19IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBhbHQ9eydmaWd1cmUnfSBzcmM9XCIuLi9pbWcvMjcuanBnXCIvPj48L2xpPil9PC91bD47XHJcbiAgICAgICAgICAgICAgICAgICAgbGkuZm9yRWFjaChlID0+IGhhbmRsZUNsaWNrKCkpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW3JhbmRvbU9ial0ubGV2ZWwgPT09IFwiYmFzaWNcIiAmJiByYW5kb21JbWdBcnJheS5pbmNsdWRlcyhmaWd1cmVzW3JhbmRvbU9ial0uc3JjKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbWcgPSBmaWd1cmVzW3JhbmRvbU9ial0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNyZWF0ZUltZy5yZW5kZXIoPFJhbmRvbUltZ0Z1bmN0aW9uLz4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBpZiAobmV3SW1nSW50ZXJtZWRpYXRlKSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlSW1nID0gY3JlYXRlUm9vdChuZXdJbWdJbnRlcm1lZGlhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCBSYW5kb21JbWdGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tSW1nQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBmaWd1cmVzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tSW1nQXJyYXkubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx1bD57cmFuZG9tSW1nQXJyYXkubWFwKChlbGVtZW50KSA9PiA8bGkga2V5PXtmaWd1cmVzLmlkfSBjbGFzc05hbWU9e1wid29ya291dF9pbWFnZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tyYW5kb21PYmpdLmxldmVsID09PSBcImludGVybWVkaWF0ZVwiICYmIHJhbmRvbUltZ0FycmF5LmluY2x1ZGVzKGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmMpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbWcgPSBmaWd1cmVzW3JhbmRvbU9ial0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb21JbWdBcnJheS5wdXNoKHNvdXJjZUltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZUltZy5yZW5kZXIoPFJhbmRvbUltZ0Z1bmN0aW9uLz4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAobmV3SW1nQWR2YW5jZWQpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVJbWcgPSBjcmVhdGVSb290KG5ld0ltZ0FkdmFuY2VkKTtcclxuXHJcbiAgICAgICAgY29uc3QgUmFuZG9tSW1nRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUltZ0FycmF5ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgZmlndXJlcy5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmRvbUltZ0FycmF5Lmxlbmd0aCA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dWw+e3JhbmRvbUltZ0FycmF5Lm1hcCgoZWxlbWVudCkgPT4gPGxpIGtleT17ZmlndXJlcy5pZH0gY2xhc3NOYW1lPXtcIndvcmtvdXRfaW1hZ2VcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21PYmogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWd1cmVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbcmFuZG9tT2JqXS5sZXZlbCA9PT0gXCJhZHZhbmNlZFwiICYmIHJhbmRvbUltZ0FycmF5LmluY2x1ZGVzKGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmMpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbWcgPSBmaWd1cmVzW3JhbmRvbU9ial0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb21JbWdBcnJheS5wdXNoKHNvdXJjZUltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZUltZy5yZW5kZXIoPFJhbmRvbUltZ0Z1bmN0aW9uLz4pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY3MWMzMmNhZmMwZmM0NTJjOTI0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInVzZVN0YXRlIiwiZmlndXJlcyIsImNyZWF0ZVJvb3QiLCJuZXdJbWdCYXNpYyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5ld0ltZ0ludGVybWVkaWF0ZSIsIm5ld0ltZ0FkdmFuY2VkIiwiUmFuZG9tSW1nIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibWF4SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJtYXhXaWR0aCIsInNldFdpZHRoIiwiaGFuZGxlQ2xpY2siLCJjcmVhdGVJbWciLCJSYW5kb21JbWdGdW5jdGlvbiIsInJhbmRvbUltZ0FycmF5IiwibiIsImxlbmd0aCIsIm1hcCIsImVsZW1lbnQiLCJrZXkiLCJpZCIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVpZ2h0Iiwib25DbGljayIsImFsdCIsInNyYyIsImxpIiwiZm9yRWFjaCIsImUiLCJyYW5kb21PYmoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZXZlbCIsImluY2x1ZGVzIiwic291cmNlSW1nIiwicHVzaCIsInJlbmRlciIsIl9SYW5kb21JbWdGdW5jdGlvbiIsIl9SYW5kb21JbWdGdW5jdGlvbjIiXSwic291cmNlUm9vdCI6IiJ9
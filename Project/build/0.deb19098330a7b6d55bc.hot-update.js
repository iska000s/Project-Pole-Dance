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
              style: {
                height: maxHeight
              },
              onClick: handleClick,
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
/******/ 	__webpack_require__.h = () => ("27b07e3b273566360de9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3JCLDZDQUFPLENBQUNzQixNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQ3JDLElBQUlELGNBQWMsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtVQUM3QixvQkFBT3pCLDBEQUFBLGFBQUt1QixjQUFjLENBQUNHLEdBQUcsQ0FBQyxVQUFDQyxPQUFPO1lBQUEsb0JBQUszQiwwREFBQTtjQUFJK0IsR0FBRyxFQUFFNUIsNkNBQU8sQ0FBQzZCLEVBQUc7Y0FBQ0MsU0FBUyxFQUFFO1lBQWdCLEdBQUVOLE9BQVksQ0FBQztVQUFBLEVBQU0sQ0FBQztRQUN0SCxDQUFDLE1BQU07VUFDSCxJQUFNTyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUdsQyw2Q0FBTyxDQUFDc0IsTUFBTSxDQUFDO1VBQzVELElBQUl0Qiw2Q0FBTyxDQUFDK0IsU0FBUyxDQUFDLENBQUNJLEtBQUssS0FBSyxVQUFVLElBQUlmLGNBQWMsQ0FBQ2dCLFFBQVEsQ0FBQ3BDLDZDQUFPLENBQUMrQixTQUFTLENBQUMsQ0FBQ00sR0FBRyxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ3RHLElBQU1DLFNBQVMsR0FBR3RDLDZDQUFPLENBQUMrQixTQUFTLENBQUMsQ0FBQ00sR0FBRztZQUN4Q2pCLGNBQWMsQ0FBQ21CLElBQUksQ0FBQ0QsU0FBUyxDQUFDO1VBQ2xDO1FBQ0o7TUFDSjtJQUNKLENBQUM7SUFDRHBCLFdBQVMsQ0FBQ3NCLE1BQU0sZUFBQzNDLDBEQUFBLENBQUM2QyxtQkFBaUIsTUFBQyxDQUFDLENBQUM7RUFDMUM7QUFFSixDQUFDOzs7Ozs7OztVQ2hGRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvUmFuZG9tSW1nLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlRWxlbWVudCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuY29uc3QgbmV3SW1nQmFzaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtvdXRfYmFzaWNcIik7XHJcbmNvbnN0IG5ld0ltZ0ludGVybWVkaWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya291dF9pbnRlcm1lZGlhdGVcIik7XHJcbmNvbnN0IG5ld0ltZ0FkdmFuY2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrb3V0X2FkdmFuY2VkXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJhbmRvbUltZyA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IFttYXhIZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IFttYXhXaWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEhlaWdodChtYXhIZWlnaHQgPT09IFwiNTAwcHhcIiA/IFwiMjYwcHhcIiA6IFwiNTAwcHhcIik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICBpZiAobmV3SW1nQmFzaWMpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVJbWcgPSBjcmVhdGVSb290KG5ld0ltZ0Jhc2ljKTtcclxuXHJcbiAgICAgICAgY29uc3QgUmFuZG9tSW1nRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUltZ0FycmF5ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgZmlndXJlcy5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmRvbUltZ0FycmF5Lmxlbmd0aCA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dWw+e3JhbmRvbUltZ0FycmF5Lm1hcCgoZWxlbWVudCkgPT4gPGxpIHN0eWxlPXt7aGVpZ2h0OiBtYXhIZWlnaHR9fSBvbkNsaWNrPXtoYW5kbGVDbGlja30ga2V5PXtmaWd1cmVzLmlkfSBjbGFzc05hbWU9e1wid29ya291dF9pbWFnZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW3JhbmRvbU9ial0ubGV2ZWwgPT09IFwiYmFzaWNcIiAmJiByYW5kb21JbWdBcnJheS5pbmNsdWRlcyhmaWd1cmVzW3JhbmRvbU9ial0uc3JjKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbWcgPSBmaWd1cmVzW3JhbmRvbU9ial0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgY3JlYXRlSW1nLnJlbmRlcig8UmFuZG9tSW1nRnVuY3Rpb24vPik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGlmIChuZXdJbWdJbnRlcm1lZGlhdGUpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVJbWcgPSBjcmVhdGVSb290KG5ld0ltZ0ludGVybWVkaWF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFJhbmRvbUltZ0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21JbWdBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGZpZ3VyZXMubGVuZ3RoOyBuKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChyYW5kb21JbWdBcnJheS5sZW5ndGggPT09IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHVsPntyYW5kb21JbWdBcnJheS5tYXAoKGVsZW1lbnQpID0+IDxsaSBrZXk9e2ZpZ3VyZXMuaWR9IGNsYXNzTmFtZT17XCJ3b3Jrb3V0X2ltYWdlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tT2JqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlndXJlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW3JhbmRvbU9ial0ubGV2ZWwgPT09IFwiaW50ZXJtZWRpYXRlXCIgJiYgcmFuZG9tSW1nQXJyYXkuaW5jbHVkZXMoZmlndXJlc1tyYW5kb21PYmpdLnNyYykgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlSW1nLnJlbmRlcig8UmFuZG9tSW1nRnVuY3Rpb24vPik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChuZXdJbWdBZHZhbmNlZCkge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUltZyA9IGNyZWF0ZVJvb3QobmV3SW1nQWR2YW5jZWQpO1xyXG5cclxuICAgICAgICBjb25zdCBSYW5kb21JbWdGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tSW1nQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBmaWd1cmVzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tSW1nQXJyYXkubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx1bD57cmFuZG9tSW1nQXJyYXkubWFwKChlbGVtZW50KSA9PiA8bGkga2V5PXtmaWd1cmVzLmlkfSBjbGFzc05hbWU9e1wid29ya291dF9pbWFnZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tyYW5kb21PYmpdLmxldmVsID09PSBcImFkdmFuY2VkXCIgJiYgcmFuZG9tSW1nQXJyYXkuaW5jbHVkZXMoZmlndXJlc1tyYW5kb21PYmpdLnNyYykgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlSW1nLnJlbmRlcig8UmFuZG9tSW1nRnVuY3Rpb24vPik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjdiMDdlM2IyNzM1NjYzNjBkZTlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwidXNlU3RhdGUiLCJmaWd1cmVzIiwiY3JlYXRlUm9vdCIsIm5ld0ltZ0Jhc2ljIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmV3SW1nSW50ZXJtZWRpYXRlIiwibmV3SW1nQWR2YW5jZWQiLCJSYW5kb21JbWciLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJtYXhIZWlnaHQiLCJzZXRIZWlnaHQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIm1heFdpZHRoIiwic2V0V2lkdGgiLCJoYW5kbGVDbGljayIsImNyZWF0ZUltZyIsIlJhbmRvbUltZ0Z1bmN0aW9uIiwicmFuZG9tSW1nQXJyYXkiLCJuIiwibGVuZ3RoIiwibWFwIiwiZWxlbWVudCIsInN0eWxlIiwiaGVpZ2h0Iiwib25DbGljayIsImtleSIsImlkIiwiY2xhc3NOYW1lIiwicmFuZG9tT2JqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGV2ZWwiLCJpbmNsdWRlcyIsInNyYyIsInNvdXJjZUltZyIsInB1c2giLCJyZW5kZXIiLCJfUmFuZG9tSW1nRnVuY3Rpb24iLCJfUmFuZG9tSW1nRnVuY3Rpb24yIl0sInNvdXJjZVJvb3QiOiIifQ==
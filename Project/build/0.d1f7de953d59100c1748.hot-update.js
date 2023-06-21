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

var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
  _useState2 = _slicedToArray(_useState, 2),
  height = _useState2[0],
  setHeight = _useState2[1];
var handleClick = function handleClick() {
  setHeight(height === "900px" ? "250px" : "900px");
};
var RandomImg = function RandomImg() {
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    maxHeight = _useState4[0],
    setHeight = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    maxWidth = _useState6[0],
    setWidth = _useState6[1];
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
              onClick: handleClick,
              alt: 'figure',
              src: "../img/27.jpg"
            }), ">");
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
/******/ 	__webpack_require__.h = () => ("ae083ea77f019fe0612a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMWY3ZGU5NTNkNTkxMDBjMTc0OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ25CO0FBQ1U7QUFFNUMsSUFBTUssV0FBVyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUM1RCxJQUFNQyxrQkFBa0IsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7QUFDMUUsSUFBTUUsY0FBYyxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQzs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBQUcsU0FBQSxHQUE0QlIsK0NBQVEsQ0FBQyxDQUFDO0VBQUFTLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0VBQS9CRyxNQUFNLEdBQUFGLFVBQUE7RUFBRUcsU0FBUyxHQUFBSCxVQUFBO0FBQ3hCLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7RUFDdEJELFNBQVMsQ0FBQ0QsTUFBTSxLQUFLLE9BQU8sR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3JELENBQUM7QUFFTSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBR3ZCLElBQUFDLFVBQUEsR0FBK0JmLCtDQUFRLENBQUMsQ0FBQztJQUFBZ0IsVUFBQSxHQUFBTixjQUFBLENBQUFLLFVBQUE7SUFBbENFLFNBQVMsR0FBQUQsVUFBQTtJQUFFSixTQUFTLEdBQUFJLFVBQUE7RUFDM0IsSUFBQUUsVUFBQSxHQUE2QmxCLCtDQUFRLENBQUMsQ0FBQztJQUFBbUIsVUFBQSxHQUFBVCxjQUFBLENBQUFRLFVBQUE7SUFBaENFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxRQUFRLEdBQUFGLFVBQUE7RUFFekIsSUFBTU4sV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztJQUN0QkQsU0FBUyxDQUFDSyxTQUFTLEtBQUssT0FBTyxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7RUFDeEQsQ0FBQztFQUdMLElBQUlkLFdBQVcsRUFBRTtJQUNiLElBQU1tQixTQUFTLEdBQUdwQiw0REFBVSxDQUFDQyxXQUFXLENBQUM7SUFFekMsSUFBTW9CLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBUztNQUM1QixJQUFNQyxjQUFjLEdBQUcsRUFBRTtNQUN6QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3hCLDZDQUFPLENBQUN5QixNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQ3JDLElBQUlELGNBQWMsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtVQUM3QixvQkFBTzVCLDBEQUFBLGFBQUswQixjQUFjLENBQUNHLEdBQUcsQ0FBQyxVQUFDQyxPQUFPO1lBQUEsb0JBQUs5QiwwREFBQTtjQUFJK0IsR0FBRyxFQUFFNUIsNkNBQU8sQ0FBQzZCLEVBQUc7Y0FBQ0MsU0FBUyxFQUFFO1lBQWdCLGdCQUFDakMsMERBQUE7Y0FBS2tDLE9BQU8sRUFBRW5CLFdBQVk7Y0FBQ29CLEdBQUcsRUFBRSxRQUFTO2NBQUNDLEdBQUcsRUFBQztZQUFlLENBQUMsQ0FBQyxLQUFLLENBQUM7VUFBQSxFQUFNLENBQUM7UUFDN0ssQ0FBQyxNQUFNO1VBQ0gsSUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHckMsNkNBQU8sQ0FBQ3lCLE1BQU0sQ0FBQztVQUNwRCxJQUFJekIsNkNBQU8sQ0FBQ2tDLFNBQVMsQ0FBQyxDQUFDSSxLQUFLLEtBQUssT0FBTyxJQUFJZixjQUFjLENBQUNnQixRQUFRLENBQUN2Qyw2Q0FBTyxDQUFDa0MsU0FBUyxDQUFDLENBQUNELEdBQUcsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUNuRyxJQUFNTyxTQUFTLEdBQUd4Qyw2Q0FBTyxDQUFDa0MsU0FBUyxDQUFDLENBQUNELEdBQUc7WUFDeENWLGNBQWMsQ0FBQ2tCLElBQUksQ0FBQ0QsU0FBUyxDQUFDO1VBRWxDO1FBQ1o7TUFDSjtJQUNKLENBQUM7SUFFRG5CLFNBQVMsQ0FBQ3FCLE1BQU0sZUFBQzdDLDBEQUFBLENBQUN5QixpQkFBaUIsTUFBQyxDQUFDLENBQUM7RUFDdEM7RUFFSixJQUFJakIsa0JBQWtCLEVBQUU7SUFDcEIsSUFBTWdCLFVBQVMsR0FBR3BCLDREQUFVLENBQUNJLGtCQUFrQixDQUFDO0lBRWhELElBQU1pQixrQkFBaUIsR0FBRyxTQUFwQkEsa0JBQWlCQSxDQUFBLEVBQVM7TUFDNUIsSUFBTUMsY0FBYyxHQUFHLEVBQUU7TUFDekIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUd4Qiw2Q0FBTyxDQUFDeUIsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtRQUNyQyxJQUFJRCxjQUFjLENBQUNFLE1BQU0sS0FBSyxDQUFDLEVBQUU7VUFDN0Isb0JBQU81QiwwREFBQSxhQUFLMEIsY0FBYyxDQUFDRyxHQUFHLENBQUMsVUFBQ0MsT0FBTztZQUFBLG9CQUFLOUIsMERBQUE7Y0FBSStCLEdBQUcsRUFBRTVCLDZDQUFPLENBQUM2QixFQUFHO2NBQUNDLFNBQVMsRUFBRTtZQUFnQixHQUFFSCxPQUFZLENBQUM7VUFBQSxFQUFNLENBQUM7UUFDdEgsQ0FBQyxNQUFNO1VBQ0gsSUFBTU8sU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHckMsNkNBQU8sQ0FBQ3lCLE1BQU0sQ0FBQztVQUM1RCxJQUFJekIsNkNBQU8sQ0FBQ2tDLFNBQVMsQ0FBQyxDQUFDSSxLQUFLLEtBQUssY0FBYyxJQUFJZixjQUFjLENBQUNnQixRQUFRLENBQUN2Qyw2Q0FBTyxDQUFDa0MsU0FBUyxDQUFDLENBQUNELEdBQUcsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUMxRyxJQUFNTyxTQUFTLEdBQUd4Qyw2Q0FBTyxDQUFDa0MsU0FBUyxDQUFDLENBQUNELEdBQUc7WUFDeENWLGNBQWMsQ0FBQ2tCLElBQUksQ0FBQ0QsU0FBUyxDQUFDO1VBQ2xDO1FBQ0o7TUFDSjtJQUNKLENBQUM7SUFDRG5CLFVBQVMsQ0FBQ3FCLE1BQU0sZUFBQzdDLDBEQUFBLENBQUM4QyxrQkFBaUIsTUFBQyxDQUFDLENBQUM7RUFDMUM7RUFHQSxJQUFJckMsY0FBYyxFQUFFO0lBQ2hCLElBQU1lLFdBQVMsR0FBR3BCLDREQUFVLENBQUNLLGNBQWMsQ0FBQztJQUU1QyxJQUFNZ0IsbUJBQWlCLEdBQUcsU0FBcEJBLG1CQUFpQkEsQ0FBQSxFQUFTO01BQzVCLElBQU1DLGNBQWMsR0FBRyxFQUFFO01BQ3pCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHeEIsNkNBQU8sQ0FBQ3lCLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBSUQsY0FBYyxDQUFDRSxNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQzdCLG9CQUFPNUIsMERBQUEsYUFBSzBCLGNBQWMsQ0FBQ0csR0FBRyxDQUFDLFVBQUNDLE9BQU87WUFBQSxvQkFBSzlCLDBEQUFBO2NBQUkrQixHQUFHLEVBQUU1Qiw2Q0FBTyxDQUFDNkIsRUFBRztjQUFDQyxTQUFTLEVBQUU7WUFBZ0IsR0FBRUgsT0FBWSxDQUFDO1VBQUEsRUFBTSxDQUFDO1FBQ3RILENBQUMsTUFBTTtVQUNILElBQU1PLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR3JDLDZDQUFPLENBQUN5QixNQUFNLENBQUM7VUFDNUQsSUFBSXpCLDZDQUFPLENBQUNrQyxTQUFTLENBQUMsQ0FBQ0ksS0FBSyxLQUFLLFVBQVUsSUFBSWYsY0FBYyxDQUFDZ0IsUUFBUSxDQUFDdkMsNkNBQU8sQ0FBQ2tDLFNBQVMsQ0FBQyxDQUFDRCxHQUFHLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDdEcsSUFBTU8sU0FBUyxHQUFHeEMsNkNBQU8sQ0FBQ2tDLFNBQVMsQ0FBQyxDQUFDRCxHQUFHO1lBQ3hDVixjQUFjLENBQUNrQixJQUFJLENBQUNELFNBQVMsQ0FBQztVQUNsQztRQUNKO01BQ0o7SUFDSixDQUFDO0lBQ0RuQixXQUFTLENBQUNxQixNQUFNLGVBQUM3QywwREFBQSxDQUFDK0MsbUJBQWlCLE1BQUMsQ0FBQyxDQUFDO0VBQzFDO0FBRUosQ0FBQzs7Ozs7Ozs7VUM1RkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL1JhbmRvbUltZy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZUVsZW1lbnQsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IG5ld0ltZ0Jhc2ljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrb3V0X2Jhc2ljXCIpO1xyXG5jb25zdCBuZXdJbWdJbnRlcm1lZGlhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtvdXRfaW50ZXJtZWRpYXRlXCIpO1xyXG5jb25zdCBuZXdJbWdBZHZhbmNlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya291dF9hZHZhbmNlZFwiKTtcclxuXHJcbi8vIC8vIGNvbnN0IG5ld0ltZ0Jhc2ljSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya291dF9pbWFnZVwiKVxyXG4vLyAgICAgbmV3SW1nQmFzaWNJLmFkZEV2ZW50TGlzdGVuZXIgKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbi8vICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IFwiOTAwcHhcIjtcclxuLy8gfSlcclxuXHJcbmNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSgpO1xyXG5jb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldEhlaWdodChoZWlnaHQgPT09IFwiOTAwcHhcIiA/IFwiMjUwcHhcIiA6IFwiOTAwcHhcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSYW5kb21JbWcgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBbbWF4SGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUoKTtcclxuICAgICAgICBjb25zdCBbbWF4V2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRIZWlnaHQobWF4SGVpZ2h0ID09PSBcIjUwMHB4XCIgPyBcIjI2MHB4XCIgOiBcIjUwMHB4XCIpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgaWYgKG5ld0ltZ0Jhc2ljKSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlSW1nID0gY3JlYXRlUm9vdChuZXdJbWdCYXNpYyk7XHJcblxyXG4gICAgICAgIGNvbnN0IFJhbmRvbUltZ0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21JbWdBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGZpZ3VyZXMubGVuZ3RoOyBuKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChyYW5kb21JbWdBcnJheS5sZW5ndGggPT09IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHVsPntyYW5kb21JbWdBcnJheS5tYXAoKGVsZW1lbnQpID0+IDxsaSBrZXk9e2ZpZ3VyZXMuaWR9IGNsYXNzTmFtZT17XCJ3b3Jrb3V0X2ltYWdlXCJ9PjxpbWcgb25DbGljaz17aGFuZGxlQ2xpY2t9IGFsdD17J2ZpZ3VyZSd9IHNyYz1cIi4uL2ltZy8yNy5qcGdcIi8+PjwvbGk+KX08L3VsPjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tT2JqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlndXJlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbcmFuZG9tT2JqXS5sZXZlbCA9PT0gXCJiYXNpY1wiICYmIHJhbmRvbUltZ0FycmF5LmluY2x1ZGVzKGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmMpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tSW1nQXJyYXkucHVzaChzb3VyY2VJbWcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlSW1nLnJlbmRlcig8UmFuZG9tSW1nRnVuY3Rpb24vPik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGlmIChuZXdJbWdJbnRlcm1lZGlhdGUpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVJbWcgPSBjcmVhdGVSb290KG5ld0ltZ0ludGVybWVkaWF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFJhbmRvbUltZ0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21JbWdBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGZpZ3VyZXMubGVuZ3RoOyBuKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChyYW5kb21JbWdBcnJheS5sZW5ndGggPT09IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHVsPntyYW5kb21JbWdBcnJheS5tYXAoKGVsZW1lbnQpID0+IDxsaSBrZXk9e2ZpZ3VyZXMuaWR9IGNsYXNzTmFtZT17XCJ3b3Jrb3V0X2ltYWdlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tT2JqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlndXJlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW3JhbmRvbU9ial0ubGV2ZWwgPT09IFwiaW50ZXJtZWRpYXRlXCIgJiYgcmFuZG9tSW1nQXJyYXkuaW5jbHVkZXMoZmlndXJlc1tyYW5kb21PYmpdLnNyYykgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlSW1nLnJlbmRlcig8UmFuZG9tSW1nRnVuY3Rpb24vPik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChuZXdJbWdBZHZhbmNlZCkge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUltZyA9IGNyZWF0ZVJvb3QobmV3SW1nQWR2YW5jZWQpO1xyXG5cclxuICAgICAgICBjb25zdCBSYW5kb21JbWdGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tSW1nQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBmaWd1cmVzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tSW1nQXJyYXkubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx1bD57cmFuZG9tSW1nQXJyYXkubWFwKChlbGVtZW50KSA9PiA8bGkga2V5PXtmaWd1cmVzLmlkfSBjbGFzc05hbWU9e1wid29ya291dF9pbWFnZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tyYW5kb21PYmpdLmxldmVsID09PSBcImFkdmFuY2VkXCIgJiYgcmFuZG9tSW1nQXJyYXkuaW5jbHVkZXMoZmlndXJlc1tyYW5kb21PYmpdLnNyYykgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlSW1nLnJlbmRlcig8UmFuZG9tSW1nRnVuY3Rpb24vPik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWUwODNlYTc3ZjAxOWZlMDYxMmFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwidXNlU3RhdGUiLCJmaWd1cmVzIiwiY3JlYXRlUm9vdCIsIm5ld0ltZ0Jhc2ljIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmV3SW1nSW50ZXJtZWRpYXRlIiwibmV3SW1nQWR2YW5jZWQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJoYW5kbGVDbGljayIsIlJhbmRvbUltZyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwibWF4SGVpZ2h0IiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJtYXhXaWR0aCIsInNldFdpZHRoIiwiY3JlYXRlSW1nIiwiUmFuZG9tSW1nRnVuY3Rpb24iLCJyYW5kb21JbWdBcnJheSIsIm4iLCJsZW5ndGgiLCJtYXAiLCJlbGVtZW50Iiwia2V5IiwiaWQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiYWx0Iiwic3JjIiwicmFuZG9tT2JqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGV2ZWwiLCJpbmNsdWRlcyIsInNvdXJjZUltZyIsInB1c2giLCJyZW5kZXIiLCJfUmFuZG9tSW1nRnVuY3Rpb24iLCJfUmFuZG9tSW1nRnVuY3Rpb24yIl0sInNvdXJjZVJvb3QiOiIifQ==
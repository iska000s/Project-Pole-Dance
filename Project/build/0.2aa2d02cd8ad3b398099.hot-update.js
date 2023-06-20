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



var basicWorkoutBox = document.querySelector(".workout_basic");

// if (basicWorkoutBox) {
//     const root = createRoot(container);
//
//     const App = () => {
//         return (
//             <>
//                 <RandomImg />
//             </>
//         )
//     }
//
//
//     root.render(<App/>);
//
// }

var newWorkout = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p");
basicWorkoutBox.appendChild(newWorkout);
var RandomImg = function RandomImg() {
  var randomImgArray = [];
  for (var n = 0; n < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; n++) {
    if (randomImgArray.length === 6) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, randomImgArray.map(function (element) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          className: "workout_image"
        }, element);
      }));
    } else {
      var randomObj = Math.floor(Math.random() * _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length);
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].level === "basic") {
        var sourceImg = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src;
        randomImgArray.push(sourceImg);
      }
    }
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c5519e31ae514cc6b61b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yYWEyZDAyY2Q4YWQzYjM5ODA5OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1Q7QUFDVTtBQUU1QyxJQUFNSSxlQUFlLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsVUFBVSxHQUFHTixvREFBYSxDQUFDLEdBQUcsQ0FBQztBQUNyQ0csZUFBZSxDQUFDSSxXQUFXLENBQUNELFVBQVUsQ0FBQztBQUVoQyxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQzNCLElBQU1DLGNBQWMsR0FBRyxFQUFFO0VBQ3pCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHVCw2Q0FBTyxDQUFDVSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQ3JDLElBQUlELGNBQWMsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUM3QixvQkFBT1osMERBQUEsYUFBS1UsY0FBYyxDQUFDRyxHQUFHLENBQUMsVUFBQ0MsT0FBTztRQUFBLG9CQUFLZCwwREFBQTtVQUFJZSxTQUFTLEVBQUU7UUFBZ0IsR0FBRUQsT0FBWSxDQUFDO01BQUEsRUFBTSxDQUFDO0lBQ3JHLENBQUMsTUFBTTtNQUNILElBQU1FLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR2pCLDZDQUFPLENBQUNVLE1BQU0sQ0FBQztNQUM1RCxJQUFJViw2Q0FBTyxDQUFDYyxTQUFTLENBQUMsQ0FBQ0ksS0FBSyxLQUFLLE9BQU8sRUFBRTtRQUN0QyxJQUFNQyxTQUFTLEdBQUduQiw2Q0FBTyxDQUFDYyxTQUFTLENBQUMsQ0FBQ00sR0FBRztRQUN4Q1osY0FBYyxDQUFDYSxJQUFJLENBQUNGLFNBQVMsQ0FBQztNQUNsQztJQUNKO0VBQ0o7QUFDSixDQUFDOzs7Ozs7OztVQ3RDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvUmFuZG9tSW1nLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlRWxlbWVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5jb25zdCBiYXNpY1dvcmtvdXRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtvdXRfYmFzaWNcIilcclxuXHJcbi8vIGlmIChiYXNpY1dvcmtvdXRCb3gpIHtcclxuLy8gICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbi8vXHJcbi8vICAgICBjb25zdCBBcHAgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgICAgIDxSYW5kb21JbWcgLz5cclxuLy8gICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgKVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgcm9vdC5yZW5kZXIoPEFwcC8+KTtcclxuLy9cclxuLy8gfVxyXG5cclxuY29uc3QgbmV3V29ya291dCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5iYXNpY1dvcmtvdXRCb3guYXBwZW5kQ2hpbGQobmV3V29ya291dClcclxuXHJcbmV4cG9ydCBjb25zdCBSYW5kb21JbWcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByYW5kb21JbWdBcnJheSA9IFtdO1xyXG4gICAgZm9yIChsZXQgbiA9IDA7IG4gPCBmaWd1cmVzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgaWYgKHJhbmRvbUltZ0FycmF5Lmxlbmd0aCA9PT0gNikge1xyXG4gICAgICAgICAgICByZXR1cm4gPHVsPntyYW5kb21JbWdBcnJheS5tYXAoKGVsZW1lbnQpID0+IDxsaSBjbGFzc05hbWU9e1wid29ya291dF9pbWFnZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tT2JqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlndXJlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tyYW5kb21PYmpdLmxldmVsID09PSBcImJhc2ljXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbiAgICAgICAgICAgICAgICByYW5kb21JbWdBcnJheS5wdXNoKHNvdXJjZUltZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM1NTE5ZTMxYWU1MTRjYzZiNjFiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImZpZ3VyZXMiLCJjcmVhdGVSb290IiwiYmFzaWNXb3Jrb3V0Qm94IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmV3V29ya291dCIsImFwcGVuZENoaWxkIiwiUmFuZG9tSW1nIiwicmFuZG9tSW1nQXJyYXkiLCJuIiwibGVuZ3RoIiwibWFwIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsInJhbmRvbU9iaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxldmVsIiwic291cmNlSW1nIiwic3JjIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=
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

var RandomImg = function RandomImg() {
  var basicWorkoutBox = document.querySelector('section .workout_basic');
  var newWorkout = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1");
  basicWorkoutBox.appendChild(newWorkout);
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
/******/ 	__webpack_require__.h = () => ("af154586f4e196e35081")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iZWM2MmMyMDIzZjU0MjU1ZDhkZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1Q7QUFDVTs7QUFHNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdPLElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBLEVBQVM7RUFDM0IsSUFBTUMsZUFBZSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztFQUN4RSxJQUFNQyxVQUFVLEdBQUdQLG9EQUFhLENBQUMsSUFBSSxDQUFDO0VBQ3RDSSxlQUFlLENBQUNJLFdBQVcsQ0FBQ0QsVUFBVSxDQUFDO0VBRXZDLElBQU1FLGNBQWMsR0FBRyxFQUFFO0VBQ3pCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHVCw2Q0FBTyxDQUFDVSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQ3JDLElBQUlELGNBQWMsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUM3QixvQkFBT1osMERBQUEsYUFBS1UsY0FBYyxDQUFDRyxHQUFHLENBQUMsVUFBQ0MsT0FBTztRQUFBLG9CQUFLZCwwREFBQTtVQUFJZSxTQUFTLEVBQUU7UUFBZ0IsR0FBRUQsT0FBWSxDQUFDO01BQUEsRUFBTSxDQUFDO0lBQ3JHLENBQUMsTUFBTTtNQUNILElBQU1FLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR2pCLDZDQUFPLENBQUNVLE1BQU0sQ0FBQztNQUM1RCxJQUFJViw2Q0FBTyxDQUFDYyxTQUFTLENBQUMsQ0FBQ0ksS0FBSyxLQUFLLE9BQU8sRUFBRTtRQUN0QyxJQUFNQyxTQUFTLEdBQUduQiw2Q0FBTyxDQUFDYyxTQUFTLENBQUMsQ0FBQ00sR0FBRztRQUN4Q1osY0FBYyxDQUFDYSxJQUFJLENBQUNGLFNBQVMsQ0FBQztNQUNsQztJQUNKO0VBQ0o7QUFDSixDQUFDOzs7Ozs7OztVQ3ZDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvUmFuZG9tSW1nLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlRWxlbWVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5cclxuLy8gaWYgKGJhc2ljV29ya291dEJveCkge1xyXG4vLyAgICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxuLy9cclxuLy8gICAgIGNvbnN0IEFwcCA9ICgpID0+IHtcclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgICAgPFJhbmRvbUltZyAvPlxyXG4vLyAgICAgICAgICAgICA8Lz5cclxuLy8gICAgICAgICApXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vXHJcbi8vICAgICByb290LnJlbmRlcig8QXBwLz4pO1xyXG4vL1xyXG4vLyB9XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFJhbmRvbUltZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJhc2ljV29ya291dEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24gLndvcmtvdXRfYmFzaWMnKTtcclxuICAgIGNvbnN0IG5ld1dvcmtvdXQgPSBjcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBiYXNpY1dvcmtvdXRCb3guYXBwZW5kQ2hpbGQobmV3V29ya291dCk7XHJcblxyXG4gICAgY29uc3QgcmFuZG9tSW1nQXJyYXkgPSBbXTtcclxuICAgIGZvciAobGV0IG4gPSAwOyBuIDwgZmlndXJlcy5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgIGlmIChyYW5kb21JbWdBcnJheS5sZW5ndGggPT09IDYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDx1bD57cmFuZG9tSW1nQXJyYXkubWFwKChlbGVtZW50KSA9PiA8bGkgY2xhc3NOYW1lPXtcIndvcmtvdXRfaW1hZ2VcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWYgKGZpZ3VyZXNbcmFuZG9tT2JqXS5sZXZlbCA9PT0gXCJiYXNpY1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbWcgPSBmaWd1cmVzW3JhbmRvbU9ial0uc3JjO1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tSW1nQXJyYXkucHVzaChzb3VyY2VJbWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhZjE1NDU4NmY0ZTE5NmUzNTA4MVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJmaWd1cmVzIiwiY3JlYXRlUm9vdCIsIlJhbmRvbUltZyIsImJhc2ljV29ya291dEJveCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5ld1dvcmtvdXQiLCJhcHBlbmRDaGlsZCIsInJhbmRvbUltZ0FycmF5IiwibiIsImxlbmd0aCIsIm1hcCIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJyYW5kb21PYmoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZXZlbCIsInNvdXJjZUltZyIsInNyYyIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9
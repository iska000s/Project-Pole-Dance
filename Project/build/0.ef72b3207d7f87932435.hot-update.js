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
//
// const basicWorkoutBox = document.querySelector('div .workout_basic')
// const newWorkout = document.createElement("h1");
// basicWorkoutBox.appendChild(newWorkout);

var newImg = document.querySelector(".workout_basic");
var RandomImg = function RandomImg() {
  if (newImg) {
    var createImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(newImg);
    var _RandomImg = function _RandomImg() {
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
          var randomIMG = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj];
          for (var j = 0; j <= randomImgArray.length; j++) {
            var randomImwArrayElement = randomImgArray[j];
            if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].level === "basic") {
              randomImgArray.push(sourceImg);
            }
            if (randomIMG != randomImwArrayElement) {
              var _sourceImg = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src;
            }
          }
        }
      }
    };
    createImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RandomImg, null));
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("38f3a510d339c1fe36a5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZjcyYjMyMDdkN2Y4NzkzMjQzNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1Q7QUFDVTs7QUFHNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUksTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUVoRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQzNCLElBQUlILE1BQU0sRUFBRTtJQUNSLElBQU1JLFNBQVMsR0FBR0wsNERBQVUsQ0FBQ0MsTUFBTSxDQUFDO0lBRXBDLElBQU1HLFVBQVMsR0FBRyxTQUFaQSxVQUFTQSxDQUFBLEVBQVM7TUFDcEIsSUFBTUUsY0FBYyxHQUFHLEVBQUU7TUFDekIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdSLDZDQUFPLENBQUNTLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBSUQsY0FBYyxDQUFDRSxNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQzdCLG9CQUFPWCwwREFBQSxhQUFLUyxjQUFjLENBQUNHLEdBQUcsQ0FBQyxVQUFDQyxPQUFPO1lBQUEsb0JBQUtiLDBEQUFBO2NBQUljLFNBQVMsRUFBRTtZQUFnQixHQUFFRCxPQUFZLENBQUM7VUFBQSxFQUFNLENBQUM7UUFDckcsQ0FBQyxNQUFNO1VBQ0gsSUFBTUUsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHaEIsNkNBQU8sQ0FBQ1MsTUFBTSxDQUFDO1VBQzVELElBQU1RLFNBQVMsR0FBR2pCLDZDQUFPLENBQUNhLFNBQVMsQ0FBQztVQUNwQyxLQUFLLElBQUlLLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSVgsY0FBYyxDQUFDRSxNQUFNLEVBQUVTLENBQUMsRUFBRSxFQUFFO1lBQzdDLElBQU1DLHFCQUFxQixHQUFHWixjQUFjLENBQUNXLENBQUMsQ0FBQztZQUMvQyxJQUFJbEIsNkNBQU8sQ0FBQ2EsU0FBUyxDQUFDLENBQUNPLEtBQUssS0FBSyxPQUFPLEVBQUU7Y0FDdENiLGNBQWMsQ0FBQ2MsSUFBSSxDQUFDQyxTQUFTLENBQUM7WUFDbEM7WUFDQSxJQUFJTCxTQUFTLElBQUlFLHFCQUFxQixFQUFFO2NBQ3BDLElBQU1HLFVBQVMsR0FBR3RCLDZDQUFPLENBQUNhLFNBQVMsQ0FBQyxDQUFDVSxHQUFHO1lBQzVDO1VBQ0o7UUFDSjtNQUNKO0lBQ0osQ0FBQztJQUNHakIsU0FBUyxDQUFDa0IsTUFBTSxlQUFDMUIsMERBQUEsQ0FBQzJCLFVBQVMsTUFBQyxDQUFDLENBQUM7RUFDbEM7QUFDUixDQUFDOzs7Ozs7OztVQ3RERCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvUmFuZG9tSW1nLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlRWxlbWVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5cclxuLy8gaWYgKGJhc2ljV29ya291dEJveCkge1xyXG4vLyAgICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxuLy9cclxuLy8gICAgIGNvbnN0IEFwcCA9ICgpID0+IHtcclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgICAgPFJhbmRvbUltZyAvPlxyXG4vLyAgICAgICAgICAgICA8Lz5cclxuLy8gICAgICAgICApXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vXHJcbi8vICAgICByb290LnJlbmRlcig8QXBwLz4pO1xyXG4vL1xyXG4vLyB9XHJcbi8vXHJcbi8vIGNvbnN0IGJhc2ljV29ya291dEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiAud29ya291dF9iYXNpYycpXHJcbi8vIGNvbnN0IG5ld1dvcmtvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbi8vIGJhc2ljV29ya291dEJveC5hcHBlbmRDaGlsZChuZXdXb3Jrb3V0KTtcclxuXHJcblxyXG5jb25zdCBuZXdJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtvdXRfYmFzaWNcIik7XHJcblxyXG5leHBvcnQgY29uc3QgUmFuZG9tSW1nID0gKCkgPT4ge1xyXG4gICAgaWYgKG5ld0ltZykge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUltZyA9IGNyZWF0ZVJvb3QobmV3SW1nKTtcclxuXHJcbiAgICAgICAgY29uc3QgUmFuZG9tSW1nID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21JbWdBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGZpZ3VyZXMubGVuZ3RoOyBuKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChyYW5kb21JbWdBcnJheS5sZW5ndGggPT09IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHVsPntyYW5kb21JbWdBcnJheS5tYXAoKGVsZW1lbnQpID0+IDxsaSBjbGFzc05hbWU9e1wid29ya291dF9pbWFnZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21JTUcgPSBmaWd1cmVzW3JhbmRvbU9ial07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gcmFuZG9tSW1nQXJyYXkubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tSW13QXJyYXlFbGVtZW50ID0gcmFuZG9tSW1nQXJyYXlbal1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbcmFuZG9tT2JqXS5sZXZlbCA9PT0gXCJiYXNpY1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21JbWdBcnJheS5wdXNoKHNvdXJjZUltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmRvbUlNRyAhPSByYW5kb21JbXdBcnJheUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIGNyZWF0ZUltZy5yZW5kZXIoPFJhbmRvbUltZy8+KTtcclxuICAgICAgICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzhmM2E1MTBkMzM5YzFmZTM2YTVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiZmlndXJlcyIsImNyZWF0ZVJvb3QiLCJuZXdJbWciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJSYW5kb21JbWciLCJjcmVhdGVJbWciLCJyYW5kb21JbWdBcnJheSIsIm4iLCJsZW5ndGgiLCJtYXAiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwicmFuZG9tT2JqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tSU1HIiwiaiIsInJhbmRvbUltd0FycmF5RWxlbWVudCIsImxldmVsIiwicHVzaCIsInNvdXJjZUltZyIsInNyYyIsInJlbmRlciIsIl9SYW5kb21JbWciXSwic291cmNlUm9vdCI6IiJ9
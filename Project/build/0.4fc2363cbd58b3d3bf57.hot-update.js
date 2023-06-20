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
            if (randomIMG != randomImwArrayElement) {
              var sourceImg = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src;
              if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].level === "basic") {
                randomImgArray.push(sourceImg);
              }
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
/******/ 	__webpack_require__.h = () => ("ef72b3207d7f87932435")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40ZmMyMzYzY2JkNThiM2QzYmY1Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1Q7QUFDVTs7QUFHNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUksTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUVoRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQzNCLElBQUlILE1BQU0sRUFBRTtJQUNSLElBQU1JLFNBQVMsR0FBR0wsNERBQVUsQ0FBQ0MsTUFBTSxDQUFDO0lBRXBDLElBQU1HLFVBQVMsR0FBRyxTQUFaQSxVQUFTQSxDQUFBLEVBQVM7TUFDcEIsSUFBTUUsY0FBYyxHQUFHLEVBQUU7TUFDekIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdSLDZDQUFPLENBQUNTLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBSUQsY0FBYyxDQUFDRSxNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQzdCLG9CQUFPWCwwREFBQSxhQUFLUyxjQUFjLENBQUNHLEdBQUcsQ0FBQyxVQUFDQyxPQUFPO1lBQUEsb0JBQUtiLDBEQUFBO2NBQUljLFNBQVMsRUFBRTtZQUFnQixHQUFFRCxPQUFZLENBQUM7VUFBQSxFQUFNLENBQUM7UUFDckcsQ0FBQyxNQUFNO1VBQ0gsSUFBTUUsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHaEIsNkNBQU8sQ0FBQ1MsTUFBTSxDQUFDO1VBQzVELElBQU1RLFNBQVMsR0FBR2pCLDZDQUFPLENBQUNhLFNBQVMsQ0FBQztVQUNwQyxLQUFLLElBQUlLLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSVgsY0FBYyxDQUFDRSxNQUFNLEVBQUVTLENBQUMsRUFBRSxFQUFFO1lBQzdDLElBQU1DLHFCQUFxQixHQUFHWixjQUFjLENBQUNXLENBQUMsQ0FBQztZQUMvQyxJQUFJRCxTQUFTLElBQUlFLHFCQUFxQixFQUFFO2NBQ3BDLElBQU1DLFNBQVMsR0FBR3BCLDZDQUFPLENBQUNhLFNBQVMsQ0FBQyxDQUFDUSxHQUFHO2NBQ3hDLElBQUlyQiw2Q0FBTyxDQUFDYSxTQUFTLENBQUMsQ0FBQ1MsS0FBSyxLQUFLLE9BQU8sRUFBRTtnQkFDdENmLGNBQWMsQ0FBQ2dCLElBQUksQ0FBQ0gsU0FBUyxDQUFDO2NBQ2xDO1lBQ0o7VUFDSjtRQUNKO01BQ0o7SUFDSixDQUFDO0lBQ0dkLFNBQVMsQ0FBQ2tCLE1BQU0sZUFBQzFCLDBEQUFBLENBQUMyQixVQUFTLE1BQUMsQ0FBQyxDQUFDO0VBQ2xDO0FBQ1IsQ0FBQzs7Ozs7Ozs7VUN0REQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL1JhbmRvbUltZy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZUVsZW1lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuXHJcbi8vIGlmIChiYXNpY1dvcmtvdXRCb3gpIHtcclxuLy8gICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbi8vXHJcbi8vICAgICBjb25zdCBBcHAgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgICAgIDxSYW5kb21JbWcgLz5cclxuLy8gICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgKVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgcm9vdC5yZW5kZXIoPEFwcC8+KTtcclxuLy9cclxuLy8gfVxyXG4vL1xyXG4vLyBjb25zdCBiYXNpY1dvcmtvdXRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYgLndvcmtvdXRfYmFzaWMnKVxyXG4vLyBjb25zdCBuZXdXb3Jrb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4vLyBiYXNpY1dvcmtvdXRCb3guYXBwZW5kQ2hpbGQobmV3V29ya291dCk7XHJcblxyXG5cclxuY29uc3QgbmV3SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrb3V0X2Jhc2ljXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJhbmRvbUltZyA9ICgpID0+IHtcclxuICAgIGlmIChuZXdJbWcpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVJbWcgPSBjcmVhdGVSb290KG5ld0ltZyk7XHJcblxyXG4gICAgICAgIGNvbnN0IFJhbmRvbUltZyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tSW1nQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBmaWd1cmVzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tSW1nQXJyYXkubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx1bD57cmFuZG9tSW1nQXJyYXkubWFwKChlbGVtZW50KSA9PiA8bGkgY2xhc3NOYW1lPXtcIndvcmtvdXRfaW1hZ2VcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21PYmogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWd1cmVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tSU1HID0gZmlndXJlc1tyYW5kb21PYmpdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHJhbmRvbUltZ0FycmF5Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbUltd0FycmF5RWxlbWVudCA9IHJhbmRvbUltZ0FycmF5W2pdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyYW5kb21JTUcgIT0gcmFuZG9tSW13QXJyYXlFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbWcgPSBmaWd1cmVzW3JhbmRvbU9ial0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbcmFuZG9tT2JqXS5sZXZlbCA9PT0gXCJiYXNpY1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tSW1nQXJyYXkucHVzaChzb3VyY2VJbWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBjcmVhdGVJbWcucmVuZGVyKDxSYW5kb21JbWcvPik7XHJcbiAgICAgICAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVmNzJiMzIwN2Q3Zjg3OTMyNDM1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImZpZ3VyZXMiLCJjcmVhdGVSb290IiwibmV3SW1nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiUmFuZG9tSW1nIiwiY3JlYXRlSW1nIiwicmFuZG9tSW1nQXJyYXkiLCJuIiwibGVuZ3RoIiwibWFwIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsInJhbmRvbU9iaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUlNRyIsImoiLCJyYW5kb21JbXdBcnJheUVsZW1lbnQiLCJzb3VyY2VJbWciLCJzcmMiLCJsZXZlbCIsInB1c2giLCJyZW5kZXIiLCJfUmFuZG9tSW1nIl0sInNvdXJjZVJvb3QiOiIifQ==
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
          var _randomObj = Math.floor(Math.random() * _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length);
          isInTheArray();
        }
      }
    };
    var isInTheArray = function isInTheArray() {
      for (var j = 0; j <= randomImgArray.length; j++) {
        if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj] != randomImgArray[j]) {
          if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].level === "basic") {
            var sourceImg = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src;
            randomImgArray.push(sourceImg);
          }
        }
      }
      createImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RandomImg, null));
    };
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4aa5a99e3edf3a245391")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MTkxMmQ5NmI1Y2QwMmIyNDA0NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1Q7QUFDVTs7QUFHNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUksTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUVoRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQzNCLElBQUlILE1BQU0sRUFBRTtJQUNSLElBQU1JLFNBQVMsR0FBR0wsNERBQVUsQ0FBQ0MsTUFBTSxDQUFDO0lBRXBDLElBQU1HLFVBQVMsR0FBRyxTQUFaQSxVQUFTQSxDQUFBLEVBQVM7TUFDcEIsSUFBTUUsY0FBYyxHQUFHLEVBQUU7TUFDekIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdSLDZDQUFPLENBQUNTLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBSUQsY0FBYyxDQUFDRSxNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQzdCLG9CQUFPWCwwREFBQSxhQUFLUyxjQUFjLENBQUNHLEdBQUcsQ0FBQyxVQUFDQyxPQUFPO1lBQUEsb0JBQUtiLDBEQUFBO2NBQUljLFNBQVMsRUFBRTtZQUFnQixHQUFFRCxPQUFZLENBQUM7VUFBQSxFQUFNLENBQUM7UUFDckcsQ0FBQyxNQUFNO1VBQ0gsSUFBTUUsVUFBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHaEIsNkNBQU8sQ0FBQ1MsTUFBTSxDQUFDO1VBQzVEUSxZQUFZLENBQUMsQ0FBQztRQUNsQjtNQUNKO0lBQ0osQ0FBQztJQUVELElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7TUFDdkIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUlYLGNBQWMsQ0FBQ0UsTUFBTSxFQUFFUyxDQUFDLEVBQUUsRUFBRTtRQUM3QyxJQUFJbEIsNkNBQU8sQ0FBQ2EsU0FBUyxDQUFDLElBQUlOLGNBQWMsQ0FBQ1csQ0FBQyxDQUFDLEVBQUU7VUFDekMsSUFBSWxCLDZDQUFPLENBQUNhLFNBQVMsQ0FBQyxDQUFDTSxLQUFLLEtBQUssT0FBTyxFQUFFO1lBQ3RDLElBQU1DLFNBQVMsR0FBR3BCLDZDQUFPLENBQUNhLFNBQVMsQ0FBQyxDQUFDUSxHQUFHO1lBQ3hDZCxjQUFjLENBQUNlLElBQUksQ0FBQ0YsU0FBUyxDQUFDO1VBQ2xDO1FBQ0o7TUFDSjtNQUVBZCxTQUFTLENBQUNpQixNQUFNLGVBQUN6QiwwREFBQSxDQUFDMEIsVUFBUyxNQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0VBQ0w7QUFDSixDQUFDOzs7Ozs7OztVQ3pERCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvUmFuZG9tSW1nLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlRWxlbWVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5cclxuLy8gaWYgKGJhc2ljV29ya291dEJveCkge1xyXG4vLyAgICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxuLy9cclxuLy8gICAgIGNvbnN0IEFwcCA9ICgpID0+IHtcclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgICAgPFJhbmRvbUltZyAvPlxyXG4vLyAgICAgICAgICAgICA8Lz5cclxuLy8gICAgICAgICApXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vXHJcbi8vICAgICByb290LnJlbmRlcig8QXBwLz4pO1xyXG4vL1xyXG4vLyB9XHJcbi8vXHJcbi8vIGNvbnN0IGJhc2ljV29ya291dEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiAud29ya291dF9iYXNpYycpXHJcbi8vIGNvbnN0IG5ld1dvcmtvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbi8vIGJhc2ljV29ya291dEJveC5hcHBlbmRDaGlsZChuZXdXb3Jrb3V0KTtcclxuXHJcblxyXG5jb25zdCBuZXdJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtvdXRfYmFzaWNcIik7XHJcblxyXG5leHBvcnQgY29uc3QgUmFuZG9tSW1nID0gKCkgPT4ge1xyXG4gICAgaWYgKG5ld0ltZykge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUltZyA9IGNyZWF0ZVJvb3QobmV3SW1nKTtcclxuXHJcbiAgICAgICAgY29uc3QgUmFuZG9tSW1nID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21JbWdBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGZpZ3VyZXMubGVuZ3RoOyBuKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChyYW5kb21JbWdBcnJheS5sZW5ndGggPT09IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHVsPntyYW5kb21JbWdBcnJheS5tYXAoKGVsZW1lbnQpID0+IDxsaSBjbGFzc05hbWU9e1wid29ya291dF9pbWFnZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBpc0luVGhlQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXNJblRoZUFycmF5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSByYW5kb21JbWdBcnJheS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbcmFuZG9tT2JqXSAhPSByYW5kb21JbWdBcnJheVtqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW3JhbmRvbU9ial0ubGV2ZWwgPT09IFwiYmFzaWNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbWcgPSBmaWd1cmVzW3JhbmRvbU9ial0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb21JbWdBcnJheS5wdXNoKHNvdXJjZUltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVJbWcucmVuZGVyKDxSYW5kb21JbWcvPik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRhYTVhOTllM2VkZjNhMjQ1MzkxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImZpZ3VyZXMiLCJjcmVhdGVSb290IiwibmV3SW1nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiUmFuZG9tSW1nIiwiY3JlYXRlSW1nIiwicmFuZG9tSW1nQXJyYXkiLCJuIiwibGVuZ3RoIiwibWFwIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsInJhbmRvbU9iaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImlzSW5UaGVBcnJheSIsImoiLCJsZXZlbCIsInNvdXJjZUltZyIsInNyYyIsInB1c2giLCJyZW5kZXIiLCJfUmFuZG9tSW1nIl0sInNvdXJjZVJvb3QiOiIifQ==
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
var _this = undefined;




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
    var RandomImgFunction = function RandomImgFunction() {
      var randomImgArray = [];
      for (var n = 0; n < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; n++) {
        if (randomImgArray.length === 6) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, randomImgArray.map(function (element) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
              key: _this.id,
              className: "workout_image"
            }, element);
          }));
        } else {
          var randomObj = Math.floor(Math.random() * _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length);
          // for (let j = 0; j <= randomImgArray.length; j++) {
          //     if (figures[randomObj] != randomImgArray[j]) {
          if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].level === "basic") {
            var sourceImg = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src;
            randomImgArray.push(sourceImg);
          }
          // }
          // }
        }
      }
    };

    createImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RandomImgFunction, null));
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ce20f76f3db570bedcd4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZWYyMWE5ZjE4YTllYzVlOTkwOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNUO0FBQ1U7O0FBRzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1JLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFaEQsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUztFQUMzQixJQUFJSCxNQUFNLEVBQUU7SUFDUixJQUFNSSxTQUFTLEdBQUdMLDREQUFVLENBQUNDLE1BQU0sQ0FBQztJQUVwQyxJQUFNSyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFBLEVBQVM7TUFDNUIsSUFBTUMsY0FBYyxHQUFHLEVBQUU7TUFDekIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdULDZDQUFPLENBQUNVLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBSUQsY0FBYyxDQUFDRSxNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQzdCLG9CQUFPWiwwREFBQSxhQUFLVSxjQUFjLENBQUNHLEdBQUcsQ0FBQyxVQUFDQyxPQUFPO1lBQUEsb0JBQUtkLDBEQUFBO2NBQUllLEdBQUcsRUFBRUMsS0FBSSxDQUFDQyxFQUFHO2NBQUNDLFNBQVMsRUFBRTtZQUFnQixHQUFFSixPQUFZLENBQUM7VUFBQSxFQUFNLENBQUM7UUFDbkgsQ0FBQyxNQUFNO1VBQ0gsSUFBTUssU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHcEIsNkNBQU8sQ0FBQ1UsTUFBTSxDQUFDO1VBQzVEO1VBQ0E7VUFDUSxJQUFJViw2Q0FBTyxDQUFDaUIsU0FBUyxDQUFDLENBQUNJLEtBQUssS0FBSyxPQUFPLEVBQUU7WUFDdEMsSUFBTUMsU0FBUyxHQUFHdEIsNkNBQU8sQ0FBQ2lCLFNBQVMsQ0FBQyxDQUFDTSxHQUFHO1lBQ3hDZixjQUFjLENBQUNnQixJQUFJLENBQUNGLFNBQVMsQ0FBQztVQUNsQztVQUNKO1VBQ0o7UUFDSjtNQUNKO0lBQ0osQ0FBQzs7SUFDR2hCLFNBQVMsQ0FBQ21CLE1BQU0sZUFBQzNCLDBEQUFBLENBQUNTLGlCQUFpQixNQUFDLENBQUMsQ0FBQztFQUMxQztBQUNSLENBQUM7Ozs7Ozs7O1VDcEREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9SYW5kb21JbWcuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtjcmVhdGVFbGVtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcblxyXG4vLyBpZiAoYmFzaWNXb3Jrb3V0Qm94KSB7XHJcbi8vICAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG4vL1xyXG4vLyAgICAgY29uc3QgQXBwID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgICAgICA8UmFuZG9tSW1nIC8+XHJcbi8vICAgICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgIClcclxuLy8gICAgIH1cclxuLy9cclxuLy9cclxuLy8gICAgIHJvb3QucmVuZGVyKDxBcHAvPik7XHJcbi8vXHJcbi8vIH1cclxuLy9cclxuLy8gY29uc3QgYmFzaWNXb3Jrb3V0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2IC53b3Jrb3V0X2Jhc2ljJylcclxuLy8gY29uc3QgbmV3V29ya291dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuLy8gYmFzaWNXb3Jrb3V0Qm94LmFwcGVuZENoaWxkKG5ld1dvcmtvdXQpO1xyXG5cclxuXHJcbmNvbnN0IG5ld0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya291dF9iYXNpY1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBSYW5kb21JbWcgPSAoKSA9PiB7XHJcbiAgICBpZiAobmV3SW1nKSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlSW1nID0gY3JlYXRlUm9vdChuZXdJbWcpO1xyXG5cclxuICAgICAgICBjb25zdCBSYW5kb21JbWdGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tSW1nQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBmaWd1cmVzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tSW1nQXJyYXkubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx1bD57cmFuZG9tSW1nQXJyYXkubWFwKChlbGVtZW50KSA9PiA8bGkga2V5PXt0aGlzLmlkfSBjbGFzc05hbWU9e1wid29ya291dF9pbWFnZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBqID0gMDsgaiA8PSByYW5kb21JbWdBcnJheS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoZmlndXJlc1tyYW5kb21PYmpdICE9IHJhbmRvbUltZ0FycmF5W2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tyYW5kb21PYmpdLmxldmVsID09PSBcImJhc2ljXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbWcgPSBmaWd1cmVzW3JhbmRvbU9ial0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgY3JlYXRlSW1nLnJlbmRlcig8UmFuZG9tSW1nRnVuY3Rpb24vPik7XHJcbiAgICAgICAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNlMjBmNzZmM2RiNTcwYmVkY2Q0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImZpZ3VyZXMiLCJjcmVhdGVSb290IiwibmV3SW1nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiUmFuZG9tSW1nIiwiY3JlYXRlSW1nIiwiUmFuZG9tSW1nRnVuY3Rpb24iLCJyYW5kb21JbWdBcnJheSIsIm4iLCJsZW5ndGgiLCJtYXAiLCJlbGVtZW50Iiwia2V5IiwiX3RoaXMiLCJpZCIsImNsYXNzTmFtZSIsInJhbmRvbU9iaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxldmVsIiwic291cmNlSW1nIiwic3JjIiwicHVzaCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=
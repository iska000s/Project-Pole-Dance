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
    var RandomImgFunction = function RandomImgFunction(figures) {
      var randomImgArray = [];
      for (var n = 0; n < figures.length; n++) {
        if (randomImgArray.length === 6) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, randomImgArray.map(function (element) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
              className: "workout_image"
            }, element);
          }));
        } else {
          var randomObj = Math.floor(Math.random() * figures.length);
          // for (let j = 0; j <= randomImgArray.length; j++) {
          //     if (figures[randomObj] != randomImgArray[j]) {
          if (figures[randomObj].level === "basic") {
            var sourceImg = figures[randomObj].src;
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
/******/ 	__webpack_require__.h = () => ("1ba1332382bf50983a8c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wNTNkMGY0NWNmZGVkZmViMjgxMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1Q7QUFDVTs7QUFHNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUksTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUVoRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQzNCLElBQUlILE1BQU0sRUFBRTtJQUNSLElBQU1JLFNBQVMsR0FBR0wsNERBQVUsQ0FBQ0MsTUFBTSxDQUFDO0lBRXBDLElBQU1LLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUlQLE9BQU8sRUFBSztNQUNuQyxJQUFNUSxjQUFjLEdBQUcsRUFBRTtNQUN6QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1QsT0FBTyxDQUFDVSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQ3JDLElBQUlELGNBQWMsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtVQUM3QixvQkFBT1osMERBQUEsYUFBS1UsY0FBYyxDQUFDRyxHQUFHLENBQUMsVUFBQ0MsT0FBTztZQUFBLG9CQUFLZCwwREFBQTtjQUFLZSxTQUFTLEVBQUU7WUFBZ0IsR0FBRUQsT0FBWSxDQUFDO1VBQUEsRUFBTSxDQUFDO1FBQ3RHLENBQUMsTUFBTTtVQUNILElBQU1FLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR2pCLE9BQU8sQ0FBQ1UsTUFBTSxDQUFDO1VBQzVEO1VBQ0E7VUFDUSxJQUFJVixPQUFPLENBQUNjLFNBQVMsQ0FBQyxDQUFDSSxLQUFLLEtBQUssT0FBTyxFQUFFO1lBQ3RDLElBQU1DLFNBQVMsR0FBR25CLE9BQU8sQ0FBQ2MsU0FBUyxDQUFDLENBQUNNLEdBQUc7WUFDeENaLGNBQWMsQ0FBQ2EsSUFBSSxDQUFDRixTQUFTLENBQUM7VUFDbEM7VUFDSjtVQUNKO1FBQ0o7TUFDSjtJQUNKLENBQUM7O0lBQ0diLFNBQVMsQ0FBQ2dCLE1BQU0sZUFBQ3hCLDBEQUFBLENBQUNTLGlCQUFpQixNQUFDLENBQUMsQ0FBQztFQUMxQztBQUNSLENBQUM7Ozs7Ozs7O1VDcEREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9SYW5kb21JbWcuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtjcmVhdGVFbGVtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcblxyXG4vLyBpZiAoYmFzaWNXb3Jrb3V0Qm94KSB7XHJcbi8vICAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG4vL1xyXG4vLyAgICAgY29uc3QgQXBwID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgICAgICA8UmFuZG9tSW1nIC8+XHJcbi8vICAgICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgIClcclxuLy8gICAgIH1cclxuLy9cclxuLy9cclxuLy8gICAgIHJvb3QucmVuZGVyKDxBcHAvPik7XHJcbi8vXHJcbi8vIH1cclxuLy9cclxuLy8gY29uc3QgYmFzaWNXb3Jrb3V0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2IC53b3Jrb3V0X2Jhc2ljJylcclxuLy8gY29uc3QgbmV3V29ya291dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuLy8gYmFzaWNXb3Jrb3V0Qm94LmFwcGVuZENoaWxkKG5ld1dvcmtvdXQpO1xyXG5cclxuXHJcbmNvbnN0IG5ld0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya291dF9iYXNpY1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBSYW5kb21JbWcgPSAoKSA9PiB7XHJcbiAgICBpZiAobmV3SW1nKSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlSW1nID0gY3JlYXRlUm9vdChuZXdJbWcpO1xyXG5cclxuICAgICAgICBjb25zdCBSYW5kb21JbWdGdW5jdGlvbiA9IChmaWd1cmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUltZ0FycmF5ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgZmlndXJlcy5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmRvbUltZ0FycmF5Lmxlbmd0aCA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dWw+e3JhbmRvbUltZ0FycmF5Lm1hcCgoZWxlbWVudCkgPT4gPGxpICBjbGFzc05hbWU9e1wid29ya291dF9pbWFnZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBqID0gMDsgaiA8PSByYW5kb21JbWdBcnJheS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoZmlndXJlc1tyYW5kb21PYmpdICE9IHJhbmRvbUltZ0FycmF5W2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tyYW5kb21PYmpdLmxldmVsID09PSBcImJhc2ljXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbWcgPSBmaWd1cmVzW3JhbmRvbU9ial0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgY3JlYXRlSW1nLnJlbmRlcig8UmFuZG9tSW1nRnVuY3Rpb24vPik7XHJcbiAgICAgICAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFiYTEzMzIzODJiZjUwOTgzYThjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImZpZ3VyZXMiLCJjcmVhdGVSb290IiwibmV3SW1nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiUmFuZG9tSW1nIiwiY3JlYXRlSW1nIiwiUmFuZG9tSW1nRnVuY3Rpb24iLCJyYW5kb21JbWdBcnJheSIsIm4iLCJsZW5ndGgiLCJtYXAiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwicmFuZG9tT2JqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGV2ZWwiLCJzb3VyY2VJbWciLCJzcmMiLCJwdXNoIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==
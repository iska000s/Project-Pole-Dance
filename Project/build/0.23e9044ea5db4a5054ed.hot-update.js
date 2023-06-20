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
    var RandomImgFunction = function RandomImgFunction() {
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
          // for (let j = 0; j <= randomImgArray.length; j++) {
          //     if (figures[randomObj] != randomImgArray[j]) {
          if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].level === "basic" || _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj]) {
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
/******/ 	__webpack_require__.h = () => ("a2fe31fa1a8bfa5ebbc6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yM2U5MDQ0ZWE1ZGI0YTUwNTRlZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1Q7QUFDVTs7QUFHNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUksTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUVoRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQzNCLElBQUlILE1BQU0sRUFBRTtJQUNSLElBQU1JLFNBQVMsR0FBR0wsNERBQVUsQ0FBQ0MsTUFBTSxDQUFDO0lBRXBDLElBQU1LLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBUztNQUM1QixJQUFNQyxjQUFjLEdBQUcsRUFBRTtNQUN6QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1QsNkNBQU8sQ0FBQ1UsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtRQUNyQyxJQUFJRCxjQUFjLENBQUNFLE1BQU0sS0FBSyxDQUFDLEVBQUU7VUFDN0Isb0JBQU9aLDBEQUFBLGFBQUtVLGNBQWMsQ0FBQ0csR0FBRyxDQUFDLFVBQUNDLE9BQU87WUFBQSxvQkFBS2QsMERBQUE7Y0FBSWUsR0FBRyxFQUFFYiw2Q0FBTyxDQUFDYyxFQUFHO2NBQUNDLFNBQVMsRUFBRTtZQUFnQixHQUFFSCxPQUFZLENBQUM7VUFBQSxFQUFNLENBQUM7UUFDdEgsQ0FBQyxNQUFNO1VBQ0gsSUFBTUksU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHbkIsNkNBQU8sQ0FBQ1UsTUFBTSxDQUFDO1VBQzVEO1VBQ0E7VUFDUSxJQUFJViw2Q0FBTyxDQUFDZ0IsU0FBUyxDQUFDLENBQUNJLEtBQUssS0FBSyxPQUFPLElBQUlwQiw2Q0FBTyxDQUFDZ0IsU0FBUyxDQUFDLEVBQUU7WUFDNUQsSUFBTUssU0FBUyxHQUFHckIsNkNBQU8sQ0FBQ2dCLFNBQVMsQ0FBQyxDQUFDTSxHQUFHO1lBQ3hDZCxjQUFjLENBQUNlLElBQUksQ0FBQ0YsU0FBUyxDQUFDO1VBQ2xDO1VBQ0o7VUFDSjtRQUNKO01BQ0o7SUFDSixDQUFDOztJQUNHZixTQUFTLENBQUNrQixNQUFNLGVBQUMxQiwwREFBQSxDQUFDUyxpQkFBaUIsTUFBQyxDQUFDLENBQUM7RUFDMUM7QUFDUixDQUFDOzs7Ozs7OztVQ3BERCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvUmFuZG9tSW1nLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlRWxlbWVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5cclxuLy8gaWYgKGJhc2ljV29ya291dEJveCkge1xyXG4vLyAgICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxuLy9cclxuLy8gICAgIGNvbnN0IEFwcCA9ICgpID0+IHtcclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgICAgPFJhbmRvbUltZyAvPlxyXG4vLyAgICAgICAgICAgICA8Lz5cclxuLy8gICAgICAgICApXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vXHJcbi8vICAgICByb290LnJlbmRlcig8QXBwLz4pO1xyXG4vL1xyXG4vLyB9XHJcbi8vXHJcbi8vIGNvbnN0IGJhc2ljV29ya291dEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiAud29ya291dF9iYXNpYycpXHJcbi8vIGNvbnN0IG5ld1dvcmtvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbi8vIGJhc2ljV29ya291dEJveC5hcHBlbmRDaGlsZChuZXdXb3Jrb3V0KTtcclxuXHJcblxyXG5jb25zdCBuZXdJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtvdXRfYmFzaWNcIik7XHJcblxyXG5leHBvcnQgY29uc3QgUmFuZG9tSW1nID0gKCkgPT4ge1xyXG4gICAgaWYgKG5ld0ltZykge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUltZyA9IGNyZWF0ZVJvb3QobmV3SW1nKTtcclxuXHJcbiAgICAgICAgY29uc3QgUmFuZG9tSW1nRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUltZ0FycmF5ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgZmlndXJlcy5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmRvbUltZ0FycmF5Lmxlbmd0aCA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dWw+e3JhbmRvbUltZ0FycmF5Lm1hcCgoZWxlbWVudCkgPT4gPGxpIGtleT17ZmlndXJlcy5pZH0gY2xhc3NOYW1lPXtcIndvcmtvdXRfaW1hZ2VcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21PYmogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWd1cmVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaiA9IDA7IGogPD0gcmFuZG9tSW1nQXJyYXkubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGZpZ3VyZXNbcmFuZG9tT2JqXSAhPSByYW5kb21JbWdBcnJheVtqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbcmFuZG9tT2JqXS5sZXZlbCA9PT0gXCJiYXNpY1wiIHx8IGZpZ3VyZXNbcmFuZG9tT2JqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tSW1nQXJyYXkucHVzaChzb3VyY2VJbWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBjcmVhdGVJbWcucmVuZGVyKDxSYW5kb21JbWdGdW5jdGlvbi8+KTtcclxuICAgICAgICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTJmZTMxZmExYThiZmE1ZWJiYzZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiZmlndXJlcyIsImNyZWF0ZVJvb3QiLCJuZXdJbWciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJSYW5kb21JbWciLCJjcmVhdGVJbWciLCJSYW5kb21JbWdGdW5jdGlvbiIsInJhbmRvbUltZ0FycmF5IiwibiIsImxlbmd0aCIsIm1hcCIsImVsZW1lbnQiLCJrZXkiLCJpZCIsImNsYXNzTmFtZSIsInJhbmRvbU9iaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxldmVsIiwic291cmNlSW1nIiwic3JjIiwicHVzaCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=
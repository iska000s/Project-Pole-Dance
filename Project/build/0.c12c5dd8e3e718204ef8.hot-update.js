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

    createImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RandomImg, null));
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("55e35eb9245942cf9398")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMTJjNWRkOGUzZTcxODIwNGVmOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1Q7QUFDVTs7QUFHNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUksTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUVoRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQzNCLElBQUlILE1BQU0sRUFBRTtJQUNSLElBQU1JLFNBQVMsR0FBR0wsNERBQVUsQ0FBQ0MsTUFBTSxDQUFDO0lBRXBDLElBQU1LLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBUztNQUM1QixJQUFNQyxjQUFjLEdBQUcsRUFBRTtNQUN6QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1QsNkNBQU8sQ0FBQ1UsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtRQUNyQyxJQUFJRCxjQUFjLENBQUNFLE1BQU0sS0FBSyxDQUFDLEVBQUU7VUFDN0Isb0JBQU9aLDBEQUFBLGFBQUtVLGNBQWMsQ0FBQ0csR0FBRyxDQUFDLFVBQUNDLE9BQU87WUFBQSxvQkFBS2QsMERBQUE7Y0FBSWUsU0FBUyxFQUFFO1lBQWdCLEdBQUVELE9BQVksQ0FBQztVQUFBLEVBQU0sQ0FBQztRQUNyRyxDQUFDLE1BQU07VUFDSCxJQUFNRSxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUdqQiw2Q0FBTyxDQUFDVSxNQUFNLENBQUM7VUFDNUQ7VUFDQTtVQUNRLElBQUlWLDZDQUFPLENBQUNjLFNBQVMsQ0FBQyxDQUFDSSxLQUFLLEtBQUssT0FBTyxFQUFFO1lBQ3RDLElBQU1DLFNBQVMsR0FBR25CLDZDQUFPLENBQUNjLFNBQVMsQ0FBQyxDQUFDTSxHQUFHO1lBQ3hDWixjQUFjLENBQUNhLElBQUksQ0FBQ0YsU0FBUyxDQUFDO1VBQ2xDO1VBQ0o7VUFDSjtRQUNKO01BQ0o7SUFDSixDQUFDOztJQUNHYixTQUFTLENBQUNnQixNQUFNLGVBQUN4QiwwREFBQSxDQUFDTyxTQUFTLE1BQUMsQ0FBQyxDQUFDO0VBQ2xDO0FBQ1IsQ0FBQzs7Ozs7Ozs7VUNwREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL1JhbmRvbUltZy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZUVsZW1lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuXHJcbi8vIGlmIChiYXNpY1dvcmtvdXRCb3gpIHtcclxuLy8gICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbi8vXHJcbi8vICAgICBjb25zdCBBcHAgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgICAgIDxSYW5kb21JbWcgLz5cclxuLy8gICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgKVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgcm9vdC5yZW5kZXIoPEFwcC8+KTtcclxuLy9cclxuLy8gfVxyXG4vL1xyXG4vLyBjb25zdCBiYXNpY1dvcmtvdXRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYgLndvcmtvdXRfYmFzaWMnKVxyXG4vLyBjb25zdCBuZXdXb3Jrb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4vLyBiYXNpY1dvcmtvdXRCb3guYXBwZW5kQ2hpbGQobmV3V29ya291dCk7XHJcblxyXG5cclxuY29uc3QgbmV3SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrb3V0X2Jhc2ljXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJhbmRvbUltZyA9ICgpID0+IHtcclxuICAgIGlmIChuZXdJbWcpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVJbWcgPSBjcmVhdGVSb290KG5ld0ltZyk7XHJcblxyXG4gICAgICAgIGNvbnN0IFJhbmRvbUltZ0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21JbWdBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGZpZ3VyZXMubGVuZ3RoOyBuKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChyYW5kb21JbWdBcnJheS5sZW5ndGggPT09IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHVsPntyYW5kb21JbWdBcnJheS5tYXAoKGVsZW1lbnQpID0+IDxsaSBjbGFzc05hbWU9e1wid29ya291dF9pbWFnZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbU9iaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBqID0gMDsgaiA8PSByYW5kb21JbWdBcnJheS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoZmlndXJlc1tyYW5kb21PYmpdICE9IHJhbmRvbUltZ0FycmF5W2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tyYW5kb21PYmpdLmxldmVsID09PSBcImJhc2ljXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbWcgPSBmaWd1cmVzW3JhbmRvbU9ial0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgY3JlYXRlSW1nLnJlbmRlcig8UmFuZG9tSW1nLz4pO1xyXG4gICAgICAgIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1NWUzNWViOTI0NTk0MmNmOTM5OFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJmaWd1cmVzIiwiY3JlYXRlUm9vdCIsIm5ld0ltZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIlJhbmRvbUltZyIsImNyZWF0ZUltZyIsIlJhbmRvbUltZ0Z1bmN0aW9uIiwicmFuZG9tSW1nQXJyYXkiLCJuIiwibGVuZ3RoIiwibWFwIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsInJhbmRvbU9iaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxldmVsIiwic291cmNlSW1nIiwic3JjIiwicHVzaCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=
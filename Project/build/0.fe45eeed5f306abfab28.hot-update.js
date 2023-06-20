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



var newImgBasic = document.querySelector(".workout_basic");
var newImgIntermediate = document.querySelector(".workout_intermediate");
var newImgAdvanced = document.querySelector(".workout_advanced");

// export const RandomImg = () => {
//
//     if (newImgBasic) {
//         const createImg = createRoot(newImgBasic);
//
//         const RandomImgFunction = () => {
//             const randomImgArray = [];
//             for (let n = 0; n < figures.length; n++) {
//                 if (randomImgArray.length === 6) {
//                     return <ul>{randomImgArray.map((element) => <li key={figures.id} className={"workout_image"}>{element}</li>)}</ul>;
//                 } else {
//                     const randomObj = Math.floor(Math.random() * figures.length);
//                             if (figures[randomObj].level === "basic" && randomImgArray.includes(figures[randomObj].src) === false) {
//                                 const sourceImg = figures[randomObj].src;
//                                 randomImgArray.push(sourceImg);
//                             }
//                 }
//             }
//         }
//             createImg.render(<RandomImgFunction/>);
//         }
// }

var RandomImgFunction = function RandomImgFunction(level) {
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
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].level === level && randomImgArray.includes(_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src) === false) {
        var sourceImg = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src;
        randomImgArray.push(sourceImg);
      }
    }
  }
};
var RandomImg = function RandomImg() {
  var createImgB = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(newImgBasic);
  var createImgI = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(newImgIntermediate);
  var createImgA = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(newImgAdvanced);
  if (newImgBasic) {
    RandomImgFunction('basic');
  }
  return createImgB.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RandomImg, null));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5439e89d0e2642d3b06b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZTQ1ZWVlZDVmMzA2YWJmYWIyOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1Q7QUFDVTtBQUU1QyxJQUFNSSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQzVELElBQU1DLGtCQUFrQixHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztBQUMxRSxJQUFNRSxjQUFjLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFJQyxLQUFLLEVBQUs7RUFDakMsSUFBTUMsY0FBYyxHQUFHLEVBQUU7RUFDekIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdWLDZDQUFPLENBQUNXLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7SUFDckMsSUFBSUQsY0FBYyxDQUFDRSxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQzdCLG9CQUFPYiwwREFBQSxhQUFLVyxjQUFjLENBQUNHLEdBQUcsQ0FBQyxVQUFDQyxPQUFPO1FBQUEsb0JBQUtmLDBEQUFBO1VBQUlnQixHQUFHLEVBQUVkLDZDQUFPLENBQUNlLEVBQUc7VUFDaEJDLFNBQVMsRUFBRTtRQUFnQixHQUFFSCxPQUFZLENBQUM7TUFBQSxFQUFNLENBQUM7SUFDckcsQ0FBQyxNQUFNO01BQ0gsSUFBTUksU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHcEIsNkNBQU8sQ0FBQ1csTUFBTSxDQUFDO01BQzVELElBQUlYLDZDQUFPLENBQUNpQixTQUFTLENBQUMsQ0FBQ1QsS0FBSyxLQUFLQSxLQUFLLElBQUlDLGNBQWMsQ0FBQ1ksUUFBUSxDQUFDckIsNkNBQU8sQ0FBQ2lCLFNBQVMsQ0FBQyxDQUFDSyxHQUFHLENBQUMsS0FBSyxLQUFLLEVBQUU7UUFDakcsSUFBTUMsU0FBUyxHQUFHdkIsNkNBQU8sQ0FBQ2lCLFNBQVMsQ0FBQyxDQUFDSyxHQUFHO1FBQ3hDYixjQUFjLENBQUNlLElBQUksQ0FBQ0QsU0FBUyxDQUFDO01BQ2xDO0lBQ0o7RUFDSjtBQUNKLENBQUM7QUFFTSxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQzNCLElBQU1DLFVBQVUsR0FBR3pCLDREQUFVLENBQUNDLFdBQVcsQ0FBQztFQUMxQyxJQUFNeUIsVUFBVSxHQUFHMUIsNERBQVUsQ0FBQ0ksa0JBQWtCLENBQUM7RUFDakQsSUFBTXVCLFVBQVUsR0FBRzNCLDREQUFVLENBQUNLLGNBQWMsQ0FBQztFQUM3QyxJQUFJSixXQUFXLEVBQUU7SUFDYkssaUJBQWlCLENBQUMsT0FBTyxDQUFDO0VBQzlCO0VBRUEsT0FFSW1CLFVBQVUsQ0FBQ0csTUFBTSxlQUFDL0IsMERBQUEsQ0FBQzJCLFNBQVMsTUFBQyxDQUFDLENBQUM7QUFHdkMsQ0FBQzs7Ozs7Ozs7VUM3REQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL1JhbmRvbUltZy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZUVsZW1lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuY29uc3QgbmV3SW1nQmFzaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmtvdXRfYmFzaWNcIik7XHJcbmNvbnN0IG5ld0ltZ0ludGVybWVkaWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya291dF9pbnRlcm1lZGlhdGVcIik7XHJcbmNvbnN0IG5ld0ltZ0FkdmFuY2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrb3V0X2FkdmFuY2VkXCIpO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IFJhbmRvbUltZyA9ICgpID0+IHtcclxuLy9cclxuLy8gICAgIGlmIChuZXdJbWdCYXNpYykge1xyXG4vLyAgICAgICAgIGNvbnN0IGNyZWF0ZUltZyA9IGNyZWF0ZVJvb3QobmV3SW1nQmFzaWMpO1xyXG4vL1xyXG4vLyAgICAgICAgIGNvbnN0IFJhbmRvbUltZ0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBjb25zdCByYW5kb21JbWdBcnJheSA9IFtdO1xyXG4vLyAgICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGZpZ3VyZXMubGVuZ3RoOyBuKyspIHtcclxuLy8gICAgICAgICAgICAgICAgIGlmIChyYW5kb21JbWdBcnJheS5sZW5ndGggPT09IDYpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHVsPntyYW5kb21JbWdBcnJheS5tYXAoKGVsZW1lbnQpID0+IDxsaSBrZXk9e2ZpZ3VyZXMuaWR9IGNsYXNzTmFtZT17XCJ3b3Jrb3V0X2ltYWdlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tT2JqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlndXJlcy5sZW5ndGgpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbcmFuZG9tT2JqXS5sZXZlbCA9PT0gXCJiYXNpY1wiICYmIHJhbmRvbUltZ0FycmF5LmluY2x1ZGVzKGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmMpID09PSBmYWxzZSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tSW1nQXJyYXkucHVzaChzb3VyY2VJbWcpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBjcmVhdGVJbWcucmVuZGVyKDxSYW5kb21JbWdGdW5jdGlvbi8+KTtcclxuLy8gICAgICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5jb25zdCBSYW5kb21JbWdGdW5jdGlvbiA9IChsZXZlbCkgPT4ge1xyXG4gICAgY29uc3QgcmFuZG9tSW1nQXJyYXkgPSBbXTtcclxuICAgIGZvciAobGV0IG4gPSAwOyBuIDwgZmlndXJlcy5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgIGlmIChyYW5kb21JbWdBcnJheS5sZW5ndGggPT09IDYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDx1bD57cmFuZG9tSW1nQXJyYXkubWFwKChlbGVtZW50KSA9PiA8bGkga2V5PXtmaWd1cmVzLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wid29ya291dF9pbWFnZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tT2JqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlndXJlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tyYW5kb21PYmpdLmxldmVsID09PSBsZXZlbCAmJiByYW5kb21JbWdBcnJheS5pbmNsdWRlcyhmaWd1cmVzW3JhbmRvbU9ial0uc3JjKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbiAgICAgICAgICAgICAgICByYW5kb21JbWdBcnJheS5wdXNoKHNvdXJjZUltZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSYW5kb21JbWcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjcmVhdGVJbWdCID0gY3JlYXRlUm9vdChuZXdJbWdCYXNpYyk7XHJcbiAgICBjb25zdCBjcmVhdGVJbWdJID0gY3JlYXRlUm9vdChuZXdJbWdJbnRlcm1lZGlhdGUpO1xyXG4gICAgY29uc3QgY3JlYXRlSW1nQSA9IGNyZWF0ZVJvb3QobmV3SW1nQWR2YW5jZWQpO1xyXG4gICAgaWYgKG5ld0ltZ0Jhc2ljKSB7XHJcbiAgICAgICAgUmFuZG9tSW1nRnVuY3Rpb24oJ2Jhc2ljJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgY3JlYXRlSW1nQi5yZW5kZXIoPFJhbmRvbUltZy8+KVxyXG5cclxuKVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTQzOWU4OWQwZTI2NDJkM2IwNmJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiZmlndXJlcyIsImNyZWF0ZVJvb3QiLCJuZXdJbWdCYXNpYyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5ld0ltZ0ludGVybWVkaWF0ZSIsIm5ld0ltZ0FkdmFuY2VkIiwiUmFuZG9tSW1nRnVuY3Rpb24iLCJsZXZlbCIsInJhbmRvbUltZ0FycmF5IiwibiIsImxlbmd0aCIsIm1hcCIsImVsZW1lbnQiLCJrZXkiLCJpZCIsImNsYXNzTmFtZSIsInJhbmRvbU9iaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImluY2x1ZGVzIiwic3JjIiwic291cmNlSW1nIiwicHVzaCIsIlJhbmRvbUltZyIsImNyZWF0ZUltZ0IiLCJjcmVhdGVJbWdJIiwiY3JlYXRlSW1nQSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=
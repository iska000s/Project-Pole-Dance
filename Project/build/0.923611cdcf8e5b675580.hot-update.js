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
basicWorkoutBox.tagName = "div";
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
/******/ 	__webpack_require__.h = () => ("90fc66a72478ed0e0f7a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MjM2MTFjZGNmOGU1YjY3NTU4MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1E7QUFDVTtBQUU1QyxJQUFNRyxlQUFlLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBRWhFRixlQUFlLENBQUNHLE9BQU8sR0FBRyxLQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQzNCLElBQU1DLGNBQWMsR0FBRyxFQUFFO0VBQ3pCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHUiw2Q0FBTyxDQUFDUyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQ3JDLElBQUlELGNBQWMsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUM3QixvQkFBT1YsMERBQUEsYUFBS1EsY0FBYyxDQUFDSSxHQUFHLENBQUMsVUFBQ0MsT0FBTztRQUFBLG9CQUFLYiwwREFBQTtVQUFJYyxTQUFTLEVBQUU7UUFBZ0IsR0FBRUQsT0FBWSxDQUFDO01BQUEsRUFBTSxDQUFDO0lBQ3JHLENBQUMsTUFBTTtNQUNILElBQU1FLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR2pCLDZDQUFPLENBQUNTLE1BQU0sQ0FBQztNQUM1RCxJQUFJVCw2Q0FBTyxDQUFDYyxTQUFTLENBQUMsQ0FBQ0ksS0FBSyxLQUFLLE9BQU8sRUFBRTtRQUN0QyxJQUFNQyxTQUFTLEdBQUduQiw2Q0FBTyxDQUFDYyxTQUFTLENBQUMsQ0FBQ00sR0FBRztRQUN4Q2IsY0FBYyxDQUFDYyxJQUFJLENBQUNGLFNBQVMsQ0FBQztNQUNsQztJQUNKO0VBQ0o7QUFDSixDQUFDOzs7Ozs7OztVQ3BDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvUmFuZG9tSW1nLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuY29uc3QgYmFzaWNXb3Jrb3V0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrb3V0X2Jhc2ljXCIpXHJcblxyXG5iYXNpY1dvcmtvdXRCb3gudGFnTmFtZSA9IFwiZGl2XCI7XHJcbi8vIGlmIChiYXNpY1dvcmtvdXRCb3gpIHtcclxuLy8gICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbi8vXHJcbi8vICAgICBjb25zdCBBcHAgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgICAgIDxSYW5kb21JbWcgLz5cclxuLy8gICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgKVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgcm9vdC5yZW5kZXIoPEFwcC8+KTtcclxuLy9cclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IFJhbmRvbUltZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJhbmRvbUltZ0FycmF5ID0gW107XHJcbiAgICBmb3IgKGxldCBuID0gMDsgbiA8IGZpZ3VyZXMubGVuZ3RoOyBuKyspIHtcclxuICAgICAgICBpZiAocmFuZG9tSW1nQXJyYXkubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8dWw+e3JhbmRvbUltZ0FycmF5Lm1hcCgoZWxlbWVudCkgPT4gPGxpIGNsYXNzTmFtZT17XCJ3b3Jrb3V0X2ltYWdlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21PYmogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWd1cmVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW3JhbmRvbU9ial0ubGV2ZWwgPT09IFwiYmFzaWNcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlSW1nID0gZmlndXJlc1tyYW5kb21PYmpdLnNyYztcclxuICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTBmYzY2YTcyNDc4ZWQwZTBmN2FcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJmaWd1cmVzIiwiY3JlYXRlUm9vdCIsImJhc2ljV29ya291dEJveCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRhZ05hbWUiLCJSYW5kb21JbWciLCJyYW5kb21JbWdBcnJheSIsIm4iLCJsZW5ndGgiLCJjcmVhdGVFbGVtZW50IiwibWFwIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsInJhbmRvbU9iaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxldmVsIiwic291cmNlSW1nIiwic3JjIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=
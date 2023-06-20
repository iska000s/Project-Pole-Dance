"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 47:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RandomImg: () => (/* binding */ RandomImg)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);


document.querySelector(".workout_basic");
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
/******/ 	__webpack_require__.h = () => ("d5417b1b6e80270bea73")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wN2YxNmQ5YjQ4ZmM3ZTJhY2I4Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDUTtBQUVsQ0UsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFakMsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUztFQUMzQixJQUFNQyxjQUFjLEdBQUcsRUFBRTtFQUN6QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0wsNkNBQU8sQ0FBQ00sTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtJQUNyQyxJQUFJRCxjQUFjLENBQUNFLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDN0Isb0JBQU9QLDBEQUFBLGFBQUtLLGNBQWMsQ0FBQ0ksR0FBRyxDQUFDLFVBQUNDLE9BQU87UUFBQSxvQkFBS1YsMERBQUE7VUFBSVcsU0FBUyxFQUFFO1FBQWdCLEdBQUVELE9BQVksQ0FBQztNQUFBLEVBQU0sQ0FBQztJQUNyRyxDQUFDLE1BQU07TUFDSCxJQUFNRSxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUdkLDZDQUFPLENBQUNNLE1BQU0sQ0FBQztNQUM1RCxJQUFJTiw2Q0FBTyxDQUFDVyxTQUFTLENBQUMsQ0FBQ0ksS0FBSyxLQUFLLE9BQU8sRUFBRTtRQUN0QyxJQUFNQyxTQUFTLEdBQUdoQiw2Q0FBTyxDQUFDVyxTQUFTLENBQUMsQ0FBQ00sR0FBRztRQUN4Q2IsY0FBYyxDQUFDYyxJQUFJLENBQUNGLFNBQVMsQ0FBQztNQUNsQztJQUNKO0VBQ0o7QUFDSixDQUFDOzs7Ozs7OztVQ2xCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvUmFuZG9tSW1nLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya291dF9iYXNpY1wiKVxyXG5cclxuZXhwb3J0IGNvbnN0IFJhbmRvbUltZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJhbmRvbUltZ0FycmF5ID0gW107XHJcbiAgICBmb3IgKGxldCBuID0gMDsgbiA8IGZpZ3VyZXMubGVuZ3RoOyBuKyspIHtcclxuICAgICAgICBpZiAocmFuZG9tSW1nQXJyYXkubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8dWw+e3JhbmRvbUltZ0FycmF5Lm1hcCgoZWxlbWVudCkgPT4gPGxpIGNsYXNzTmFtZT17XCJ3b3Jrb3V0X2ltYWdlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21PYmogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWd1cmVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW3JhbmRvbU9ial0ubGV2ZWwgPT09IFwiYmFzaWNcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlSW1nID0gZmlndXJlc1tyYW5kb21PYmpdLnNyYztcclxuICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDU0MTdiMWI2ZTgwMjcwYmVhNzNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJmaWd1cmVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiUmFuZG9tSW1nIiwicmFuZG9tSW1nQXJyYXkiLCJuIiwibGVuZ3RoIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJyYW5kb21PYmoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZXZlbCIsInNvdXJjZUltZyIsInNyYyIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9
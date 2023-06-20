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
var RandomImg = function RandomImg(imgObj) {
  if (newImg) {
    var createImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(newImg);
    var RandomImgFunction = function RandomImgFunction() {
      var randomImgArray = [];
      for (var n = 0; n < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; n++) {
        if (randomImgArray.length === 6) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, randomImgArray.map(function (element) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
              key: imgObj,
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

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _RandomImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);





var container = document.getElementById("app");
if (container) {
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
  var App = function App() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, "cos cos", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_RandomImg__WEBPACK_IMPORTED_MODULE_3__.RandomImg, {
      imgObj: _figures__WEBPACK_IMPORTED_MODULE_4__.figures[id]
    }));
  };
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(App, null));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6399f2405b9a5bf2adbf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMTEzOTJkYjE0Y2Q0NWZiZmEzOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1Q7QUFDVTs7QUFHNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUksTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUVoRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUMsTUFBTSxFQUFLO0VBQ2pDLElBQUlKLE1BQU0sRUFBRTtJQUNSLElBQU1LLFNBQVMsR0FBR04sNERBQVUsQ0FBQ0MsTUFBTSxDQUFDO0lBRXBDLElBQU1NLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBUztNQUM1QixJQUFNQyxjQUFjLEdBQUcsRUFBRTtNQUN6QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1YsNkNBQU8sQ0FBQ1csTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtRQUNyQyxJQUFJRCxjQUFjLENBQUNFLE1BQU0sS0FBSyxDQUFDLEVBQUU7VUFDN0Isb0JBQU9iLDBEQUFBLGFBQUtXLGNBQWMsQ0FBQ0csR0FBRyxDQUFDLFVBQUNDLE9BQU87WUFBQSxvQkFBS2YsMERBQUE7Y0FBSWdCLEdBQUcsRUFBRVIsTUFBTztjQUFDUyxTQUFTLEVBQUU7WUFBZ0IsR0FBRUYsT0FBWSxDQUFDO1VBQUEsRUFBTSxDQUFDO1FBQ2xILENBQUMsTUFBTTtVQUNILElBQU1HLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR25CLDZDQUFPLENBQUNXLE1BQU0sQ0FBQztVQUM1RDtVQUNBO1VBQ1EsSUFBSVgsNkNBQU8sQ0FBQ2dCLFNBQVMsQ0FBQyxDQUFDSSxLQUFLLEtBQUssT0FBTyxFQUFFO1lBQ3RDLElBQU1DLFNBQVMsR0FBR3JCLDZDQUFPLENBQUNnQixTQUFTLENBQUMsQ0FBQ00sR0FBRztZQUN4Q2IsY0FBYyxDQUFDYyxJQUFJLENBQUNGLFNBQVMsQ0FBQztVQUNsQztVQUNKO1VBQ0o7UUFDSjtNQUNKO0lBQ0osQ0FBQzs7SUFDR2QsU0FBUyxDQUFDaUIsTUFBTSxlQUFDMUIsMERBQUEsQ0FBQ1UsaUJBQWlCLE1BQUMsQ0FBQyxDQUFDO0VBQzFDO0FBQ1IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNwRDBCO0FBQ0Q7QUFDb0I7QUFFUjtBQUNKO0FBRWxDLElBQU1pQixTQUFTLEdBQUd0QixRQUFRLENBQUN1QixjQUFjLENBQUMsS0FBSyxDQUFDO0FBRWhELElBQUlELFNBQVMsRUFBRTtFQUNYLElBQU1FLElBQUksR0FBRzFCLDREQUFVLENBQUN3QixTQUFTLENBQUM7RUFFbEMsSUFBTUcsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztJQUNkLG9CQUNJOUIsMERBQUEsQ0FBQUEsdURBQUEsUUFBRSxTQUVFLGVBQUFBLDBEQUFBLENBQUNPLGlEQUFTO01BQUNDLE1BQU0sRUFBSU4sNkNBQU8sQ0FBQzhCLEVBQUU7SUFBRSxDQUFFLENBQ3JDLENBQUM7RUFFWCxDQUFDO0VBR0RILElBQUksQ0FBQ0gsTUFBTSxlQUFDMUIsMERBQUEsQ0FBQzhCLEdBQUcsTUFBQyxDQUFDLENBQUM7QUFFdkI7Ozs7Ozs7O1VDeEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9SYW5kb21JbWcuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtjcmVhdGVFbGVtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcblxyXG4vLyBpZiAoYmFzaWNXb3Jrb3V0Qm94KSB7XHJcbi8vICAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG4vL1xyXG4vLyAgICAgY29uc3QgQXBwID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgICAgICA8UmFuZG9tSW1nIC8+XHJcbi8vICAgICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgIClcclxuLy8gICAgIH1cclxuLy9cclxuLy9cclxuLy8gICAgIHJvb3QucmVuZGVyKDxBcHAvPik7XHJcbi8vXHJcbi8vIH1cclxuLy9cclxuLy8gY29uc3QgYmFzaWNXb3Jrb3V0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2IC53b3Jrb3V0X2Jhc2ljJylcclxuLy8gY29uc3QgbmV3V29ya291dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuLy8gYmFzaWNXb3Jrb3V0Qm94LmFwcGVuZENoaWxkKG5ld1dvcmtvdXQpO1xyXG5cclxuXHJcbmNvbnN0IG5ld0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud29ya291dF9iYXNpY1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBSYW5kb21JbWcgPSAoaW1nT2JqKSA9PiB7XHJcbiAgICBpZiAobmV3SW1nKSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlSW1nID0gY3JlYXRlUm9vdChuZXdJbWcpO1xyXG5cclxuICAgICAgICBjb25zdCBSYW5kb21JbWdGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tSW1nQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBmaWd1cmVzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tSW1nQXJyYXkubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx1bD57cmFuZG9tSW1nQXJyYXkubWFwKChlbGVtZW50KSA9PiA8bGkga2V5PXtpbWdPYmp9IGNsYXNzTmFtZT17XCJ3b3Jrb3V0X2ltYWdlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tT2JqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlndXJlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGogPSAwOyBqIDw9IHJhbmRvbUltZ0FycmF5Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChmaWd1cmVzW3JhbmRvbU9ial0gIT0gcmFuZG9tSW1nQXJyYXlbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW3JhbmRvbU9ial0ubGV2ZWwgPT09IFwiYmFzaWNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tSW1nQXJyYXkucHVzaChzb3VyY2VJbWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBjcmVhdGVJbWcucmVuZGVyKDxSYW5kb21JbWdGdW5jdGlvbi8+KTtcclxuICAgICAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFwiLi4vc2Nzcy9pbmRleC5zY3NzXCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmltcG9ydCB7UmFuZG9tSW1nfSBmcm9tIFwiLi9SYW5kb21JbWdcIjtcclxuaW1wb3J0IHtmaWd1cmVzfSBmcm9tIFwiLi9maWd1cmVzXCI7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuXHJcbmlmIChjb250YWluZXIpIHtcclxuICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICBjb3MgY29zXHJcbiAgICAgICAgICAgICAgICA8UmFuZG9tSW1nIGltZ09iaiA9IHtmaWd1cmVzW2lkXX0gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByb290LnJlbmRlcig8QXBwLz4pO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2Mzk5ZjI0MDViOWE1YmYyYWRiZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJmaWd1cmVzIiwiY3JlYXRlUm9vdCIsIm5ld0ltZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIlJhbmRvbUltZyIsImltZ09iaiIsImNyZWF0ZUltZyIsIlJhbmRvbUltZ0Z1bmN0aW9uIiwicmFuZG9tSW1nQXJyYXkiLCJuIiwibGVuZ3RoIiwibWFwIiwiZWxlbWVudCIsImtleSIsImNsYXNzTmFtZSIsInJhbmRvbU9iaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxldmVsIiwic291cmNlSW1nIiwic3JjIiwicHVzaCIsInJlbmRlciIsImNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcCIsIkZyYWdtZW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9
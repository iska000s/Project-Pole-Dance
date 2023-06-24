"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 50:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeCaseFunction: () => (/* binding */ changeCaseFunction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);



// POMOCNE DLA SCHOWANIA I POKAZANIA OKIENKA DOT. FIGUR
// document.addEventListener("DOMContentLoaded", function (){
//
//     document.querySelectorAll(".btn").forEach(function (button){
//         button.addEventListener("click", onClick)
//     });

var changeCaseFunction = function changeCaseFunction() {
  var selectedCase = document.querySelector(".figure_add");
  selectedCase.addEventListener("click", onClick);
  var figureLevel = document.querySelector(".figure_level");
  function onClick(e) {
    e.preventDefault();
    // const box = this.previousElementSibling;

    selectedCase == true ? console.log("COS") : figureLevel.style.display = "none";
  }

  //         e.preventDefault();
  //         const box = this.previousElementSibling;
  //         // if (box.style.display != "none") {
  //         //     box.style.display = "none";
  //         // }
  //         // else{
  //         //     box.style.display = "block";
  //         // }
  //         if (box.style.visibility == "hidden") {
  //             box.style.visibility = "";
  //         } else {
  //             box.style.visibility = "hidden";
  //         }
  //     }
  // })
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c6e3ff3a2a8100426832")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zMDUyZjY5ZjBmNzJkZDJkMzYwMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7RUFDcEMsSUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7RUFDMURGLFlBQVksQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFQyxPQUFPLENBQUM7RUFFL0MsSUFBTUMsV0FBVyxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFFM0QsU0FBU0UsT0FBT0EsQ0FBQ0UsQ0FBQyxFQUFFO0lBQ2hCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCOztJQUVBUCxZQUFZLElBQUksSUFBSSxHQUFJUSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBR0osV0FBVyxDQUFDSyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQ25GOztFQUVKO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVBLENBQUM7Ozs7Ozs7O1VDdkNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9jb250YWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG4vLyBQT01PQ05FIERMQSBTQ0hPV0FOSUEgSSBQT0tBWkFOSUEgT0tJRU5LQSBET1QuIEZJR1VSXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpe1xyXG4vL1xyXG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG5cIikuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKXtcclxuLy8gICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2spXHJcbi8vICAgICB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VDYXNlRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZENhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZV9hZGRcIilcclxuICAgIHNlbGVjdGVkQ2FzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGljayk7XHJcblxyXG4gICAgY29uc3QgZmlndXJlTGV2ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZV9sZXZlbFwiKTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gY29uc3QgYm94ID0gdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgICAgICBzZWxlY3RlZENhc2UgPT0gdHJ1ZSA/ICBjb25zb2xlLmxvZyhcIkNPU1wiKSA6IGZpZ3VyZUxldmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgICAgIGNvbnN0IGJveCA9IHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZztcclxuLy8gICAgICAgICAvLyBpZiAoYm94LnN0eWxlLmRpc3BsYXkgIT0gXCJub25lXCIpIHtcclxuLy8gICAgICAgICAvLyAgICAgYm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuLy8gICAgICAgICAvLyB9XHJcbi8vICAgICAgICAgLy8gZWxzZXtcclxuLy8gICAgICAgICAvLyAgICAgYm94LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbi8vICAgICAgICAgLy8gfVxyXG4vLyAgICAgICAgIGlmIChib3guc3R5bGUudmlzaWJpbGl0eSA9PSBcImhpZGRlblwiKSB7XHJcbi8vICAgICAgICAgICAgIGJveC5zdHlsZS52aXNpYmlsaXR5ID0gXCJcIjtcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBib3guc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM2ZTNmZjNhMmE4MTAwNDI2ODMyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImNoYW5nZUNhc2VGdW5jdGlvbiIsInNlbGVjdGVkQ2FzZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrIiwiZmlndXJlTGV2ZWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==
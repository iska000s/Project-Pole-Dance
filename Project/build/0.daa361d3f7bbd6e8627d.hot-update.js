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
    console.log("COS");
    selectedCase == true ? figureLevel.style.display = "block" : figureLevel.style.display = "none";
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
/******/ 	__webpack_require__.h = () => ("3052f69f0f72dd2d3602")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kYWEzNjFkM2Y3YmJkNmU4NjI3ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7RUFDcEMsSUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7RUFDMURGLFlBQVksQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFQyxPQUFPLENBQUM7RUFFL0MsSUFBTUMsV0FBVyxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFFM0QsU0FBU0UsT0FBT0EsQ0FBQ0UsQ0FBQyxFQUFFO0lBQ2hCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQlQsWUFBWSxJQUFJLElBQUksR0FBR0ssV0FBVyxDQUFDSyxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPLEdBQUdOLFdBQVcsQ0FBQ0ssS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtFQUNuRzs7RUFFSjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFFQSxDQUFDOzs7Ozs7OztVQ3ZDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuLy8gUE9NT0NORSBETEEgU0NIT1dBTklBIEkgUE9LQVpBTklBIE9LSUVOS0EgRE9ULiBGSUdVUlxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKXtcclxuLy9cclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuXCIpLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbil7XHJcbi8vICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrKVxyXG4vLyAgICAgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlQ2FzZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRDYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVfYWRkXCIpXHJcbiAgICBzZWxlY3RlZENhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2spO1xyXG5cclxuICAgIGNvbnN0IGZpZ3VyZUxldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVfbGV2ZWxcIik7XHJcblxyXG4gICAgZnVuY3Rpb24gb25DbGljayhlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGNvbnN0IGJveCA9IHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNPU1wiKVxyXG4gICAgICAgIHNlbGVjdGVkQ2FzZSA9PSB0cnVlID8gZmlndXJlTGV2ZWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiA6IGZpZ3VyZUxldmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgICAgIGNvbnN0IGJveCA9IHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZztcclxuLy8gICAgICAgICAvLyBpZiAoYm94LnN0eWxlLmRpc3BsYXkgIT0gXCJub25lXCIpIHtcclxuLy8gICAgICAgICAvLyAgICAgYm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuLy8gICAgICAgICAvLyB9XHJcbi8vICAgICAgICAgLy8gZWxzZXtcclxuLy8gICAgICAgICAvLyAgICAgYm94LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbi8vICAgICAgICAgLy8gfVxyXG4vLyAgICAgICAgIGlmIChib3guc3R5bGUudmlzaWJpbGl0eSA9PSBcImhpZGRlblwiKSB7XHJcbi8vICAgICAgICAgICAgIGJveC5zdHlsZS52aXNpYmlsaXR5ID0gXCJcIjtcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBib3guc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjMwNTJmNjlmMGY3MmRkMmQzNjAyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImNoYW5nZUNhc2VGdW5jdGlvbiIsInNlbGVjdGVkQ2FzZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrIiwiZmlndXJlTGV2ZWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==
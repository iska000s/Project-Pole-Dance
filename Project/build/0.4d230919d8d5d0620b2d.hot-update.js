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
    if (document.querySelector('.figure_add').selected === true) {
      console.log("COS");
      figureLevel.style.display = "flex";
    } else {
      figureLevel.style.display = "none";
    }
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
/******/ 	__webpack_require__.h = () => ("729602a240ccd67ac172")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40ZDIzMDkxOWQ4ZDVkMDYyMGIyZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7RUFDcEMsSUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7RUFDMURGLFlBQVksQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFQyxPQUFPLENBQUM7RUFFL0MsSUFBTUMsV0FBVyxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFFM0QsU0FBU0UsT0FBT0EsQ0FBQ0UsQ0FBQyxFQUFFO0lBQ2hCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCO0lBQ0EsSUFBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUNNLFFBQVEsS0FBSyxJQUFJLEVBQUM7TUFDeERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztNQUNqQkwsV0FBVyxDQUFDTSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ3RDLENBQUMsTUFDSTtNQUNEUCxXQUFXLENBQUNNLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDdEM7RUFDSjs7RUFFSjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFFQSxDQUFDOzs7Ozs7OztVQzVDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuLy8gUE9NT0NORSBETEEgU0NIT1dBTklBIEkgUE9LQVpBTklBIE9LSUVOS0EgRE9ULiBGSUdVUlxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKXtcclxuLy9cclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuXCIpLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbil7XHJcbi8vICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrKVxyXG4vLyAgICAgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlQ2FzZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRDYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVfYWRkXCIpXHJcbiAgICBzZWxlY3RlZENhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2spO1xyXG5cclxuICAgIGNvbnN0IGZpZ3VyZUxldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVfbGV2ZWxcIik7XHJcblxyXG4gICAgZnVuY3Rpb24gb25DbGljayhlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGNvbnN0IGJveCA9IHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlndXJlX2FkZCcpLnNlbGVjdGVkID09PSB0cnVlKXtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNPU1wiKVxyXG4gICAgICAgICAgICBmaWd1cmVMZXZlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaWd1cmVMZXZlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICAgICAgY29uc3QgYm94ID0gdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4vLyAgICAgICAgIC8vIGlmIChib3guc3R5bGUuZGlzcGxheSAhPSBcIm5vbmVcIikge1xyXG4vLyAgICAgICAgIC8vICAgICBib3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4vLyAgICAgICAgIC8vIH1cclxuLy8gICAgICAgICAvLyBlbHNle1xyXG4vLyAgICAgICAgIC8vICAgICBib3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuLy8gICAgICAgICAvLyB9XHJcbi8vICAgICAgICAgaWYgKGJveC5zdHlsZS52aXNpYmlsaXR5ID09IFwiaGlkZGVuXCIpIHtcclxuLy8gICAgICAgICAgICAgYm94LnN0eWxlLnZpc2liaWxpdHkgPSBcIlwiO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIGJveC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzI5NjAyYTI0MGNjZDY3YWMxNzJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiY2hhbmdlQ2FzZUZ1bmN0aW9uIiwic2VsZWN0ZWRDYXNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQ2xpY2siLCJmaWd1cmVMZXZlbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbGVjdGVkIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=
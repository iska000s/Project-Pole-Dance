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

    selectedCase ? console.log("COS") : figureLevel.style.display = "none";
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
/******/ 	__webpack_require__.h = () => ("bb54be4b238520bda7da")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45ZWU5ZjAxMGI5YjFlZDkzODc0ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7RUFDcEMsSUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7RUFDMURGLFlBQVksQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFQyxPQUFPLENBQUM7RUFFL0MsSUFBTUMsV0FBVyxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFFM0QsU0FBU0UsT0FBT0EsQ0FBQ0UsQ0FBQyxFQUFFO0lBQ2hCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCOztJQUVBUCxZQUFZLEdBQUlRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHSixXQUFXLENBQUNLLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07RUFDM0U7O0VBRUo7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBRUEsQ0FBQzs7Ozs7Ozs7VUN2Q0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbi8vIFBPTU9DTkUgRExBIFNDSE9XQU5JQSBJIFBPS0FaQU5JQSBPS0lFTktBIERPVC4gRklHVVJcclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCl7XHJcbi8vXHJcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0blwiKS5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pe1xyXG4vLyAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGljaylcclxuLy8gICAgIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZUNhc2VGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkQ2FzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlX2FkZFwiKVxyXG4gICAgc2VsZWN0ZWRDYXNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrKTtcclxuXHJcbiAgICBjb25zdCBmaWd1cmVMZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlX2xldmVsXCIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBjb25zdCBib3ggPSB0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkQ2FzZSA/ICBjb25zb2xlLmxvZyhcIkNPU1wiKSA6IGZpZ3VyZUxldmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgICAgIGNvbnN0IGJveCA9IHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZztcclxuLy8gICAgICAgICAvLyBpZiAoYm94LnN0eWxlLmRpc3BsYXkgIT0gXCJub25lXCIpIHtcclxuLy8gICAgICAgICAvLyAgICAgYm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuLy8gICAgICAgICAvLyB9XHJcbi8vICAgICAgICAgLy8gZWxzZXtcclxuLy8gICAgICAgICAvLyAgICAgYm94LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbi8vICAgICAgICAgLy8gfVxyXG4vLyAgICAgICAgIGlmIChib3guc3R5bGUudmlzaWJpbGl0eSA9PSBcImhpZGRlblwiKSB7XHJcbi8vICAgICAgICAgICAgIGJveC5zdHlsZS52aXNpYmlsaXR5ID0gXCJcIjtcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBib3guc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJiNTRiZTRiMjM4NTIwYmRhN2RhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImNoYW5nZUNhc2VGdW5jdGlvbiIsInNlbGVjdGVkQ2FzZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrIiwiZmlndXJlTGV2ZWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==
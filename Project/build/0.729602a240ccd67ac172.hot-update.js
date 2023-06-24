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
/******/ 	__webpack_require__.h = () => ("2ed07482894a75d87b9e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43Mjk2MDJhMjQwY2NkNjdhYzE3Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7RUFDcEMsSUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7RUFDMURGLFlBQVksQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFQyxPQUFPLENBQUM7RUFFL0MsSUFBTUMsV0FBVyxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFFM0QsU0FBU0UsT0FBT0EsQ0FBQ0UsQ0FBQyxFQUFFO0lBQ2hCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCLElBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDTSxRQUFRLEtBQUssSUFBSSxFQUFDO01BQ3hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFDakJMLFdBQVcsQ0FBQ00sS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtJQUN0QyxDQUFDLE1BQ0k7TUFDRFAsV0FBVyxDQUFDTSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ3RDO0VBQ0o7O0VBRUo7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBRUEsQ0FBQzs7Ozs7Ozs7VUMzQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbi8vIFBPTU9DTkUgRExBIFNDSE9XQU5JQSBJIFBPS0FaQU5JQSBPS0lFTktBIERPVC4gRklHVVJcclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCl7XHJcbi8vXHJcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0blwiKS5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pe1xyXG4vLyAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGljaylcclxuLy8gICAgIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZUNhc2VGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkQ2FzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlX2FkZFwiKVxyXG4gICAgc2VsZWN0ZWRDYXNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrKTtcclxuXHJcbiAgICBjb25zdCBmaWd1cmVMZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlX2xldmVsXCIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlndXJlX2FkZCcpLnNlbGVjdGVkID09PSB0cnVlKXtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNPU1wiKVxyXG4gICAgICAgICAgICBmaWd1cmVMZXZlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaWd1cmVMZXZlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICAgICAgY29uc3QgYm94ID0gdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4vLyAgICAgICAgIC8vIGlmIChib3guc3R5bGUuZGlzcGxheSAhPSBcIm5vbmVcIikge1xyXG4vLyAgICAgICAgIC8vICAgICBib3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4vLyAgICAgICAgIC8vIH1cclxuLy8gICAgICAgICAvLyBlbHNle1xyXG4vLyAgICAgICAgIC8vICAgICBib3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuLy8gICAgICAgICAvLyB9XHJcbi8vICAgICAgICAgaWYgKGJveC5zdHlsZS52aXNpYmlsaXR5ID09IFwiaGlkZGVuXCIpIHtcclxuLy8gICAgICAgICAgICAgYm94LnN0eWxlLnZpc2liaWxpdHkgPSBcIlwiO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIGJveC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmVkMDc0ODI4OTRhNzVkODdiOWVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiY2hhbmdlQ2FzZUZ1bmN0aW9uIiwic2VsZWN0ZWRDYXNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQ2xpY2siLCJmaWd1cmVMZXZlbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbGVjdGVkIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=
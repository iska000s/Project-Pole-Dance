"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 50:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeCaseFunction: () => (/* binding */ ChangeCaseFunction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



//schowanie i pokazanie rubryki "figure level"

// export const changeCaseFunction = () => {
//     const selectedCase = document.querySelector(".figure_add")
//     selectedCase.addEventListener("click", onClick);
//
//     const figureLevel = document.querySelector(".figure_level");
//
//
//     function onClick(e) {
//         e.preventDefault();
//         if (document.querySelector('.figure_add').selected === true) {
//             console.log("COS")
//             figureLevel.style.display = "flex";
//         } else {
//             figureLevel.style.display = "none";
//         }
//     }
// }

var ChangeCaseFunction = function ChangeCaseFunction() {
  // const selectedCase = document.querySelector(".figure_add")
  // selectedCase.addEventListener("click", onClick);
  //
  // const figureLevel = document.querySelector(".figure_level");

  // function onClick(e) {
  //     e.preventDefault();
  //     if (document.querySelector('.figure_add').selected == true) {
  //         console.log("COS")
  //         figureLevel.style.display = "flex";
  //     } else {
  //         figureLevel.style.display = "none";
  //     }
  // }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Wybierz powód wiadomości"),
    _useState2 = _slicedToArray(_useState, 2),
    selectedFruit = _useState2[0],
    setSelectedFruit = _useState2[1];
  var AddCategory = function AddCategory(e) {
    setSelectedFruit(function (prevState) {
      if (prevState === "Mam pytanie") {
        console.log("COS");
      } else {
        console.log("NIC");
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: selectedFruit,
    onChange: AddCategory,
    name: "case",
    className: "case",
    id: "case"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: -1
  }, " ", selectedFruit), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    className: "figure_add",
    value: "photo"
  }, "Chc\u0119 wys\u0142a\u0107 i opublikowa\u0107 na stronie zdj\u0119cie lub film"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "questione"
  }, "Mam pytanie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "note"
  }, "Mam uwag\u0119 / sugestie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "delete"
  }, "Prosz\u0119 o usuni\u0119cie zdj\u0119cia lub filmiku"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "other"
  }, "Inne")));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e2846a4930191362446a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMWUyMjBkOWQ4YTgxNjRiYWI3ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7RUFDcEM7RUFDQTtFQUNBO0VBQ0E7O0VBR0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBLElBQUFDLFNBQUEsR0FBMENILCtDQUFRLENBQUMsMEJBQTBCLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdkVHLGFBQWEsR0FBQUYsVUFBQTtJQUFFRyxnQkFBZ0IsR0FBQUgsVUFBQTtFQUV0QyxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3ZCRixnQkFBZ0IsQ0FBQyxVQUFBRyxTQUFTLEVBQUk7TUFDMUIsSUFBSUEsU0FBUyxLQUFLLGFBQWEsRUFBRTtRQUM3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO01BQ3RCLENBQUMsTUFBTTtRQUNIRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFDdEI7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsb0JBQ0liLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQTtJQUFRZ0IsS0FBSyxFQUFFVCxhQUFjO0lBQUNVLFFBQVEsRUFBRVIsV0FBWTtJQUFDUyxJQUFJLEVBQUMsTUFBTTtJQUFDQyxTQUFTLEVBQUMsTUFBTTtJQUFDQyxFQUFFLEVBQUM7RUFBTSxnQkFDdkZwQiwwREFBQTtJQUFRZ0IsS0FBSyxFQUFFLENBQUM7RUFBRSxHQUFDLEdBQUMsRUFBQ1QsYUFBc0IsQ0FBQyxlQUM1Q1AsMERBQUE7SUFBUW1CLFNBQVMsRUFBQyxZQUFZO0lBQUNILEtBQUssRUFBQztFQUFPLEdBQUMsZ0ZBQ3JDLENBQUMsZUFDVGhCLDBEQUFBO0lBQVFnQixLQUFLLEVBQUM7RUFBVyxHQUFDLGFBQW1CLENBQUMsZUFDOUNoQiwwREFBQTtJQUFRZ0IsS0FBSyxFQUFDO0VBQU0sR0FBQywyQkFBNEIsQ0FBQyxlQUNsRGhCLDBEQUFBO0lBQVFnQixLQUFLLEVBQUM7RUFBUSxHQUFDLHVEQUE4QyxDQUFDLGVBQ3RFaEIsMERBQUE7SUFBUWdCLEtBQUssRUFBQztFQUFPLEdBQUMsTUFBWSxDQUM5QixDQUVWLENBQUM7QUFFWCxDQUFDOzs7Ozs7OztVQ2xFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuLy9zY2hvd2FuaWUgaSBwb2themFuaWUgcnVicnlraSBcImZpZ3VyZSBsZXZlbFwiXHJcblxyXG4vLyBleHBvcnQgY29uc3QgY2hhbmdlQ2FzZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4vLyAgICAgY29uc3Qgc2VsZWN0ZWRDYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVfYWRkXCIpXHJcbi8vICAgICBzZWxlY3RlZENhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2spO1xyXG4vL1xyXG4vLyAgICAgY29uc3QgZmlndXJlTGV2ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZV9sZXZlbFwiKTtcclxuLy9cclxuLy9cclxuLy8gICAgIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xyXG4vLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZ3VyZV9hZGQnKS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNPU1wiKVxyXG4vLyAgICAgICAgICAgICBmaWd1cmVMZXZlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgZmlndXJlTGV2ZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZUNhc2VGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgIC8vIGNvbnN0IHNlbGVjdGVkQ2FzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlX2FkZFwiKVxyXG4gICAgLy8gc2VsZWN0ZWRDYXNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrKTtcclxuICAgIC8vXHJcbiAgICAvLyBjb25zdCBmaWd1cmVMZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlX2xldmVsXCIpO1xyXG5cclxuXHJcbiAgICAvLyBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWd1cmVfYWRkJykuc2VsZWN0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkNPU1wiKVxyXG4gICAgLy8gICAgICAgICBmaWd1cmVMZXZlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgZmlndXJlTGV2ZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRGcnVpdCwgc2V0U2VsZWN0ZWRGcnVpdF0gPSB1c2VTdGF0ZShcIld5YmllcnogcG93w7NkIHdpYWRvbW/Fm2NpXCIpO1xyXG5cclxuICAgIGNvbnN0IEFkZENhdGVnb3J5ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZEZydWl0KHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcmV2U3RhdGUgPT09IFwiTWFtIHB5dGFuaWVcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDT1NcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTklDXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRGcnVpdH0gb25DaGFuZ2U9e0FkZENhdGVnb3J5fSBuYW1lPVwiY2FzZVwiIGNsYXNzTmFtZT1cImNhc2VcIiBpZD1cImNhc2VcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ey0xfT4ge3NlbGVjdGVkRnJ1aXR9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT1cImZpZ3VyZV9hZGRcIiB2YWx1ZT1cInBob3RvXCI+Q2hjxJkgd3lzxYJhxIcgaSBvcHVibGlrb3dhxIcgbmEgc3Ryb25pZSB6ZGrEmWNpZSBsdWIgZmlsbVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicXVlc3Rpb25lXCI+TWFtIHB5dGFuaWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub3RlXCI+TWFtIHV3YWfEmSAvIHN1Z2VzdGllPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVsZXRlXCI+UHJvc3rEmSBvIHVzdW5pxJljaWUgemRqxJljaWEgbHViIGZpbG1pa3U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdGhlclwiPklubmU8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTI4NDZhNDkzMDE5MTM2MjQ0NmFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJDaGFuZ2VDYXNlRnVuY3Rpb24iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZWxlY3RlZEZydWl0Iiwic2V0U2VsZWN0ZWRGcnVpdCIsIkFkZENhdGVnb3J5IiwiZSIsInByZXZTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwibmFtZSIsImNsYXNzTmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==
"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _RandomImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _FigureCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50);
/* harmony import */ var _BiggerImg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51);
/* harmony import */ var _BiggerImg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_BiggerImg__WEBPACK_IMPORTED_MODULE_6__);







var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_RandomImg__WEBPACK_IMPORTED_MODULE_3__.RandomImg, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FigureCategory__WEBPACK_IMPORTED_MODULE_4__.FigureCategory, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_contact__WEBPACK_IMPORTED_MODULE_5__.ChangeCaseFunction, null));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(App, null));

/***/ }),

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
  setSelectedFruit();
  var AddCategory = function AddCategory() {
    setSelectedFruit(function (prevState) {
      if (prevState.target.value === "photo") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
        className: "figure_level",
        id: "figure_level_add_form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "-1"
      }, "Wybierz poziom figury (je\u017Celi wiadomo\u015B\u0107 dotyczy figury)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "intro"
      }, "Intro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "basic"
      }, "Basic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "intermediate"
      }, "Intermediate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "advanced"
      }, "Advanced")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "figure_add_category"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\"Zaznacz kategori\u0119 figury (je\u017Celi wiadomo\u015B\u0107 dotyczy figury)\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "figure_categories"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox checkbox_category"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: "figuer_category",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "krzese\u0142ko"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox checkbox_category"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: "figuer_category",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "szpagat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox checkbox_category"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: "figuer_category",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "handstand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox checkbox_category"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: "figuer_category",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "shoulder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox checkbox_category"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: "figuer_category",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "handspring"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox checkbox_category"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: "figuer_category",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "si\u0142owe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox checkbox_category"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: "figuer_category",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "kombos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox checkbox_category"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: "figuer_category",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "basic spin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox checkbox_category"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: "figuer_category",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "obrotowe"))));
    });
    console.log("COS");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "case",
    className: "case",
    id: "case"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: selectedFruit,
    onChange: AddCategory
  }, " Wybierz pow\xF3d wiadomo\u015Bci"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
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
/******/ 	__webpack_require__.h = () => ("49eca497402a948a91ed")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yYTc2NmQyOTQ4NjlhZjFlNzk0NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkI7QUFDRDtBQUNrQjtBQUVOO0FBQ1U7QUFDSDtBQUNUO0FBSXBDLElBQU1NLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQVM7RUFDZCxvQkFDSU4sMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNFLGlEQUFTLE1BQUMsQ0FBQyxlQUNaRiwwREFBQSxDQUFDRywyREFBYyxNQUFDLENBQUMsZUFDakJILDBEQUFBLENBQUNJLHdEQUFrQixNQUFDLENBRXRCLENBQUM7QUFFWCxDQUFDO0FBR0QsSUFBTUssU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHWCw0REFBVSxDQUFDUSxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDYiwwREFBQSxDQUFDTSxHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCbUI7QUFDTTs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNRixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7RUFDcEM7RUFDQTtFQUNBO0VBQ0E7O0VBR0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBLElBQUFXLFNBQUEsR0FBMENELCtDQUFRLENBQUMsMEJBQTBCLENBQUM7SUFBQUUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdkVHLGFBQWEsR0FBQUYsVUFBQTtJQUFFRyxnQkFBZ0IsR0FBQUgsVUFBQTtFQUN0Q0csZ0JBQWdCLENBQUMsQ0FBQztFQUdsQixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FB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azovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3Njc3MvaW5kZXguc2Nzc1wiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuaW1wb3J0IHtSYW5kb21JbWd9IGZyb20gXCIuL1JhbmRvbUltZ1wiO1xyXG5pbXBvcnQge0ZpZ3VyZUNhdGVnb3J5fSBmcm9tIFwiLi9GaWd1cmVDYXRlZ29yeVwiO1xyXG5pbXBvcnQge0NoYW5nZUNhc2VGdW5jdGlvbn0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgQmlnZ2VySW1nIGZyb20gXCIuL0JpZ2dlckltZ1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxSYW5kb21JbWcvPlxyXG4gICAgICAgICAgICA8RmlndXJlQ2F0ZWdvcnkvPlxyXG4gICAgICAgICAgICA8Q2hhbmdlQ2FzZUZ1bmN0aW9uLz5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoPEFwcC8+KTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG4vL3NjaG93YW5pZSBpIHBva2F6YW5pZSBydWJyeWtpIFwiZmlndXJlIGxldmVsXCJcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBjaGFuZ2VDYXNlRnVuY3Rpb24gPSAoKSA9PiB7XHJcbi8vICAgICBjb25zdCBzZWxlY3RlZENhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZV9hZGRcIilcclxuLy8gICAgIHNlbGVjdGVkQ2FzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGljayk7XHJcbi8vXHJcbi8vICAgICBjb25zdCBmaWd1cmVMZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlX2xldmVsXCIpO1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgZnVuY3Rpb24gb25DbGljayhlKSB7XHJcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlndXJlX2FkZCcpLnNlbGVjdGVkID09PSB0cnVlKSB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ09TXCIpXHJcbi8vICAgICAgICAgICAgIGZpZ3VyZUxldmVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBmaWd1cmVMZXZlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlQ2FzZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc3Qgc2VsZWN0ZWRDYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVfYWRkXCIpXHJcbiAgICAvLyBzZWxlY3RlZENhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2spO1xyXG4gICAgLy9cclxuICAgIC8vIGNvbnN0IGZpZ3VyZUxldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVfbGV2ZWxcIik7XHJcblxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xyXG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZ3VyZV9hZGQnKS5zZWxlY3RlZCA9PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiQ09TXCIpXHJcbiAgICAvLyAgICAgICAgIGZpZ3VyZUxldmVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBmaWd1cmVMZXZlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IFtzZWxlY3RlZEZydWl0LCBzZXRTZWxlY3RlZEZydWl0XSA9IHVzZVN0YXRlKFwiV3liaWVyeiBwb3fDs2Qgd2lhZG9tb8WbY2lcIik7XHJcbiAgICBzZXRTZWxlY3RlZEZydWl0KClcclxuXHJcblxyXG4gICAgY29uc3QgQWRkQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRGcnVpdChwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBpZihwcmV2U3RhdGUudGFyZ2V0LnZhbHVlID09PSBcInBob3RvXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZmlndXJlX2xldmVsXCIgaWQ9XCJmaWd1cmVfbGV2ZWxfYWRkX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItMVwiPld5YmllcnogcG96aW9tIGZpZ3VyeSAoamXFvGVsaSB3aWFkb21vxZvEhyBkb3R5Y3p5IGZpZ3VyeSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbnRyb1wiPkludHJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmFzaWNcIj5CYXNpYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImludGVybWVkaWF0ZVwiPkludGVybWVkaWF0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFkdmFuY2VkXCI+QWR2YW5jZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlX2FkZF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XCJaYXpuYWN6IGthdGVnb3JpxJkgZmlndXJ5IChqZcW8ZWxpIHdpYWRvbW/Fm8SHIGRvdHljenkgZmlndXJ5KVwiPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmVfY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPjxzcGFuPjwvc3Bhbj5rcnplc2XFgmtvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz48c3Bhbj48L3NwYW4+c3pwYWdhdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPjxzcGFuPjwvc3Bhbj5oYW5kc3RhbmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz48c3Bhbj48L3NwYW4+c2hvdWxkZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz48c3Bhbj48L3NwYW4+aGFuZHNwcmluZzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPjxzcGFuPjwvc3Bhbj5zacWCb3dlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+PHNwYW4+PC9zcGFuPmtvbWJvczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPjxzcGFuPjwvc3Bhbj5iYXNpYyBzcGluPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+PHNwYW4+PC9zcGFuPm9icm90b3dlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ09TXCIpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiY2FzZVwiIGNsYXNzTmFtZT1cImNhc2VcIiBpZD1cImNhc2VcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3NlbGVjdGVkRnJ1aXR9IG9uQ2hhbmdlPXtBZGRDYXRlZ29yeX0gPiBXeWJpZXJ6IHBvd8OzZCB3aWFkb21vxZtjaTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJmaWd1cmVfYWRkXCIgdmFsdWU9XCJwaG90b1wiPkNoY8SZIHd5c8WCYcSHIGkgb3B1Ymxpa293YcSHIG5hIHN0cm9uaWUgemRqxJljaWUgbHViIGZpbG1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInF1ZXN0aW9uZVwiPk1hbSBweXRhbmllPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm90ZVwiPk1hbSB1d2FnxJkgLyBzdWdlc3RpZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlbGV0ZVwiPlByb3N6xJkgbyB1c3VuacSZY2llIHpkasSZY2lhIGx1YiBmaWxtaWt1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3RoZXJcIj5Jbm5lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ5ZWNhNDk3NDAyYTk0OGE5MWVkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIlJhbmRvbUltZyIsIkZpZ3VyZUNhdGVnb3J5IiwiQ2hhbmdlQ2FzZUZ1bmN0aW9uIiwiQmlnZ2VySW1nIiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJ1c2VTdGF0ZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlbGVjdGVkRnJ1aXQiLCJzZXRTZWxlY3RlZEZydWl0IiwiQWRkQ2F0ZWdvcnkiLCJwcmV2U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImlkIiwidHlwZSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9
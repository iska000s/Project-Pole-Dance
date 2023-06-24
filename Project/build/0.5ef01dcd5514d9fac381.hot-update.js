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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_RandomImg__WEBPACK_IMPORTED_MODULE_3__.RandomImg, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FigureCategory__WEBPACK_IMPORTED_MODULE_4__.FigureCategory, null));
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


var Case = document.querySelector(".form_message").children[1];

//schowanie i pokazanie rubryki "figure level"

var ChangeCaseFunction = function ChangeCaseFunction() {
  if (Case) {
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Wybierz powód wiadomości"),
      _useState2 = _slicedToArray(_useState, 2),
      selectedCase = _useState2[0],
      setSelectedCase = _useState2[1];
    var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("none"),
      _useState4 = _slicedToArray(_useState3, 2),
      visibleState = _useState4[0],
      setVisible = _useState4[1];
    var AddCategory = function AddCategory(e) {
      setSelectedCase(function (prevState) {
        if (e.target.value === "photo") {
          console.log("COS");
          Visible();
        } else {
          console.log("NIC");
        }
      });
    };
    var Visible = function Visible() {
      setVisible(function (prevState) {
        return  true ? "flex" : 0;
      });
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
      value: selectedCase,
      onChange: AddCategory,
      name: "case",
      className: "case",
      id: "case"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      style: {
        color: "lightgray"
      },
      value: -1
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
    }, "Inne")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
      name: "figure_level",
      className: "figure_level",
      style: {
        display: "".concat(visibleState)
      },
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
      className: "figure_add_category",
      style: {
        display: "".concat(visibleState)
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Zaznacz kategori\u0119 figury (je\u017Celi wiadomo\u015B\u0107 dotyczy figury)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }
};
var addCase = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(Case);
addCase.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChangeCaseFunction, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ce941f764bc2c7e7d285")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTRCLEdBQUMsR0FBQyxlQUFBckMsMERBQUE7TUFBTzJDLElBQUksRUFBQyxVQUFVO01BQUNQLElBQUksRUFBQyxpQkFBaUI7TUFDdENMLEtBQUssRUFBQztJQUFHLENBQUMsQ0FBQyxlQUM3RC9CLDBEQUFBLGFBQVksQ0FBQyxjQUNJLENBQUMsZUFDdEJBLDBEQUFBO01BQU9xQyxTQUFTLEVBQUM7SUFBNEIsR0FBQyxHQUFDLGVBQUFyQywwREFBQTtNQUFPMkMsSUFBSSxFQUFDLFVBQVU7TUFBQ1AsSUFBSSxFQUFDLGlCQUFpQjtNQUN0Q0wsS0FBSyxFQUFDO0lBQUcsQ0FBQyxDQUFDLGVBQzdEL0IsMERBQUEsYUFBWSxDQUFDLFlBQ0UsQ0FDbEIsQ0FDSixDQUNQLENBQUM7RUFFWDtBQUNKLENBQUM7QUFDRCxJQUFNNEMsT0FBTyxHQUFHM0MsNERBQVUsQ0FBQ2MsSUFBSSxDQUFDO0FBQ2hDNkIsT0FBTyxDQUFDL0IsTUFBTSxlQUFDYiwwREFBQSxDQUFDSSxrQkFBa0IsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDOUZyQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3Njc3MvaW5kZXguc2Nzc1wiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuaW1wb3J0IHtSYW5kb21JbWd9IGZyb20gXCIuL1JhbmRvbUltZ1wiO1xyXG5pbXBvcnQge0ZpZ3VyZUNhdGVnb3J5fSBmcm9tIFwiLi9GaWd1cmVDYXRlZ29yeVwiO1xyXG5pbXBvcnQge0NoYW5nZUNhc2VGdW5jdGlvbn0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgQmlnZ2VySW1nIGZyb20gXCIuL0JpZ2dlckltZ1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxSYW5kb21JbWcvPlxyXG4gICAgICAgICAgICA8RmlndXJlQ2F0ZWdvcnkvPlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcig8QXBwLz4pO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IENhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fbWVzc2FnZVwiKS5jaGlsZHJlblsxXTtcclxuXHJcbi8vc2Nob3dhbmllIGkgcG9rYXphbmllIHJ1YnJ5a2kgXCJmaWd1cmUgbGV2ZWxcIlxyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZUNhc2VGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgIGlmIChDYXNlKSB7XHJcbiAgICAgICAgY29uc3QgW3NlbGVjdGVkQ2FzZSwgc2V0U2VsZWN0ZWRDYXNlXSA9IHVzZVN0YXRlKFwiV3liaWVyeiBwb3fDs2Qgd2lhZG9tb8WbY2lcIik7XHJcbiAgICAgICAgY29uc3QgW3Zpc2libGVTdGF0ZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IEFkZENhdGVnb3J5ID0gKGUpID0+IHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRDYXNlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwicGhvdG9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ09TXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgVmlzaWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5JQ1wiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgVmlzaWJsZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0VmlzaWJsZSggcHJldlN0YXRlID0+IFwibm9uZVwiID8gXCJmbGV4XCIgOiBcIm5vbmVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRDYXNlfSBvbkNoYW5nZT17QWRkQ2F0ZWdvcnl9IG5hbWU9XCJjYXNlXCIgY2xhc3NOYW1lPVwiY2FzZVwiIGlkPVwiY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc3R5bGU9e3tjb2xvcjogXCJsaWdodGdyYXlcIn19IHZhbHVlPXstMX0+IFd5YmllcnogcG93w7NkIHdpYWRvbW/Fm2NpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJmaWd1cmVfYWRkXCIgdmFsdWU9XCJwaG90b1wiPkNoY8SZIHd5c8WCYcSHIGkgb3B1Ymxpa293YcSHIG5hIHN0cm9uaWUgemRqxJljaWUgbHViIGZpbG1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicXVlc3Rpb25lXCI+TWFtIHB5dGFuaWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm90ZVwiPk1hbSB1d2FnxJkgLyBzdWdlc3RpZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWxldGVcIj5Qcm9zesSZIG8gdXN1bmnEmWNpZSB6ZGrEmWNpYSBsdWIgZmlsbWlrdTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdGhlclwiPklubmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImZpZ3VyZV9sZXZlbFwiIGNsYXNzTmFtZT1cImZpZ3VyZV9sZXZlbFwiIHN0eWxlPXt7ZGlzcGxheTpgJHt2aXNpYmxlU3RhdGV9YH19IGlkPVwiZmlndXJlX2xldmVsX2FkZF9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIi0xXCI+V3liaWVyeiBwb3ppb20gZmlndXJ5IChqZcW8ZWxpIHdpYWRvbW/Fm8SHIGRvdHljenkgZmlndXJ5KTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbnRyb1wiPkludHJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJhc2ljXCI+QmFzaWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW50ZXJtZWRpYXRlXCI+SW50ZXJtZWRpYXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFkdmFuY2VkXCI+QWR2YW5jZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmVfYWRkX2NhdGVnb3J5XCIgc3R5bGU9e3tkaXNwbGF5OmAke3Zpc2libGVTdGF0ZX1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+WmF6bmFjeiBrYXRlZ29yacSZIGZpZ3VyeSAoamXFvGVsaSB3aWFkb21vxZvEhyBkb3R5Y3p5IGZpZ3VyeSk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmVfY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga3J6ZXNlxYJrb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3pwYWdhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kc3RhbmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRzcHJpbmc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzacWCb3dlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga29tYm9zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzaWMgc3BpbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9icm90b3dlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY29uc3QgYWRkQ2FzZSA9IGNyZWF0ZVJvb3QoQ2FzZSk7XHJcbmFkZENhc2UucmVuZGVyKDxDaGFuZ2VDYXNlRnVuY3Rpb24vPik7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNlOTQxZjc2NGJjMmM3ZTdkMjg1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIlJhbmRvbUltZyIsIkZpZ3VyZUNhdGVnb3J5IiwiQ2hhbmdlQ2FzZUZ1bmN0aW9uIiwiQmlnZ2VySW1nIiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJ1c2VTdGF0ZSIsIkNhc2UiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGRyZW4iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZWxlY3RlZENhc2UiLCJzZXRTZWxlY3RlZENhc2UiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInZpc2libGVTdGF0ZSIsInNldFZpc2libGUiLCJBZGRDYXRlZ29yeSIsImUiLCJwcmV2U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJWaXNpYmxlIiwib25DaGFuZ2UiLCJuYW1lIiwiY2xhc3NOYW1lIiwiaWQiLCJzdHlsZSIsImNvbG9yIiwiZGlzcGxheSIsImNvbmNhdCIsInR5cGUiLCJhZGRDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==
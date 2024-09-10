"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 51:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeCaseFunction: () => (/* binding */ ChangeCaseFunction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Case = document.querySelector(".form_message").children[1];
var submit = document.querySelector(".submit");

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
      e.preventDefault();
      setSelectedCase(function () {
        if (e.target.value === "photo") {
          console.log("wybrano dodanie zdjęcia - pokaż dodatkowe opcje");
          setVisible("flex");
        } else {
          setVisible("none");
        }
      });
    };
    submit.addEventListener("submit", submitForm());
    var submitForm = function submitForm(submit) {
      function notDefault(event) {
        event.preventDefault();
      }

      // submin.onClick
      console.log("TEST");
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      name: "figuer_category",
      value: "1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "handstand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "checkbox checkbox_category"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      name: "figuer_category",
      value: "1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "shoulder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "checkbox checkbox_category"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      name: "figuer_category",
      value: "1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "handspring"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "checkbox checkbox_category"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      name: "figuer_category",
      value: "1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "si\u0142owe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "checkbox checkbox_category"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      name: "figuer_category",
      value: "1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "kombos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "checkbox checkbox_category"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      name: "figuer_category",
      value: "1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "basic spin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "checkbox checkbox_category"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
/******/ 	__webpack_require__.h = () => ("135108a853a26cdfd640")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBQ1YsS0FBSyxFQUFDO0lBQUcsQ0FBQyxDQUFDLGVBQ3pEdEIsMERBQUEsYUFBWSxDQUFDLFlBQWUsQ0FDL0IsQ0FFSixDQTZCUCxDQUFDO0VBRVg7QUFDSixDQUFDO0FBQ0QsSUFBTXdDLE9BQU8sR0FBR3RDLDREQUFVLENBQUNDLElBQUksQ0FBQztBQUNoQ3FDLE9BQU8sQ0FBQ0MsTUFBTSxlQUFDekMsMERBQUEsQ0FBQ1Esa0JBQWtCLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQy9IckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IENhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fbWVzc2FnZVwiKS5jaGlsZHJlblsxXTtcclxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRcIik7XHJcblxyXG4vL3NjaG93YW5pZSBpIHBva2F6YW5pZSBydWJyeWtpIFwiZmlndXJlIGxldmVsXCJcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VDYXNlRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBpZiAoQ2FzZSkge1xyXG4gICAgICAgIGNvbnN0IFtzZWxlY3RlZENhc2UsIHNldFNlbGVjdGVkQ2FzZV0gPSB1c2VTdGF0ZShcIld5YmllcnogcG93w7NkIHdpYWRvbW/Fm2NpXCIpO1xyXG4gICAgICAgIGNvbnN0IFt2aXNpYmxlU3RhdGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoXCJub25lXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IEFkZENhdGVnb3J5ID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZENhc2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcInBob3RvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInd5YnJhbm8gZG9kYW5pZSB6ZGrEmWNpYSAtIHBva2HFvCBkb2RhdGtvd2Ugb3BjamVcIilcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKFwiZmxleFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZShcIm5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEZvcm0oKSk7XHJcbiAgICAgICAgY29uc3Qgc3VibWl0Rm9ybSA9IChzdWJtaXQpID0+IHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gbm90RGVmYXVsdChldmVudCl7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy8gc3VibWluLm9uQ2xpY2tcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJURVNUXCIpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtzZWxlY3RlZENhc2V9IG9uQ2hhbmdlPXtBZGRDYXRlZ29yeX0gbmFtZT1cImNhc2VcIiBjbGFzc05hbWU9XCJjYXNlXCIgaWQ9XCJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzdHlsZT17e2NvbG9yOiBcImxpZ2h0Z3JheVwifX0gdmFsdWU9ey0xfT4gV3liaWVyeiBwb3fDs2Qgd2lhZG9tb8WbY2k8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT1cImZpZ3VyZV9hZGRcIiB2YWx1ZT1cInBob3RvXCI+Q2hjxJkgd3lzxYJhxIcgaSBvcHVibGlrb3dhxIcgbmEgc3Ryb25pZSB6ZGrEmWNpZSBsdWIgZmlsbVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJxdWVzdGlvbmVcIj5NYW0gcHl0YW5pZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub3RlXCI+TWFtIHV3YWfEmSAvIHN1Z2VzdGllPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlbGV0ZVwiPlByb3N6xJkgbyB1c3VuacSZY2llIHpkasSZY2lhIGx1YiBmaWxtaWt1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm90aGVyXCI+SW5uZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZmlndXJlX2xldmVsXCIgY2xhc3NOYW1lPVwiZmlndXJlX2xldmVsXCIgc3R5bGU9e3tkaXNwbGF5OiBgJHt2aXNpYmxlU3RhdGV9YH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmlndXJlX2xldmVsX2FkZF9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIi0xXCI+V3liaWVyeiBwb3ppb20gZmlndXJ5IChqZcW8ZWxpIHdpYWRvbW/Fm8SHIGRvdHljenkgZmlndXJ5KTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbnRyb1wiPkludHJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJhc2ljXCI+QmFzaWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW50ZXJtZWRpYXRlXCI+SW50ZXJtZWRpYXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFkdmFuY2VkXCI+QWR2YW5jZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmVfYWRkX2NhdGVnb3J5XCIgc3R5bGU9e3tkaXNwbGF5OiBgJHt2aXNpYmxlU3RhdGV9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlphem5hY3oga2F0ZWdvcmnEmSBmaWd1cnkgKGplxbxlbGkgd2lhZG9tb8WbxIcgZG90eWN6eSBmaWd1cnkpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlX2NhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5rcnplc2XFgmtvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+c3pwYWdhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPmhhbmRzdGFuZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+c2hvdWxkZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPmhhbmRzcHJpbmc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPnNpxYJvd2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPmtvbWJvczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+YmFzaWMgc3BpbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+b2Jyb3Rvd2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbnsvKiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZUFkZFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hfbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0aXRsZV9tZXNzYWdlXCI+V2lhZG9tb8WbxIc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJ0ZXh0YXJlYVwiIHJvd3M9XCIzXCIgY29scz1cIjVcIiBpZD1cIm1lc3NhZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcGlzeiB3aWFkb21vxZvEh1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmwgY2xhc3NOYW1lPVwiYWdyZWVtZW50ICBjaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFncmVlbWVudFwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXeXJhxbxhbSB6Z29kxJkgbmEgcHJ6ZXR3YXJ6YW5pZSBtb2ljaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW55Y2ggb3NvYm93eWNoIHBvZGFueWNoIHcgcG93ecW8c3p5bSBmb3JtdWxhcnp1IHcgY2VsYWNoIGhhbmRsb3d5Y2ggaSBtYXJrZXRpbmdvd3ljaCBwcnplelxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZG1pbmlzdHJhdG9yYSB0ZWogc3Ryb255IG9yYXogcHJ6ZXogcG9kbWlvdHkgdHJ6ZWNpZS5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWdyZWVtZW50IGNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiYWdyZWVtZW50XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE/Fm3dpYWRjemFtLCDFvGUgbmluaWVqc3plIHpkasSZY2llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByemVkc3Rhd2lhIHd5xYLEhWN6bmllIG3Ds2ogd2l6ZXJ1bmVrLCBiZXogd2l6ZXJ1bmt1IG9zw7NiIHRyemVjaWNoIGkgd3lyYcW8YW0gemdvZMSZIG5hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pZW9ncmFuaWN6b25lIGN6YXNvd28gdWRvc3TEmXBuaWVuaWUgbW9qZWdvIHdpemVydW5rdSwgdyBwb3N0YWNpIHpkasSZY2lhLCB3IGNlbHUgdW1pZXN6Y3plbmlhIGdvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hIG5pbmllanN6ZWogc3Ryb25pZSBpbnRlcm5ldG93ZWouXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdFwiPld5xZtsaWo8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5jb25zdCBhZGRDYXNlID0gY3JlYXRlUm9vdChDYXNlKTtcclxuYWRkQ2FzZS5yZW5kZXIoPENoYW5nZUNhc2VGdW5jdGlvbi8+KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTM1MTA4YTg1M2EyNmNkZmQ2NDBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJDYXNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGRyZW4iLCJzdWJtaXQiLCJDaGFuZ2VDYXNlRnVuY3Rpb24iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZWxlY3RlZENhc2UiLCJzZXRTZWxlY3RlZENhc2UiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInZpc2libGVTdGF0ZSIsInNldFZpc2libGUiLCJBZGRDYXRlZ29yeSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJtaXRGb3JtIiwibm90RGVmYXVsdCIsImV2ZW50IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwib25DaGFuZ2UiLCJuYW1lIiwiY2xhc3NOYW1lIiwiaWQiLCJzdHlsZSIsImNvbG9yIiwiZGlzcGxheSIsImNvbmNhdCIsInR5cGUiLCJhZGRDYXNlIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==
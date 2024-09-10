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
  var submit = document.addEventListener("click", submitForm);
  var submitForm = function submitForm(submit) {
    function notDefault(event) {
      event.preventDefault();
      console.log("TEST");
    }
    return notDefault();

    // submin.onClick
  };

  // submitForm();

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
/******/ 	__webpack_require__.h = () => ("d17a258d65b3bbddfc22")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksRUFBQyxVQUFVO01BQUNQLElBQUksRUFBQyxpQkFBaUI7TUFBQ0osS0FBSyxFQUFDO0lBQUcsQ0FBQyxDQUFDLGVBQ3pENUIsMERBQUEsYUFBWSxDQUFDLFlBQWUsQ0FDL0IsQ0FFSixDQUNQLENBQUM7RUFFWDtBQUNKLENBQUM7QUFDRCxJQUFNd0MsT0FBTyxHQUFHdEMsNERBQVUsQ0FBQ0MsSUFBSSxDQUFDO0FBQ2hDcUMsT0FBTyxDQUFDQyxNQUFNLGVBQUN6QywwREFBQSxDQUFDUSxrQkFBa0IsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDM0dyQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuY29uc3QgQ2FzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9tZXNzYWdlXCIpLmNoaWxkcmVuWzFdO1xyXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdFwiKTtcclxuXHJcbi8vc2Nob3dhbmllIGkgcG9rYXphbmllIHJ1YnJ5a2kgXCJmaWd1cmUgbGV2ZWxcIlxyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZUNhc2VGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdEZvcm0pO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSAoc3VibWl0KSA9PiB7XHJcbiAgICAgICAgZnVuY3Rpb24gbm90RGVmYXVsdChldmVudCl7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVEVTVFwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIG5vdERlZmF1bHQoKVxyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIC8vIHN1Ym1pbi5vbkNsaWNrXHJcbiAgICB9XHJcbiBcclxuICAgIC8vIHN1Ym1pdEZvcm0oKTtcclxuXHJcblxyXG4gICAgaWYgKENhc2UpIHtcclxuICAgICAgICBjb25zdCBbc2VsZWN0ZWRDYXNlLCBzZXRTZWxlY3RlZENhc2VdID0gdXNlU3RhdGUoXCJXeWJpZXJ6IHBvd8OzZCB3aWFkb21vxZtjaVwiKTtcclxuICAgICAgICBjb25zdCBbdmlzaWJsZVN0YXRlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKFwibm9uZVwiKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBBZGRDYXRlZ29yeSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRDYXNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJwaG90b1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3eWJyYW5vIGRvZGFuaWUgemRqxJljaWEgLSBwb2thxbwgZG9kYXRrb3dlIG9wY2plXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZShcImZsZXhcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtzZWxlY3RlZENhc2V9IG9uQ2hhbmdlPXtBZGRDYXRlZ29yeX0gbmFtZT1cImNhc2VcIiBjbGFzc05hbWU9XCJjYXNlXCIgaWQ9XCJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzdHlsZT17e2NvbG9yOiBcImxpZ2h0Z3JheVwifX0gdmFsdWU9ey0xfT4gV3liaWVyeiBwb3fDs2Qgd2lhZG9tb8WbY2k8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT1cImZpZ3VyZV9hZGRcIiB2YWx1ZT1cInBob3RvXCI+Q2hjxJkgd3lzxYJhxIcgaSBvcHVibGlrb3dhxIcgbmEgc3Ryb25pZSB6ZGrEmWNpZSBsdWIgZmlsbVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJxdWVzdGlvbmVcIj5NYW0gcHl0YW5pZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub3RlXCI+TWFtIHV3YWfEmSAvIHN1Z2VzdGllPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlbGV0ZVwiPlByb3N6xJkgbyB1c3VuacSZY2llIHpkasSZY2lhIGx1YiBmaWxtaWt1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm90aGVyXCI+SW5uZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZmlndXJlX2xldmVsXCIgY2xhc3NOYW1lPVwiZmlndXJlX2xldmVsXCIgc3R5bGU9e3tkaXNwbGF5OiBgJHt2aXNpYmxlU3RhdGV9YH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmlndXJlX2xldmVsX2FkZF9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIi0xXCI+V3liaWVyeiBwb3ppb20gZmlndXJ5IChqZcW8ZWxpIHdpYWRvbW/Fm8SHIGRvdHljenkgZmlndXJ5KTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbnRyb1wiPkludHJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJhc2ljXCI+QmFzaWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW50ZXJtZWRpYXRlXCI+SW50ZXJtZWRpYXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFkdmFuY2VkXCI+QWR2YW5jZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmVfYWRkX2NhdGVnb3J5XCIgc3R5bGU9e3tkaXNwbGF5OiBgJHt2aXNpYmxlU3RhdGV9YH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlphem5hY3oga2F0ZWdvcmnEmSBmaWd1cnkgKGplxbxlbGkgd2lhZG9tb8WbxIcgZG90eWN6eSBmaWd1cnkpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlX2NhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5rcnplc2XFgmtvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+c3pwYWdhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPmhhbmRzdGFuZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+c2hvdWxkZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPmhhbmRzcHJpbmc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPnNpxYJvd2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPmtvbWJvczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+YmFzaWMgc3BpbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+b2Jyb3Rvd2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5jb25zdCBhZGRDYXNlID0gY3JlYXRlUm9vdChDYXNlKTtcclxuYWRkQ2FzZS5yZW5kZXIoPENoYW5nZUNhc2VGdW5jdGlvbi8+KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDE3YTI1OGQ2NWIzYmJkZGZjMjJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJDYXNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGRyZW4iLCJzdWJtaXQiLCJDaGFuZ2VDYXNlRnVuY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwic3VibWl0Rm9ybSIsIm5vdERlZmF1bHQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlbGVjdGVkQ2FzZSIsInNldFNlbGVjdGVkQ2FzZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwidmlzaWJsZVN0YXRlIiwic2V0VmlzaWJsZSIsIkFkZENhdGVnb3J5IiwiZSIsInRhcmdldCIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwib25DaGFuZ2UiLCJuYW1lIiwiY2xhc3NOYW1lIiwiaWQiLCJzdHlsZSIsImNvbG9yIiwiZGlzcGxheSIsImNvbmNhdCIsInR5cGUiLCJhZGRDYXNlIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==
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
/******/ 	__webpack_require__.h = () => ("c516b2fea2f6c5952c0b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQVksQ0FBQyxjQUNJLENBQUMsZUFDdEJBLDBEQUFBO01BQU80QixTQUFTLEVBQUM7SUFBNEIsZ0JBQ3pDNUIsMERBQUE7TUFBT2tDLElBQUksRUFBQyxVQUFVO01BQUNQLElBQUksRUFBQyxpQkFBaUI7TUFBQ04sS0FBSyxFQUFDO0lBQUcsQ0FBQyxDQUFDLGVBQ3pEckIsMERBQUEsYUFBWSxDQUFDLGVBQWEsQ0FBQyxlQUMvQkEsMERBQUE7TUFBTzRCLFNBQVMsRUFBQztJQUE0QixnQkFDekM1QiwwREFBQTtNQUFPa0MsSUFBSSxFQUFDLFVBQVU7TUFBQ1AsSUFBSSxFQUFDLGlCQUFpQjtNQUFDTixLQUFLLEVBQUM7SUFBRyxDQUFDLENBQUMsZUFDekRyQiwwREFBQSxhQUFZLENBQUMsVUFBYSxDQUFDLGVBQy9CQSwwREFBQTtNQUFPNEIsU0FBUyxFQUFDO0lBQTRCLGdCQUN6QzVCLDBEQUFBO01BQU9rQyxJQUFJLEVBQUMsVUFBVTtNQUFDUCxJQUFJLEVBQUMsaUJBQWlCO01BQUNOLEtBQUssRUFBQztJQUFHLENBQUMsQ0FBQyxlQUN6RHJCLDBEQUFBLGFBQVksQ0FBQyxjQUFpQixDQUFDLGVBQ25DQSwwREFBQTtNQUFPNEIsU0FBUyxFQUFDO0lBQTRCLGdCQUN6QzVCLDBEQUFBO01BQU9rQyxJQUFJLEVBQUMsVUFBVTtNQUFDUCxJQUFJLEVBQUMsaUJBQWlCO01BQUNOLEtBQUssRUFBQztJQUFHLENBQUMsQ0FBQyxlQUN6RHJCLDBEQUFBLGFBQVksQ0FBQyxZQUFlLENBQy9CLENBQ0osQ0FDUCxDQUFDO0VBRVg7QUFDSixDQUFDO0FBQ0QsSUFBTW1DLE9BQU8sR0FBR2pDLDREQUFVLENBQUNDLElBQUksQ0FBQztBQUNoQ2dDLE9BQU8sQ0FBQ0MsTUFBTSxlQUFDcEMsMERBQUEsQ0FBQ08sa0JBQWtCLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3hGckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IENhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fbWVzc2FnZVwiKS5jaGlsZHJlblsxXTtcclxuXHJcbi8vc2Nob3dhbmllIGkgcG9rYXphbmllIHJ1YnJ5a2kgXCJmaWd1cmUgbGV2ZWxcIlxyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZUNhc2VGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgIGlmIChDYXNlKSB7XHJcbiAgICAgICAgY29uc3QgW3NlbGVjdGVkQ2FzZSwgc2V0U2VsZWN0ZWRDYXNlXSA9IHVzZVN0YXRlKFwiV3liaWVyeiBwb3fDs2Qgd2lhZG9tb8WbY2lcIik7XHJcbiAgICAgICAgY29uc3QgW3Zpc2libGVTdGF0ZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IEFkZENhdGVnb3J5ID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZENhc2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcInBob3RvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInd5YnJhbm8gZG9kYW5pZSB6ZGrEmWNpYSAtIHBva2HFvCBkb2RhdGtvd2Ugb3BjamVcIilcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKFwiZmxleFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZShcIm5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRDYXNlfSBvbkNoYW5nZT17QWRkQ2F0ZWdvcnl9IG5hbWU9XCJjYXNlXCIgY2xhc3NOYW1lPVwiY2FzZVwiIGlkPVwiY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc3R5bGU9e3tjb2xvcjogXCJsaWdodGdyYXlcIn19IHZhbHVlPXstMX0+IFd5YmllcnogcG93w7NkIHdpYWRvbW/Fm2NpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJmaWd1cmVfYWRkXCIgdmFsdWU9XCJwaG90b1wiPkNoY8SZIHd5c8WCYcSHIGkgb3B1Ymxpa293YcSHIG5hIHN0cm9uaWUgemRqxJljaWUgbHViIGZpbG1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicXVlc3Rpb25lXCI+TWFtIHB5dGFuaWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm90ZVwiPk1hbSB1d2FnxJkgLyBzdWdlc3RpZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWxldGVcIj5Qcm9zesSZIG8gdXN1bmnEmWNpZSB6ZGrEmWNpYSBsdWIgZmlsbWlrdTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdGhlclwiPklubmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImZpZ3VyZV9sZXZlbFwiIGNsYXNzTmFtZT1cImZpZ3VyZV9sZXZlbFwiIHN0eWxlPXt7ZGlzcGxheTogYCR7dmlzaWJsZVN0YXRlfWB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpZ3VyZV9sZXZlbF9hZGRfZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItMVwiPld5YmllcnogcG96aW9tIGZpZ3VyeSAoamXFvGVsaSB3aWFkb21vxZvEhyBkb3R5Y3p5IGZpZ3VyeSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW50cm9cIj5JbnRybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiYXNpY1wiPkJhc2ljPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImludGVybWVkaWF0ZVwiPkludGVybWVkaWF0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZHZhbmNlZFwiPkFkdmFuY2VkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlX2FkZF9jYXRlZ29yeVwiIHN0eWxlPXt7ZGlzcGxheTogYCR7dmlzaWJsZVN0YXRlfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5aYXpuYWN6IGthdGVnb3JpxJkgZmlndXJ5IChqZcW8ZWxpIHdpYWRvbW/Fm8SHIGRvdHljenkgZmlndXJ5KTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZV9jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrcnplc2XFgmtvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzenBhZ2F0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kc3RhbmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZHNwcmluZzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+c2nFgm93ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+a29tYm9zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5iYXNpYyBzcGluPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5vYnJvdG93ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IGFkZENhc2UgPSBjcmVhdGVSb290KENhc2UpO1xyXG5hZGRDYXNlLnJlbmRlcig8Q2hhbmdlQ2FzZUZ1bmN0aW9uLz4pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNTE2YjJmZWEyZjZjNTk1MmMwYlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIkNhc2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZHJlbiIsIkNoYW5nZUNhc2VGdW5jdGlvbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlbGVjdGVkQ2FzZSIsInNldFNlbGVjdGVkQ2FzZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwidmlzaWJsZVN0YXRlIiwic2V0VmlzaWJsZSIsIkFkZENhdGVnb3J5IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwib25DaGFuZ2UiLCJuYW1lIiwiY2xhc3NOYW1lIiwiaWQiLCJzdHlsZSIsImNvbG9yIiwiZGlzcGxheSIsImNvbmNhdCIsInR5cGUiLCJhZGRDYXNlIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==
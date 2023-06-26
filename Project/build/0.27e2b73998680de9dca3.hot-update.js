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
      setSelectedCase(function () {
        if (e.target.value === "photo") {
          console.log("COS");
          setVisible("flex");
        } else {
          console.log("NIC");
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
/******/ 	__webpack_require__.h = () => ("d76589244c4daa59578f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLGFBQVksQ0FBQyxjQUNJLENBQUMsZUFDdEJBLDBEQUFBO01BQU8yQixTQUFTLEVBQUM7SUFBNEIsZ0JBQ3pDM0IsMERBQUE7TUFBT2lDLElBQUksRUFBQyxVQUFVO01BQUNQLElBQUksRUFBQyxpQkFBaUI7TUFBQ04sS0FBSyxFQUFDO0lBQUcsQ0FBQyxDQUFDLGVBQ3pEcEIsMERBQUEsYUFBWSxDQUFDLGVBQ0EsQ0FBQyxlQUNsQkEsMERBQUE7TUFBTzJCLFNBQVMsRUFBQztJQUE0QixnQkFDekMzQiwwREFBQTtNQUFPaUMsSUFBSSxFQUFDLFVBQVU7TUFBQ1AsSUFBSSxFQUFDLGlCQUFpQjtNQUFDTixLQUFLLEVBQUM7SUFBRyxDQUFDLENBQUMsZUFDekRwQiwwREFBQSxhQUFZLENBQUMsVUFDQSxDQUFDLGVBQ2xCQSwwREFBQTtNQUFPMkIsU0FBUyxFQUFDO0lBQTRCLGdCQUN6QzNCLDBEQUFBO01BQU9pQyxJQUFJLEVBQUMsVUFBVTtNQUFDUCxJQUFJLEVBQUMsaUJBQWlCO01BQUNOLEtBQUssRUFBQztJQUFHLENBQUMsQ0FBQyxlQUN6RHBCLDBEQUFBLGFBQVksQ0FBQyxjQUNJLENBQUMsZUFDdEJBLDBEQUFBO01BQU8yQixTQUFTLEVBQUM7SUFBNEIsZ0JBQ3pDM0IsMERBQUE7TUFBT2lDLElBQUksRUFBQyxVQUFVO01BQUNQLElBQUksRUFBQyxpQkFBaUI7TUFBQ04sS0FBSyxFQUFDO0lBQUcsQ0FBQyxDQUFDLGVBQ3pEcEIsMERBQUEsYUFBWSxDQUFDLFlBQ0UsQ0FDbEIsQ0FDSixDQUNQLENBQUM7RUFFWDtBQUNKLENBQUM7QUFDRCxJQUFNa0MsT0FBTyxHQUFHaEMsNERBQVUsQ0FBQ0MsSUFBSSxDQUFDO0FBQ2hDK0IsT0FBTyxDQUFDQyxNQUFNLGVBQUNuQywwREFBQSxDQUFDTyxrQkFBa0IsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDNUZyQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuY29uc3QgQ2FzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9tZXNzYWdlXCIpLmNoaWxkcmVuWzFdO1xyXG5cclxuLy9zY2hvd2FuaWUgaSBwb2themFuaWUgcnVicnlraSBcImZpZ3VyZSBsZXZlbFwiXHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlQ2FzZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgaWYgKENhc2UpIHtcclxuICAgICAgICBjb25zdCBbc2VsZWN0ZWRDYXNlLCBzZXRTZWxlY3RlZENhc2VdID0gdXNlU3RhdGUoXCJXeWJpZXJ6IHBvd8OzZCB3aWFkb21vxZtjaVwiKTtcclxuICAgICAgICBjb25zdCBbdmlzaWJsZVN0YXRlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKFwibm9uZVwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgQWRkQ2F0ZWdvcnkgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZENhc2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcInBob3RvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNPU1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoXCJmbGV4XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5JQ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3NlbGVjdGVkQ2FzZX0gb25DaGFuZ2U9e0FkZENhdGVnb3J5fSBuYW1lPVwiY2FzZVwiIGNsYXNzTmFtZT1cImNhc2VcIiBpZD1cImNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHN0eWxlPXt7Y29sb3I6IFwibGlnaHRncmF5XCJ9fSB2YWx1ZT17LTF9PiBXeWJpZXJ6IHBvd8OzZCB3aWFkb21vxZtjaTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gY2xhc3NOYW1lPVwiZmlndXJlX2FkZFwiIHZhbHVlPVwicGhvdG9cIj5DaGPEmSB3eXPFgmHEhyBpIG9wdWJsaWtvd2HEhyBuYSBzdHJvbmllIHpkasSZY2llIGx1YiBmaWxtXHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInF1ZXN0aW9uZVwiPk1hbSBweXRhbmllPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vdGVcIj5NYW0gdXdhZ8SZIC8gc3VnZXN0aWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVsZXRlXCI+UHJvc3rEmSBvIHVzdW5pxJljaWUgemRqxJljaWEgbHViIGZpbG1pa3U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3RoZXJcIj5Jbm5lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJmaWd1cmVfbGV2ZWxcIiBjbGFzc05hbWU9XCJmaWd1cmVfbGV2ZWxcIiBzdHlsZT17e2Rpc3BsYXk6IGAke3Zpc2libGVTdGF0ZX1gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWd1cmVfbGV2ZWxfYWRkX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLTFcIj5XeWJpZXJ6IHBvemlvbSBmaWd1cnkgKGplxbxlbGkgd2lhZG9tb8WbxIcgZG90eWN6eSBmaWd1cnkpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImludHJvXCI+SW50cm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmFzaWNcIj5CYXNpYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbnRlcm1lZGlhdGVcIj5JbnRlcm1lZGlhdGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWR2YW5jZWRcIj5BZHZhbmNlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZV9hZGRfY2F0ZWdvcnlcIiBzdHlsZT17e2Rpc3BsYXk6IGAke3Zpc2libGVTdGF0ZX1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+WmF6bmFjeiBrYXRlZ29yacSZIGZpZ3VyeSAoamXFvGVsaSB3aWFkb21vxZvEhyBkb3R5Y3p5IGZpZ3VyeSk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmVfY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga3J6ZXNlxYJrb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3pwYWdhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZHN0YW5kPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRzcHJpbmc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2nFgm93ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrb21ib3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzaWMgc3BpbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnJvdG93ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IGFkZENhc2UgPSBjcmVhdGVSb290KENhc2UpO1xyXG5hZGRDYXNlLnJlbmRlcig8Q2hhbmdlQ2FzZUZ1bmN0aW9uLz4pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkNzY1ODkyNDRjNGRhYTU5NTc4ZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIkNhc2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZHJlbiIsIkNoYW5nZUNhc2VGdW5jdGlvbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlbGVjdGVkQ2FzZSIsInNldFNlbGVjdGVkQ2FzZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwidmlzaWJsZVN0YXRlIiwic2V0VmlzaWJsZSIsIkFkZENhdGVnb3J5IiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uQ2hhbmdlIiwibmFtZSIsImNsYXNzTmFtZSIsImlkIiwic3R5bGUiLCJjb2xvciIsImRpc3BsYXkiLCJjb25jYXQiLCJ0eXBlIiwiYWRkQ2FzZSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=
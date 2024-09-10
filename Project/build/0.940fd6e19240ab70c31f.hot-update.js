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
var submit = document.querySelector(".submin");
submit.addEventListener("submit", "submitForm");

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
    var submitForm = function submitForm(submin) {
      preventDefault("NIE WYSYŁAJ");

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
/******/ 	__webpack_require__.h = () => ("cece7038d5e9a5303679")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQy9CLENBRUosQ0E2QlAsQ0FBQztFQUVYO0FBQ0osQ0FBQztBQUNELElBQU11QyxPQUFPLEdBQUdyQyw0REFBVSxDQUFDQyxJQUFJLENBQUM7QUFDaENvQyxPQUFPLENBQUNDLE1BQU0sZUFBQ3hDLDBEQUFBLENBQUNTLGtCQUFrQixNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUM1SHJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9jb250YWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5jb25zdCBDYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX21lc3NhZ2VcIikuY2hpbGRyZW5bMV07XHJcbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWluXCIpO1xyXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBcInN1Ym1pdEZvcm1cIik7XHJcblxyXG4vL3NjaG93YW5pZSBpIHBva2F6YW5pZSBydWJyeWtpIFwiZmlndXJlIGxldmVsXCJcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VDYXNlRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBpZiAoQ2FzZSkge1xyXG4gICAgICAgIGNvbnN0IFtzZWxlY3RlZENhc2UsIHNldFNlbGVjdGVkQ2FzZV0gPSB1c2VTdGF0ZShcIld5YmllcnogcG93w7NkIHdpYWRvbW/Fm2NpXCIpO1xyXG4gICAgICAgIGNvbnN0IFt2aXNpYmxlU3RhdGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoXCJub25lXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBBZGRDYXRlZ29yeSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRDYXNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJwaG90b1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3eWJyYW5vIGRvZGFuaWUgemRqxJljaWEgLSBwb2thxbwgZG9kYXRrb3dlIG9wY2plXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZShcImZsZXhcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3VibWl0Rm9ybSA9IChzdWJtaW4pID0+IHtcclxuICAgICAgICAgICAgcHJldmVudERlZmF1bHQoXCJOSUUgV1lTWcWBQUpcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBzdWJtaW4ub25DbGlja1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRFU1RcIilcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3NlbGVjdGVkQ2FzZX0gb25DaGFuZ2U9e0FkZENhdGVnb3J5fSBuYW1lPVwiY2FzZVwiIGNsYXNzTmFtZT1cImNhc2VcIiBpZD1cImNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHN0eWxlPXt7Y29sb3I6IFwibGlnaHRncmF5XCJ9fSB2YWx1ZT17LTF9PiBXeWJpZXJ6IHBvd8OzZCB3aWFkb21vxZtjaTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gY2xhc3NOYW1lPVwiZmlndXJlX2FkZFwiIHZhbHVlPVwicGhvdG9cIj5DaGPEmSB3eXPFgmHEhyBpIG9wdWJsaWtvd2HEhyBuYSBzdHJvbmllIHpkasSZY2llIGx1YiBmaWxtXHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInF1ZXN0aW9uZVwiPk1hbSBweXRhbmllPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vdGVcIj5NYW0gdXdhZ8SZIC8gc3VnZXN0aWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVsZXRlXCI+UHJvc3rEmSBvIHVzdW5pxJljaWUgemRqxJljaWEgbHViIGZpbG1pa3U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3RoZXJcIj5Jbm5lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJmaWd1cmVfbGV2ZWxcIiBjbGFzc05hbWU9XCJmaWd1cmVfbGV2ZWxcIiBzdHlsZT17e2Rpc3BsYXk6IGAke3Zpc2libGVTdGF0ZX1gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWd1cmVfbGV2ZWxfYWRkX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLTFcIj5XeWJpZXJ6IHBvemlvbSBmaWd1cnkgKGplxbxlbGkgd2lhZG9tb8WbxIcgZG90eWN6eSBmaWd1cnkpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImludHJvXCI+SW50cm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmFzaWNcIj5CYXNpYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbnRlcm1lZGlhdGVcIj5JbnRlcm1lZGlhdGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWR2YW5jZWRcIj5BZHZhbmNlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZV9hZGRfY2F0ZWdvcnlcIiBzdHlsZT17e2Rpc3BsYXk6IGAke3Zpc2libGVTdGF0ZX1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+WmF6bmFjeiBrYXRlZ29yacSZIGZpZ3VyeSAoamXFvGVsaSB3aWFkb21vxZvEhyBkb3R5Y3p5IGZpZ3VyeSk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmVfY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPmtyemVzZcWCa29cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5zenBhZ2F0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+aGFuZHN0YW5kPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5zaG91bGRlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+aGFuZHNwcmluZzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+c2nFgm93ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+a29tYm9zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5iYXNpYyBzcGluPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5vYnJvdG93ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuey8qIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlQWRkXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveF9tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRpdGxlX21lc3NhZ2VcIj5XaWFkb21vxZvEhzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInRleHRhcmVhXCIgcm93cz1cIjNcIiBjb2xzPVwiNVwiIGlkPVwibWVzc2FnZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldwaXN6IHdpYWRvbW/Fm8SHXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFibCBjbGFzc05hbWU9XCJhZ3JlZW1lbnQgIGNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiYWdyZWVtZW50XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFd5cmHFvGFtIHpnb2TEmSBuYSBwcnpldHdhcnphbmllIG1vaWNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbnljaCBvc29ib3d5Y2ggcG9kYW55Y2ggdyBwb3d5xbxzenltIGZvcm11bGFyenUgdyBjZWxhY2ggaGFuZGxvd3ljaCBpIG1hcmtldGluZ293eWNoIHByemV6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkbWluaXN0cmF0b3JhIHRlaiBzdHJvbnkgb3JheiBwcnpleiBwb2RtaW90eSB0cnplY2llLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFibD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhZ3JlZW1lbnQgY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhZ3JlZW1lbnRcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgT8Wbd2lhZGN6YW0sIMW8ZSBuaW5pZWpzemUgemRqxJljaWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJ6ZWRzdGF3aWEgd3nFgsSFY3puaWUgbcOzaiB3aXplcnVuZWssIGJleiB3aXplcnVua3Ugb3PDs2IgdHJ6ZWNpY2ggaSB3eXJhxbxhbSB6Z29kxJkgbmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmllb2dyYW5pY3pvbmUgY3phc293byB1ZG9zdMSZcG5pZW5pZSBtb2plZ28gd2l6ZXJ1bmt1LCB3IHBvc3RhY2kgemRqxJljaWEsIHcgY2VsdSB1bWllc3pjemVuaWEgZ29cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmEgbmluaWVqc3plaiBzdHJvbmllIGludGVybmV0b3dlai5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPjxici8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0XCI+V3nFm2xpajwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IGFkZENhc2UgPSBjcmVhdGVSb290KENhc2UpO1xyXG5hZGRDYXNlLnJlbmRlcig8Q2hhbmdlQ2FzZUZ1bmN0aW9uLz4pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjZWNlNzAzOGQ1ZTlhNTMwMzY3OVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIkNhc2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZHJlbiIsInN1Ym1pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJDaGFuZ2VDYXNlRnVuY3Rpb24iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZWxlY3RlZENhc2UiLCJzZXRTZWxlY3RlZENhc2UiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInZpc2libGVTdGF0ZSIsInNldFZpc2libGUiLCJBZGRDYXRlZ29yeSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInN1Ym1pdEZvcm0iLCJzdWJtaW4iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbkNoYW5nZSIsIm5hbWUiLCJjbGFzc05hbWUiLCJpZCIsInN0eWxlIiwiY29sb3IiLCJkaXNwbGF5IiwiY29uY2F0IiwidHlwZSIsImFkZENhc2UiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9
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

    // const submitForm = (e) => {
    //     e.
    // }

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
/******/ 	__webpack_require__.h = () => ("6834cc041877ec6164b0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuY29uc3QgQ2FzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9tZXNzYWdlXCIpLmNoaWxkcmVuWzFdO1xyXG5cclxuLy9zY2hvd2FuaWUgaSBwb2themFuaWUgcnVicnlraSBcImZpZ3VyZSBsZXZlbFwiXHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlQ2FzZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgaWYgKENhc2UpIHtcclxuICAgICAgICBjb25zdCBbc2VsZWN0ZWRDYXNlLCBzZXRTZWxlY3RlZENhc2VdID0gdXNlU3RhdGUoXCJXeWJpZXJ6IHBvd8OzZCB3aWFkb21vxZtjaVwiKTtcclxuICAgICAgICBjb25zdCBbdmlzaWJsZVN0YXRlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKFwibm9uZVwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgQWRkQ2F0ZWdvcnkgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQ2FzZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwicGhvdG9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3licmFubyBkb2RhbmllIHpkasSZY2lhIC0gcG9rYcW8IGRvZGF0a293ZSBvcGNqZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoXCJmbGV4XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKFwibm9uZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHN1Ym1pdEZvcm0gPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBlLlxyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRDYXNlfSBvbkNoYW5nZT17QWRkQ2F0ZWdvcnl9IG5hbWU9XCJjYXNlXCIgY2xhc3NOYW1lPVwiY2FzZVwiIGlkPVwiY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc3R5bGU9e3tjb2xvcjogXCJsaWdodGdyYXlcIn19IHZhbHVlPXstMX0+IFd5YmllcnogcG93w7NkIHdpYWRvbW/Fm2NpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJmaWd1cmVfYWRkXCIgdmFsdWU9XCJwaG90b1wiPkNoY8SZIHd5c8WCYcSHIGkgb3B1Ymxpa293YcSHIG5hIHN0cm9uaWUgemRqxJljaWUgbHViIGZpbG1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicXVlc3Rpb25lXCI+TWFtIHB5dGFuaWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm90ZVwiPk1hbSB1d2FnxJkgLyBzdWdlc3RpZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWxldGVcIj5Qcm9zesSZIG8gdXN1bmnEmWNpZSB6ZGrEmWNpYSBsdWIgZmlsbWlrdTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdGhlclwiPklubmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImZpZ3VyZV9sZXZlbFwiIGNsYXNzTmFtZT1cImZpZ3VyZV9sZXZlbFwiIHN0eWxlPXt7ZGlzcGxheTogYCR7dmlzaWJsZVN0YXRlfWB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpZ3VyZV9sZXZlbF9hZGRfZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItMVwiPld5YmllcnogcG96aW9tIGZpZ3VyeSAoamXFvGVsaSB3aWFkb21vxZvEhyBkb3R5Y3p5IGZpZ3VyeSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW50cm9cIj5JbnRybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiYXNpY1wiPkJhc2ljPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImludGVybWVkaWF0ZVwiPkludGVybWVkaWF0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZHZhbmNlZFwiPkFkdmFuY2VkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlX2FkZF9jYXRlZ29yeVwiIHN0eWxlPXt7ZGlzcGxheTogYCR7dmlzaWJsZVN0YXRlfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5aYXpuYWN6IGthdGVnb3JpxJkgZmlndXJ5IChqZcW8ZWxpIHdpYWRvbW/Fm8SHIGRvdHljenkgZmlndXJ5KTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZV9jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+a3J6ZXNlxYJrb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPnN6cGFnYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5oYW5kc3RhbmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPnNob3VsZGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5oYW5kc3ByaW5nPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5zacWCb3dlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5rb21ib3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPmJhc2ljIHNwaW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPm9icm90b3dlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG57LyogXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VBZGRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94X21lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGl0bGVfbWVzc2FnZVwiPldpYWRvbW/Fm8SHPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwidGV4dGFyZWFcIiByb3dzPVwiM1wiIGNvbHM9XCI1XCIgaWQ9XCJtZXNzYWdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3Bpc3ogd2lhZG9tb8WbxIdcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJsIGNsYXNzTmFtZT1cImFncmVlbWVudCAgY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhZ3JlZW1lbnRcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV3lyYcW8YW0gemdvZMSZIG5hIHByemV0d2FyemFuaWUgbW9pY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFueWNoIG9zb2Jvd3ljaCBwb2RhbnljaCB3IHBvd3nFvHN6eW0gZm9ybXVsYXJ6dSB3IGNlbGFjaCBoYW5kbG93eWNoIGkgbWFya2V0aW5nb3d5Y2ggcHJ6ZXpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRtaW5pc3RyYXRvcmEgdGVqIHN0cm9ueSBvcmF6IHByemV6IHBvZG1pb3R5IHRyemVjaWUuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFncmVlbWVudCBjaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFncmVlbWVudFwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPxZt3aWFkY3phbSwgxbxlIG5pbmllanN6ZSB6ZGrEmWNpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcnplZHN0YXdpYSB3ecWCxIVjem5pZSBtw7NqIHdpemVydW5laywgYmV6IHdpemVydW5rdSBvc8OzYiB0cnplY2ljaCBpIHd5cmHFvGFtIHpnb2TEmSBuYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWVvZ3Jhbmljem9uZSBjemFzb3dvIHVkb3N0xJlwbmllbmllIG1vamVnbyB3aXplcnVua3UsIHcgcG9zdGFjaSB6ZGrEmWNpYSwgdyBjZWx1IHVtaWVzemN6ZW5pYSBnb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYSBuaW5pZWpzemVqIHN0cm9uaWUgaW50ZXJuZXRvd2VqLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRcIj5XecWbbGlqPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY29uc3QgYWRkQ2FzZSA9IGNyZWF0ZVJvb3QoQ2FzZSk7XHJcbmFkZENhc2UucmVuZGVyKDxDaGFuZ2VDYXNlRnVuY3Rpb24vPik7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY4MzRjYzA0MTg3N2VjNjE2NGIwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiQ2FzZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNoaWxkcmVuIiwiQ2hhbmdlQ2FzZUZ1bmN0aW9uIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0ZWRDYXNlIiwic2V0U2VsZWN0ZWRDYXNlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJ2aXNpYmxlU3RhdGUiLCJzZXRWaXNpYmxlIiwiQWRkQ2F0ZWdvcnkiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbkNoYW5nZSIsIm5hbWUiLCJjbGFzc05hbWUiLCJpZCIsInN0eWxlIiwiY29sb3IiLCJkaXNwbGF5IiwiY29uY2F0IiwidHlwZSIsImFkZENhc2UiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9
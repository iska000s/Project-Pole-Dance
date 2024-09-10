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
    // function notDefault(event){
    //     event.preventDefault();
    // }
    // notDefault();

    // submin.onClick
    console.log("TEST");
  };
  submitForm();
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
/******/ 	__webpack_require__.h = () => ("486244b9716eb89a65c9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsZUFDekQxQiwwREFBQSxhQUFZLENBQUMsWUFBZSxDQUMvQixDQUVKLENBQ1AsQ0FBQztFQUVYO0FBQ0osQ0FBQztBQUNELElBQU1zQyxPQUFPLEdBQUdwQyw0REFBVSxDQUFDQyxJQUFJLENBQUM7QUFDaENtQyxPQUFPLENBQUNDLE1BQU0sZUFBQ3ZDLDBEQUFBLENBQUNRLGtCQUFrQixNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUN4R3JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9jb250YWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5jb25zdCBDYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX21lc3NhZ2VcIikuY2hpbGRyZW5bMV07XHJcbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0XCIpO1xyXG5cclxuLy9zY2hvd2FuaWUgaSBwb2themFuaWUgcnVicnlraSBcImZpZ3VyZSBsZXZlbFwiXHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlQ2FzZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0Rm9ybSk7XHJcblxyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IChzdWJtaXQpID0+IHtcclxuICAgICAgICAvLyBmdW5jdGlvbiBub3REZWZhdWx0KGV2ZW50KXtcclxuICAgICAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gbm90RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyBzdWJtaW4ub25DbGlja1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVEVTVFwiKVxyXG4gICAgfVxyXG4gXHJcbiAgICBzdWJtaXRGb3JtKCk7XHJcblxyXG5cclxuICAgIGlmIChDYXNlKSB7XHJcbiAgICAgICAgY29uc3QgW3NlbGVjdGVkQ2FzZSwgc2V0U2VsZWN0ZWRDYXNlXSA9IHVzZVN0YXRlKFwiV3liaWVyeiBwb3fDs2Qgd2lhZG9tb8WbY2lcIik7XHJcbiAgICAgICAgY29uc3QgW3Zpc2libGVTdGF0ZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShcIm5vbmVcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgQWRkQ2F0ZWdvcnkgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQ2FzZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwicGhvdG9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3licmFubyBkb2RhbmllIHpkasSZY2lhIC0gcG9rYcW8IGRvZGF0a293ZSBvcGNqZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoXCJmbGV4XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKFwibm9uZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRDYXNlfSBvbkNoYW5nZT17QWRkQ2F0ZWdvcnl9IG5hbWU9XCJjYXNlXCIgY2xhc3NOYW1lPVwiY2FzZVwiIGlkPVwiY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc3R5bGU9e3tjb2xvcjogXCJsaWdodGdyYXlcIn19IHZhbHVlPXstMX0+IFd5YmllcnogcG93w7NkIHdpYWRvbW/Fm2NpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJmaWd1cmVfYWRkXCIgdmFsdWU9XCJwaG90b1wiPkNoY8SZIHd5c8WCYcSHIGkgb3B1Ymxpa293YcSHIG5hIHN0cm9uaWUgemRqxJljaWUgbHViIGZpbG1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicXVlc3Rpb25lXCI+TWFtIHB5dGFuaWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm90ZVwiPk1hbSB1d2FnxJkgLyBzdWdlc3RpZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWxldGVcIj5Qcm9zesSZIG8gdXN1bmnEmWNpZSB6ZGrEmWNpYSBsdWIgZmlsbWlrdTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdGhlclwiPklubmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImZpZ3VyZV9sZXZlbFwiIGNsYXNzTmFtZT1cImZpZ3VyZV9sZXZlbFwiIHN0eWxlPXt7ZGlzcGxheTogYCR7dmlzaWJsZVN0YXRlfWB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpZ3VyZV9sZXZlbF9hZGRfZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItMVwiPld5YmllcnogcG96aW9tIGZpZ3VyeSAoamXFvGVsaSB3aWFkb21vxZvEhyBkb3R5Y3p5IGZpZ3VyeSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW50cm9cIj5JbnRybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiYXNpY1wiPkJhc2ljPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImludGVybWVkaWF0ZVwiPkludGVybWVkaWF0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZHZhbmNlZFwiPkFkdmFuY2VkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlX2FkZF9jYXRlZ29yeVwiIHN0eWxlPXt7ZGlzcGxheTogYCR7dmlzaWJsZVN0YXRlfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5aYXpuYWN6IGthdGVnb3JpxJkgZmlndXJ5IChqZcW8ZWxpIHdpYWRvbW/Fm8SHIGRvdHljenkgZmlndXJ5KTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZV9jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+a3J6ZXNlxYJrb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPnN6cGFnYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5oYW5kc3RhbmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPnNob3VsZGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5oYW5kc3ByaW5nPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5zacWCb3dlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5rb21ib3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPmJhc2ljIHNwaW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPm9icm90b3dlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY29uc3QgYWRkQ2FzZSA9IGNyZWF0ZVJvb3QoQ2FzZSk7XHJcbmFkZENhc2UucmVuZGVyKDxDaGFuZ2VDYXNlRnVuY3Rpb24vPik7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ4NjI0NGI5NzE2ZWI4OWE2NWM5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiQ2FzZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNoaWxkcmVuIiwic3VibWl0IiwiQ2hhbmdlQ2FzZUZ1bmN0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1Ym1pdEZvcm0iLCJjb25zb2xlIiwibG9nIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0ZWRDYXNlIiwic2V0U2VsZWN0ZWRDYXNlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJ2aXNpYmxlU3RhdGUiLCJzZXRWaXNpYmxlIiwiQWRkQ2F0ZWdvcnkiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uQ2hhbmdlIiwibmFtZSIsImNsYXNzTmFtZSIsImlkIiwic3R5bGUiLCJjb2xvciIsImRpc3BsYXkiLCJjb25jYXQiLCJ0eXBlIiwiYWRkQ2FzZSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=
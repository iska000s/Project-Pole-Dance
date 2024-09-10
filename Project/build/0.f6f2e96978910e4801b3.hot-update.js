"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _RandomImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var _FigureCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);






var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_RandomImg__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FigureCategory__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(App, null));

/***/ }),

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
// reszta formularza + alert wysyłania wiadomości

var ChangeCaseFunction = function ChangeCaseFunction() {
  var submitForm = function submitForm() {
    console.log("Wysyłanie wiadomości zablokowane");
    alert("Nie można wysłać wiadomości. Skontaktuje się pod adresem mailowym: izabelast@op.pl");
  };
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "obrotowe"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "box_message"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "title_message"
    }, "Wiadomo\u015B\u0107"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
      className: "textarea",
      rows: "3",
      cols: "5",
      id: "messager",
      placeholder: "Wpisz wiadomo\u015B\u0107"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("labl", {
      className: "agreement  checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      name: "agreement",
      value: "1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "Wyra\u017Cam zgod\u0119 na przetwarzanie moich danych osobowych podanych w powy\u017Cszym formularzu w celach handlowych i marketingowych przez administratora tej strony oraz przez podmioty trzecie."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "agreement checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      name: "agreement",
      value: "1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "O\u015Bwiadczam, \u017Ce niniejsze zdj\u0119cie przedstawia wy\u0142\u0105cznie m\xF3j wizerunek, bez wizerunku os\xF3b trzecich i wyra\u017Cam zgod\u0119 na nieograniczone czasowo udost\u0119pnienie mojego wizerunku, w postaci zdj\u0119cia, w celu umieszczenia go na niniejszej stronie internetowej."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "submit",
      onClick: submitForm
    }, "Wy\u015Blij"));
  }
};
var addCase = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(Case);
addCase.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChangeCaseFunction, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("de3462e17f90083d9c51")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQ1gsQ0FBQyxlQUNOQSwwREFBQTtNQUFRc0MsU0FBUyxFQUFDLFFBQVE7TUFBQ1UsT0FBTyxFQUFFOUI7SUFBVyxHQUFDLGFBQWMsQ0FDaEUsQ0FBQztFQUVYO0FBQ0osQ0FBQztBQUNELElBQU0rQixPQUFPLEdBQUdoRCw0REFBVSxDQUFDYSxJQUFJLENBQUM7QUFDaENtQyxPQUFPLENBQUNyQyxNQUFNLGVBQUNaLDBEQUFBLENBQUNJLGtCQUFrQixNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNySHJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9jb250YWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc2Nzcy9pbmRleC5zY3NzXCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmFuZG9tSW1nIGZyb20gXCIuL1JhbmRvbUltZ1wiO1xyXG5pbXBvcnQgRmlndXJlQ2F0ZWdvcnkgZnJvbSBcIi4vRmlndXJlQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IHtDaGFuZ2VDYXNlRnVuY3Rpb259IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuXHJcblxyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8UmFuZG9tSW1nLz5cclxuICAgICAgICAgICAgPEZpZ3VyZUNhdGVnb3J5Lz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcig8QXBwLz4pO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IENhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fbWVzc2FnZVwiKS5jaGlsZHJlblsxXTtcclxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRcIik7XHJcblxyXG4vL3NjaG93YW5pZSBpIHBva2F6YW5pZSBydWJyeWtpIFwiZmlndXJlIGxldmVsXCJcclxuLy8gcmVzenRhIGZvcm11bGFyemEgKyBhbGVydCB3eXN5xYJhbmlhIHdpYWRvbW/Fm2NpXHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlQ2FzZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgXHJcblxyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIld5c3nFgmFuaWUgd2lhZG9tb8WbY2kgemFibG9rb3dhbmVcIik7XHJcbiAgICAgICAgYWxlcnQoXCJOaWUgbW/FvG5hIHd5c8WCYcSHIHdpYWRvbW/Fm2NpLiBTa29udGFrdHVqZSBzacSZIHBvZCBhZHJlc2VtIG1haWxvd3ltOiBpemFiZWxhc3RAb3AucGxcIilcclxuICAgIH1cclxuIFxyXG5cclxuICAgIGlmIChDYXNlKSB7XHJcbiAgICAgICAgY29uc3QgW3NlbGVjdGVkQ2FzZSwgc2V0U2VsZWN0ZWRDYXNlXSA9IHVzZVN0YXRlKFwiV3liaWVyeiBwb3fDs2Qgd2lhZG9tb8WbY2lcIik7XHJcbiAgICAgICAgY29uc3QgW3Zpc2libGVTdGF0ZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShcIm5vbmVcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgQWRkQ2F0ZWdvcnkgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQ2FzZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwicGhvdG9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3licmFubyBkb2RhbmllIHpkasSZY2lhIC0gcG9rYcW8IGRvZGF0a293ZSBvcGNqZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoXCJmbGV4XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKFwibm9uZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRDYXNlfSBvbkNoYW5nZT17QWRkQ2F0ZWdvcnl9IG5hbWU9XCJjYXNlXCIgY2xhc3NOYW1lPVwiY2FzZVwiIGlkPVwiY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc3R5bGU9e3tjb2xvcjogXCJsaWdodGdyYXlcIn19IHZhbHVlPXstMX0+IFd5YmllcnogcG93w7NkIHdpYWRvbW/Fm2NpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJmaWd1cmVfYWRkXCIgdmFsdWU9XCJwaG90b1wiPkNoY8SZIHd5c8WCYcSHIGkgb3B1Ymxpa293YcSHIG5hIHN0cm9uaWUgemRqxJljaWUgbHViIGZpbG1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicXVlc3Rpb25lXCI+TWFtIHB5dGFuaWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm90ZVwiPk1hbSB1d2FnxJkgLyBzdWdlc3RpZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWxldGVcIj5Qcm9zesSZIG8gdXN1bmnEmWNpZSB6ZGrEmWNpYSBsdWIgZmlsbWlrdTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdGhlclwiPklubmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImZpZ3VyZV9sZXZlbFwiIGNsYXNzTmFtZT1cImZpZ3VyZV9sZXZlbFwiIHN0eWxlPXt7ZGlzcGxheTogYCR7dmlzaWJsZVN0YXRlfWB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpZ3VyZV9sZXZlbF9hZGRfZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItMVwiPld5YmllcnogcG96aW9tIGZpZ3VyeSAoamXFvGVsaSB3aWFkb21vxZvEhyBkb3R5Y3p5IGZpZ3VyeSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW50cm9cIj5JbnRybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiYXNpY1wiPkJhc2ljPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImludGVybWVkaWF0ZVwiPkludGVybWVkaWF0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZHZhbmNlZFwiPkFkdmFuY2VkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlX2FkZF9jYXRlZ29yeVwiIHN0eWxlPXt7ZGlzcGxheTogYCR7dmlzaWJsZVN0YXRlfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5aYXpuYWN6IGthdGVnb3JpxJkgZmlndXJ5IChqZcW8ZWxpIHdpYWRvbW/Fm8SHIGRvdHljenkgZmlndXJ5KTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZV9jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+a3J6ZXNlxYJrb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPnN6cGFnYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5oYW5kc3RhbmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPnNob3VsZGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5oYW5kc3ByaW5nPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5zacWCb3dlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5rb21ib3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPmJhc2ljIHNwaW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPm9icm90b3dlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94X21lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGl0bGVfbWVzc2FnZVwiPldpYWRvbW/Fm8SHPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwidGV4dGFyZWFcIiByb3dzPVwiM1wiIGNvbHM9XCI1XCIgaWQ9XCJtZXNzYWdlclwiIHBsYWNlaG9sZGVyPVwiV3Bpc3ogd2lhZG9tb8WbxIdcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJsIGNsYXNzTmFtZT1cImFncmVlbWVudCAgY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhZ3JlZW1lbnRcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV3lyYcW8YW0gemdvZMSZIG5hIHByemV0d2FyemFuaWUgbW9pY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFueWNoIG9zb2Jvd3ljaCBwb2RhbnljaCB3IHBvd3nFvHN6eW0gZm9ybXVsYXJ6dSB3IGNlbGFjaCBoYW5kbG93eWNoIGkgbWFya2V0aW5nb3d5Y2ggcHJ6ZXpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRtaW5pc3RyYXRvcmEgdGVqIHN0cm9ueSBvcmF6IHByemV6IHBvZG1pb3R5IHRyemVjaWUuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFncmVlbWVudCBjaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFncmVlbWVudFwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPxZt3aWFkY3phbSwgxbxlIG5pbmllanN6ZSB6ZGrEmWNpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcnplZHN0YXdpYSB3ecWCxIVjem5pZSBtw7NqIHdpemVydW5laywgYmV6IHdpemVydW5rdSBvc8OzYiB0cnplY2ljaCBpIHd5cmHFvGFtIHpnb2TEmSBuYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWVvZ3Jhbmljem9uZSBjemFzb3dvIHVkb3N0xJlwbmllbmllIG1vamVnbyB3aXplcnVua3UsIHcgcG9zdGFjaSB6ZGrEmWNpYSwgdyBjZWx1IHVtaWVzemN6ZW5pYSBnb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYSBuaW5pZWpzemVqIHN0cm9uaWUgaW50ZXJuZXRvd2VqLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRcIiBvbkNsaWNrPXtzdWJtaXRGb3JtfT5XecWbbGlqPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5jb25zdCBhZGRDYXNlID0gY3JlYXRlUm9vdChDYXNlKTtcclxuYWRkQ2FzZS5yZW5kZXIoPENoYW5nZUNhc2VGdW5jdGlvbi8+KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGUzNDYyZTE3ZjkwMDgzZDljNTFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiUmFuZG9tSW1nIiwiRmlndXJlQ2F0ZWdvcnkiLCJDaGFuZ2VDYXNlRnVuY3Rpb24iLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsInVzZVN0YXRlIiwiQ2FzZSIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZHJlbiIsInN1Ym1pdCIsInN1Ym1pdEZvcm0iLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZWxlY3RlZENhc2UiLCJzZXRTZWxlY3RlZENhc2UiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInZpc2libGVTdGF0ZSIsInNldFZpc2libGUiLCJBZGRDYXRlZ29yeSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwiY2xhc3NOYW1lIiwiaWQiLCJzdHlsZSIsImNvbG9yIiwiZGlzcGxheSIsImNvbmNhdCIsInR5cGUiLCJyb3dzIiwiY29scyIsInBsYWNlaG9sZGVyIiwib25DbGljayIsImFkZENhc2UiXSwic291cmNlUm9vdCI6IiJ9
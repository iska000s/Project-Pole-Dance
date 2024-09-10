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
var _this = undefined;
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
  var submitForm = function submitForm(event) {
    // function notDefault(e){
    //     e.preventDefault();
    // }
    // notDefault()
    // console.log("TEST")
    event.preventDefault();
    var name = _this.state.itemName;
    _this.setState({
      storedItemName: _this.state.itemName
    }, function () {
      alert(this.state.storedItemName); // Shows the right value!
    });
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
      onSubmit: submitForm
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
/******/ 	__webpack_require__.h = () => ("80144813c7cad397e766")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUV0QztJQUFXLEdBQUMsYUFBYyxDQUNqRSxDQUFDO0VBRVg7QUFDSixDQUFDO0FBQ0QsSUFBTXVDLE9BQU8sR0FBRy9DLDREQUFVLENBQUNDLElBQUksQ0FBQztBQUNoQzhDLE9BQU8sQ0FBQ0MsTUFBTSxlQUFDbEQsMERBQUEsQ0FBQ1Esa0JBQWtCLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3BJckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IENhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fbWVzc2FnZVwiKS5jaGlsZHJlblsxXTtcclxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRcIik7XHJcblxyXG4vL3NjaG93YW5pZSBpIHBva2F6YW5pZSBydWJyeWtpIFwiZmlndXJlIGxldmVsXCJcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VDYXNlRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRGb3JtKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gZnVuY3Rpb24gbm90RGVmYXVsdChlKXtcclxuICAgICAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBub3REZWZhdWx0KClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRFU1RcIilcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5zdGF0ZS5pdGVtTmFtZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICAgIHN0b3JlZEl0ZW1OYW1lOnRoaXMuc3RhdGUuaXRlbU5hbWVcclxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5zdG9yZWRJdGVtTmFtZSk7IC8vIFNob3dzIHRoZSByaWdodCB2YWx1ZSFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG4gXHJcbiAgICAvLyBzdWJtaXRGb3JtKCk7XHJcblxyXG5cclxuICAgIGlmIChDYXNlKSB7XHJcbiAgICAgICAgY29uc3QgW3NlbGVjdGVkQ2FzZSwgc2V0U2VsZWN0ZWRDYXNlXSA9IHVzZVN0YXRlKFwiV3liaWVyeiBwb3fDs2Qgd2lhZG9tb8WbY2lcIik7XHJcbiAgICAgICAgY29uc3QgW3Zpc2libGVTdGF0ZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShcIm5vbmVcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgQWRkQ2F0ZWdvcnkgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQ2FzZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwicGhvdG9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid3licmFubyBkb2RhbmllIHpkasSZY2lhIC0gcG9rYcW8IGRvZGF0a293ZSBvcGNqZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoXCJmbGV4XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKFwibm9uZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRDYXNlfSBvbkNoYW5nZT17QWRkQ2F0ZWdvcnl9IG5hbWU9XCJjYXNlXCIgY2xhc3NOYW1lPVwiY2FzZVwiIGlkPVwiY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc3R5bGU9e3tjb2xvcjogXCJsaWdodGdyYXlcIn19IHZhbHVlPXstMX0+IFd5YmllcnogcG93w7NkIHdpYWRvbW/Fm2NpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJmaWd1cmVfYWRkXCIgdmFsdWU9XCJwaG90b1wiPkNoY8SZIHd5c8WCYcSHIGkgb3B1Ymxpa293YcSHIG5hIHN0cm9uaWUgemRqxJljaWUgbHViIGZpbG1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicXVlc3Rpb25lXCI+TWFtIHB5dGFuaWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm90ZVwiPk1hbSB1d2FnxJkgLyBzdWdlc3RpZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWxldGVcIj5Qcm9zesSZIG8gdXN1bmnEmWNpZSB6ZGrEmWNpYSBsdWIgZmlsbWlrdTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvdGhlclwiPklubmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImZpZ3VyZV9sZXZlbFwiIGNsYXNzTmFtZT1cImZpZ3VyZV9sZXZlbFwiIHN0eWxlPXt7ZGlzcGxheTogYCR7dmlzaWJsZVN0YXRlfWB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpZ3VyZV9sZXZlbF9hZGRfZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItMVwiPld5YmllcnogcG96aW9tIGZpZ3VyeSAoamXFvGVsaSB3aWFkb21vxZvEhyBkb3R5Y3p5IGZpZ3VyeSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW50cm9cIj5JbnRybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiYXNpY1wiPkJhc2ljPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImludGVybWVkaWF0ZVwiPkludGVybWVkaWF0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZHZhbmNlZFwiPkFkdmFuY2VkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlX2FkZF9jYXRlZ29yeVwiIHN0eWxlPXt7ZGlzcGxheTogYCR7dmlzaWJsZVN0YXRlfWB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5aYXpuYWN6IGthdGVnb3JpxJkgZmlndXJ5IChqZcW8ZWxpIHdpYWRvbW/Fm8SHIGRvdHljenkgZmlndXJ5KTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZV9jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+a3J6ZXNlxYJrb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPnN6cGFnYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5oYW5kc3RhbmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPnNob3VsZGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5oYW5kc3ByaW5nPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5zacWCb3dlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5rb21ib3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPmJhc2ljIHNwaW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPm9icm90b3dlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94X21lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGl0bGVfbWVzc2FnZVwiPldpYWRvbW/Fm8SHPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwidGV4dGFyZWFcIiByb3dzPVwiM1wiIGNvbHM9XCI1XCIgaWQ9XCJtZXNzYWdlclwiIHBsYWNlaG9sZGVyPVwiV3Bpc3ogd2lhZG9tb8WbxIdcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJsIGNsYXNzTmFtZT1cImFncmVlbWVudCAgY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhZ3JlZW1lbnRcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV3lyYcW8YW0gemdvZMSZIG5hIHByemV0d2FyemFuaWUgbW9pY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFueWNoIG9zb2Jvd3ljaCBwb2RhbnljaCB3IHBvd3nFvHN6eW0gZm9ybXVsYXJ6dSB3IGNlbGFjaCBoYW5kbG93eWNoIGkgbWFya2V0aW5nb3d5Y2ggcHJ6ZXpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRtaW5pc3RyYXRvcmEgdGVqIHN0cm9ueSBvcmF6IHByemV6IHBvZG1pb3R5IHRyemVjaWUuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFncmVlbWVudCBjaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFncmVlbWVudFwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPxZt3aWFkY3phbSwgxbxlIG5pbmllanN6ZSB6ZGrEmWNpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcnplZHN0YXdpYSB3ecWCxIVjem5pZSBtw7NqIHdpemVydW5laywgYmV6IHdpemVydW5rdSBvc8OzYiB0cnplY2ljaCBpIHd5cmHFvGFtIHpnb2TEmSBuYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWVvZ3Jhbmljem9uZSBjemFzb3dvIHVkb3N0xJlwbmllbmllIG1vamVnbyB3aXplcnVua3UsIHcgcG9zdGFjaSB6ZGrEmWNpYSwgdyBjZWx1IHVtaWVzemN6ZW5pYSBnb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYSBuaW5pZWpzemVqIHN0cm9uaWUgaW50ZXJuZXRvd2VqLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRcIiBvblN1Ym1pdD17c3VibWl0Rm9ybX0+V3nFm2xpajwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuY29uc3QgYWRkQ2FzZSA9IGNyZWF0ZVJvb3QoQ2FzZSk7XHJcbmFkZENhc2UucmVuZGVyKDxDaGFuZ2VDYXNlRnVuY3Rpb24vPik7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjgwMTQ0ODEzYzdjYWQzOTdlNzY2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiQ2FzZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNoaWxkcmVuIiwic3VibWl0IiwiQ2hhbmdlQ2FzZUZ1bmN0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1Ym1pdEZvcm0iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsIl90aGlzIiwic3RhdGUiLCJpdGVtTmFtZSIsInNldFN0YXRlIiwic3RvcmVkSXRlbU5hbWUiLCJhbGVydCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlbGVjdGVkQ2FzZSIsInNldFNlbGVjdGVkQ2FzZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwidmlzaWJsZVN0YXRlIiwic2V0VmlzaWJsZSIsIkFkZENhdGVnb3J5IiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwiaWQiLCJzdHlsZSIsImNvbG9yIiwiZGlzcGxheSIsImNvbmNhdCIsInR5cGUiLCJyb3dzIiwiY29scyIsInBsYWNlaG9sZGVyIiwib25TdWJtaXQiLCJhZGRDYXNlIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==
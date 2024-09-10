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
  var submitForm = function submitForm(submit) {
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
/******/ 	__webpack_require__.h = () => ("fe90fa5a4d6c6a53a17f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUV0QztJQUFXLEdBQUMsYUFBYyxDQUNqRSxDQUFDO0VBRVg7QUFDSixDQUFDO0FBQ0QsSUFBTXVDLE9BQU8sR0FBRy9DLDREQUFVLENBQUNDLElBQUksQ0FBQztBQUNoQzhDLE9BQU8sQ0FBQ0MsTUFBTSxlQUFDbEQsMERBQUEsQ0FBQ1Esa0JBQWtCLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3BJckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IENhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fbWVzc2FnZVwiKS5jaGlsZHJlblsxXTtcclxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRcIik7XHJcblxyXG4vL3NjaG93YW5pZSBpIHBva2F6YW5pZSBydWJyeWtpIFwiZmlndXJlIGxldmVsXCJcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VDYXNlRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRGb3JtKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gKHN1Ym1pdCkgPT4ge1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIG5vdERlZmF1bHQoZSl7XHJcbiAgICAgICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gbm90RGVmYXVsdCgpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJURVNUXCIpXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuc3RhdGUuaXRlbU5hbWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe1xyXG4gICAgICAgICAgICBzdG9yZWRJdGVtTmFtZTp0aGlzLnN0YXRlLml0ZW1OYW1lXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUuc3RvcmVkSXRlbU5hbWUpOyAvLyBTaG93cyB0aGUgcmlnaHQgdmFsdWUhXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuIFxyXG4gICAgLy8gc3VibWl0Rm9ybSgpO1xyXG5cclxuXHJcbiAgICBpZiAoQ2FzZSkge1xyXG4gICAgICAgIGNvbnN0IFtzZWxlY3RlZENhc2UsIHNldFNlbGVjdGVkQ2FzZV0gPSB1c2VTdGF0ZShcIld5YmllcnogcG93w7NkIHdpYWRvbW/Fm2NpXCIpO1xyXG4gICAgICAgIGNvbnN0IFt2aXNpYmxlU3RhdGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoXCJub25lXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IEFkZENhdGVnb3J5ID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZENhc2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcInBob3RvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInd5YnJhbm8gZG9kYW5pZSB6ZGrEmWNpYSAtIHBva2HFvCBkb2RhdGtvd2Ugb3BjamVcIilcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKFwiZmxleFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZShcIm5vbmVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3NlbGVjdGVkQ2FzZX0gb25DaGFuZ2U9e0FkZENhdGVnb3J5fSBuYW1lPVwiY2FzZVwiIGNsYXNzTmFtZT1cImNhc2VcIiBpZD1cImNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHN0eWxlPXt7Y29sb3I6IFwibGlnaHRncmF5XCJ9fSB2YWx1ZT17LTF9PiBXeWJpZXJ6IHBvd8OzZCB3aWFkb21vxZtjaTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gY2xhc3NOYW1lPVwiZmlndXJlX2FkZFwiIHZhbHVlPVwicGhvdG9cIj5DaGPEmSB3eXPFgmHEhyBpIG9wdWJsaWtvd2HEhyBuYSBzdHJvbmllIHpkasSZY2llIGx1YiBmaWxtXHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInF1ZXN0aW9uZVwiPk1hbSBweXRhbmllPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vdGVcIj5NYW0gdXdhZ8SZIC8gc3VnZXN0aWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVsZXRlXCI+UHJvc3rEmSBvIHVzdW5pxJljaWUgemRqxJljaWEgbHViIGZpbG1pa3U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3RoZXJcIj5Jbm5lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJmaWd1cmVfbGV2ZWxcIiBjbGFzc05hbWU9XCJmaWd1cmVfbGV2ZWxcIiBzdHlsZT17e2Rpc3BsYXk6IGAke3Zpc2libGVTdGF0ZX1gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWd1cmVfbGV2ZWxfYWRkX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLTFcIj5XeWJpZXJ6IHBvemlvbSBmaWd1cnkgKGplxbxlbGkgd2lhZG9tb8WbxIcgZG90eWN6eSBmaWd1cnkpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImludHJvXCI+SW50cm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmFzaWNcIj5CYXNpYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbnRlcm1lZGlhdGVcIj5JbnRlcm1lZGlhdGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWR2YW5jZWRcIj5BZHZhbmNlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZV9hZGRfY2F0ZWdvcnlcIiBzdHlsZT17e2Rpc3BsYXk6IGAke3Zpc2libGVTdGF0ZX1gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+WmF6bmFjeiBrYXRlZ29yacSZIGZpZ3VyeSAoamXFvGVsaSB3aWFkb21vxZvEhyBkb3R5Y3p5IGZpZ3VyeSk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmVfY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPmtyemVzZcWCa29cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5zenBhZ2F0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+aGFuZHN0YW5kPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5zaG91bGRlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+aGFuZHNwcmluZzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+c2nFgm93ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+a29tYm9zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5iYXNpYyBzcGluPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5vYnJvdG93ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveF9tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRpdGxlX21lc3NhZ2VcIj5XaWFkb21vxZvEhzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInRleHRhcmVhXCIgcm93cz1cIjNcIiBjb2xzPVwiNVwiIGlkPVwibWVzc2FnZXJcIiBwbGFjZWhvbGRlcj1cIldwaXN6IHdpYWRvbW/Fm8SHXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFibCBjbGFzc05hbWU9XCJhZ3JlZW1lbnQgIGNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiYWdyZWVtZW50XCIgdmFsdWU9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFd5cmHFvGFtIHpnb2TEmSBuYSBwcnpldHdhcnphbmllIG1vaWNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbnljaCBvc29ib3d5Y2ggcG9kYW55Y2ggdyBwb3d5xbxzenltIGZvcm11bGFyenUgdyBjZWxhY2ggaGFuZGxvd3ljaCBpIG1hcmtldGluZ293eWNoIHByemV6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkbWluaXN0cmF0b3JhIHRlaiBzdHJvbnkgb3JheiBwcnpleiBwb2RtaW90eSB0cnplY2llLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFibD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhZ3JlZW1lbnQgY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhZ3JlZW1lbnRcIiB2YWx1ZT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgT8Wbd2lhZGN6YW0sIMW8ZSBuaW5pZWpzemUgemRqxJljaWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJ6ZWRzdGF3aWEgd3nFgsSFY3puaWUgbcOzaiB3aXplcnVuZWssIGJleiB3aXplcnVua3Ugb3PDs2IgdHJ6ZWNpY2ggaSB3eXJhxbxhbSB6Z29kxJkgbmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmllb2dyYW5pY3pvbmUgY3phc293byB1ZG9zdMSZcG5pZW5pZSBtb2plZ28gd2l6ZXJ1bmt1LCB3IHBvc3RhY2kgemRqxJljaWEsIHcgY2VsdSB1bWllc3pjemVuaWEgZ29cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmEgbmluaWVqc3plaiBzdHJvbmllIGludGVybmV0b3dlai5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPjxici8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0XCIgb25TdWJtaXQ9e3N1Ym1pdEZvcm19Pld5xZtsaWo8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IGFkZENhc2UgPSBjcmVhdGVSb290KENhc2UpO1xyXG5hZGRDYXNlLnJlbmRlcig8Q2hhbmdlQ2FzZUZ1bmN0aW9uLz4pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZTkwZmE1YTRkNmM2YTUzYTE3ZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIkNhc2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZHJlbiIsInN1Ym1pdCIsIkNoYW5nZUNhc2VGdW5jdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJtaXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJfdGhpcyIsInN0YXRlIiwiaXRlbU5hbWUiLCJzZXRTdGF0ZSIsInN0b3JlZEl0ZW1OYW1lIiwiYWxlcnQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZWxlY3RlZENhc2UiLCJzZXRTZWxlY3RlZENhc2UiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInZpc2libGVTdGF0ZSIsInNldFZpc2libGUiLCJBZGRDYXRlZ29yeSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsImlkIiwic3R5bGUiLCJjb2xvciIsImRpc3BsYXkiLCJjb25jYXQiLCJ0eXBlIiwicm93cyIsImNvbHMiLCJwbGFjZWhvbGRlciIsIm9uU3VibWl0IiwiYWRkQ2FzZSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=
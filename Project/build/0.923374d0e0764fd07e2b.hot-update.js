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



//schowanie i pokazanie rubryki "figure level"

// export const changeCaseFunction = () => {
//     const selectedCase = document.querySelector(".figure_add")
//     selectedCase.addEventListener("click", onClick);
//
//     const figureLevel = document.querySelector(".figure_level");
//
//
//     function onClick(e) {
//         e.preventDefault();
//         if (document.querySelector('.figure_add').selected === true) {
//             console.log("COS")
//             figureLevel.style.display = "flex";
//         } else {
//             figureLevel.style.display = "none";
//         }
//     }
// }

var ChangeCaseFunction = function ChangeCaseFunction() {
  // const selectedCase = document.querySelector(".figure_add")
  // selectedCase.addEventListener("click", onClick);
  //
  // const figureLevel = document.querySelector(".figure_level");

  // function onClick(e) {
  //     e.preventDefault();
  //     if (document.querySelector('.figure_add').selected == true) {
  //         console.log("COS")
  //         figureLevel.style.display = "flex";
  //     } else {
  //         figureLevel.style.display = "none";
  //     }
  // }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Wybierz powód wiadomości"),
    _useState2 = _slicedToArray(_useState, 2),
    selectedFruit = _useState2[0],
    setSelectedFruit = _useState2[1];
  setSelectedFruit();
  var AddCategory = function AddCategory() {
    setSelectedFruit(function (prevState) {
      if (prevState.target.value === "photo") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
        className: "figure_level",
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
        className: "figure_add_category"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\"Zaznacz kategori\u0119 figury (je\u017Celi wiadomo\u015B\u0107 dotyczy figury)\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: "figuer_category",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "handstand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox checkbox_category"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: "figuer_category",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "shoulder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox checkbox_category"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: "figuer_category",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "handspring"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox checkbox_category"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: "figuer_category",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "si\u0142owe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox checkbox_category"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: "figuer_category",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "kombos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox checkbox_category"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: "figuer_category",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "basic spin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox checkbox_category"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        name: "figuer_category",
        value: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), "obrotowe"))));
    });
    console.log("COS");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "case",
    className: "case",
    id: "case"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: selectedFruit,
    onChange: AddCategory
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
  }, "Inne")));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8627d01c6f7e18801637")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEIsMERBQUE7SUFBUVksS0FBSyxFQUFFTCxhQUFjO0lBQUNjLFFBQVEsRUFBRVo7RUFBWSxHQUFFLG1DQUFpQyxDQUFDLGVBQzVFVCwwREFBQTtJQUFRZSxTQUFTLEVBQUMsWUFBWTtJQUFDSCxLQUFLLEVBQUM7RUFBTyxHQUFDLGdGQUE2RCxDQUFDLGVBQzNHWiwwREFBQTtJQUFRWSxLQUFLLEVBQUM7RUFBVyxHQUFDLGFBQW1CLENBQUMsZUFDOUNaLDBEQUFBO0lBQVFZLEtBQUssRUFBQztFQUFNLEdBQUMsMkJBQTRCLENBQUMsZUFDbERaLDBEQUFBO0lBQVFZLEtBQUssRUFBQztFQUFRLEdBQUMsdURBQThDLENBQUMsZUFDdEVaLDBEQUFBO0lBQVFZLEtBQUssRUFBQztFQUFPLEdBQUMsTUFBWSxDQUMxQixDQUVOLENBQUM7QUFFUCxDQUFDOzs7Ozs7OztVQzFGekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbi8vc2Nob3dhbmllIGkgcG9rYXphbmllIHJ1YnJ5a2kgXCJmaWd1cmUgbGV2ZWxcIlxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGNoYW5nZUNhc2VGdW5jdGlvbiA9ICgpID0+IHtcclxuLy8gICAgIGNvbnN0IHNlbGVjdGVkQ2FzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlX2FkZFwiKVxyXG4vLyAgICAgc2VsZWN0ZWRDYXNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrKTtcclxuLy9cclxuLy8gICAgIGNvbnN0IGZpZ3VyZUxldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVfbGV2ZWxcIik7XHJcbi8vXHJcbi8vXHJcbi8vICAgICBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcclxuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWd1cmVfYWRkJykuc2VsZWN0ZWQgPT09IHRydWUpIHtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJDT1NcIilcclxuLy8gICAgICAgICAgICAgZmlndXJlTGV2ZWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIGZpZ3VyZUxldmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VDYXNlRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBzZWxlY3RlZENhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZV9hZGRcIilcclxuICAgIC8vIHNlbGVjdGVkQ2FzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGljayk7XHJcbiAgICAvL1xyXG4gICAgLy8gY29uc3QgZmlndXJlTGV2ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZV9sZXZlbFwiKTtcclxuXHJcblxyXG4gICAgLy8gZnVuY3Rpb24gb25DbGljayhlKSB7XHJcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlndXJlX2FkZCcpLnNlbGVjdGVkID09IHRydWUpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJDT1NcIilcclxuICAgIC8vICAgICAgICAgZmlndXJlTGV2ZWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIGZpZ3VyZUxldmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgW3NlbGVjdGVkRnJ1aXQsIHNldFNlbGVjdGVkRnJ1aXRdID0gdXNlU3RhdGUoXCJXeWJpZXJ6IHBvd8OzZCB3aWFkb21vxZtjaVwiKTtcclxuICAgIHNldFNlbGVjdGVkRnJ1aXQoKVxyXG5cclxuXHJcbiAgICBjb25zdCBBZGRDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZEZydWl0KHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHByZXZTdGF0ZS50YXJnZXQudmFsdWUgPT09IFwicGhvdG9cIilcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmaWd1cmVfbGV2ZWxcIiBpZD1cImZpZ3VyZV9sZXZlbF9hZGRfZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIi0xXCI+V3liaWVyeiBwb3ppb20gZmlndXJ5IChqZcW8ZWxpIHdpYWRvbW/Fm8SHIGRvdHljenkgZmlndXJ5KTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImludHJvXCI+SW50cm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiYXNpY1wiPkJhc2ljPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW50ZXJtZWRpYXRlXCI+SW50ZXJtZWRpYXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWR2YW5jZWRcIj5BZHZhbmNlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmVfYWRkX2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cIlphem5hY3oga2F0ZWdvcmnEmSBmaWd1cnkgKGplxbxlbGkgd2lhZG9tb8WbxIcgZG90eWN6eSBmaWd1cnkpXCI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZV9jYXRlZ29yaWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+PHNwYW4+PC9zcGFuPmtyemVzZcWCa288L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPjxzcGFuPjwvc3Bhbj5zenBhZ2F0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+PHNwYW4+PC9zcGFuPmhhbmRzdGFuZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPjxzcGFuPjwvc3Bhbj5zaG91bGRlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPjxzcGFuPjwvc3Bhbj5oYW5kc3ByaW5nPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+PHNwYW4+PC9zcGFuPnNpxYJvd2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz48c3Bhbj48L3NwYW4+a29tYm9zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+PHNwYW4+PC9zcGFuPmJhc2ljIHNwaW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz48c3Bhbj48L3NwYW4+b2Jyb3Rvd2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDT1NcIilcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjYXNlXCIgY2xhc3NOYW1lPVwiY2FzZVwiIGlkPVwiY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17c2VsZWN0ZWRGcnVpdH0gb25DaGFuZ2U9e0FkZENhdGVnb3J5fSA+IFd5YmllcnogcG93w7NkIHdpYWRvbW/Fm2NpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT1cImZpZ3VyZV9hZGRcIiB2YWx1ZT1cInBob3RvXCI+Q2hjxJkgd3lzxYJhxIcgaSBvcHVibGlrb3dhxIcgbmEgc3Ryb25pZSB6ZGrEmWNpZSBsdWIgZmlsbTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInF1ZXN0aW9uZVwiPk1hbSBweXRhbmllPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm90ZVwiPk1hbSB1d2FnxJkgLyBzdWdlc3RpZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlbGV0ZVwiPlByb3N6xJkgbyB1c3VuacSZY2llIHpkasSZY2lhIGx1YiBmaWxtaWt1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3RoZXJcIj5Jbm5lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg2MjdkMDFjNmY3ZTE4ODAxNjM3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiQ2hhbmdlQ2FzZUZ1bmN0aW9uIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0ZWRGcnVpdCIsInNldFNlbGVjdGVkRnJ1aXQiLCJBZGRDYXRlZ29yeSIsInByZXZTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiaWQiLCJ0eXBlIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=
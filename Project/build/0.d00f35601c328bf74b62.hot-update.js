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

  var _useState = useState("Wybierz powód wiadomości"),
    _useState2 = _slicedToArray(_useState, 2),
    selectedFruit = _useState2[0],
    setSelectedFruit = _useState2[1];
  var AddCategory = function AddCategory() {
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
  }, "Inne")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
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
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ef940517f196af66390f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLGVBQUFqQiwwREFBQSxhQUFZLENBQUMsY0FBaUIsQ0FBQyxlQUN2SUEsMERBQUE7SUFBT2UsU0FBUyxFQUFDO0VBQTRCLEdBQUMsR0FBQyxlQUFBZiwwREFBQTtJQUFPbUIsSUFBSSxFQUFDLFVBQVU7SUFBQ0wsSUFBSSxFQUFDLGlCQUFpQjtJQUFDRyxLQUFLLEVBQUM7RUFBRyxDQUFDLENBQUMsZUFBQWpCLDBEQUFBLGFBQVksQ0FBQyxZQUFlLENBQy9ILENBQ0EsQ0FDSCxDQUFDO0FBRVAsQ0FBQzs7Ozs7Ozs7VUNuRnpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9jb250YWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG4vL3NjaG93YW5pZSBpIHBva2F6YW5pZSBydWJyeWtpIFwiZmlndXJlIGxldmVsXCJcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBjaGFuZ2VDYXNlRnVuY3Rpb24gPSAoKSA9PiB7XHJcbi8vICAgICBjb25zdCBzZWxlY3RlZENhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZV9hZGRcIilcclxuLy8gICAgIHNlbGVjdGVkQ2FzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGljayk7XHJcbi8vXHJcbi8vICAgICBjb25zdCBmaWd1cmVMZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlX2xldmVsXCIpO1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgZnVuY3Rpb24gb25DbGljayhlKSB7XHJcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlndXJlX2FkZCcpLnNlbGVjdGVkID09PSB0cnVlKSB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ09TXCIpXHJcbi8vICAgICAgICAgICAgIGZpZ3VyZUxldmVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBmaWd1cmVMZXZlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlQ2FzZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc3Qgc2VsZWN0ZWRDYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVfYWRkXCIpXHJcbiAgICAvLyBzZWxlY3RlZENhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2spO1xyXG4gICAgLy9cclxuICAgIC8vIGNvbnN0IGZpZ3VyZUxldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVfbGV2ZWxcIik7XHJcblxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xyXG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZ3VyZV9hZGQnKS5zZWxlY3RlZCA9PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiQ09TXCIpXHJcbiAgICAvLyAgICAgICAgIGZpZ3VyZUxldmVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBmaWd1cmVMZXZlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IFtzZWxlY3RlZEZydWl0LCBzZXRTZWxlY3RlZEZydWl0XSA9IHVzZVN0YXRlKFwiV3liaWVyeiBwb3fDs2Qgd2lhZG9tb8WbY2lcIik7XHJcblxyXG5cclxuICAgIGNvbnN0IEFkZENhdGVnb3J5ID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNPU1wiKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImNhc2VcIiBjbGFzc05hbWU9XCJjYXNlXCIgaWQ9XCJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtzZWxlY3RlZEZydWl0fSBvbkNoYW5nZT17QWRkQ2F0ZWdvcnl9ID4gV3liaWVyeiBwb3fDs2Qgd2lhZG9tb8WbY2k8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gY2xhc3NOYW1lPVwiZmlndXJlX2FkZFwiIHZhbHVlPVwicGhvdG9cIj5DaGPEmSB3eXPFgmHEhyBpIG9wdWJsaWtvd2HEhyBuYSBzdHJvbmllIHpkasSZY2llIGx1YiBmaWxtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJxdWVzdGlvbmVcIj5NYW0gcHl0YW5pZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vdGVcIj5NYW0gdXdhZ8SZIC8gc3VnZXN0aWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWxldGVcIj5Qcm9zesSZIG8gdXN1bmnEmWNpZSB6ZGrEmWNpYSBsdWIgZmlsbWlrdTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm90aGVyXCI+SW5uZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZpZ3VyZV9sZXZlbFwiIGlkPVwiZmlndXJlX2xldmVsX2FkZF9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLTFcIj5XeWJpZXJ6IHBvemlvbSBmaWd1cnkgKGplxbxlbGkgd2lhZG9tb8WbxIcgZG90eWN6eSBmaWd1cnkpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW50cm9cIj5JbnRybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJhc2ljXCI+QmFzaWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbnRlcm1lZGlhdGVcIj5JbnRlcm1lZGlhdGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZHZhbmNlZFwiPkFkdmFuY2VkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlX2FkZF9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XCJaYXpuYWN6IGthdGVnb3JpxJkgZmlndXJ5IChqZcW8ZWxpIHdpYWRvbW/Fm8SHIGRvdHljenkgZmlndXJ5KVwiPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmVfY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+PHNwYW4+PC9zcGFuPmtyemVzZcWCa288L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+PHNwYW4+PC9zcGFuPnN6cGFnYXQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPjxzcGFuPjwvc3Bhbj5oYW5kc3RhbmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPjxzcGFuPjwvc3Bhbj5zaG91bGRlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+PHNwYW4+PC9zcGFuPmhhbmRzcHJpbmc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPjxzcGFuPjwvc3Bhbj5zacWCb3dlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz48c3Bhbj48L3NwYW4+a29tYm9zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz48c3Bhbj48L3NwYW4+YmFzaWMgc3BpbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+PHNwYW4+PC9zcGFuPm9icm90b3dlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVmOTQwNTE3ZjE5NmFmNjYzOTBmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkNoYW5nZUNhc2VGdW5jdGlvbiIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0ZWRGcnVpdCIsInNldFNlbGVjdGVkRnJ1aXQiLCJBZGRDYXRlZ29yeSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJuYW1lIiwiY2xhc3NOYW1lIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=
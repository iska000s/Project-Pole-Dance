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
  var selectedCase = document.querySelector(".figure_add");
  selectedCase.addEventListener("click", onClick);
  var figureLevel = document.querySelector(".figure_level");

  // function onClick(e) {
  //     e.preventDefault();
  //     if (document.querySelector('.figure_add').selected == true) {
  //         console.log("COS")
  //         figureLevel.style.display = "flex";
  //     } else {
  //         figureLevel.style.display = "none";
  //     }
  // }
  //
  // const AddCategory = () => {
  //     console.log("COS")
  // }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "case",
    className: "case",
    id: "case"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "-1"
  }, "Wybierz pow\xF3d wiadomo\u015Bci"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
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
/******/ 	__webpack_require__.h = () => ("a005289da15400eb438d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsaUJBQWlCO0lBQUNHLEtBQUssRUFBQztFQUFHLENBQUMsQ0FBQyxlQUFBZCwwREFBQSxhQUFZLENBQUMsWUFBZSxDQUNuSSxDQUNKLENBQ0gsQ0FBQztBQUVILENBQUM7Ozs7Ozs7O1VDL0ViIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vUHJvamVjdC9qcy9jb250YWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG4vL3NjaG93YW5pZSBpIHBva2F6YW5pZSBydWJyeWtpIFwiZmlndXJlIGxldmVsXCJcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBjaGFuZ2VDYXNlRnVuY3Rpb24gPSAoKSA9PiB7XHJcbi8vICAgICBjb25zdCBzZWxlY3RlZENhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZV9hZGRcIilcclxuLy8gICAgIHNlbGVjdGVkQ2FzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGljayk7XHJcbi8vXHJcbi8vICAgICBjb25zdCBmaWd1cmVMZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlX2xldmVsXCIpO1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgZnVuY3Rpb24gb25DbGljayhlKSB7XHJcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlndXJlX2FkZCcpLnNlbGVjdGVkID09PSB0cnVlKSB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ09TXCIpXHJcbi8vICAgICAgICAgICAgIGZpZ3VyZUxldmVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBmaWd1cmVMZXZlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlQ2FzZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRDYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVfYWRkXCIpXHJcbiAgICBzZWxlY3RlZENhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2spO1xyXG5cclxuICAgIGNvbnN0IGZpZ3VyZUxldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVfbGV2ZWxcIik7XHJcblxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xyXG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZ3VyZV9hZGQnKS5zZWxlY3RlZCA9PSB0cnVlKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiQ09TXCIpXHJcbiAgICAvLyAgICAgICAgIGZpZ3VyZUxldmVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBmaWd1cmVMZXZlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGNvbnN0IEFkZENhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQ09TXCIpXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiY2FzZVwiIGNsYXNzTmFtZT1cImNhc2VcIiBpZD1cImNhc2VcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItMVwiPld5YmllcnogcG93w7NkIHdpYWRvbW/Fm2NpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uICBjbGFzc05hbWU9XCJmaWd1cmVfYWRkXCIgdmFsdWU9XCJwaG90b1wiPkNoY8SZIHd5c8WCYcSHIGkgb3B1Ymxpa293YcSHIG5hIHN0cm9uaWUgemRqxJljaWUgbHViIGZpbG1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInF1ZXN0aW9uZVwiPk1hbSBweXRhbmllPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm90ZVwiPk1hbSB1d2FnxJkgLyBzdWdlc3RpZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlbGV0ZVwiPlByb3N6xJkgbyB1c3VuacSZY2llIHpkasSZY2lhIGx1YiBmaWxtaWt1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3RoZXJcIj5Jbm5lPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZpZ3VyZV9sZXZlbFwiIGlkPVwiZmlndXJlX2xldmVsX2FkZF9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLTFcIj5XeWJpZXJ6IHBvemlvbSBmaWd1cnkgKGplxbxlbGkgd2lhZG9tb8WbxIcgZG90eWN6eSBmaWd1cnkpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW50cm9cIj5JbnRybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJhc2ljXCI+QmFzaWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbnRlcm1lZGlhdGVcIj5JbnRlcm1lZGlhdGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZHZhbmNlZFwiPkFkdmFuY2VkPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZV9hZGRfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgIDxwPlwiWmF6bmFjeiBrYXRlZ29yacSZIGZpZ3VyeSAoamXFvGVsaSB3aWFkb21vxZvEhyBkb3R5Y3p5IGZpZ3VyeSlcIjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlX2NhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz48c3Bhbj48L3NwYW4+a3J6ZXNlxYJrbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+PHNwYW4+PC9zcGFuPnN6cGFnYXQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz48c3Bhbj48L3NwYW4+aGFuZHN0YW5kPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+PHNwYW4+PC9zcGFuPnNob3VsZGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+PHNwYW4+PC9zcGFuPmhhbmRzcHJpbmc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz48c3Bhbj48L3NwYW4+c2nFgm93ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPjxzcGFuPjwvc3Bhbj5rb21ib3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz48c3Bhbj48L3NwYW4+YmFzaWMgc3BpbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPjxzcGFuPjwvc3Bhbj5vYnJvdG93ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhMDA1Mjg5ZGExNTQwMGViNDM4ZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJDaGFuZ2VDYXNlRnVuY3Rpb24iLCJzZWxlY3RlZENhc2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwib25DbGljayIsImZpZ3VyZUxldmVsIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwibmFtZSIsImNsYXNzTmFtZSIsImlkIiwidmFsdWUiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==
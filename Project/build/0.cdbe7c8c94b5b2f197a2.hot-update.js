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

  var AddCategory = function AddCategory() {
    console.log("COS");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "case",
    className: "case",
    id: "case"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "-1"
  }, "Wybierz pow\xF3d wiadomo\u015Bci"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    on: true,
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
/******/ 	__webpack_require__.h = () => ("2f63c719a5535d6a3592")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBWSxDQUFDLFlBQWUsQ0FDbkksQ0FDSixDQUNILENBQUM7QUFFSCxDQUFDOzs7Ozs7OztVQy9FYiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuLy9zY2hvd2FuaWUgaSBwb2themFuaWUgcnVicnlraSBcImZpZ3VyZSBsZXZlbFwiXHJcblxyXG4vLyBleHBvcnQgY29uc3QgY2hhbmdlQ2FzZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4vLyAgICAgY29uc3Qgc2VsZWN0ZWRDYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVfYWRkXCIpXHJcbi8vICAgICBzZWxlY3RlZENhc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2spO1xyXG4vL1xyXG4vLyAgICAgY29uc3QgZmlndXJlTGV2ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZV9sZXZlbFwiKTtcclxuLy9cclxuLy9cclxuLy8gICAgIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xyXG4vLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZ3VyZV9hZGQnKS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNPU1wiKVxyXG4vLyAgICAgICAgICAgICBmaWd1cmVMZXZlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgZmlndXJlTGV2ZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZUNhc2VGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgIC8vIGNvbnN0IHNlbGVjdGVkQ2FzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlX2FkZFwiKVxyXG4gICAgLy8gc2VsZWN0ZWRDYXNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrKTtcclxuICAgIC8vXHJcbiAgICAvLyBjb25zdCBmaWd1cmVMZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlX2xldmVsXCIpO1xyXG5cclxuXHJcbiAgICAvLyBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWd1cmVfYWRkJykuc2VsZWN0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkNPU1wiKVxyXG4gICAgLy8gICAgICAgICBmaWd1cmVMZXZlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgZmlndXJlTGV2ZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBBZGRDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNPU1wiKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImNhc2VcIiBjbGFzc05hbWU9XCJjYXNlXCIgaWQ9XCJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLTFcIj5XeWJpZXJ6IHBvd8OzZCB3aWFkb21vxZtjaTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBvbiBjbGFzc05hbWU9XCJmaWd1cmVfYWRkXCIgdmFsdWU9XCJwaG90b1wiPkNoY8SZIHd5c8WCYcSHIGkgb3B1Ymxpa293YcSHIG5hIHN0cm9uaWUgemRqxJljaWUgbHViIGZpbG1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInF1ZXN0aW9uZVwiPk1hbSBweXRhbmllPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm90ZVwiPk1hbSB1d2FnxJkgLyBzdWdlc3RpZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlbGV0ZVwiPlByb3N6xJkgbyB1c3VuacSZY2llIHpkasSZY2lhIGx1YiBmaWxtaWt1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3RoZXJcIj5Jbm5lPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZpZ3VyZV9sZXZlbFwiIGlkPVwiZmlndXJlX2xldmVsX2FkZF9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLTFcIj5XeWJpZXJ6IHBvemlvbSBmaWd1cnkgKGplxbxlbGkgd2lhZG9tb8WbxIcgZG90eWN6eSBmaWd1cnkpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW50cm9cIj5JbnRybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJhc2ljXCI+QmFzaWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbnRlcm1lZGlhdGVcIj5JbnRlcm1lZGlhdGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZHZhbmNlZFwiPkFkdmFuY2VkPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZV9hZGRfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgIDxwPlwiWmF6bmFjeiBrYXRlZ29yacSZIGZpZ3VyeSAoamXFvGVsaSB3aWFkb21vxZvEhyBkb3R5Y3p5IGZpZ3VyeSlcIjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlX2NhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz48c3Bhbj48L3NwYW4+a3J6ZXNlxYJrbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+PHNwYW4+PC9zcGFuPnN6cGFnYXQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz48c3Bhbj48L3NwYW4+aGFuZHN0YW5kPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+PHNwYW4+PC9zcGFuPnNob3VsZGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggY2hlY2tib3hfY2F0ZWdvcnlcIj4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmaWd1ZXJfY2F0ZWdvcnlcIiB2YWx1ZT1cIjFcIi8+PHNwYW4+PC9zcGFuPmhhbmRzcHJpbmc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz48c3Bhbj48L3NwYW4+c2nFgm93ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPjxzcGFuPjwvc3Bhbj5rb21ib3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveF9jYXRlZ29yeVwiPiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImZpZ3Vlcl9jYXRlZ29yeVwiIHZhbHVlPVwiMVwiLz48c3Bhbj48L3NwYW4+YmFzaWMgc3BpbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGNoZWNrYm94X2NhdGVnb3J5XCI+IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZmlndWVyX2NhdGVnb3J5XCIgdmFsdWU9XCIxXCIvPjxzcGFuPjwvc3Bhbj5vYnJvdG93ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyZjYzYzcxOWE1NTM1ZDZhMzU5MlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJDaGFuZ2VDYXNlRnVuY3Rpb24iLCJBZGRDYXRlZ29yeSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJuYW1lIiwiY2xhc3NOYW1lIiwiaWQiLCJ2YWx1ZSIsIm9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=
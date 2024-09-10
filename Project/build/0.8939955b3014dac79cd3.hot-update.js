"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 50:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var imgSit = document.querySelector(".figures_chair");
var imgTwine = document.querySelector(".figures_twine");
var imgInvert = document.querySelector(".figures_invert");
var imgHandstand = document.querySelector(".figures_handstand");
var imgHandspring = document.querySelector(".figures_handspring");
var imgStrength = document.querySelector(".figures_strength");
if (imgSit) {
  var ctImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgSit);

  // const Click = (e) => {
  //     e.height = "900px" ? e.height = "200px" : e.height = "900px";
  // }

  var FigureCategory = function FigureCategory() {
    var categoryArray = [];
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("230px"),
      _useState2 = _slicedToArray(_useState, 2),
      prevHeight = _useState2[0],
      setHeight = _useState2[1];
    // const Click = (e) => { setHeight(() => "230px" ? "900px" : "230px"
    //     )
    // }

    for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'siedzące') {
        var newSrc = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].src;
        categoryArray.push(newSrc);
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, categoryArray.map(function (element) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "figure"
      }, element);
    }));
    // return <ul>{categoryArray.map(element => <li className={"figure"}>{element}</li>)}</ul>;
  };

  ctImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FigureCategory, null));
}
if (imgTwine) {
  var twineImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgTwine);
  var FigureCategoryTwin = function FigureCategoryTwin() {
    var categoryArray = [];
    for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'szpagaty') {
        var newSrc = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].src;
        categoryArray.push(newSrc);
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, categoryArray.map(function (element) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "figure"
      }, element);
    }));
  };
  twineImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FigureCategoryTwin, null));
}
if (imgInvert) {
  var invertImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgInvert);
  var _FigureCategoryTwin = function _FigureCategoryTwin() {
    var categoryArray = [];
    for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'inverty') {
        var newSrc = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].src;
        categoryArray.push(newSrc);
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, categoryArray.map(function (element) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "figure"
      }, element);
    }));
  };
  invertImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FigureCategoryTwin, null));
}
if (imgHandstand) {
  var handstandImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgHandstand);
  var _FigureCategory = function _FigureCategory() {
    var categoryArray = [];
    for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'handstandy') {
        var newSrc = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].src;
        categoryArray.push(newSrc);
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, categoryArray.map(function (element) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "figure"
      }, element);
    }));
  };
  handstandImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FigureCategory, null));
}
if (imgHandspring) {
  var handspringImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgHandspring);
  var _FigureCategory2 = function _FigureCategory2() {
    var categoryArray = [];
    for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'handspringi') {
        var newSrc = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].src;
        categoryArray.push(newSrc);
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, categoryArray.map(function (element) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "figure"
      }, element);
    }));
  };
  handspringImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FigureCategory2, null));
}
if (imgStrength) {
  var strengthImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgStrength);
  var _FigureCategory3 = function _FigureCategory3() {
    var categoryArray = [];
    for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'siłowe') {
        var newSrc = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].src;
        categoryArray.push(newSrc);
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, categoryArray.map(function (element) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "figure"
      }, element);
    }));
  };
  strengthImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FigureCategory3, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("FigureCategory");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5235e1864a4fd55e581f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44OTM5OTU1YjMwMTRkYWM3OWNkMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0o7QUFDVTtBQUU1QyxJQUFNSSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQ3ZELElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDekQsSUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUMzRCxJQUFNRyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0FBQ2pFLElBQU1JLGFBQWEsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUM7QUFDbkUsSUFBTUssV0FBVyxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztBQUUvRCxJQUFJRixNQUFNLEVBQUU7RUFDUixJQUFNUSxLQUFLLEdBQUdULDREQUFVLENBQUNDLE1BQU0sQ0FBQzs7RUFHaEM7RUFDQTtFQUNBOztFQUVBLElBQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0lBQ3pCLElBQU1DLGFBQWEsR0FBRyxFQUFFO0lBQ3hCLElBQUFDLFNBQUEsR0FBZ0NkLCtDQUFRLENBQUMsT0FBTyxDQUFDO01BQUFlLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO01BQTFDRyxVQUFVLEdBQUFGLFVBQUE7TUFBRUcsU0FBUyxHQUFBSCxVQUFBO0lBQzVCO0lBQ0E7SUFDQTs7SUFFQSxLQUFLLElBQUlJLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2xCLDZDQUFPLENBQUNtQixNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ3JDLElBQUlsQiw2Q0FBTyxDQUFDa0IsQ0FBQyxDQUFDLENBQUNFLFFBQVEsS0FBSyxVQUFVLEVBQUU7UUFDcEMsSUFBTUMsTUFBTSxHQUFHckIsNkNBQU8sQ0FBQ2tCLENBQUMsQ0FBQyxDQUFDSSxHQUFHO1FBQzdCVixhQUFhLENBQUNXLElBQUksQ0FBQ0YsTUFBTSxDQUFDO01BQzlCO0lBQ0o7SUFDQSxvQkFBT3ZCLDBEQUFBLGFBQU1jLGFBQWEsQ0FBQ2EsR0FBRyxDQUFDLFVBQUFDLE9BQU87TUFBQSxvQkFBSTVCLDBEQUFBO1FBQUk2QixTQUFTLEVBQUU7TUFBUyxHQUFFRCxPQUFZLENBQUM7SUFBQSxFQUFNLENBQUM7SUFDeEY7RUFDSixDQUFDOztFQUNEaEIsS0FBSyxDQUFDa0IsTUFBTSxlQUFDOUIsMERBQUEsQ0FBQ2EsY0FBYyxNQUFDLENBQUMsQ0FBQztBQUNuQztBQUVBLElBQUlOLFFBQVEsRUFBRTtFQUNWLElBQU13QixRQUFRLEdBQUc1Qiw0REFBVSxDQUFDSSxRQUFRLENBQUM7RUFFckMsSUFBTXlCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUEsRUFBUztJQUM3QixJQUFNbEIsYUFBYSxHQUFHLEVBQUU7SUFFeEIsS0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdsQiw2Q0FBTyxDQUFDbUIsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNyQyxJQUFJbEIsNkNBQU8sQ0FBQ2tCLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEtBQUssVUFBVSxFQUFFO1FBQ3BDLElBQU1DLE1BQU0sR0FBR3JCLDZDQUFPLENBQUNrQixDQUFDLENBQUMsQ0FBQ0ksR0FBRztRQUM3QlYsYUFBYSxDQUFDVyxJQUFJLENBQUNGLE1BQU0sQ0FBQztNQUM5QjtJQUNKO0lBQ0Esb0JBQU92QiwwREFBQSxhQUFLYyxhQUFhLENBQUNhLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO01BQUEsb0JBQUk1QiwwREFBQTtRQUFJNkIsU0FBUyxFQUFFO01BQVMsR0FBRUQsT0FBWSxDQUFDO0lBQUEsRUFBTSxDQUFDO0VBQzNGLENBQUM7RUFFREcsUUFBUSxDQUFDRCxNQUFNLGVBQUM5QiwwREFBQSxDQUFDZ0Msa0JBQWtCLE1BQUMsQ0FBQyxDQUFDO0FBQzFDO0FBRUEsSUFBSXhCLFNBQVMsRUFBRTtFQUNYLElBQU15QixTQUFTLEdBQUc5Qiw0REFBVSxDQUFDSyxTQUFTLENBQUM7RUFFdkMsSUFBTXdCLG1CQUFrQixHQUFHLFNBQXJCQSxtQkFBa0JBLENBQUEsRUFBUztJQUM3QixJQUFNbEIsYUFBYSxHQUFHLEVBQUU7SUFFeEIsS0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdsQiw2Q0FBTyxDQUFDbUIsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNyQyxJQUFJbEIsNkNBQU8sQ0FBQ2tCLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEtBQUssU0FBUyxFQUFFO1FBQ25DLElBQU1DLE1BQU0sR0FBR3JCLDZDQUFPLENBQUNrQixDQUFDLENBQUMsQ0FBQ0ksR0FBRztRQUM3QlYsYUFBYSxDQUFDVyxJQUFJLENBQUNGLE1BQU0sQ0FBQztNQUM5QjtJQUNKO0lBQ0Esb0JBQU92QiwwREFBQSxhQUFLYyxhQUFhLENBQUNhLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO01BQUEsb0JBQUk1QiwwREFBQTtRQUFJNkIsU0FBUyxFQUFFO01BQVMsR0FBRUQsT0FBWSxDQUFDO0lBQUEsRUFBTSxDQUFDO0VBQzNGLENBQUM7RUFFREssU0FBUyxDQUFDSCxNQUFNLGVBQUM5QiwwREFBQSxDQUFDa0MsbUJBQWtCLE1BQUMsQ0FBQyxDQUFDO0FBQzNDO0FBR0EsSUFBSXpCLFlBQVksRUFBRTtFQUNkLElBQU0wQixZQUFZLEdBQUdoQyw0REFBVSxDQUFDTSxZQUFZLENBQUM7RUFFN0MsSUFBTUksZUFBYyxHQUFHLFNBQWpCQSxlQUFjQSxDQUFBLEVBQVM7SUFDekIsSUFBTUMsYUFBYSxHQUFHLEVBQUU7SUFFeEIsS0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdsQiw2Q0FBTyxDQUFDbUIsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNyQyxJQUFJbEIsNkNBQU8sQ0FBQ2tCLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEtBQUssWUFBWSxFQUFFO1FBQ3RDLElBQU1DLE1BQU0sR0FBR3JCLDZDQUFPLENBQUNrQixDQUFDLENBQUMsQ0FBQ0ksR0FBRztRQUM3QlYsYUFBYSxDQUFDVyxJQUFJLENBQUNGLE1BQU0sQ0FBQztNQUM5QjtJQUNKO0lBQ0Esb0JBQU92QiwwREFBQSxhQUFLYyxhQUFhLENBQUNhLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO01BQUEsb0JBQUk1QiwwREFBQTtRQUFJNkIsU0FBUyxFQUFFO01BQVMsR0FBRUQsT0FBWSxDQUFDO0lBQUEsRUFBTSxDQUFDO0VBQzNGLENBQUM7RUFFRE8sWUFBWSxDQUFDTCxNQUFNLGVBQUM5QiwwREFBQSxDQUFDb0MsZUFBYyxNQUFDLENBQUMsQ0FBQztBQUMxQztBQUVBLElBQUkxQixhQUFhLEVBQUU7RUFDZixJQUFNMkIsYUFBYSxHQUFHbEMsNERBQVUsQ0FBQ08sYUFBYSxDQUFDO0VBRS9DLElBQU1HLGdCQUFjLEdBQUcsU0FBakJBLGdCQUFjQSxDQUFBLEVBQVM7SUFDekIsSUFBTUMsYUFBYSxHQUFHLEVBQUU7SUFFeEIsS0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdsQiw2Q0FBTyxDQUFDbUIsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNyQyxJQUFJbEIsNkNBQU8sQ0FBQ2tCLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEtBQUssYUFBYSxFQUFFO1FBQ3ZDLElBQU1DLE1BQU0sR0FBR3JCLDZDQUFPLENBQUNrQixDQUFDLENBQUMsQ0FBQ0ksR0FBRztRQUM3QlYsYUFBYSxDQUFDVyxJQUFJLENBQUNGLE1BQU0sQ0FBQztNQUM5QjtJQUNKO0lBQ0Esb0JBQU92QiwwREFBQSxhQUFLYyxhQUFhLENBQUNhLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO01BQUEsb0JBQUk1QiwwREFBQTtRQUFJNkIsU0FBUyxFQUFFO01BQVMsR0FBRUQsT0FBWSxDQUFDO0lBQUEsRUFBTSxDQUFDO0VBQzNGLENBQUM7RUFFRFMsYUFBYSxDQUFDUCxNQUFNLGVBQUM5QiwwREFBQSxDQUFDc0MsZ0JBQWMsTUFBQyxDQUFDLENBQUM7QUFDM0M7QUFHQSxJQUFJM0IsV0FBVyxFQUFFO0VBQ2IsSUFBTTRCLFdBQVcsR0FBR3BDLDREQUFVLENBQUNRLFdBQVcsQ0FBQztFQUUzQyxJQUFNRSxnQkFBYyxHQUFHLFNBQWpCQSxnQkFBY0EsQ0FBQSxFQUFTO0lBQ3pCLElBQU1DLGFBQWEsR0FBRyxFQUFFO0lBRXhCLEtBQUssSUFBSU0sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHbEIsNkNBQU8sQ0FBQ21CLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDckMsSUFBSWxCLDZDQUFPLENBQUNrQixDQUFDLENBQUMsQ0FBQ0UsUUFBUSxLQUFLLFFBQVEsRUFBRTtRQUNsQyxJQUFNQyxNQUFNLEdBQUdyQiw2Q0FBTyxDQUFDa0IsQ0FBQyxDQUFDLENBQUNJLEdBQUc7UUFDN0JWLGFBQWEsQ0FBQ1csSUFBSSxDQUFDRixNQUFNLENBQUM7TUFDOUI7SUFDSjtJQUNBLG9CQUFPdkIsMERBQUEsYUFBS2MsYUFBYSxDQUFDYSxHQUFHLENBQUMsVUFBQUMsT0FBTztNQUFBLG9CQUFJNUIsMERBQUE7UUFBSTZCLFNBQVMsRUFBRTtNQUFTLEdBQUVELE9BQVksQ0FBQztJQUFBLEVBQU0sQ0FBQztFQUMzRixDQUFDO0VBRURXLFdBQVcsQ0FBQ1QsTUFBTSxlQUFDOUIsMERBQUEsQ0FBQ3dDLGdCQUFjLE1BQUMsQ0FBQyxDQUFDO0FBQ3pDO0FBRUEsaUVBQWUsZ0JBQWdCOzs7Ozs7OztVQ2xJL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL0ZpZ3VyZUNhdGVnb3J5LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuY29uc3QgaW1nU2l0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2NoYWlyXCIpO1xyXG5jb25zdCBpbWdUd2luZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc190d2luZVwiKTtcclxuY29uc3QgaW1nSW52ZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2ludmVydFwiKTtcclxuY29uc3QgaW1nSGFuZHN0YW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2hhbmRzdGFuZFwiKTtcclxuY29uc3QgaW1nSGFuZHNwcmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19oYW5kc3ByaW5nXCIpO1xyXG5jb25zdCBpbWdTdHJlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19zdHJlbmd0aFwiKTtcclxuXHJcbmlmIChpbWdTaXQpIHtcclxuICAgIGNvbnN0IGN0SW1nID0gY3JlYXRlUm9vdChpbWdTaXQpO1xyXG5cclxuXHJcbiAgICAvLyBjb25zdCBDbGljayA9IChlKSA9PiB7XHJcbiAgICAvLyAgICAgZS5oZWlnaHQgPSBcIjkwMHB4XCIgPyBlLmhlaWdodCA9IFwiMjAwcHhcIiA6IGUuaGVpZ2h0ID0gXCI5MDBweFwiO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG4gICAgICAgIGNvbnN0IFtwcmV2SGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUoXCIyMzBweFwiKTtcclxuICAgICAgICAvLyBjb25zdCBDbGljayA9IChlKSA9PiB7IHNldEhlaWdodCgoKSA9PiBcIjIzMHB4XCIgPyBcIjkwMHB4XCIgOiBcIjIzMHB4XCJcclxuICAgICAgICAvLyAgICAgKVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnc2llZHrEhWNlJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPHVsID57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgLy8gcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcbiAgICBjdEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5Lz4pO1xyXG59XHJcblxyXG5pZiAoaW1nVHdpbmUpIHtcclxuICAgIGNvbnN0IHR3aW5lSW1nID0gY3JlYXRlUm9vdChpbWdUd2luZSk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnlUd2luID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdzenBhZ2F0eScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcblxyXG4gICAgdHdpbmVJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeVR3aW4vPik7XHJcbn1cclxuXHJcbmlmIChpbWdJbnZlcnQpIHtcclxuICAgIGNvbnN0IGludmVydEltZyA9IGNyZWF0ZVJvb3QoaW1nSW52ZXJ0KTtcclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeVR3aW4gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ2ludmVydHknKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIGludmVydEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5VHdpbi8+KTtcclxufVxyXG5cclxuXHJcbmlmIChpbWdIYW5kc3RhbmQpIHtcclxuICAgIGNvbnN0IGhhbmRzdGFuZEltZyA9IGNyZWF0ZVJvb3QoaW1nSGFuZHN0YW5kKTtcclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnaGFuZHN0YW5keScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZHN0YW5kSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbn1cclxuXHJcbmlmIChpbWdIYW5kc3ByaW5nKSB7XHJcbiAgICBjb25zdCBoYW5kc3ByaW5nSW1nID0gY3JlYXRlUm9vdChpbWdIYW5kc3ByaW5nKTtcclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnaGFuZHNwcmluZ2knKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRzcHJpbmdJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxufVxyXG5cclxuXHJcbmlmIChpbWdTdHJlbmd0aCkge1xyXG4gICAgY29uc3Qgc3RyZW5ndGhJbWcgPSBjcmVhdGVSb290KGltZ1N0cmVuZ3RoKTtcclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnc2nFgm93ZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcblxyXG4gICAgc3RyZW5ndGhJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgXCJGaWd1cmVDYXRlZ29yeVwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjUyMzVlMTg2NGE0ZmQ1NWU1ODFmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJmaWd1cmVzIiwiY3JlYXRlUm9vdCIsImltZ1NpdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImltZ1R3aW5lIiwiaW1nSW52ZXJ0IiwiaW1nSGFuZHN0YW5kIiwiaW1nSGFuZHNwcmluZyIsImltZ1N0cmVuZ3RoIiwiY3RJbWciLCJGaWd1cmVDYXRlZ29yeSIsImNhdGVnb3J5QXJyYXkiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJwcmV2SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiaSIsImxlbmd0aCIsImNhdGVnb3J5IiwibmV3U3JjIiwic3JjIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwicmVuZGVyIiwidHdpbmVJbWciLCJGaWd1cmVDYXRlZ29yeVR3aW4iLCJpbnZlcnRJbWciLCJfRmlndXJlQ2F0ZWdvcnlUd2luIiwiaGFuZHN0YW5kSW1nIiwiX0ZpZ3VyZUNhdGVnb3J5IiwiaGFuZHNwcmluZ0ltZyIsIl9GaWd1cmVDYXRlZ29yeTIiLCJzdHJlbmd0aEltZyIsIl9GaWd1cmVDYXRlZ29yeTMiXSwic291cmNlUm9vdCI6IiJ9
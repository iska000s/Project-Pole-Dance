"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("200px"),
    _useState2 = _slicedToArray(_useState, 2),
    prevHeight = _useState2[0],
    setHeight = _useState2[1];
  var Click = function Click(e) {
    setHeight(function (prevState) {
      return e.style.height = "900px";
    }
    // e.height = "900px" ? e.height = "200px" : e.height = "900px";
    );
  };

  // const Click = (e) => {
  //     e.height = "900px" ? e.height = "200px" : e.height = "900px";
  // }

  var FigureCategory = function FigureCategory() {
    var categoryArray = [];
    for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
      if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'siedzące') {
        var newSrc = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].src;
        categoryArray.push(newSrc);
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      style: {
        height: prevHeight
      },
      onClick: Click
    }, categoryArray.map(function (element) {
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
/******/ 	__webpack_require__.h = () => ("f110811b368ff2408187")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44NTE3NmMwMjc0NTNhZWI5NjVlZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0o7QUFDVTtBQUU1QyxJQUFNSSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQ3ZELElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDekQsSUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUMzRCxJQUFNRyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0FBQ2pFLElBQU1JLGFBQWEsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUM7QUFDbkUsSUFBTUssV0FBVyxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztBQUUvRCxJQUFJRixNQUFNLEVBQUU7RUFDUixJQUFNUSxLQUFLLEdBQUdULDREQUFVLENBQUNDLE1BQU0sQ0FBQztFQUNoQyxJQUFBUyxTQUFBLEdBQWdDWiwrQ0FBUSxDQUFDLE9BQU8sQ0FBQztJQUFBYSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUExQ0csVUFBVSxHQUFBRixVQUFBO0lBQUVHLFNBQVMsR0FBQUgsVUFBQTtFQUM1QixJQUFNSSxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBSUMsQ0FBQyxFQUFLO0lBQ2pCRixTQUFTLENBQUMsVUFBQUcsU0FBUztNQUFBLE9BQUlELENBQUMsQ0FBQ0UsS0FBSyxDQUFDQyxNQUFNLEdBQUUsT0FBTztJQUFBO0lBQzFDO0lBQ0osQ0FBQztFQUNMLENBQUM7O0VBRUQ7RUFDQTtFQUNBOztFQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0lBQ3pCLElBQU1DLGFBQWEsR0FBRyxFQUFFO0lBRXhCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHdkIsNkNBQU8sQ0FBQ3dCLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDckMsSUFBSXZCLDZDQUFPLENBQUN1QixDQUFDLENBQUMsQ0FBQ0UsUUFBUSxLQUFLLFVBQVUsRUFBRTtRQUNwQyxJQUFNQyxNQUFNLEdBQUcxQiw2Q0FBTyxDQUFDdUIsQ0FBQyxDQUFDLENBQUNJLEdBQUc7UUFDN0JMLGFBQWEsQ0FBQ00sSUFBSSxDQUFDRixNQUFNLENBQUM7TUFDOUI7SUFDSjtJQUNBLG9CQUFPNUIsMERBQUE7TUFBSXFCLEtBQUssRUFBRTtRQUFDQyxNQUFNLEVBQUVOO01BQVUsQ0FBRTtNQUFDZ0IsT0FBTyxFQUFFZDtJQUFNLEdBQUVNLGFBQWEsQ0FBQ1MsR0FBRyxDQUFDLFVBQUFDLE9BQU87TUFBQSxvQkFBSWxDLDBEQUFBO1FBQU1tQyxTQUFTLEVBQUU7TUFBUyxHQUFFRCxPQUFZLENBQUM7SUFBQSxFQUFNLENBQUM7SUFDdEk7RUFDSixDQUFDOztFQUVEdEIsS0FBSyxDQUFDd0IsTUFBTSxlQUFDcEMsMERBQUEsQ0FBQ3VCLGNBQWMsTUFBQyxDQUFDLENBQUM7QUFDbkM7QUFFQSxJQUFJaEIsUUFBUSxFQUFFO0VBQ1YsSUFBTThCLFFBQVEsR0FBR2xDLDREQUFVLENBQUNJLFFBQVEsQ0FBQztFQUVyQyxJQUFNK0Isa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUFTO0lBQzdCLElBQU1kLGFBQWEsR0FBRyxFQUFFO0lBRXhCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHdkIsNkNBQU8sQ0FBQ3dCLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDckMsSUFBSXZCLDZDQUFPLENBQUN1QixDQUFDLENBQUMsQ0FBQ0UsUUFBUSxLQUFLLFVBQVUsRUFBRTtRQUNwQyxJQUFNQyxNQUFNLEdBQUcxQiw2Q0FBTyxDQUFDdUIsQ0FBQyxDQUFDLENBQUNJLEdBQUc7UUFDN0JMLGFBQWEsQ0FBQ00sSUFBSSxDQUFDRixNQUFNLENBQUM7TUFDOUI7SUFDSjtJQUNBLG9CQUFPNUIsMERBQUEsYUFBS3dCLGFBQWEsQ0FBQ1MsR0FBRyxDQUFDLFVBQUFDLE9BQU87TUFBQSxvQkFBSWxDLDBEQUFBO1FBQUltQyxTQUFTLEVBQUU7TUFBUyxHQUFFRCxPQUFZLENBQUM7SUFBQSxFQUFNLENBQUM7RUFDM0YsQ0FBQztFQUVERyxRQUFRLENBQUNELE1BQU0sZUFBQ3BDLDBEQUFBLENBQUNzQyxrQkFBa0IsTUFBQyxDQUFDLENBQUM7QUFDMUM7QUFFQSxJQUFJOUIsU0FBUyxFQUFFO0VBQ1gsSUFBTStCLFNBQVMsR0FBR3BDLDREQUFVLENBQUNLLFNBQVMsQ0FBQztFQUV2QyxJQUFNOEIsbUJBQWtCLEdBQUcsU0FBckJBLG1CQUFrQkEsQ0FBQSxFQUFTO0lBQzdCLElBQU1kLGFBQWEsR0FBRyxFQUFFO0lBRXhCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHdkIsNkNBQU8sQ0FBQ3dCLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDckMsSUFBSXZCLDZDQUFPLENBQUN1QixDQUFDLENBQUMsQ0FBQ0UsUUFBUSxLQUFLLFNBQVMsRUFBRTtRQUNuQyxJQUFNQyxNQUFNLEdBQUcxQiw2Q0FBTyxDQUFDdUIsQ0FBQyxDQUFDLENBQUNJLEdBQUc7UUFDN0JMLGFBQWEsQ0FBQ00sSUFBSSxDQUFDRixNQUFNLENBQUM7TUFDOUI7SUFDSjtJQUNBLG9CQUFPNUIsMERBQUEsYUFBS3dCLGFBQWEsQ0FBQ1MsR0FBRyxDQUFDLFVBQUFDLE9BQU87TUFBQSxvQkFBSWxDLDBEQUFBO1FBQUltQyxTQUFTLEVBQUU7TUFBUyxHQUFFRCxPQUFZLENBQUM7SUFBQSxFQUFNLENBQUM7RUFDM0YsQ0FBQztFQUVESyxTQUFTLENBQUNILE1BQU0sZUFBQ3BDLDBEQUFBLENBQUN3QyxtQkFBa0IsTUFBQyxDQUFDLENBQUM7QUFDM0M7QUFHQSxJQUFJL0IsWUFBWSxFQUFFO0VBQ2QsSUFBTWdDLFlBQVksR0FBR3RDLDREQUFVLENBQUNNLFlBQVksQ0FBQztFQUU3QyxJQUFNYyxlQUFjLEdBQUcsU0FBakJBLGVBQWNBLENBQUEsRUFBUztJQUN6QixJQUFNQyxhQUFhLEdBQUcsRUFBRTtJQUV4QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3ZCLDZDQUFPLENBQUN3QixNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ3JDLElBQUl2Qiw2Q0FBTyxDQUFDdUIsQ0FBQyxDQUFDLENBQUNFLFFBQVEsS0FBSyxZQUFZLEVBQUU7UUFDdEMsSUFBTUMsTUFBTSxHQUFHMUIsNkNBQU8sQ0FBQ3VCLENBQUMsQ0FBQyxDQUFDSSxHQUFHO1FBQzdCTCxhQUFhLENBQUNNLElBQUksQ0FBQ0YsTUFBTSxDQUFDO01BQzlCO0lBQ0o7SUFDQSxvQkFBTzVCLDBEQUFBLGFBQUt3QixhQUFhLENBQUNTLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO01BQUEsb0JBQUlsQywwREFBQTtRQUFJbUMsU0FBUyxFQUFFO01BQVMsR0FBRUQsT0FBWSxDQUFDO0lBQUEsRUFBTSxDQUFDO0VBQzNGLENBQUM7RUFFRE8sWUFBWSxDQUFDTCxNQUFNLGVBQUNwQywwREFBQSxDQUFDMEMsZUFBYyxNQUFDLENBQUMsQ0FBQztBQUMxQztBQUVBLElBQUloQyxhQUFhLEVBQUU7RUFDZixJQUFNaUMsYUFBYSxHQUFHeEMsNERBQVUsQ0FBQ08sYUFBYSxDQUFDO0VBRS9DLElBQU1hLGdCQUFjLEdBQUcsU0FBakJBLGdCQUFjQSxDQUFBLEVBQVM7SUFDekIsSUFBTUMsYUFBYSxHQUFHLEVBQUU7SUFFeEIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUd2Qiw2Q0FBTyxDQUFDd0IsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNyQyxJQUFJdkIsNkNBQU8sQ0FBQ3VCLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEtBQUssYUFBYSxFQUFFO1FBQ3ZDLElBQU1DLE1BQU0sR0FBRzFCLDZDQUFPLENBQUN1QixDQUFDLENBQUMsQ0FBQ0ksR0FBRztRQUM3QkwsYUFBYSxDQUFDTSxJQUFJLENBQUNGLE1BQU0sQ0FBQztNQUM5QjtJQUNKO0lBQ0Esb0JBQU81QiwwREFBQSxhQUFLd0IsYUFBYSxDQUFDUyxHQUFHLENBQUMsVUFBQUMsT0FBTztNQUFBLG9CQUFJbEMsMERBQUE7UUFBSW1DLFNBQVMsRUFBRTtNQUFTLEdBQUVELE9BQVksQ0FBQztJQUFBLEVBQU0sQ0FBQztFQUMzRixDQUFDO0VBRURTLGFBQWEsQ0FBQ1AsTUFBTSxlQUFDcEMsMERBQUEsQ0FBQzRDLGdCQUFjLE1BQUMsQ0FBQyxDQUFDO0FBQzNDO0FBR0EsSUFBSWpDLFdBQVcsRUFBRTtFQUNiLElBQU1rQyxXQUFXLEdBQUcxQyw0REFBVSxDQUFDUSxXQUFXLENBQUM7RUFFM0MsSUFBTVksZ0JBQWMsR0FBRyxTQUFqQkEsZ0JBQWNBLENBQUEsRUFBUztJQUN6QixJQUFNQyxhQUFhLEdBQUcsRUFBRTtJQUV4QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3ZCLDZDQUFPLENBQUN3QixNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ3JDLElBQUl2Qiw2Q0FBTyxDQUFDdUIsQ0FBQyxDQUFDLENBQUNFLFFBQVEsS0FBSyxRQUFRLEVBQUU7UUFDbEMsSUFBTUMsTUFBTSxHQUFHMUIsNkNBQU8sQ0FBQ3VCLENBQUMsQ0FBQyxDQUFDSSxHQUFHO1FBQzdCTCxhQUFhLENBQUNNLElBQUksQ0FBQ0YsTUFBTSxDQUFDO01BQzlCO0lBQ0o7SUFDQSxvQkFBTzVCLDBEQUFBLGFBQUt3QixhQUFhLENBQUNTLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO01BQUEsb0JBQUlsQywwREFBQTtRQUFJbUMsU0FBUyxFQUFFO01BQVMsR0FBRUQsT0FBWSxDQUFDO0lBQUEsRUFBTSxDQUFDO0VBQzNGLENBQUM7RUFFRFcsV0FBVyxDQUFDVCxNQUFNLGVBQUNwQywwREFBQSxDQUFDOEMsZ0JBQWMsTUFBQyxDQUFDLENBQUM7QUFDekM7QUFFQSxpRUFBZSxnQkFBZ0I7Ozs7Ozs7O1VDcEkvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvRmlndXJlQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZmlndXJlc30gZnJvbSBcIi4vZmlndXJlc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5jb25zdCBpbWdTaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfY2hhaXJcIik7XHJcbmNvbnN0IGltZ1R3aW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX3R3aW5lXCIpO1xyXG5jb25zdCBpbWdJbnZlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfaW52ZXJ0XCIpO1xyXG5jb25zdCBpbWdIYW5kc3RhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZ3VyZXNfaGFuZHN0YW5kXCIpO1xyXG5jb25zdCBpbWdIYW5kc3ByaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2hhbmRzcHJpbmdcIik7XHJcbmNvbnN0IGltZ1N0cmVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX3N0cmVuZ3RoXCIpO1xyXG5cclxuaWYgKGltZ1NpdCkge1xyXG4gICAgY29uc3QgY3RJbWcgPSBjcmVhdGVSb290KGltZ1NpdCk7XHJcbiAgICBjb25zdCBbcHJldkhlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKFwiMjAwcHhcIik7XHJcbiAgICBjb25zdCBDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0SGVpZ2h0KHByZXZTdGF0ZSA9PiBlLnN0eWxlLmhlaWdodD0gXCI5MDBweFwiXHJcbiAgICAgICAgICAgIC8vIGUuaGVpZ2h0ID0gXCI5MDBweFwiID8gZS5oZWlnaHQgPSBcIjIwMHB4XCIgOiBlLmhlaWdodCA9IFwiOTAwcHhcIjtcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgLy8gICAgIGUuaGVpZ2h0ID0gXCI5MDBweFwiID8gZS5oZWlnaHQgPSBcIjIwMHB4XCIgOiBlLmhlaWdodCA9IFwiOTAwcHhcIjtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnc2llZHrEhWNlJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPHVsIHN0eWxlPXt7aGVpZ2h0OiBwcmV2SGVpZ2h0fX0gb25DbGljaz17Q2xpY2t9PntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSAgIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgIC8vIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIGN0SW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbn1cclxuXHJcbmlmIChpbWdUd2luZSkge1xyXG4gICAgY29uc3QgdHdpbmVJbWcgPSBjcmVhdGVSb290KGltZ1R3aW5lKTtcclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeVR3aW4gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ3N6cGFnYXR5Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgIH1cclxuXHJcbiAgICB0d2luZUltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5VHdpbi8+KTtcclxufVxyXG5cclxuaWYgKGltZ0ludmVydCkge1xyXG4gICAgY29uc3QgaW52ZXJ0SW1nID0gY3JlYXRlUm9vdChpbWdJbnZlcnQpO1xyXG5cclxuICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5VHdpbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnaW52ZXJ0eScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcblxyXG4gICAgaW52ZXJ0SW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnlUd2luLz4pO1xyXG59XHJcblxyXG5cclxuaWYgKGltZ0hhbmRzdGFuZCkge1xyXG4gICAgY29uc3QgaGFuZHN0YW5kSW1nID0gY3JlYXRlUm9vdChpbWdIYW5kc3RhbmQpO1xyXG5cclxuICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdoYW5kc3RhbmR5Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kc3RhbmRJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxufVxyXG5cclxuaWYgKGltZ0hhbmRzcHJpbmcpIHtcclxuICAgIGNvbnN0IGhhbmRzcHJpbmdJbWcgPSBjcmVhdGVSb290KGltZ0hhbmRzcHJpbmcpO1xyXG5cclxuICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdoYW5kc3ByaW5naScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZHNwcmluZ0ltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5Lz4pO1xyXG59XHJcblxyXG5cclxuaWYgKGltZ1N0cmVuZ3RoKSB7XHJcbiAgICBjb25zdCBzdHJlbmd0aEltZyA9IGNyZWF0ZVJvb3QoaW1nU3RyZW5ndGgpO1xyXG5cclxuICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdzacWCb3dlJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgIH1cclxuXHJcbiAgICBzdHJlbmd0aEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5Lz4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBcIkZpZ3VyZUNhdGVnb3J5XCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjExMDgxMWIzNjhmZjI0MDgxODdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImZpZ3VyZXMiLCJjcmVhdGVSb290IiwiaW1nU2l0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW1nVHdpbmUiLCJpbWdJbnZlcnQiLCJpbWdIYW5kc3RhbmQiLCJpbWdIYW5kc3ByaW5nIiwiaW1nU3RyZW5ndGgiLCJjdEltZyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInByZXZIZWlnaHQiLCJzZXRIZWlnaHQiLCJDbGljayIsImUiLCJwcmV2U3RhdGUiLCJzdHlsZSIsImhlaWdodCIsIkZpZ3VyZUNhdGVnb3J5IiwiY2F0ZWdvcnlBcnJheSIsImkiLCJsZW5ndGgiLCJjYXRlZ29yeSIsIm5ld1NyYyIsInNyYyIsInB1c2giLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsIm1hcCIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJyZW5kZXIiLCJ0d2luZUltZyIsIkZpZ3VyZUNhdGVnb3J5VHdpbiIsImludmVydEltZyIsIl9GaWd1cmVDYXRlZ29yeVR3aW4iLCJoYW5kc3RhbmRJbWciLCJfRmlndXJlQ2F0ZWdvcnkiLCJoYW5kc3ByaW5nSW1nIiwiX0ZpZ3VyZUNhdGVnb3J5MiIsInN0cmVuZ3RoSW1nIiwiX0ZpZ3VyZUNhdGVnb3J5MyJdLCJzb3VyY2VSb290IjoiIn0=
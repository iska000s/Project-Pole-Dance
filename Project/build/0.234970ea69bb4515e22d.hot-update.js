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
  // const Click = (e) => {
  //     e.height = "900px" ? e.height = "200px" : e.height = "900px";
  // }

  var FigureCategory = function FigureCategory() {
    var categoryArray = [];
    var ctImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgSit);
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("200px"),
      _useState2 = _slicedToArray(_useState, 2),
      prevHeight = _useState2[0],
      setHeight = _useState2[1];
    var Click = function Click(e) {
      setHeight(function () {
        return e.style.height = "900px";
      }
      // e.height = "900px" ? e.height = "200px" : e.height = "900px";
      );
    };

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
/******/ 	__webpack_require__.h = () => ("e026a00675a0fdc4647d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yMzQ5NzBlYTY5YmI0NTE1ZTIyZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0o7QUFDVTtBQUU1QyxJQUFNSSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQ3ZELElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDekQsSUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztBQUMzRCxJQUFNRyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0FBQ2pFLElBQU1JLGFBQWEsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUM7QUFDbkUsSUFBTUssV0FBVyxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztBQUUvRCxJQUFJRixNQUFNLEVBQUU7RUFHUjtFQUNBO0VBQ0E7O0VBRUEsSUFBTVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQVM7SUFDekIsSUFBTUMsYUFBYSxHQUFHLEVBQUU7SUFDeEIsSUFBTUMsS0FBSyxHQUFHWCw0REFBVSxDQUFDQyxNQUFNLENBQUM7SUFDaEMsSUFBQVcsU0FBQSxHQUFnQ2QsK0NBQVEsQ0FBQyxPQUFPLENBQUM7TUFBQWUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7TUFBMUNHLFVBQVUsR0FBQUYsVUFBQTtNQUFFRyxTQUFTLEdBQUFILFVBQUE7SUFDNUIsSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQUtBLENBQUlDLENBQUMsRUFBSztNQUNqQkYsU0FBUyxDQUFDO1FBQUEsT0FBTUUsQ0FBQyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sR0FBRSxPQUFPO01BQUE7TUFDbkM7TUFDSixDQUFDO0lBQ0wsQ0FBQzs7SUFFRCxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3RCLDZDQUFPLENBQUN1QixNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ3JDLElBQUl0Qiw2Q0FBTyxDQUFDc0IsQ0FBQyxDQUFDLENBQUNFLFFBQVEsS0FBSyxVQUFVLEVBQUU7UUFDcEMsSUFBTUMsTUFBTSxHQUFHekIsNkNBQU8sQ0FBQ3NCLENBQUMsQ0FBQyxDQUFDSSxHQUFHO1FBQzdCZixhQUFhLENBQUNnQixJQUFJLENBQUNGLE1BQU0sQ0FBQztNQUM5QjtJQUNKO0lBQ0Esb0JBQU8zQiwwREFBQTtNQUFJc0IsS0FBSyxFQUFFO1FBQUNDLE1BQU0sRUFBRUw7TUFBVSxDQUFFO01BQUNhLE9BQU8sRUFBRVg7SUFBTSxHQUFFUCxhQUFhLENBQUNtQixHQUFHLENBQUMsVUFBQUMsT0FBTztNQUFBLG9CQUFJakMsMERBQUE7UUFBTWtDLFNBQVMsRUFBRTtNQUFTLEdBQUVELE9BQVksQ0FBQztJQUFBLEVBQU0sQ0FBQztJQUN0STtFQUNKLENBQUM7O0VBRURuQixLQUFLLENBQUNxQixNQUFNLGVBQUNuQywwREFBQSxDQUFDWSxjQUFjLE1BQUMsQ0FBQyxDQUFDO0FBQ25DO0FBRUEsSUFBSUwsUUFBUSxFQUFFO0VBQ1YsSUFBTTZCLFFBQVEsR0FBR2pDLDREQUFVLENBQUNJLFFBQVEsQ0FBQztFQUVyQyxJQUFNOEIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUFTO0lBQzdCLElBQU14QixhQUFhLEdBQUcsRUFBRTtJQUV4QixLQUFLLElBQUlXLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3RCLDZDQUFPLENBQUN1QixNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ3JDLElBQUl0Qiw2Q0FBTyxDQUFDc0IsQ0FBQyxDQUFDLENBQUNFLFFBQVEsS0FBSyxVQUFVLEVBQUU7UUFDcEMsSUFBTUMsTUFBTSxHQUFHekIsNkNBQU8sQ0FBQ3NCLENBQUMsQ0FBQyxDQUFDSSxHQUFHO1FBQzdCZixhQUFhLENBQUNnQixJQUFJLENBQUNGLE1BQU0sQ0FBQztNQUM5QjtJQUNKO0lBQ0Esb0JBQU8zQiwwREFBQSxhQUFLYSxhQUFhLENBQUNtQixHQUFHLENBQUMsVUFBQUMsT0FBTztNQUFBLG9CQUFJakMsMERBQUE7UUFBSWtDLFNBQVMsRUFBRTtNQUFTLEdBQUVELE9BQVksQ0FBQztJQUFBLEVBQU0sQ0FBQztFQUMzRixDQUFDO0VBRURHLFFBQVEsQ0FBQ0QsTUFBTSxlQUFDbkMsMERBQUEsQ0FBQ3FDLGtCQUFrQixNQUFDLENBQUMsQ0FBQztBQUMxQztBQUVBLElBQUk3QixTQUFTLEVBQUU7RUFDWCxJQUFNOEIsU0FBUyxHQUFHbkMsNERBQVUsQ0FBQ0ssU0FBUyxDQUFDO0VBRXZDLElBQU02QixtQkFBa0IsR0FBRyxTQUFyQkEsbUJBQWtCQSxDQUFBLEVBQVM7SUFDN0IsSUFBTXhCLGFBQWEsR0FBRyxFQUFFO0lBRXhCLEtBQUssSUFBSVcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHdEIsNkNBQU8sQ0FBQ3VCLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDckMsSUFBSXRCLDZDQUFPLENBQUNzQixDQUFDLENBQUMsQ0FBQ0UsUUFBUSxLQUFLLFNBQVMsRUFBRTtRQUNuQyxJQUFNQyxNQUFNLEdBQUd6Qiw2Q0FBTyxDQUFDc0IsQ0FBQyxDQUFDLENBQUNJLEdBQUc7UUFDN0JmLGFBQWEsQ0FBQ2dCLElBQUksQ0FBQ0YsTUFBTSxDQUFDO01BQzlCO0lBQ0o7SUFDQSxvQkFBTzNCLDBEQUFBLGFBQUthLGFBQWEsQ0FBQ21CLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO01BQUEsb0JBQUlqQywwREFBQTtRQUFJa0MsU0FBUyxFQUFFO01BQVMsR0FBRUQsT0FBWSxDQUFDO0lBQUEsRUFBTSxDQUFDO0VBQzNGLENBQUM7RUFFREssU0FBUyxDQUFDSCxNQUFNLGVBQUNuQywwREFBQSxDQUFDdUMsbUJBQWtCLE1BQUMsQ0FBQyxDQUFDO0FBQzNDO0FBR0EsSUFBSTlCLFlBQVksRUFBRTtFQUNkLElBQU0rQixZQUFZLEdBQUdyQyw0REFBVSxDQUFDTSxZQUFZLENBQUM7RUFFN0MsSUFBTUcsZUFBYyxHQUFHLFNBQWpCQSxlQUFjQSxDQUFBLEVBQVM7SUFDekIsSUFBTUMsYUFBYSxHQUFHLEVBQUU7SUFFeEIsS0FBSyxJQUFJVyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUd0Qiw2Q0FBTyxDQUFDdUIsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNyQyxJQUFJdEIsNkNBQU8sQ0FBQ3NCLENBQUMsQ0FBQyxDQUFDRSxRQUFRLEtBQUssWUFBWSxFQUFFO1FBQ3RDLElBQU1DLE1BQU0sR0FBR3pCLDZDQUFPLENBQUNzQixDQUFDLENBQUMsQ0FBQ0ksR0FBRztRQUM3QmYsYUFBYSxDQUFDZ0IsSUFBSSxDQUFDRixNQUFNLENBQUM7TUFDOUI7SUFDSjtJQUNBLG9CQUFPM0IsMERBQUEsYUFBS2EsYUFBYSxDQUFDbUIsR0FBRyxDQUFDLFVBQUFDLE9BQU87TUFBQSxvQkFBSWpDLDBEQUFBO1FBQUlrQyxTQUFTLEVBQUU7TUFBUyxHQUFFRCxPQUFZLENBQUM7SUFBQSxFQUFNLENBQUM7RUFDM0YsQ0FBQztFQUVETyxZQUFZLENBQUNMLE1BQU0sZUFBQ25DLDBEQUFBLENBQUN5QyxlQUFjLE1BQUMsQ0FBQyxDQUFDO0FBQzFDO0FBRUEsSUFBSS9CLGFBQWEsRUFBRTtFQUNmLElBQU1nQyxhQUFhLEdBQUd2Qyw0REFBVSxDQUFDTyxhQUFhLENBQUM7RUFFL0MsSUFBTUUsZ0JBQWMsR0FBRyxTQUFqQkEsZ0JBQWNBLENBQUEsRUFBUztJQUN6QixJQUFNQyxhQUFhLEdBQUcsRUFBRTtJQUV4QixLQUFLLElBQUlXLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3RCLDZDQUFPLENBQUN1QixNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ3JDLElBQUl0Qiw2Q0FBTyxDQUFDc0IsQ0FBQyxDQUFDLENBQUNFLFFBQVEsS0FBSyxhQUFhLEVBQUU7UUFDdkMsSUFBTUMsTUFBTSxHQUFHekIsNkNBQU8sQ0FBQ3NCLENBQUMsQ0FBQyxDQUFDSSxHQUFHO1FBQzdCZixhQUFhLENBQUNnQixJQUFJLENBQUNGLE1BQU0sQ0FBQztNQUM5QjtJQUNKO0lBQ0Esb0JBQU8zQiwwREFBQSxhQUFLYSxhQUFhLENBQUNtQixHQUFHLENBQUMsVUFBQUMsT0FBTztNQUFBLG9CQUFJakMsMERBQUE7UUFBSWtDLFNBQVMsRUFBRTtNQUFTLEdBQUVELE9BQVksQ0FBQztJQUFBLEVBQU0sQ0FBQztFQUMzRixDQUFDO0VBRURTLGFBQWEsQ0FBQ1AsTUFBTSxlQUFDbkMsMERBQUEsQ0FBQzJDLGdCQUFjLE1BQUMsQ0FBQyxDQUFDO0FBQzNDO0FBR0EsSUFBSWhDLFdBQVcsRUFBRTtFQUNiLElBQU1pQyxXQUFXLEdBQUd6Qyw0REFBVSxDQUFDUSxXQUFXLENBQUM7RUFFM0MsSUFBTUMsZ0JBQWMsR0FBRyxTQUFqQkEsZ0JBQWNBLENBQUEsRUFBUztJQUN6QixJQUFNQyxhQUFhLEdBQUcsRUFBRTtJQUV4QixLQUFLLElBQUlXLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3RCLDZDQUFPLENBQUN1QixNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ3JDLElBQUl0Qiw2Q0FBTyxDQUFDc0IsQ0FBQyxDQUFDLENBQUNFLFFBQVEsS0FBSyxRQUFRLEVBQUU7UUFDbEMsSUFBTUMsTUFBTSxHQUFHekIsNkNBQU8sQ0FBQ3NCLENBQUMsQ0FBQyxDQUFDSSxHQUFHO1FBQzdCZixhQUFhLENBQUNnQixJQUFJLENBQUNGLE1BQU0sQ0FBQztNQUM5QjtJQUNKO0lBQ0Esb0JBQU8zQiwwREFBQSxhQUFLYSxhQUFhLENBQUNtQixHQUFHLENBQUMsVUFBQUMsT0FBTztNQUFBLG9CQUFJakMsMERBQUE7UUFBSWtDLFNBQVMsRUFBRTtNQUFTLEdBQUVELE9BQVksQ0FBQztJQUFBLEVBQU0sQ0FBQztFQUMzRixDQUFDO0VBRURXLFdBQVcsQ0FBQ1QsTUFBTSxlQUFDbkMsMERBQUEsQ0FBQzZDLGdCQUFjLE1BQUMsQ0FBQyxDQUFDO0FBQ3pDO0FBRUEsaUVBQWUsZ0JBQWdCOzs7Ozs7OztVQ3JJL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL0ZpZ3VyZUNhdGVnb3J5LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuY29uc3QgaW1nU2l0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2NoYWlyXCIpO1xyXG5jb25zdCBpbWdUd2luZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc190d2luZVwiKTtcclxuY29uc3QgaW1nSW52ZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2ludmVydFwiKTtcclxuY29uc3QgaW1nSGFuZHN0YW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2hhbmRzdGFuZFwiKTtcclxuY29uc3QgaW1nSGFuZHNwcmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19oYW5kc3ByaW5nXCIpO1xyXG5jb25zdCBpbWdTdHJlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19zdHJlbmd0aFwiKTtcclxuXHJcbmlmIChpbWdTaXQpIHtcclxuXHJcblxyXG4gICAgLy8gY29uc3QgQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgLy8gICAgIGUuaGVpZ2h0ID0gXCI5MDBweFwiID8gZS5oZWlnaHQgPSBcIjIwMHB4XCIgOiBlLmhlaWdodCA9IFwiOTAwcHhcIjtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuICAgICAgICBjb25zdCBjdEltZyA9IGNyZWF0ZVJvb3QoaW1nU2l0KTtcclxuICAgICAgICBjb25zdCBbcHJldkhlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKFwiMjAwcHhcIik7XHJcbiAgICAgICAgY29uc3QgQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRIZWlnaHQoKCkgPT4gZS5zdHlsZS5oZWlnaHQ9IFwiOTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgLy8gZS5oZWlnaHQgPSBcIjkwMHB4XCIgPyBlLmhlaWdodCA9IFwiMjAwcHhcIiA6IGUuaGVpZ2h0ID0gXCI5MDBweFwiO1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdzaWVkesSFY2UnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWwgc3R5bGU9e3toZWlnaHQ6IHByZXZIZWlnaHR9fSBvbkNsaWNrPXtDbGlja30+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpICAgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgLy8gcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICB9XHJcblxyXG4gICAgY3RJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxufVxyXG5cclxuaWYgKGltZ1R3aW5lKSB7XHJcbiAgICBjb25zdCB0d2luZUltZyA9IGNyZWF0ZVJvb3QoaW1nVHdpbmUpO1xyXG5cclxuICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5VHdpbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnc3pwYWdhdHknKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIHR3aW5lSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnlUd2luLz4pO1xyXG59XHJcblxyXG5pZiAoaW1nSW52ZXJ0KSB7XHJcbiAgICBjb25zdCBpbnZlcnRJbWcgPSBjcmVhdGVSb290KGltZ0ludmVydCk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnlUd2luID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdpbnZlcnR5Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgIH1cclxuXHJcbiAgICBpbnZlcnRJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeVR3aW4vPik7XHJcbn1cclxuXHJcblxyXG5pZiAoaW1nSGFuZHN0YW5kKSB7XHJcbiAgICBjb25zdCBoYW5kc3RhbmRJbWcgPSBjcmVhdGVSb290KGltZ0hhbmRzdGFuZCk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ2hhbmRzdGFuZHknKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRzdGFuZEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5Lz4pO1xyXG59XHJcblxyXG5pZiAoaW1nSGFuZHNwcmluZykge1xyXG4gICAgY29uc3QgaGFuZHNwcmluZ0ltZyA9IGNyZWF0ZVJvb3QoaW1nSGFuZHNwcmluZyk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ2hhbmRzcHJpbmdpJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kc3ByaW5nSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbn1cclxuXHJcblxyXG5pZiAoaW1nU3RyZW5ndGgpIHtcclxuICAgIGNvbnN0IHN0cmVuZ3RoSW1nID0gY3JlYXRlUm9vdChpbWdTdHJlbmd0aCk7XHJcblxyXG4gICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ3NpxYJvd2UnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgfVxyXG5cclxuICAgIHN0cmVuZ3RoSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFwiRmlndXJlQ2F0ZWdvcnlcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMDI2YTAwNjc1YTBmZGM0NjQ3ZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZmlndXJlcyIsImNyZWF0ZVJvb3QiLCJpbWdTaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbWdUd2luZSIsImltZ0ludmVydCIsImltZ0hhbmRzdGFuZCIsImltZ0hhbmRzcHJpbmciLCJpbWdTdHJlbmd0aCIsIkZpZ3VyZUNhdGVnb3J5IiwiY2F0ZWdvcnlBcnJheSIsImN0SW1nIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicHJldkhlaWdodCIsInNldEhlaWdodCIsIkNsaWNrIiwiZSIsInN0eWxlIiwiaGVpZ2h0IiwiaSIsImxlbmd0aCIsImNhdGVnb3J5IiwibmV3U3JjIiwic3JjIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwibWFwIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsInJlbmRlciIsInR3aW5lSW1nIiwiRmlndXJlQ2F0ZWdvcnlUd2luIiwiaW52ZXJ0SW1nIiwiX0ZpZ3VyZUNhdGVnb3J5VHdpbiIsImhhbmRzdGFuZEltZyIsIl9GaWd1cmVDYXRlZ29yeSIsImhhbmRzcHJpbmdJbWciLCJfRmlndXJlQ2F0ZWdvcnkyIiwic3RyZW5ndGhJbWciLCJfRmlndXJlQ2F0ZWdvcnkzIl0sInNvdXJjZVJvb3QiOiIifQ==
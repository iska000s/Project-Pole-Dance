"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FigureCategory: () => (/* binding */ FigureCategory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);



var imgSit = document.querySelector(".figures_chair");
var imgTwine = document.querySelector(".figures_twine");
var imgInvert = document.querySelector(".figures_invert");
var imgHandstand = document.querySelector(".figures_handstand");
var imgHandspring = document.querySelector(".figures_handspring");
var imgStrength = document.querySelector(".figures_strength");
var FigureCategory = function FigureCategory() {
  if (imgSit) {
    var ctImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgSit);
    //
    // const Click = (e) => {
    //     e.style.height = "900px" ? e.style.height = "200px" : e.style.height = "900px";
    // }

    var _FigureCategory = function _FigureCategory() {
      var categoryArray = [];
      for (var i = 0; i < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; i++) {
        if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].category === 'siedzące') {
          var newSrc = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[i].src;
          categoryArray.push(newSrc);
        }
      }
      // return <ul>{categoryArray.map(element => <li className={"figure"}>{element.forEach(onclick, Click)}</li>)}</ul>;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, categoryArray.map(function (element) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          className: "figure"
        }, element);
      }));
    };
    ctImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FigureCategory, null));
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
    invertImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FigureCategoryTwin, null));
  }
  if (imgHandstand) {
    var handstandImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgHandstand);
    var _FigureCategory2 = function _FigureCategory2() {
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
    handstandImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FigureCategory2, null));
  }
  if (imgHandspring) {
    var handspringImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgHandspring);
    var _FigureCategory3 = function _FigureCategory3() {
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
    handspringImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FigureCategory3, null));
  }
  if (imgStrength) {
    var strengthImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(imgStrength);
    var _FigureCategory4 = function _FigureCategory4() {
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
    strengthImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FigureCategory4, null));
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9cca5a1fdcac5c187274")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0lBRTNDLElBQU1DLGdCQUFjLEdBQUcsU0FBakJBLGdCQUFjQSxDQUFBLEVBQVM7TUFDekIsSUFBTUUsYUFBYSxHQUFHLEVBQUU7TUFFeEIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdiLDZDQUFPLENBQUNjLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBSWIsNkNBQU8sQ0FBQ2EsQ0FBQyxDQUFDLENBQUNFLFFBQVEsS0FBSyxRQUFRLEVBQUU7VUFDbEMsSUFBTUMsTUFBTSxHQUFHaEIsNkNBQU8sQ0FBQ2EsQ0FBQyxDQUFDLENBQUNJLEdBQUc7VUFDN0JMLGFBQWEsQ0FBQ00sSUFBSSxDQUFDRixNQUFNLENBQUM7UUFDOUI7TUFDSjtNQUNBLG9CQUFPakIsMERBQUEsYUFBS2EsYUFBYSxDQUFDUSxHQUFHLENBQUMsVUFBQUMsT0FBTztRQUFBLG9CQUFJdEIsMERBQUE7VUFBSXVCLFNBQVMsRUFBRTtRQUFTLEdBQUVELE9BQVksQ0FBQztNQUFBLEVBQU0sQ0FBQztJQUMzRixDQUFDO0lBRURZLFdBQVcsQ0FBQ1YsTUFBTSxlQUFDeEIsMERBQUEsQ0FBQ21DLGdCQUFjLE1BQUMsQ0FBQyxDQUFDO0VBQ3pDO0FBQ0osQ0FBQzs7Ozs7Ozs7VUM1SEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL0ZpZ3VyZUNhdGVnb3J5LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuY29uc3QgaW1nU2l0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2NoYWlyXCIpO1xyXG5jb25zdCBpbWdUd2luZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc190d2luZVwiKTtcclxuY29uc3QgaW1nSW52ZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2ludmVydFwiKTtcclxuY29uc3QgaW1nSGFuZHN0YW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2hhbmRzdGFuZFwiKTtcclxuY29uc3QgaW1nSGFuZHNwcmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19oYW5kc3ByaW5nXCIpO1xyXG5jb25zdCBpbWdTdHJlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19zdHJlbmd0aFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuXHJcbiAgICBpZiAoaW1nU2l0KSB7XHJcbiAgICAgICAgY29uc3QgY3RJbWcgPSBjcmVhdGVSb290KGltZ1NpdCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBjb25zdCBDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGUuc3R5bGUuaGVpZ2h0ID0gXCI5MDBweFwiID8gZS5zdHlsZS5oZWlnaHQgPSBcIjIwMHB4XCIgOiBlLnN0eWxlLmhlaWdodCA9IFwiOTAwcHhcIjtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdzaWVkesSFY2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudC5mb3JFYWNoKG9uY2xpY2ssIENsaWNrKX08L2xpPil9PC91bD47XHJcbiAgICAgICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3RJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW1nVHdpbmUpIHtcclxuICAgICAgICBjb25zdCB0d2luZUltZyA9IGNyZWF0ZVJvb3QoaW1nVHdpbmUpO1xyXG5cclxuICAgICAgICBjb25zdCBGaWd1cmVDYXRlZ29yeVR3aW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ3N6cGFnYXR5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHdpbmVJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeVR3aW4vPik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGltZ0ludmVydCkge1xyXG4gICAgICAgIGNvbnN0IGludmVydEltZyA9IGNyZWF0ZVJvb3QoaW1nSW52ZXJ0KTtcclxuXHJcbiAgICAgICAgY29uc3QgRmlndXJlQ2F0ZWdvcnlUd2luID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdzenBhZ2F0eScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGludmVydEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5VHdpbi8+KTtcclxuICAgIH1cclxuICAgIGlmIChpbWdIYW5kc3RhbmQpIHtcclxuICAgICAgICBjb25zdCBoYW5kc3RhbmRJbWcgPSBjcmVhdGVSb290KGltZ0hhbmRzdGFuZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdoYW5kc3RhbmR5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGFuZHN0YW5kSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGltZ0hhbmRzcHJpbmcpIHtcclxuICAgICAgICBjb25zdCBoYW5kc3ByaW5nSW1nID0gY3JlYXRlUm9vdChpbWdIYW5kc3ByaW5nKTtcclxuXHJcbiAgICAgICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ2hhbmRzcHJpbmdpJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGFuZHNwcmluZ0ltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5Lz4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbWdTdHJlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHN0cmVuZ3RoSW1nID0gY3JlYXRlUm9vdChpbWdTdHJlbmd0aCk7XHJcblxyXG4gICAgICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdzacWCb3dlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RyZW5ndGhJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxuICAgIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5Y2NhNWExZmRjYWM1YzE4NzI3NFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImZpZ3VyZXMiLCJjcmVhdGVSb290IiwiaW1nU2l0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW1nVHdpbmUiLCJpbWdJbnZlcnQiLCJpbWdIYW5kc3RhbmQiLCJpbWdIYW5kc3ByaW5nIiwiaW1nU3RyZW5ndGgiLCJGaWd1cmVDYXRlZ29yeSIsImN0SW1nIiwiY2F0ZWdvcnlBcnJheSIsImkiLCJsZW5ndGgiLCJjYXRlZ29yeSIsIm5ld1NyYyIsInNyYyIsInB1c2giLCJjcmVhdGVFbGVtZW50IiwibWFwIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsInJlbmRlciIsIl9GaWd1cmVDYXRlZ29yeSIsInR3aW5lSW1nIiwiRmlndXJlQ2F0ZWdvcnlUd2luIiwiaW52ZXJ0SW1nIiwiX0ZpZ3VyZUNhdGVnb3J5VHdpbiIsImhhbmRzdGFuZEltZyIsIl9GaWd1cmVDYXRlZ29yeTIiLCJoYW5kc3ByaW5nSW1nIiwiX0ZpZ3VyZUNhdGVnb3J5MyIsInN0cmVuZ3RoSW1nIiwiX0ZpZ3VyZUNhdGVnb3J5NCJdLCJzb3VyY2VSb290IjoiIn0=
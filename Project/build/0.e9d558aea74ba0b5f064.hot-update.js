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
    var categoryArray = _figures__WEBPACK_IMPORTED_MODULE_1__.figures.filter(function (figure) {
      return figure.category === 'siedzące';
    }).map(function (figure) {
      return figure.src;
    });
    var _FigureCategory = function _FigureCategory() {
      categoryArray.map(function (element) {
        element;
      });
    };
    ctImg.render();
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
/******/ 	__webpack_require__.h = () => ("0ce8bd8c1e4b2a966447")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssUUFBUSxFQUFFO1VBQ2xDLElBQU1TLE1BQU0sR0FBR3hCLDZDQUFPLENBQUNzQixDQUFDLENBQUMsQ0FBQ0wsR0FBRztVQUM3QkwsYUFBYSxDQUFDYSxJQUFJLENBQUNELE1BQU0sQ0FBQztRQUM5QjtNQUNKO01BQ0Esb0JBQU96QiwwREFBQSxhQUFLYSxhQUFhLENBQUNJLEdBQUcsQ0FBQyxVQUFBRSxPQUFPO1FBQUEsb0JBQUluQiwwREFBQTtVQUFJNEIsU0FBUyxFQUFFO1FBQVMsR0FBRVQsT0FBWSxDQUFDO01BQUEsRUFBTSxDQUFDO0lBQzNGLENBQUM7SUFFRGdCLFdBQVcsQ0FBQ2YsTUFBTSxlQUFDcEIsMERBQUEsQ0FBQ29DLGdCQUFjLE1BQUMsQ0FBQyxDQUFDO0VBQ3pDO0FBQ0osQ0FBQzs7Ozs7Ozs7VUM5R0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL0ZpZ3VyZUNhdGVnb3J5LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuY29uc3QgaW1nU2l0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2NoYWlyXCIpO1xyXG5jb25zdCBpbWdUd2luZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc190d2luZVwiKTtcclxuY29uc3QgaW1nSW52ZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2ludmVydFwiKTtcclxuY29uc3QgaW1nSGFuZHN0YW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2hhbmRzdGFuZFwiKTtcclxuY29uc3QgaW1nSGFuZHNwcmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19oYW5kc3ByaW5nXCIpO1xyXG5jb25zdCBpbWdTdHJlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19zdHJlbmd0aFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIGlmIChpbWdTaXQpIHtcclxuICAgICAgICBjb25zdCBjdEltZyA9IGNyZWF0ZVJvb3QoaW1nU2l0KTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gZmlndXJlcy5maWx0ZXIoZmlndXJlID0+IGZpZ3VyZS5jYXRlZ29yeSA9PT0gJ3NpZWR6xIVjZScpLm1hcChmaWd1cmUgPT4gZmlndXJlLnNyYyk7XHJcbiAgICAgICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PlxyXG4gICAgICAgICAgICAgICAge2VsZW1lbnR9XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIGN0SW1nLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgaWYgKGltZ1R3aW5lKSB7XHJcbiAgICAgICAgY29uc3QgdHdpbmVJbWcgPSBjcmVhdGVSb290KGltZ1R3aW5lKTtcclxuXHJcbiAgICAgICAgY29uc3QgRmlndXJlQ2F0ZWdvcnlUd2luID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdzenBhZ2F0eScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHR3aW5lSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnlUd2luLz4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbWdJbnZlcnQpIHtcclxuICAgICAgICBjb25zdCBpbnZlcnRJbWcgPSBjcmVhdGVSb290KGltZ0ludmVydCk7XHJcblxyXG4gICAgICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5VHdpbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnc3pwYWdhdHknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnZlcnRJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeVR3aW4vPik7XHJcbiAgICB9XHJcbiAgICBpZiAoaW1nSGFuZHN0YW5kKSB7XHJcbiAgICAgICAgY29uc3QgaGFuZHN0YW5kSW1nID0gY3JlYXRlUm9vdChpbWdIYW5kc3RhbmQpO1xyXG5cclxuICAgICAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnaGFuZHN0YW5keScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhbmRzdGFuZEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5Lz4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbWdIYW5kc3ByaW5nKSB7XHJcbiAgICAgICAgY29uc3QgaGFuZHNwcmluZ0ltZyA9IGNyZWF0ZVJvb3QoaW1nSGFuZHNwcmluZyk7XHJcblxyXG4gICAgICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdoYW5kc3ByaW5naScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhbmRzcHJpbmdJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW1nU3RyZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBzdHJlbmd0aEltZyA9IGNyZWF0ZVJvb3QoaW1nU3RyZW5ndGgpO1xyXG5cclxuICAgICAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnc2nFgm93ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTcmMgPSBmaWd1cmVzW2ldLnNyYztcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUFycmF5LnB1c2gobmV3U3JjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gPHVsPntjYXRlZ29yeUFycmF5Lm1hcChlbGVtZW50ID0+IDxsaSBjbGFzc05hbWU9e1wiZmlndXJlXCJ9PntlbGVtZW50fTwvbGk+KX08L3VsPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0cmVuZ3RoSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbiAgICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGNlOGJkOGMxZTRiMmE5NjY0NDdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJmaWd1cmVzIiwiY3JlYXRlUm9vdCIsImltZ1NpdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImltZ1R3aW5lIiwiaW1nSW52ZXJ0IiwiaW1nSGFuZHN0YW5kIiwiaW1nSGFuZHNwcmluZyIsImltZ1N0cmVuZ3RoIiwiRmlndXJlQ2F0ZWdvcnkiLCJjdEltZyIsImNhdGVnb3J5QXJyYXkiLCJmaWx0ZXIiLCJmaWd1cmUiLCJjYXRlZ29yeSIsIm1hcCIsInNyYyIsImVsZW1lbnQiLCJyZW5kZXIiLCJ0d2luZUltZyIsIkZpZ3VyZUNhdGVnb3J5VHdpbiIsImkiLCJsZW5ndGgiLCJuZXdTcmMiLCJwdXNoIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImludmVydEltZyIsIl9GaWd1cmVDYXRlZ29yeVR3aW4iLCJoYW5kc3RhbmRJbWciLCJfRmlndXJlQ2F0ZWdvcnkyIiwiaGFuZHNwcmluZ0ltZyIsIl9GaWd1cmVDYXRlZ29yeTMiLCJzdHJlbmd0aEltZyIsIl9GaWd1cmVDYXRlZ29yeTQiXSwic291cmNlUm9vdCI6IiJ9
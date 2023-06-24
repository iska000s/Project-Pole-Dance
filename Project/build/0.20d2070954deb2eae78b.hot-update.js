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
    {
      var categoryArray = _figures__WEBPACK_IMPORTED_MODULE_1__.figures.filter(function (figure) {
        return figure.category === 'siedzące';
      }).map(function (figure) {
        return figure.src;
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, categoryArray.map(function (element) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          className: "figure"
        }, element);
      }));
    }
    ctImg.render();
  }

  // if (imgSit) {
  //     const ctImg = createRoot(imgSit);
  //
  //     const FigureCategory = () => {
  //         const categoryArray = []
  //
  //         for (let i = 0; i < figures.length; i++) {
  //             if (figures[i].category === 'siedzące') {
  //                 const newSrc = figures[i].src;
  //                 categoryArray.push(newSrc);
  //             }
  //         }
  //         return <ul>{categoryArray.map(element => <li className={"figure"}>{element}</li>)}</ul>;
  //     }
  //
  //     ctImg.render(<FigureCategory/>);
  // }

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
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9ee9f010b9b1ed93874e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRUEsQ0FBQyxHQUFHeEIsNkNBQU8sQ0FBQ3lCLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBSXhCLDZDQUFPLENBQUN3QixDQUFDLENBQUMsQ0FBQ1QsUUFBUSxLQUFLLFFBQVEsRUFBRTtVQUNsQyxJQUFNVyxNQUFNLEdBQUcxQiw2Q0FBTyxDQUFDd0IsQ0FBQyxDQUFDLENBQUNQLEdBQUc7VUFDN0JMLGFBQWEsQ0FBQ2UsSUFBSSxDQUFDRCxNQUFNLENBQUM7UUFDOUI7TUFDSjtNQUNBLG9CQUFPM0IsMERBQUEsYUFBS2EsYUFBYSxDQUFDSSxHQUFHLENBQUMsVUFBQUcsT0FBTztRQUFBLG9CQUFJcEIsMERBQUE7VUFBSXFCLFNBQVMsRUFBRTtRQUFTLEdBQUVELE9BQVksQ0FBQztNQUFBLEVBQU0sQ0FBQztJQUMzRixDQUFDO0lBRURlLFdBQVcsQ0FBQ2IsTUFBTSxlQUFDdEIsMERBQUEsQ0FBQ29DLGdCQUFjLE1BQUMsQ0FBQyxDQUFDO0VBQ3pDO0FBQ0osQ0FBQzs7Ozs7Ozs7VUNoSUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9Qcm9qZWN0L2pzL0ZpZ3VyZUNhdGVnb3J5LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuY29uc3QgaW1nU2l0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2NoYWlyXCIpO1xyXG5jb25zdCBpbWdUd2luZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc190d2luZVwiKTtcclxuY29uc3QgaW1nSW52ZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2ludmVydFwiKTtcclxuY29uc3QgaW1nSGFuZHN0YW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWd1cmVzX2hhbmRzdGFuZFwiKTtcclxuY29uc3QgaW1nSGFuZHNwcmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19oYW5kc3ByaW5nXCIpO1xyXG5jb25zdCBpbWdTdHJlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlc19zdHJlbmd0aFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIGlmIChpbWdTaXQpIHtcclxuICAgICAgICBjb25zdCBjdEltZyA9IGNyZWF0ZVJvb3QoaW1nU2l0KTtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBmaWd1cmVzLmZpbHRlcihmaWd1cmUgPT4gZmlndXJlLmNhdGVnb3J5ID09PSAnc2llZHrEhWNlJykubWFwKGZpZ3VyZSA9PiBmaWd1cmUuc3JjKTtcclxuICAgICAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0SW1nLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBpZiAoaW1nU2l0KSB7XHJcbiAgICAvLyAgICAgY29uc3QgY3RJbWcgPSBjcmVhdGVSb290KGltZ1NpdCk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gW11cclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaV0uY2F0ZWdvcnkgPT09ICdzaWVkesSFY2UnKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICBjdEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5Lz4pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGlmIChpbWdUd2luZSkge1xyXG4gICAgICAgIGNvbnN0IHR3aW5lSW1nID0gY3JlYXRlUm9vdChpbWdUd2luZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IEZpZ3VyZUNhdGVnb3J5VHdpbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnc3pwYWdhdHknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0d2luZUltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5VHdpbi8+KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW1nSW52ZXJ0KSB7XHJcbiAgICAgICAgY29uc3QgaW52ZXJ0SW1nID0gY3JlYXRlUm9vdChpbWdJbnZlcnQpO1xyXG5cclxuICAgICAgICBjb25zdCBGaWd1cmVDYXRlZ29yeVR3aW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ3N6cGFnYXR5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NyYyA9IGZpZ3VyZXNbaV0uc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkucHVzaChuZXdTcmMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiA8dWw+e2NhdGVnb3J5QXJyYXkubWFwKGVsZW1lbnQgPT4gPGxpIGNsYXNzTmFtZT17XCJmaWd1cmVcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW52ZXJ0SW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnlUd2luLz4pO1xyXG4gICAgfVxyXG4gICAgaWYgKGltZ0hhbmRzdGFuZCkge1xyXG4gICAgICAgIGNvbnN0IGhhbmRzdGFuZEltZyA9IGNyZWF0ZVJvb3QoaW1nSGFuZHN0YW5kKTtcclxuXHJcbiAgICAgICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ2hhbmRzdGFuZHknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoYW5kc3RhbmRJbWcucmVuZGVyKDxGaWd1cmVDYXRlZ29yeS8+KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW1nSGFuZHNwcmluZykge1xyXG4gICAgICAgIGNvbnN0IGhhbmRzcHJpbmdJbWcgPSBjcmVhdGVSb290KGltZ0hhbmRzcHJpbmcpO1xyXG5cclxuICAgICAgICBjb25zdCBGaWd1cmVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlBcnJheSA9IFtdXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWd1cmVzW2ldLmNhdGVnb3J5ID09PSAnaGFuZHNwcmluZ2knKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoYW5kc3ByaW5nSW1nLnJlbmRlcig8RmlndXJlQ2F0ZWdvcnkvPik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGltZ1N0cmVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyZW5ndGhJbWcgPSBjcmVhdGVSb290KGltZ1N0cmVuZ3RoKTtcclxuXHJcbiAgICAgICAgY29uc3QgRmlndXJlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWd1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tpXS5jYXRlZ29yeSA9PT0gJ3NpxYJvd2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U3JjID0gZmlndXJlc1tpXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlBcnJheS5wdXNoKG5ld1NyYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDx1bD57Y2F0ZWdvcnlBcnJheS5tYXAoZWxlbWVudCA9PiA8bGkgY2xhc3NOYW1lPXtcImZpZ3VyZVwifT57ZWxlbWVudH08L2xpPil9PC91bD47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdHJlbmd0aEltZy5yZW5kZXIoPEZpZ3VyZUNhdGVnb3J5Lz4pO1xyXG4gICAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjllZTlmMDEwYjliMWVkOTM4NzRlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmlndXJlcyIsImNyZWF0ZVJvb3QiLCJpbWdTaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbWdUd2luZSIsImltZ0ludmVydCIsImltZ0hhbmRzdGFuZCIsImltZ0hhbmRzcHJpbmciLCJpbWdTdHJlbmd0aCIsIkZpZ3VyZUNhdGVnb3J5IiwiY3RJbWciLCJjYXRlZ29yeUFycmF5IiwiZmlsdGVyIiwiZmlndXJlIiwiY2F0ZWdvcnkiLCJtYXAiLCJzcmMiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudCIsImNsYXNzTmFtZSIsInJlbmRlciIsInR3aW5lSW1nIiwiRmlndXJlQ2F0ZWdvcnlUd2luIiwiaSIsImxlbmd0aCIsIm5ld1NyYyIsInB1c2giLCJpbnZlcnRJbWciLCJfRmlndXJlQ2F0ZWdvcnlUd2luIiwiaGFuZHN0YW5kSW1nIiwiX0ZpZ3VyZUNhdGVnb3J5IiwiaGFuZHNwcmluZ0ltZyIsIl9GaWd1cmVDYXRlZ29yeTIiLCJzdHJlbmd0aEltZyIsIl9GaWd1cmVDYXRlZ29yeTMiXSwic291cmNlUm9vdCI6IiJ9
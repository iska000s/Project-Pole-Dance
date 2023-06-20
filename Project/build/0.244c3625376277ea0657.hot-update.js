"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 47:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RandomImg: () => (/* binding */ RandomImg)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);




// if (basicWorkoutBox) {
//     const root = createRoot(container);
//
//     const App = () => {
//         return (
//             <>
//                 <RandomImg />
//             </>
//         )
//     }
//
//
//     root.render(<App/>);
//
// }
//
// const basicWorkoutBox = document.querySelector('div .workout_basic')
// const newWorkout = document.createElement("h1");
// basicWorkoutBox.appendChild(newWorkout);

var newImg = document.querySelector(".workout_basic");
var RandomImg = function RandomImg() {
  if (newImg) {
    var createImg = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(newImg);
    var _RandomImg = function _RandomImg() {
      var randomImgArray = [];
      for (var n = 0; n < _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length; n++) {
        if (randomImgArray.length === 6) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, randomImgArray.map(function (element) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
              className: "workout_image"
            }, element);
          }));
        } else {
          var _randomObj = Math.floor(Math.random() * _figures__WEBPACK_IMPORTED_MODULE_1__.figures.length);
        }
      }
    };
    var isInTheArray = function isInTheArray() {
      for (var j = 0; j <= randomImgArray.length; j++) {
        if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj] != randomImgArray[j]) {
          if (_figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].level === "basic") {
            var sourceImg = _figures__WEBPACK_IMPORTED_MODULE_1__.figures[randomObj].src;
            randomImgArray.push(sourceImg);
          }
        }
      }
      createImg.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RandomImg, null));
    };
  }
};

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _RandomImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);




var container = document.getElementById("app");
if (container) {
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
  var App = function App() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, "cos cos", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_RandomImg__WEBPACK_IMPORTED_MODULE_3__.RandomImg, null));
  };
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(App, null));
}

/***/ }),

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   figures: () => (/* binding */ figures)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var figures = [{
  id: 1,
  level: 'basic',
  category: 'inverty',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/1.jpeg"
  })
}, {
  id: 2,
  level: 'basic',
  category: 'siedzące',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/2.jpeg"
  })
}, {
  id: 3,
  level: 'intermediate',
  category: 'szpagaty',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/3.jpeg"
  })
}, {
  id: 4,
  level: 'basic',
  category: 'siedzące',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/4.JPG"
  })
}, {
  id: 5,
  level: 'basic',
  category: 'statyczne',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/5.JPG"
  })
}, {
  id: 6,
  level: 'basic',
  category: 'statyczne',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/6.JPG"
  })
}, {
  id: 7,
  level: 'basic',
  category: 'siedzące',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/7.JPG"
  })
}, {
  id: 8,
  level: 'basic',
  category: 'siedzące',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/8.JPG"
  })
}, {
  id: 9,
  level: 'advanced',
  category: 'handspringi',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/9.jpg"
  })
}, {
  id: 10,
  level: 'intermediate',
  category: 'inverty',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/10.JPG"
  })
}, {
  id: 11,
  level: 'intermediate',
  category: 'siłowe',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/11.JPG"
  })
}, {
  id: 12,
  level: 'basic',
  category: 'siedzące',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/12.JPG"
  })
}, {
  id: 13,
  level: 'basic',
  category: 'siedzące',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/13.JPG"
  })
}, {
  id: 14,
  level: 'basic',
  category: 'siedzące',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/14.JPG"
  })
}, {
  id: 15,
  level: 'basic',
  category: 'siedzące',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/15.JPG"
  })
}, {
  id: 16,
  level: 'basic',
  category: 'siedzące',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/16.JPG"
  })
}, {
  id: 18,
  level: 'basic',
  category: 'siedzące',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/18.JPG"
  })
}, {
  id: 19,
  level: 'advanced',
  category: 'inverty',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/19.JPG"
  })
}, {
  id: 20,
  level: 'intermediate',
  category: 'inverty',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/20.JPG"
  })
}, {
  id: 21,
  level: 'intermediate',
  category: 'szpagaty',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/21.JPG"
  })
}, {
  id: 22,
  level: 'intermediate',
  category: 'siedzące',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/22.JPG"
  })
}, {
  id: 23,
  level: 'intermediate',
  category: 'szpagaty',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/23.JPG"
  })
}, {
  id: 24,
  level: 'intermediate',
  category: 'handspringi',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "figure",
    src: "../img/24.JPG"
  })
}, {
  id: 25,
  level: 'intermediate',
  category: 'siłowe',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/25.jpg"
  })
}, {
  id: 26,
  level: 'intermediate',
  category: 'siłowe',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/26.jpg"
  })
}, {
  id: 27,
  level: 'intermediate',
  category: 'siłowe',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/27.jpg"
  })
}, {
  id: 28,
  level: 'advanced',
  category: 'szpagaty',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/28.jpg"
  })
}, {
  id: 29,
  level: 'advanced',
  category: 'inverty',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/29.jpg"
  })
}, {
  id: 30,
  level: 'advanced',
  category: 'szpagaty',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/30.jpg"
  })
}, {
  id: 31,
  level: 'intermediate',
  category: 'siłowe',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/31.jpg"
  })
}, {
  id: 32,
  level: 'intermediate',
  category: 'siłowe',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/32.jpg"
  })
}, {
  id: 33,
  level: 'intermediate',
  category: 'szpagaty',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/33.jpg"
  })
}, {
  id: 34,
  level: 'basic',
  category: 'handstandy',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/34.jpg"
  })
}, {
  id: 35,
  level: 'advanced',
  category: 'siłowe',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/35.jpg"
  })
}, {
  id: 36,
  level: 'intermediate',
  category: 'handspringi',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/36.jpg"
  })
}, {
  id: 37,
  level: 'advanced',
  category: 'siedzące',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/37.jpg"
  })
}, {
  id: 38,
  level: 'intermediate',
  category: 'szpagaty',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/38.jpg"
  })
}, {
  id: 39,
  level: 'intermediate',
  category: 'inverty',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/39.jpg"
  })
}, {
  id: 40,
  level: 'intermediate',
  category: 'inverty',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/40.jpg"
  })
}, {
  id: 41,
  level: 'intermediate',
  category: 'inverty',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/41.jpg"
  })
}, {
  id: 42,
  level: 'intermediate',
  category: 'inverty',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/42.jpg"
  })
}, {
  id: 43,
  level: 'advanced',
  category: 'handspringi',
  src: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: 'figure',
    src: "../img/43.jpg"
  })
}];

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("51912d96b5cd02b24044")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7RUFDbkJWLEdBQUcsZUFBRXZCLDBEQUFBO0lBQUtrQyxHQUFHLEVBQUUsUUFBUztJQUFDWCxHQUFHLEVBQUM7RUFBZSxDQUFDO0FBQ2pELENBQUMsRUFFRDtFQUNJUyxFQUFFLEVBQUUsRUFBRTtFQUNOWCxLQUFLLEVBQUUsY0FBYztFQUNyQlksUUFBUSxFQUFFLFVBQVU7RUFDcEJWLEdBQUcsZUFBRXZCLDBEQUFBO0lBQUtrQyxHQUFHLEVBQUUsUUFBUztJQUFDWCxHQUFHLEVBQUM7RUFBZSxDQUFDO0FBQ2pELENBQUMsRUFFRDtFQUNJUyxFQUFFLEVBQUUsRUFBRTtFQUNOWCxLQUFLLEVBQUUsY0FBYztFQUNyQlksUUFBUSxFQUFFLFVBQVU7RUFDcEJWLEdBQUcsZUFBRXZCLDBEQUFBO0lBQUtrQyxHQUFHLEVBQUUsUUFBUztJQUFDWCxHQUFHLEVBQUM7RUFBZSxDQUFDO0FBQ2pELENBQUMsRUFFRDtFQUNJUyxFQUFFLEVBQUUsRUFBRTtFQUNOWCxLQUFLLEVBQUUsY0FBYztFQUNyQlksUUFBUSxFQUFFLFVBQVU7RUFDcEJWLEdBQUcsZUFBRXZCLDBEQUFBO0lBQUtrQyxHQUFHLEVBQUUsUUFBUztJQUFDWCxHQUFHLEVBQUM7RUFBZSxDQUFDO0FBQ2pELENBQUMsRUFFRDtFQUNJUyxFQUFFLEVBQUUsRUFBRTtFQUNOWCxLQUFLLEVBQUUsY0FBYztFQUNyQlksUUFBUSxFQUFFLGFBQWE7RUFDdkJWLEdBQUcsZUFBRXZCLDBEQUFBO0lBQUtrQyxHQUFHLEVBQUUsUUFBUztJQUFDWCxHQUFHLEVBQUM7RUFBZSxDQUFDO0FBQ2pELENBQUMsRUFDRDtFQUNJUyxFQUFFLEVBQUUsRUFBRTtFQUNOWCxLQUFLLEVBQUUsY0FBYztFQUNyQlksUUFBUSxFQUFFLFFBQVE7RUFDbEJWLEdBQUcsZUFBRXZCLDBEQUFBO0lBQUtrQyxHQUFHLEVBQUUsUUFBUztJQUFDWCxHQUFHLEVBQUM7RUFBZSxDQUFDO0FBQ2pELENBQUMsRUFDRDtFQUNJUyxFQUFFLEVBQUUsRUFBRTtFQUNOWCxLQUFLLEVBQUUsY0FBYztFQUNyQlksUUFBUSxFQUFFLFFBQVE7RUFDbEJWLEdBQUcsZUFBRXZCLDBEQUFBO0lBQUtrQyxHQUFHLEVBQUUsUUFBUztJQUFDWCxHQUFHLEVBQUM7RUFBZSxDQUFDO0FBQ2pELENBQUMsRUFDRDtFQUNJUyxFQUFFLEVBQUUsRUFBRTtFQUNOWCxLQUFLLEVBQUUsY0FBYztFQUNyQlksUUFBUSxFQUFFLFFBQVE7RUFDbEJWLEdBQUcsZUFBRXZCLDBEQUFBO0lBQUtrQyxHQUFHLEVBQUUsUUFBUztJQUFDWCxHQUFHLEVBQUM7RUFBZSxDQUFDO0FBQ2pELENBQUMsRUFDRDtFQUNJUyxFQUFFLEVBQUUsRUFBRTtFQUNOWCxLQUFLLEVBQUUsVUFBVTtFQUNqQlksUUFBUSxFQUFFLFVBQVU7RUFDcEJWLEdBQUcsZUFBRXZCLDBEQUFBO0lBQUtrQyxHQUFHLEVBQUUsUUFBUztJQUFDWCxHQUFHLEVBQUM7RUFBZSxDQUFDO0FBQ2pELENBQUMsRUFDRDtFQUNJUyxFQUFFLEVBQUUsRUFBRTtFQUNOWCxLQUFLLEVBQUUsVUFBVTtFQUNqQlksUUFBUSxFQUFFLFNBQVM7RUFDbkJWLEdBQUcsZUFBRXZCLDBEQUFBO0lBQUtrQyxHQUFHLEVBQUUsUUFBUztJQUFDWCxHQUFHLEVBQUM7RUFBZSxDQUFDO0FBQ2pELENBQUMsRUFDRDtFQUNJUyxFQUFFLEVBQUUsRUFBRTtFQUNOWCxLQUFLLEVBQUUsVUFBVTtFQUNqQlksUUFBUSxFQUFFLFVBQVU7RUFDcEJWLEdBQUcsZUFBRXZCLDBEQUFBO0lBQUtrQyxHQUFHLEVBQUUsUUFBUztJQUFDWCxHQUFHLEVBQUM7RUFBZSxDQUFDO0FBQ2pELENBQUMsRUFBRTtFQUNDUyxFQUFFLEVBQUUsRUFBRTtFQUNOWCxLQUFLLEVBQUUsY0FBYztFQUNyQlksUUFBUSxFQUFFLFFBQVE7RUFDbEJWLEdBQUcsZUFBRXZCLDBEQUFBO0lBQUtrQyxHQUFHLEVBQUUsUUFBUztJQUFDWCxHQUFHLEVBQUM7RUFBZSxDQUFDO0FBQ2pELENBQUMsRUFBRTtFQUNDUyxFQUFFLEVBQUUsRUFBRTtFQUNOWCxLQUFLLEVBQUUsY0FBYztFQUNyQlksUUFBUSxFQUFFLFFBQVE7RUFDbEJWLEdBQUcsZUFBRXZCLDBEQUFBO0lBQUtrQyxHQUFHLEVBQUUsUUFBUztJQUFDWCxHQUFHLEVBQUM7RUFBZSxDQUFDO0FBQ2pELENBQUMsRUFBRTtFQUNDUyxFQUFFLEVBQUUsRUFBRTtFQUNOWCxLQUFLLEVBQUUsY0FBYztFQUNyQlksUUFBUSxFQUFFLFVBQVU7RUFDcEJWLEdBQUcsZUFBRXZCLDBEQUFBO0lBQUtrQyxHQUFHLEVBQUUsUUFBUztJQUFDWCxHQUFHLEVBQUM7RUFBZSxDQUFDO0FBQ2pELENBQUMsRUFBRTtFQUNDUyxFQUFFLEVBQUUsRUFBRTtFQUNOWCxLQUFLLEVBQUUsT0FBTztFQUNkWSxRQUFRLEVBQUUsWUFBWTtFQUN0QlYsR0FBRyxlQUFFdkIsMERBQUE7SUFBS2tDLEdBQUcsRUFBRSxRQUFTO0lBQUNYLEdBQUcsRUFBQztFQUFlLENBQUM7QUFDakQsQ0FBQyxFQUFFO0VBQ0NTLEVBQUUsRUFBRSxFQUFFO0VBQ05YLEtBQUssRUFBRSxVQUFVO0VBQ2pCWSxRQUFRLEVBQUUsUUFBUTtFQUNsQlYsR0FBRyxlQUFFdkIsMERBQUE7SUFBS2tDLEdBQUcsRUFBRSxRQUFTO0lBQUNYLEdBQUcsRUFBQztFQUFlLENBQUM7QUFDakQsQ0FBQyxFQUFFO0VBQ0NTLEVBQUUsRUFBRSxFQUFFO0VBQ05YLEtBQUssRUFBRSxjQUFjO0VBQ3JCWSxRQUFRLEVBQUUsYUFBYTtFQUN2QlYsR0FBRyxlQUFFdkIsMERBQUE7SUFBS2tDLEdBQUcsRUFBRSxRQUFTO0lBQUNYLEdBQUcsRUFBQztFQUFlLENBQUM7QUFDakQsQ0FBQyxFQUFFO0VBQ0NTLEVBQUUsRUFBRSxFQUFFO0VBQ05YLEtBQUssRUFBRSxVQUFVO0VBQ2pCWSxRQUFRLEVBQUUsVUFBVTtFQUNwQlYsR0FBRyxlQUFFdkIsMERBQUE7SUFBS2tDLEdBQUcsRUFBRSxRQUFTO0lBQUNYLEdBQUcsRUFBQztFQUFlLENBQUM7QUFDakQsQ0FBQyxFQUFFO0VBQ0NTLEVBQUUsRUFBRSxFQUFFO0VBQ05YLEtBQUssRUFBRSxjQUFjO0VBQ3JCWSxRQUFRLEVBQUUsVUFBVTtFQUNwQlYsR0FBRyxlQUFFdkIsMERBQUE7SUFBS2tDLEdBQUcsRUFBRSxRQUFTO0lBQUNYLEdBQUcsRUFBQztFQUFlLENBQUM7QUFDakQsQ0FBQyxFQUFFO0VBQ0NTLEVBQUUsRUFBRSxFQUFFO0VBQ05YLEtBQUssRUFBRSxjQUFjO0VBQ3JCWSxRQUFRLEVBQUUsU0FBUztFQUNuQlYsR0FBRyxlQUFFdkIsMERBQUE7SUFBS2tDLEdBQUcsRUFBRSxRQUFTO0lBQUNYLEdBQUcsRUFBQztFQUFlLENBQUM7QUFDakQsQ0FBQyxFQUFFO0VBQ0NTLEVBQUUsRUFBRSxFQUFFO0VBQ05YLEtBQUssRUFBRSxjQUFjO0VBQ3JCWSxRQUFRLEVBQUUsU0FBUztFQUNuQlYsR0FBRyxlQUFFdkIsMERBQUE7SUFBS2tDLEdBQUcsRUFBRSxRQUFTO0lBQUNYLEdBQUcsRUFBQztFQUFlLENBQUM7QUFDakQsQ0FBQyxFQUFFO0VBQ0NTLEVBQUUsRUFBRSxFQUFFO0VBQ05YLEtBQUssRUFBRSxjQUFjO0VBQ3JCWSxRQUFRLEVBQUUsU0FBUztFQUNuQlYsR0FBRyxlQUFFdkIsMERBQUE7SUFBS2tDLEdBQUcsRUFBRSxRQUFTO0lBQUNYLEdBQUcsRUFBQztFQUFlLENBQUM7QUFDakQsQ0FBQyxFQUNEO0VBQ0lTLEVBQUUsRUFBRSxFQUFFO0VBQ05YLEtBQUssRUFBRSxjQUFjO0VBQ3JCWSxRQUFRLEVBQUUsU0FBUztFQUNuQlYsR0FBRyxlQUFFdkIsMERBQUE7SUFBS2tDLEdBQUcsRUFBRSxRQUFTO0lBQUNYLEdBQUcsRUFBQztFQUFlLENBQUM7QUFDakQsQ0FBQyxFQUNEO0VBQ0lTLEVBQUUsRUFBRSxFQUFFO0VBQ05YLEtBQUssRUFBRSxVQUFVO0VBQ2pCWSxRQUFRLEVBQUUsYUFBYTtFQUN2QlYsR0FBRyxlQUFFdkIsMERBQUE7SUFBS2tDLEdBQUcsRUFBRSxRQUFTO0lBQUNYLEdBQUcsRUFBQztFQUFlLENBQUM7QUFDakQsQ0FBQyxDQUNKOzs7Ozs7OztVQ2xRRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvUmFuZG9tSW1nLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL1Byb2plY3QvanMvZmlndXJlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZUVsZW1lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2ZpZ3VyZXN9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuXHJcbi8vIGlmIChiYXNpY1dvcmtvdXRCb3gpIHtcclxuLy8gICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbi8vXHJcbi8vICAgICBjb25zdCBBcHAgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgICAgIDxSYW5kb21JbWcgLz5cclxuLy8gICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgKVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgcm9vdC5yZW5kZXIoPEFwcC8+KTtcclxuLy9cclxuLy8gfVxyXG4vL1xyXG4vLyBjb25zdCBiYXNpY1dvcmtvdXRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYgLndvcmtvdXRfYmFzaWMnKVxyXG4vLyBjb25zdCBuZXdXb3Jrb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4vLyBiYXNpY1dvcmtvdXRCb3guYXBwZW5kQ2hpbGQobmV3V29ya291dCk7XHJcblxyXG5cclxuY29uc3QgbmV3SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b3Jrb3V0X2Jhc2ljXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJhbmRvbUltZyA9ICgpID0+IHtcclxuICAgIGlmIChuZXdJbWcpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVJbWcgPSBjcmVhdGVSb290KG5ld0ltZyk7XHJcblxyXG4gICAgICAgIGNvbnN0IFJhbmRvbUltZyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tSW1nQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBmaWd1cmVzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tSW1nQXJyYXkubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx1bD57cmFuZG9tSW1nQXJyYXkubWFwKChlbGVtZW50KSA9PiA8bGkgY2xhc3NOYW1lPXtcIndvcmtvdXRfaW1hZ2VcIn0+e2VsZW1lbnR9PC9saT4pfTwvdWw+O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21PYmogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWd1cmVzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc0luVGhlQXJyYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHJhbmRvbUltZ0FycmF5Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlndXJlc1tyYW5kb21PYmpdICE9IHJhbmRvbUltZ0FycmF5W2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZ3VyZXNbcmFuZG9tT2JqXS5sZXZlbCA9PT0gXCJiYXNpY1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUltZyA9IGZpZ3VyZXNbcmFuZG9tT2JqXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUltZ0FycmF5LnB1c2goc291cmNlSW1nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZUltZy5yZW5kZXIoPFJhbmRvbUltZy8+KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFwiLi4vc2Nzcy9pbmRleC5zY3NzXCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmltcG9ydCB7UmFuZG9tSW1nfSBmcm9tIFwiLi9SYW5kb21JbWdcIjtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5cclxuaWYgKGNvbnRhaW5lcikge1xyXG4gICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIGNvcyBjb3NcclxuICAgICAgICAgICAgICAgIDxSYW5kb21JbWcgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByb290LnJlbmRlcig8QXBwLz4pO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmlndXJlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBsZXZlbDogJ2Jhc2ljJyxcclxuICAgICAgICBjYXRlZ29yeTogJ2ludmVydHknLFxyXG4gICAgICAgIHNyYzogPGltZyBhbHQ9e1wiZmlndXJlXCJ9IHNyYz1cIi4uL2ltZy8xLmpwZWdcIi8+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBsZXZlbDogJ2Jhc2ljJyxcclxuICAgICAgICBjYXRlZ29yeTogJ3NpZWR6xIVjZScsXHJcbiAgICAgICAgc3JjOiA8aW1nIGFsdD17XCJmaWd1cmVcIn0gc3JjPVwiLi4vaW1nLzIuanBlZ1wiLz4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIGxldmVsOiAnaW50ZXJtZWRpYXRlJyxcclxuICAgICAgICBjYXRlZ29yeTogJ3N6cGFnYXR5JyxcclxuICAgICAgICBzcmM6IDxpbWcgYWx0PXtcImZpZ3VyZVwifSBzcmM9XCIuLi9pbWcvMy5qcGVnXCIvPixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgbGV2ZWw6ICdiYXNpYycsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdzaWVkesSFY2UnLFxyXG4gICAgICAgIHNyYzogPGltZyBhbHQ9e1wiZmlndXJlXCJ9IHNyYz1cIi4uL2ltZy80LkpQR1wiLz4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA1LFxyXG4gICAgICAgIGxldmVsOiAnYmFzaWMnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnc3RhdHljem5lJyxcclxuICAgICAgICBzcmM6IDxpbWcgYWx0PXtcImZpZ3VyZVwifSBzcmM9XCIuLi9pbWcvNS5KUEdcIi8+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNixcclxuICAgICAgICBsZXZlbDogJ2Jhc2ljJyxcclxuICAgICAgICBjYXRlZ29yeTogJ3N0YXR5Y3puZScsXHJcbiAgICAgICAgc3JjOiA8aW1nIGFsdD17XCJmaWd1cmVcIn0gc3JjID0gXCIuLi9pbWcvNi5KUEdcIi8+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNyxcclxuICAgICAgICBsZXZlbDogJ2Jhc2ljJyxcclxuICAgICAgICBjYXRlZ29yeTogJ3NpZWR6xIVjZScsXHJcbiAgICAgICAgc3JjOiA8aW1nIGFsdD17XCJmaWd1cmVcIn0gc3JjPVwiLi4vaW1nLzcuSlBHXCIvPixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgbGV2ZWw6ICdiYXNpYycsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdzaWVkesSFY2UnLFxyXG4gICAgICAgIHNyYzogPGltZyBhbHQ9e1wiZmlndXJlXCJ9IHNyYz1cIi4uL2ltZy84LkpQR1wiLz4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA5LFxyXG4gICAgICAgIGxldmVsOiAnYWR2YW5jZWQnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnaGFuZHNwcmluZ2knLFxyXG4gICAgICAgIHNyYzogPGltZyBhbHQ9e1wiZmlndXJlXCJ9IHNyYz1cIi4uL2ltZy85LmpwZ1wiLz4sXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMTAsXHJcbiAgICAgICAgbGV2ZWw6ICdpbnRlcm1lZGlhdGUnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnaW52ZXJ0eScsXHJcbiAgICAgICAgc3JjOiA8aW1nIGFsdD17XCJmaWd1cmVcIn0gc3JjPVwiLi4vaW1nLzEwLkpQR1wiLz4sXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMTEsXHJcbiAgICAgICAgbGV2ZWw6ICdpbnRlcm1lZGlhdGUnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnc2nFgm93ZScsXHJcbiAgICAgICAgc3JjOiA8aW1nIGFsdD17XCJmaWd1cmVcIn0gc3JjPVwiLi4vaW1nLzExLkpQR1wiLz4sXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMTIsXHJcbiAgICAgICAgbGV2ZWw6ICdiYXNpYycsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdzaWVkesSFY2UnLFxyXG4gICAgICAgIHNyYzogPGltZyBhbHQ9e1wiZmlndXJlXCJ9IHNyYz1cIi4uL2ltZy8xMi5KUEdcIi8+LFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEzLFxyXG4gICAgICAgIGxldmVsOiAnYmFzaWMnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnc2llZHrEhWNlJyxcclxuICAgICAgICBzcmM6IDxpbWcgYWx0PXtcImZpZ3VyZVwifSBzcmM9XCIuLi9pbWcvMTMuSlBHXCIvPixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxNCxcclxuICAgICAgICBsZXZlbDogJ2Jhc2ljJyxcclxuICAgICAgICBjYXRlZ29yeTogJ3NpZWR6xIVjZScsXHJcbiAgICAgICAgc3JjOiA8aW1nIGFsdD17XCJmaWd1cmVcIn0gc3JjPVwiLi4vaW1nLzE0LkpQR1wiLz4sXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMTUsXHJcbiAgICAgICAgbGV2ZWw6ICdiYXNpYycsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdzaWVkesSFY2UnLFxyXG4gICAgICAgIHNyYzogPGltZyBhbHQ9e1wiZmlndXJlXCJ9IHNyYz1cIi4uL2ltZy8xNS5KUEdcIi8+LFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDE2LFxyXG4gICAgICAgIGxldmVsOiAnYmFzaWMnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnc2llZHrEhWNlJyxcclxuICAgICAgICBzcmM6IDxpbWcgYWx0PXtcImZpZ3VyZVwifSBzcmM9XCIuLi9pbWcvMTYuSlBHXCIvPixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxOCxcclxuICAgICAgICBsZXZlbDogJ2Jhc2ljJyxcclxuICAgICAgICBjYXRlZ29yeTogJ3NpZWR6xIVjZScsXHJcbiAgICAgICAgc3JjOiA8aW1nIGFsdD17XCJmaWd1cmVcIn0gc3JjPVwiLi4vaW1nLzE4LkpQR1wiLz4sXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMTksXHJcbiAgICAgICAgbGV2ZWw6ICdhZHZhbmNlZCcsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdpbnZlcnR5JyxcclxuICAgICAgICBzcmM6IDxpbWcgYWx0PXtcImZpZ3VyZVwifSBzcmM9XCIuLi9pbWcvMTkuSlBHXCIvPixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyMCxcclxuICAgICAgICBsZXZlbDogJ2ludGVybWVkaWF0ZScsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdpbnZlcnR5JyxcclxuICAgICAgICBzcmM6IDxpbWcgYWx0PXtcImZpZ3VyZVwifSBzcmM9XCIuLi9pbWcvMjAuSlBHXCIvPixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyMSxcclxuICAgICAgICBsZXZlbDogJ2ludGVybWVkaWF0ZScsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdzenBhZ2F0eScsXHJcbiAgICAgICAgc3JjOiA8aW1nIGFsdD17XCJmaWd1cmVcIn0gc3JjPVwiLi4vaW1nLzIxLkpQR1wiLz4sXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMjIsXHJcbiAgICAgICAgbGV2ZWw6ICdpbnRlcm1lZGlhdGUnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnc2llZHrEhWNlJyxcclxuICAgICAgICBzcmM6IDxpbWcgYWx0PXtcImZpZ3VyZVwifSBzcmM9XCIuLi9pbWcvMjIuSlBHXCIvPixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyMyxcclxuICAgICAgICBsZXZlbDogJ2ludGVybWVkaWF0ZScsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdzenBhZ2F0eScsXHJcbiAgICAgICAgc3JjOiA8aW1nIGFsdD17XCJmaWd1cmVcIn0gc3JjPVwiLi4vaW1nLzIzLkpQR1wiLz4sXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBpZDogMjQsXHJcbiAgICAgICAgbGV2ZWw6ICdpbnRlcm1lZGlhdGUnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnaGFuZHNwcmluZ2knLFxyXG4gICAgICAgIHNyYzogPGltZyBhbHQ9e1wiZmlndXJlXCJ9IHNyYz1cIi4uL2ltZy8yNC5KUEdcIi8+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMjUsXHJcbiAgICAgICAgbGV2ZWw6ICdpbnRlcm1lZGlhdGUnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnc2nFgm93ZScsXHJcbiAgICAgICAgc3JjOiA8aW1nIGFsdD17J2ZpZ3VyZSd9IHNyYz1cIi4uL2ltZy8yNS5qcGdcIi8+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMjYsXHJcbiAgICAgICAgbGV2ZWw6ICdpbnRlcm1lZGlhdGUnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnc2nFgm93ZScsXHJcbiAgICAgICAgc3JjOiA8aW1nIGFsdD17J2ZpZ3VyZSd9IHNyYz1cIi4uL2ltZy8yNi5qcGdcIi8+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMjcsXHJcbiAgICAgICAgbGV2ZWw6ICdpbnRlcm1lZGlhdGUnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnc2nFgm93ZScsXHJcbiAgICAgICAgc3JjOiA8aW1nIGFsdD17J2ZpZ3VyZSd9IHNyYz1cIi4uL2ltZy8yNy5qcGdcIi8+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMjgsXHJcbiAgICAgICAgbGV2ZWw6ICdhZHZhbmNlZCcsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdzenBhZ2F0eScsXHJcbiAgICAgICAgc3JjOiA8aW1nIGFsdD17J2ZpZ3VyZSd9IHNyYz1cIi4uL2ltZy8yOC5qcGdcIi8+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMjksXHJcbiAgICAgICAgbGV2ZWw6ICdhZHZhbmNlZCcsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdpbnZlcnR5JyxcclxuICAgICAgICBzcmM6IDxpbWcgYWx0PXsnZmlndXJlJ30gc3JjPVwiLi4vaW1nLzI5LmpwZ1wiLz4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzMCxcclxuICAgICAgICBsZXZlbDogJ2FkdmFuY2VkJyxcclxuICAgICAgICBjYXRlZ29yeTogJ3N6cGFnYXR5JyxcclxuICAgICAgICBzcmM6IDxpbWcgYWx0PXsnZmlndXJlJ30gc3JjPVwiLi4vaW1nLzMwLmpwZ1wiLz4sXHJcbiAgICB9LCB7XHJcbiAgICAgICAgaWQ6IDMxLFxyXG4gICAgICAgIGxldmVsOiAnaW50ZXJtZWRpYXRlJyxcclxuICAgICAgICBjYXRlZ29yeTogJ3NpxYJvd2UnLFxyXG4gICAgICAgIHNyYzogPGltZyBhbHQ9eydmaWd1cmUnfSBzcmM9XCIuLi9pbWcvMzEuanBnXCIvPixcclxuICAgIH0sIHtcclxuICAgICAgICBpZDogMzIsXHJcbiAgICAgICAgbGV2ZWw6ICdpbnRlcm1lZGlhdGUnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnc2nFgm93ZScsXHJcbiAgICAgICAgc3JjOiA8aW1nIGFsdD17J2ZpZ3VyZSd9IHNyYz1cIi4uL2ltZy8zMi5qcGdcIi8+LFxyXG4gICAgfSwge1xyXG4gICAgICAgIGlkOiAzMyxcclxuICAgICAgICBsZXZlbDogJ2ludGVybWVkaWF0ZScsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdzenBhZ2F0eScsXHJcbiAgICAgICAgc3JjOiA8aW1nIGFsdD17J2ZpZ3VyZSd9IHNyYz1cIi4uL2ltZy8zMy5qcGdcIi8+LFxyXG4gICAgfSwge1xyXG4gICAgICAgIGlkOiAzNCxcclxuICAgICAgICBsZXZlbDogJ2Jhc2ljJyxcclxuICAgICAgICBjYXRlZ29yeTogJ2hhbmRzdGFuZHknLFxyXG4gICAgICAgIHNyYzogPGltZyBhbHQ9eydmaWd1cmUnfSBzcmM9XCIuLi9pbWcvMzQuanBnXCIvPixcclxuICAgIH0sIHtcclxuICAgICAgICBpZDogMzUsXHJcbiAgICAgICAgbGV2ZWw6ICdhZHZhbmNlZCcsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdzacWCb3dlJyxcclxuICAgICAgICBzcmM6IDxpbWcgYWx0PXsnZmlndXJlJ30gc3JjPVwiLi4vaW1nLzM1LmpwZ1wiLz4sXHJcbiAgICB9LCB7XHJcbiAgICAgICAgaWQ6IDM2LFxyXG4gICAgICAgIGxldmVsOiAnaW50ZXJtZWRpYXRlJyxcclxuICAgICAgICBjYXRlZ29yeTogJ2hhbmRzcHJpbmdpJyxcclxuICAgICAgICBzcmM6IDxpbWcgYWx0PXsnZmlndXJlJ30gc3JjPVwiLi4vaW1nLzM2LmpwZ1wiLz4sXHJcbiAgICB9LCB7XHJcbiAgICAgICAgaWQ6IDM3LFxyXG4gICAgICAgIGxldmVsOiAnYWR2YW5jZWQnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnc2llZHrEhWNlJyxcclxuICAgICAgICBzcmM6IDxpbWcgYWx0PXsnZmlndXJlJ30gc3JjPVwiLi4vaW1nLzM3LmpwZ1wiLz4sXHJcbiAgICB9LCB7XHJcbiAgICAgICAgaWQ6IDM4LFxyXG4gICAgICAgIGxldmVsOiAnaW50ZXJtZWRpYXRlJyxcclxuICAgICAgICBjYXRlZ29yeTogJ3N6cGFnYXR5JyxcclxuICAgICAgICBzcmM6IDxpbWcgYWx0PXsnZmlndXJlJ30gc3JjPVwiLi4vaW1nLzM4LmpwZ1wiLz4sXHJcbiAgICB9LCB7XHJcbiAgICAgICAgaWQ6IDM5LFxyXG4gICAgICAgIGxldmVsOiAnaW50ZXJtZWRpYXRlJyxcclxuICAgICAgICBjYXRlZ29yeTogJ2ludmVydHknLFxyXG4gICAgICAgIHNyYzogPGltZyBhbHQ9eydmaWd1cmUnfSBzcmM9XCIuLi9pbWcvMzkuanBnXCIvPixcclxuICAgIH0sIHtcclxuICAgICAgICBpZDogNDAsXHJcbiAgICAgICAgbGV2ZWw6ICdpbnRlcm1lZGlhdGUnLFxyXG4gICAgICAgIGNhdGVnb3J5OiAnaW52ZXJ0eScsXHJcbiAgICAgICAgc3JjOiA8aW1nIGFsdD17J2ZpZ3VyZSd9IHNyYz1cIi4uL2ltZy80MC5qcGdcIi8+LFxyXG4gICAgfSwge1xyXG4gICAgICAgIGlkOiA0MSxcclxuICAgICAgICBsZXZlbDogJ2ludGVybWVkaWF0ZScsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdpbnZlcnR5JyxcclxuICAgICAgICBzcmM6IDxpbWcgYWx0PXsnZmlndXJlJ30gc3JjPVwiLi4vaW1nLzQxLmpwZ1wiLz4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA0MixcclxuICAgICAgICBsZXZlbDogJ2ludGVybWVkaWF0ZScsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICdpbnZlcnR5JyxcclxuICAgICAgICBzcmM6IDxpbWcgYWx0PXsnZmlndXJlJ30gc3JjPVwiLi4vaW1nLzQyLmpwZ1wiLz4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA0MyxcclxuICAgICAgICBsZXZlbDogJ2FkdmFuY2VkJyxcclxuICAgICAgICBjYXRlZ29yeTogJ2hhbmRzcHJpbmdpJyxcclxuICAgICAgICBzcmM6IDxpbWcgYWx0PXsnZmlndXJlJ30gc3JjPVwiLi4vaW1nLzQzLmpwZ1wiLz4sXHJcbiAgICB9LFxyXG5dIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTE5MTJkOTZiNWNkMDJiMjQwNDRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiZmlndXJlcyIsImNyZWF0ZVJvb3QiLCJuZXdJbWciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJSYW5kb21JbWciLCJjcmVhdGVJbWciLCJyYW5kb21JbWdBcnJheSIsIm4iLCJsZW5ndGgiLCJtYXAiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwicmFuZG9tT2JqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaXNJblRoZUFycmF5IiwiaiIsImxldmVsIiwic291cmNlSW1nIiwic3JjIiwicHVzaCIsInJlbmRlciIsIl9SYW5kb21JbWciLCJjb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHAiLCJGcmFnbWVudCIsImlkIiwiY2F0ZWdvcnkiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9
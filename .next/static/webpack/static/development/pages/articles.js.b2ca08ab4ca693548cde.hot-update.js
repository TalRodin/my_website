webpackHotUpdate("static/development/pages/articles.js",{

/***/ "./pages/articles.js":
/*!***************************!*\
  !*** ./pages/articles.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SingleArticleView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SingleArticleView */ "./components/SingleArticleView.js");
var _jsxFileName = "/Users/alyonarodin/Desktop/website/pages/articles.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var arrayOfArticls = [{
  id: 1,
  article: 'red_art_one',
  title: "Build React Project from Scratch",
  keyWords: "React, Webpack, Babel, Development and Production environment",
  date: 'Nov 3, 2019',
  time: '9 min'
}, {
  id: 2,
  article: 'red_art_two',
  title: "Create Database and Normalize it",
  keyWords: "Entity Relationship (ER) Diagram, Database, Normalization, Relational Model",
  date: 'Nov 12, 2019',
  time: '9 min'
}];

var Articles = function Articles() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3587964471" + " " + 'background_body',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3587964471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Articles"), __jsx("div", {
    className: "jsx-3587964471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, arrayOfArticls.map(function (art) {
    return __jsx("div", {
      key: art.id,
      className: "jsx-3587964471" + " " + "box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(_components_SingleArticleView__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: art.id,
      data: art,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3587964471",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Lato');h4.jsx-3587964471{text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:'Lato',sans-serif;color:#424242;text-align:center;margin-bottom:5%;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;padding:5%;}.box.jsx-3587964471{position:relative;margin-left:auto;margin-right:auto;margin-top:50px;margin-bottom:50px;border-radius:1rem;width:50%;height:auto;background-color:#eee;box-shadow:-2.3px -2.3px 3.8px rgba(255,255,255,0.2), -6.3px -6.3px 10.6px rgba(255,255,255,0.3);}.background_body.jsx-3587964471{background-color:#eee;background-size:100px 100px;background-position:0 0,50px 50px;height:1000px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvcGFnZXMvYXJ0aWNsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNpQixBQUM0RCxBQUVsQixBQVVQLEFBYUcsa0JBWkosSUFhVyxHQXZCVCxVQVdELGVBYWlCLEdBWnBCLGdCQUNHLGVBWUosSUFYSSxVQVl0QixTQVhhLFVBQ0UsQ0Fmb0IsV0FnQlYsbUJBZlIsR0FpQjhCLFdBaEJ6QixrQkFDRixpQkFDQyxtREFlckIsNkJBZGUsV0FDZiIsImZpbGUiOiIvVXNlcnMvYWx5b25hcm9kaW4vRGVza3RvcC93ZWJzaXRlL3BhZ2VzL2FydGljbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFNpbmdsZUFydGljbGVWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvU2luZ2xlQXJ0aWNsZVZpZXcnXG5cbmNvbnN0IGFycmF5T2ZBcnRpY2xzID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGFydGljbGU6ICdyZWRfYXJ0X29uZScsXG4gICAgICAgIHRpdGxlOiBcIkJ1aWxkIFJlYWN0IFByb2plY3QgZnJvbSBTY3JhdGNoXCIsXG4gICAgICAgIGtleVdvcmRzOiBcIlJlYWN0LCBXZWJwYWNrLCBCYWJlbCwgRGV2ZWxvcG1lbnQgYW5kIFByb2R1Y3Rpb24gZW52aXJvbm1lbnRcIixcbiAgICAgICAgZGF0ZTogJ05vdiAzLCAyMDE5JyxcbiAgICAgICAgdGltZTogJzkgbWluJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgYXJ0aWNsZTogJ3JlZF9hcnRfdHdvJyxcbiAgICAgICAgdGl0bGU6IFwiQ3JlYXRlIERhdGFiYXNlIGFuZCBOb3JtYWxpemUgaXRcIixcbiAgICAgICAga2V5V29yZHM6IFwiRW50aXR5IFJlbGF0aW9uc2hpcCAoRVIpIERpYWdyYW0sIERhdGFiYXNlLCBOb3JtYWxpemF0aW9uLCBSZWxhdGlvbmFsIE1vZGVsXCIsXG4gICAgICAgIGRhdGU6ICdOb3YgMTIsIDIwMTknLFxuICAgICAgICB0aW1lOiAnOSBtaW4nXG4gICAgfVxuXVxuY29uc3QgQXJ0aWNsZXMgPSAoKSA9PihcbiAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFja2dyb3VuZF9ib2R5Jz5cbiAgICAgICAgICAgIDxoND5BcnRpY2xlczwvaDQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHthcnJheU9mQXJ0aWNscy5tYXAoYXJ0PT4oXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2FydC5pZH0gY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVBcnRpY2xlVmlldyBrZXk9e2FydC5pZH0gZGF0YT17YXJ0fS8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bycpO1xuICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6IzQyNDI0MjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1JTtcbiAgICAgICAgICAgICAgICBhbGlnbi10ZXh0OmNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3h7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MXJlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDo1MCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZWVlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0yLjNweCAtMi4zcHggMy44cHggcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSxcbiAgICAgICAgICAgICAgICAtNi4zcHggLTYuM3B4IDEwLjZweCByZ2JhKDI1NSwyNTUsMjU1LCAwLjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2tncm91bmRfYm9keXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDBweCAxMDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDUwcHggNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuKVxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXMiXX0= */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/pages/articles.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Articles);

/***/ })

})
//# sourceMappingURL=articles.js.b2ca08ab4ca693548cde.hot-update.js.map
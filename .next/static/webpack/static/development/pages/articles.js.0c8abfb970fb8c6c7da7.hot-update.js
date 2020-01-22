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
  keyWords: "React, Webpack, Babel, ",
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
    className: "jsx-3135493725" + " " + 'background_body',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3135493725",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Articles"), __jsx("div", {
    className: "jsx-3135493725",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, arrayOfArticls.map(function (art) {
    return __jsx("div", {
      key: art.id,
      className: "jsx-3135493725" + " " + "box",
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
    id: "3135493725",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Lato');h4.jsx-3135493725{text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:'Lato',sans-serif;color:#424242;text-align:center;margin-bottom:5%;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;padding:5%;}.box.jsx-3135493725{position:relative;margin-left:auto;margin-right:auto;margin-top:50px;margin-bottom:50px;border-radius:4px;width:50%;height:auto;background-color:#efeeee;box-shadow:6px 6px 16px rgb(209,205,199,0.5),-6px -6px 16px rgba(255,255,255,0.5);}.background_body.jsx-3135493725{background-color:#efeeee;background-size:100px 100px;background-position:0 0,50px 50px;height:1000px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvcGFnZXMvYXJ0aWNsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNpQixBQUM0RCxBQUVsQixBQVVQLEFBWU0sa0JBWFAsT0FWRSxBQXNCUyxVQVhWLGtCQUNILEFBV29CLGdCQVZqQixrQkFXSixDQVZHLGFBV3JCLEtBVmEsVUFDRSxFQWZvQixVQWdCUCxvQkFmWCxLQWdCd0UsU0FmbkUsa0JBQ0YsaUJBQ0Msc0NBY3JCLDBDQWJlLFdBQ2YiLCJmaWxlIjoiL1VzZXJzL2FseW9uYXJvZGluL0Rlc2t0b3Avd2Vic2l0ZS9wYWdlcy9hcnRpY2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTaW5nbGVBcnRpY2xlVmlldyBmcm9tICcuLi9jb21wb25lbnRzL1NpbmdsZUFydGljbGVWaWV3J1xuXG5jb25zdCBhcnJheU9mQXJ0aWNscyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBhcnRpY2xlOiAncmVkX2FydF9vbmUnLFxuICAgICAgICB0aXRsZTogXCJCdWlsZCBSZWFjdCBQcm9qZWN0IGZyb20gU2NyYXRjaFwiLFxuICAgICAgICBrZXlXb3JkczogXCJSZWFjdCwgV2VicGFjaywgQmFiZWwsIFwiLFxuICAgICAgICBkYXRlOiAnTm92IDMsIDIwMTknLFxuICAgICAgICB0aW1lOiAnOSBtaW4nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBhcnRpY2xlOiAncmVkX2FydF90d28nLFxuICAgICAgICB0aXRsZTogXCJDcmVhdGUgRGF0YWJhc2UgYW5kIE5vcm1hbGl6ZSBpdFwiLFxuICAgICAgICBrZXlXb3JkczogXCJFbnRpdHkgUmVsYXRpb25zaGlwIChFUikgRGlhZ3JhbSwgRGF0YWJhc2UsIE5vcm1hbGl6YXRpb24sIFJlbGF0aW9uYWwgTW9kZWxcIixcbiAgICAgICAgZGF0ZTogJ05vdiAxMiwgMjAxOScsXG4gICAgICAgIHRpbWU6ICc5IG1pbidcbiAgICB9XG5dXG5jb25zdCBBcnRpY2xlcyA9ICgpID0+KFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZ3JvdW5kX2JvZHknPlxuICAgICAgICAgICAgPGg0PkFydGljbGVzPC9oND5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2FycmF5T2ZBcnRpY2xzLm1hcChhcnQ9PihcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17YXJ0LmlkfSBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUFydGljbGVWaWV3IGtleT17YXJ0LmlkfSBkYXRhPXthcnR9Lz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvJyk7XG4gICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBjb2xvcjojNDI0MjQyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjUlO1xuICAgICAgICAgICAgICAgIGFsaWduLXRleHQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJveHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo0cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6NTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDphdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2VmZWVlZTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA2cHggNnB4IDE2cHggcmdiKDIwOSwyMDUsMTk5LDAuNSksIC02cHggLTZweCAxNnB4ICByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2tncm91bmRfYm9keXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZmVlZWU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDBweCAxMDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDUwcHggNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuKVxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXMiXX0= */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/pages/articles.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Articles);

/***/ })

})
//# sourceMappingURL=articles.js.0c8abfb970fb8c6c7da7.hot-update.js.map
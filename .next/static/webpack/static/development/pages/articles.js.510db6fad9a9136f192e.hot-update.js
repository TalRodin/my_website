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
    className: "jsx-3387176008" + " " + 'background_body',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3387176008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Articles"), __jsx("div", {
    className: "jsx-3387176008",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, arrayOfArticls.map(function (art) {
    return __jsx("div", {
      key: art.id,
      className: "jsx-3387176008" + " " + "box",
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
    id: "3387176008",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Lato');h4.jsx-3387176008{text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:'Lato',sans-serif;color:#424242;text-align:center;margin-bottom:5%;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;padding:5%;}.box.jsx-3387176008{position:relative;margin-left:auto;margin-right:auto;margin-top:50px;margin-bottom:50px;border-radius:1rem;width:50%;height:auto;background-color:#eee;box-shadow:-2.3px -2.3px 3.8px rgba(255,255,255,0.2), -6.3px -6.3px 10.6px rgba(255,255,255,0.3), -15.1px -15.1px 25.6px rgba(255,255,255,0.4), -50px -50px 85px rgba(0255,255,255,0.07),;}.background_body.jsx-3387176008{background-color:#eee;background-size:100px 100px;background-position:0 0,50px 50px;height:1000px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvcGFnZXMvYXJ0aWNsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNpQixBQUM0RCxBQUVsQixBQVVQLEFBZUcsa0JBZEosSUFlVyxHQXpCVCxVQVdELGVBZWlCLEdBZHBCLGdCQUNHLGVBY0osSUFiSSxVQWN0QixTQWJhLFVBQ0UsQ0Fmb0IsV0FnQlYsbUJBZlIsR0FtQjZCLFdBbEJ4QixrQkFDRixpQkFDQyxnRkFDTixXQUNmLGlEQWVBIiwiZmlsZSI6Ii9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvcGFnZXMvYXJ0aWNsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgU2luZ2xlQXJ0aWNsZVZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9TaW5nbGVBcnRpY2xlVmlldydcblxuY29uc3QgYXJyYXlPZkFydGljbHMgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgYXJ0aWNsZTogJ3JlZF9hcnRfb25lJyxcbiAgICAgICAgdGl0bGU6IFwiQnVpbGQgUmVhY3QgUHJvamVjdCBmcm9tIFNjcmF0Y2hcIixcbiAgICAgICAga2V5V29yZHM6IFwiUmVhY3QsIFdlYnBhY2ssIEJhYmVsLCBEZXZlbG9wbWVudCBhbmQgUHJvZHVjdGlvbiBlbnZpcm9ubWVudFwiLFxuICAgICAgICBkYXRlOiAnTm92IDMsIDIwMTknLFxuICAgICAgICB0aW1lOiAnOSBtaW4nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBhcnRpY2xlOiAncmVkX2FydF90d28nLFxuICAgICAgICB0aXRsZTogXCJDcmVhdGUgRGF0YWJhc2UgYW5kIE5vcm1hbGl6ZSBpdFwiLFxuICAgICAgICBrZXlXb3JkczogXCJFbnRpdHkgUmVsYXRpb25zaGlwIChFUikgRGlhZ3JhbSwgRGF0YWJhc2UsIE5vcm1hbGl6YXRpb24sIFJlbGF0aW9uYWwgTW9kZWxcIixcbiAgICAgICAgZGF0ZTogJ05vdiAxMiwgMjAxOScsXG4gICAgICAgIHRpbWU6ICc5IG1pbidcbiAgICB9XG5dXG5jb25zdCBBcnRpY2xlcyA9ICgpID0+KFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZ3JvdW5kX2JvZHknPlxuICAgICAgICAgICAgPGg0PkFydGljbGVzPC9oND5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2FycmF5T2ZBcnRpY2xzLm1hcChhcnQ9PihcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17YXJ0LmlkfSBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUFydGljbGVWaWV3IGtleT17YXJ0LmlkfSBkYXRhPXthcnR9Lz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvJyk7XG4gICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBjb2xvcjojNDI0MjQyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjUlO1xuICAgICAgICAgICAgICAgIGFsaWduLXRleHQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJveHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxcmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOjUwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6YXV0bztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTIuM3B4IC0yLjNweCAzLjhweCByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLFxuICAgICAgICAgICAgICAgIC02LjNweCAtNi4zcHggMTAuNnB4IHJnYmEoMjU1LDI1NSwyNTUsIDAuMyksXG4gICAgICAgICAgICAgICAgLTE1LjFweCAtMTUuMXB4IDI1LjZweCByZ2JhKDI1NSwyNTUsMjU1LCAwLjQpLFxuICAgICAgICAgICAgICAgIC01MHB4IC01MHB4IDg1cHggcmdiYSgwMjU1LDI1NSwyNTUsIDAuMDcpLDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYWNrZ3JvdW5kX2JvZHl7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZWVlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCA1MHB4IDUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbilcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzIl19 */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/pages/articles.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Articles);

/***/ })

})
//# sourceMappingURL=articles.js.510db6fad9a9136f192e.hot-update.js.map
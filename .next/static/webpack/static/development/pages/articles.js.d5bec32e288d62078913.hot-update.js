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
    className: "jsx-215600500" + " " + 'background_body',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-215600500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Articles"), __jsx("div", {
    className: "jsx-215600500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, arrayOfArticls.map(function (art) {
    return __jsx("div", {
      key: art.id,
      className: "jsx-215600500" + " " + "box",
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
    id: "215600500",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Lato');h4.jsx-215600500{text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:'Lato',sans-serif;color:#424242;text-align:center;margin-bottom:5%;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;padding:5%;}.box.jsx-215600500{position:relative;margin-left:auto;margin-right:auto;margin-top:50px;margin-bottom:50px;border-radius:1rem;width:50%;height:auto;background-color:#eee;box-shadow: -2.3px -2.3px 3.8px rgba(255,255,255,0.2), -6.3px -6.3px 10.6px rgba(255,255,255,0.3), -15.1px -15.1px 25.6px rgba(255,255,255,0.4), -50px -50px 85px rgba(0255,255,255,0.07),  2.3px 2.3px 3.8px rgba(0,0,0,0.024), 6.3px 6.3px 10.6px rgba(0,0,0,0.035), 15.1px 15.1px 25.6px rgba(0,0,0,0.046), 50px 50px 85px rgba(0,0,0,0.07);}.background_body.jsx-215600500{background-color:#eee;background-size:100px 100px;background-position:0 0,50px 50px;height:1000px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvcGFnZXMvYXJ0aWNsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNpQixBQUM0RCxBQUVsQixBQVVQLEFBcUJHLGtCQXBCSixJQXFCVyxHQS9CVCxVQVdELGVBcUJpQixHQXBCcEIsZ0JBQ0csZUFvQkosSUFuQkksVUFvQnRCLFNBbkJhLFVBQ0UsQ0Fmb0IsV0FnQlYsbUJBZlIsR0F5Qk8sV0F4QkYsa0JBQ0YsaUJBQ0MsZ0ZBQ04sV0FDZixzTUFxQkEiLCJmaWxlIjoiL1VzZXJzL2FseW9uYXJvZGluL0Rlc2t0b3Avd2Vic2l0ZS9wYWdlcy9hcnRpY2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTaW5nbGVBcnRpY2xlVmlldyBmcm9tICcuLi9jb21wb25lbnRzL1NpbmdsZUFydGljbGVWaWV3J1xuXG5jb25zdCBhcnJheU9mQXJ0aWNscyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBhcnRpY2xlOiAncmVkX2FydF9vbmUnLFxuICAgICAgICB0aXRsZTogXCJCdWlsZCBSZWFjdCBQcm9qZWN0IGZyb20gU2NyYXRjaFwiLFxuICAgICAgICBrZXlXb3JkczogXCJSZWFjdCwgV2VicGFjaywgQmFiZWwsIERldmVsb3BtZW50IGFuZCBQcm9kdWN0aW9uIGVudmlyb25tZW50XCIsXG4gICAgICAgIGRhdGU6ICdOb3YgMywgMjAxOScsXG4gICAgICAgIHRpbWU6ICc5IG1pbidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGFydGljbGU6ICdyZWRfYXJ0X3R3bycsXG4gICAgICAgIHRpdGxlOiBcIkNyZWF0ZSBEYXRhYmFzZSBhbmQgTm9ybWFsaXplIGl0XCIsXG4gICAgICAgIGtleVdvcmRzOiBcIkVudGl0eSBSZWxhdGlvbnNoaXAgKEVSKSBEaWFncmFtLCBEYXRhYmFzZSwgTm9ybWFsaXphdGlvbiwgUmVsYXRpb25hbCBNb2RlbFwiLFxuICAgICAgICBkYXRlOiAnTm92IDEyLCAyMDE5JyxcbiAgICAgICAgdGltZTogJzkgbWluJ1xuICAgIH1cbl1cbmNvbnN0IEFydGljbGVzID0gKCkgPT4oXG4gICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tncm91bmRfYm9keSc+XG4gICAgICAgICAgICA8aDQ+QXJ0aWNsZXM8L2g0PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7YXJyYXlPZkFydGljbHMubWFwKGFydD0+KFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXthcnQuaWR9IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlQXJ0aWNsZVZpZXcga2V5PXthcnQuaWR9IGRhdGE9e2FydH0vPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8nKTtcbiAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiM0MjQyNDI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NSU7XG4gICAgICAgICAgICAgICAgYWxpZ24tdGV4dDpjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm94e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjFyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6NTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDphdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2VlZTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OlxuICAgIC0yLjNweCAtMi4zcHggMy44cHggcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSxcbiAgLTYuM3B4IC02LjNweCAxMC42cHggcmdiYSgyNTUsMjU1LDI1NSwgMC4zKSxcbiAgLTE1LjFweCAtMTUuMXB4IDI1LjZweCByZ2JhKDI1NSwyNTUsMjU1LCAwLjQpLFxuICAtNTBweCAtNTBweCA4NXB4IHJnYmEoMDI1NSwyNTUsMjU1LCAwLjA3KSxcbiAgXG4gIDIuM3B4IDIuM3B4IDMuOHB4IHJnYmEoMCwgMCwgMCwgMC4wMjQpLFxuICA2LjNweCA2LjNweCAxMC42cHggcmdiYSgwLCAwLCAwLCAwLjAzNSksXG4gIDE1LjFweCAxNS4xcHggMjUuNnB4IHJnYmEoMCwgMCwgMCwgMC4wNDYpLFxuICA1MHB4IDUwcHggODVweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2tncm91bmRfYm9keXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDBweCAxMDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDUwcHggNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuKVxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXMiXX0= */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/pages/articles.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Articles);

/***/ })

})
//# sourceMappingURL=articles.js.d5bec32e288d62078913.hot-update.js.map
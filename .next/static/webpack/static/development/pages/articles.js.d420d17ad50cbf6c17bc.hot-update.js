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
  article: 'Article_one',
  redirection: 'articles/red_art_one',
  title: "Build React Project from Scratch",
  keyWords: "React, Webpack",
  date: 'Nov 3, 2019'
}, {
  id: 2,
  article: "Article_two",
  redirection: 'https://medium.com/@alyona.rodin/create-database-476128f3e035',
  title: "Create Database and Normalize it",
  keyWords: "ER Diagram, Database, Normalization",
  date: 'Nov 12, 2019'
}];

var Articles = function Articles() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-550746370" + " " + 'background_body',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-550746370",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Articles"), __jsx("div", {
    className: "jsx-550746370",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, arrayOfArticls.map(function (art) {
    return __jsx("div", {
      key: art.id,
      className: "jsx-550746370" + " " + "box",
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
    id: "550746370",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Lato');h4.jsx-550746370{text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:'Lato',sans-serif;color:#424242;text-align:center;margin-bottom:5%;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;padding:5%;}.box.jsx-550746370{position:relative;margin-left:auto;margin-right:auto;margin-top:50px;margin-bottom:50px;border-radius:4px;width:50%;height:150px;background-color:#efeeee;box-shadow:6px 6px 16px rgb(209,205,199,0.5),-6px -6px 16px rgba(255,255,255,0.5);}.background_body.jsx-550746370{background-color:#efeeee;background-size:100px 100px;background-position:0 0,50px 50px;height:1000px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvcGFnZXMvYXJ0aWNsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNpQixBQUM0RCxBQUVsQixBQVVQLEFBWU0sa0JBWFAsT0FWRSxBQXNCUyxVQVhWLGtCQUNILEFBV29CLGdCQVZqQixrQkFXSixDQVZHLGFBV3JCLEtBVmEsVUFDRyxFQWZtQixXQWdCUCxtQkFmWCxNQWdCd0UsUUFmbkUsa0JBQ0YsaUJBQ0MsdUNBY3JCLHlDQWJlLFdBQ2YiLCJmaWxlIjoiL1VzZXJzL2FseW9uYXJvZGluL0Rlc2t0b3Avd2Vic2l0ZS9wYWdlcy9hcnRpY2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTaW5nbGVBcnRpY2xlVmlldyBmcm9tICcuLi9jb21wb25lbnRzL1NpbmdsZUFydGljbGVWaWV3J1xuXG5jb25zdCBhcnJheU9mQXJ0aWNscyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBhcnRpY2xlOiAnQXJ0aWNsZV9vbmUnLFxuICAgICAgICByZWRpcmVjdGlvbjogJ2FydGljbGVzL3JlZF9hcnRfb25lJyxcbiAgICAgICAgdGl0bGU6IFwiQnVpbGQgUmVhY3QgUHJvamVjdCBmcm9tIFNjcmF0Y2hcIixcbiAgICAgICAga2V5V29yZHM6IFwiUmVhY3QsIFdlYnBhY2tcIixcbiAgICAgICAgZGF0ZTogJ05vdiAzLCAyMDE5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGFydGljbGU6IFwiQXJ0aWNsZV90d29cIixcbiAgICAgICAgcmVkaXJlY3Rpb246ICdodHRwczovL21lZGl1bS5jb20vQGFseW9uYS5yb2Rpbi9jcmVhdGUtZGF0YWJhc2UtNDc2MTI4ZjNlMDM1JyxcbiAgICAgICAgdGl0bGU6IFwiQ3JlYXRlIERhdGFiYXNlIGFuZCBOb3JtYWxpemUgaXRcIixcbiAgICAgICAga2V5V29yZHM6IFwiRVIgRGlhZ3JhbSwgRGF0YWJhc2UsIE5vcm1hbGl6YXRpb25cIixcbiAgICAgICAgZGF0ZTogJ05vdiAxMiwgMjAxOScsXG4gICAgfVxuXVxuY29uc3QgQXJ0aWNsZXMgPSAoKSA9PihcbiAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFja2dyb3VuZF9ib2R5Jz5cbiAgICAgICAgICAgIDxoND5BcnRpY2xlczwvaDQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHthcnJheU9mQXJ0aWNscy5tYXAoYXJ0PT4oXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2FydC5pZH0gY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVBcnRpY2xlVmlldyBrZXk9e2FydC5pZH0gZGF0YT17YXJ0fS8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bycpO1xuICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6IzQyNDI0MjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1JTtcbiAgICAgICAgICAgICAgICBhbGlnbi10ZXh0OmNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3h7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOjUwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZWZlZWVlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggMTZweCByZ2IoMjA5LDIwNSwxOTksMC41KSwgLTZweCAtNnB4IDE2cHggIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFja2dyb3VuZF9ib2R5e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2VmZWVlZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4IDEwMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgNTBweCA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4pXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlcyJdfQ== */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/pages/articles.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Articles);

/***/ })

})
//# sourceMappingURL=articles.js.d420d17ad50cbf6c17bc.hot-update.js.map
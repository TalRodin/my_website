webpackHotUpdate("static/development/pages/articles.js",{

/***/ "./components/SingleArticleView.js":
/*!*****************************************!*\
  !*** ./components/SingleArticleView.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/alyonarodin/Desktop/website/components/SingleArticleView.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var SingleArticleView = function SingleArticleView(data) {
  return __jsx("div", {
    className: "jsx-3531545834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("h4", {
    key: data.data.id,
    className: "jsx-3531545834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3531545834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, data.data.title)), __jsx("h6", {
    className: "jsx-3531545834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, data.data.date, " \xB7 ", data.data.time, " read"), __jsx("ul", {
    className: "jsx-3531545834" + " " + "keywords",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data.data.keyWords.split(', ').map(function (word, i) {
    return __jsx("li", {
      key: word[i],
      className: "jsx-3531545834",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, word);
  }), __jsx("h6", {
    className: "jsx-3531545834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("a", {
    href: "articles/".concat(data.data.article),
    className: "jsx-3531545834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Read more on Medium"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3531545834",
    __self: this
  }, "h4.jsx-3531545834{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#424242;text-align:center;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;padding-top:20px;padding-bottom:none;marging-bottom:none;}.keywords.jsx-3531545834{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#424242;text-align:center;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;font-size:small;list-style:none;}h6.jsx-3531545834{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#bdbdbd;text-align:center;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;padding:5px;margin:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvY29tcG9uZW50cy9TaW5nbGVBcnRpY2xlVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQlMsQUFFb0MsQUFVSixBQVNBLDZGQWxCZ0IsQUFVSixBQVNBLDhCQWxCZCxBQVVKLEFBU0EsY0FsQlMsQUFVSixBQVNBLGtCQWxCRyxBQVVKLEFBU0EsZ0ZBbEJJLEFBVUwsQUFTSixZQUNELElBVEssQ0FWUSxPQW9CM0IsUUFUQSxLQVYyQixvQkFDeEIiLCJmaWxlIjoiL1VzZXJzL2FseW9uYXJvZGluL0Rlc2t0b3Avd2Vic2l0ZS9jb21wb25lbnRzL1NpbmdsZUFydGljbGVWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmNvbnN0IFNpbmdsZUFydGljbGVWaWV3ID0gKGRhdGEpPT57XG4gICAgcmV0dXJuIChcbiAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgXG4gICAgICAgICAgIDxoNCBrZXk9e2RhdGEuZGF0YS5pZH0+PHNwYW4+e2RhdGEuZGF0YS50aXRsZX08L3NwYW4+PC9oND5cbiAgICAgICAgICAgPGg2PntkYXRhLmRhdGEuZGF0ZX0gwrcge2RhdGEuZGF0YS50aW1lfSByZWFkPC9oNj5cbiAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImtleXdvcmRzXCI+XG4gICAgICAgICAgIHtkYXRhLmRhdGEua2V5V29yZHMuc3BsaXQoJywgJykubWFwKCh3b3JkLGkpPT4oXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3dvcmRbaV19PlxuICAgICAgICAgICAgICAgICAge3dvcmR9XG4gICAgICAgICAgICAgIDwvbGk+IFxuICAgICAgICAgICApKX1cbiAgICAgICAgICAgPGg2PjxhIGhyZWY9e2BhcnRpY2xlcy8ke2RhdGEuZGF0YS5hcnRpY2xlfWB9PlJlYWQgbW9yZSBvbiBNZWRpdW08L2E+PC9oNj5cbiAgICAgICAgICAgPC91bD5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YGg0e1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBjb2xvcjojNDI0MjQyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi10ZXh0OmNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgICAgICBtYXJnaW5nLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIC5rZXl3b3JkcyB7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiM0MjQyNDI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi10ZXh0OmNlbnRlcjsgXG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgIH1cbiAgICAgICAgIGg2e1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjojYmRiZGJkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24tdGV4dDpjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW46bm9uZTtcbiAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQXJ0aWNsZVZpZXcgIl19 */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/components/SingleArticleView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleArticleView);

/***/ })

})
//# sourceMappingURL=articles.js.85acf6886a9a7183b181.hot-update.js.map
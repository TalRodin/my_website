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
    className: "jsx-3004489531",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("h4", {
    key: data.data.id,
    className: "jsx-3004489531",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3004489531",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, data.data.title)), __jsx("h6", {
    className: "jsx-3004489531" + " " + "date-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, data.data.date, __jsx("span", {
    id: "dot",
    className: "jsx-3004489531",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), data.data.time, " read"), __jsx("ul", {
    className: "jsx-3004489531" + " " + "keywords",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, data.data.keyWords.split(', ').map(function (word, i) {
    return __jsx("li", {
      key: word[i],
      className: "jsx-3004489531",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "- ", word);
  })), __jsx("h6", {
    className: "jsx-3004489531",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    href: "articles/".concat(data.data.article),
    className: "jsx-3004489531",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Read more on Medium ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3004489531",
    __self: this
  }, "h4.jsx-3004489531{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#424242;text-align:center;padding-top:20px;margin-bottom:5px;}.keywords.jsx-3004489531{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#424242;text-align:justify;font-size:small;list-style:none;}.date-time.jsx-3004489531{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#bdbdbd;text-align:center;padding:0px;margin-top:0px;margin-bottom:0px;}a.jsx-3004489531{-webkit-text-decoration:none;text-decoration:none;font-family:'Lato',sans-serif;padding-bottom:15px;padding-left:37px;color:#bdbdbd;}h6.jsx-3004489531{padding-bottom:4%;}#dot.jsx-3004489531{position:relative;border-radius:50%;width:5%;height:5%;background-color:red;box-shadow:6px 6px 16px rgb(209,205,199,0.5),-6px -6px 16px rgba(255,255,255,0.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvY29tcG9uZW50cy9TaW5nbGVBcnRpY2xlVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQlMsQUFFb0MsQUFTSixBQVNBLEFBU0UsQUFPSCxBQUdBLGtCQUZyQixBQUl3QixrQkFDVCxTQUNDLEtBYmtCLEtBY1AscUJBQ2lFLElBZHJFLGFBNUJlLEFBU0osQUFTQSxPQVdiLGtCQUNKLEtBN0JHLEFBU0osQUFTQyxTQVlqQixLQTdCeUIsQUFTSCxBQVNELGtCQWhCRyxBQWlCVCxDQVJJLEVBOEJuQixTQXJCa0IsS0FqQk8sQUFTTixVQVNFLE1BUnJCLEVBVEcsVUFrQkgiLCJmaWxlIjoiL1VzZXJzL2FseW9uYXJvZGluL0Rlc2t0b3Avd2Vic2l0ZS9jb21wb25lbnRzL1NpbmdsZUFydGljbGVWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmNvbnN0IFNpbmdsZUFydGljbGVWaWV3ID0gKGRhdGEpPT57XG4gICAgcmV0dXJuIChcbiAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgXG4gICAgICAgICAgIDxoNCBrZXk9e2RhdGEuZGF0YS5pZH0+PHNwYW4+e2RhdGEuZGF0YS50aXRsZX08L3NwYW4+PC9oND5cbiAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImRhdGUtdGltZVwiPntkYXRhLmRhdGEuZGF0ZX08c3BhbiBpZD0nZG90Jz5cbiAgICAgICAgICAgICAgPC9zcGFuPntkYXRhLmRhdGEudGltZX0gcmVhZDwvaDY+XG4gICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJrZXl3b3Jkc1wiPlxuICAgICAgICAgICB7ZGF0YS5kYXRhLmtleVdvcmRzLnNwbGl0KCcsICcpLm1hcCgod29yZCxpKT0+KFxuICAgICAgICAgICAgICA8bGkga2V5PXt3b3JkW2ldfT5cbiAgICAgICAgICAgICAgICAgIC0ge3dvcmR9XG4gICAgICAgICAgICAgIDwvbGk+IFxuICAgICAgICAgICApKX1cbiAgICAgICAgICAgXG4gICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgIDxoNiA+PGEgaHJlZj17YGFydGljbGVzLyR7ZGF0YS5kYXRhLmFydGljbGV9YH0+UmVhZCBtb3JlIG9uIE1lZGl1bSA8L2E+PC9oNj5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YGg0e1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBjb2xvcjojNDI0MjQyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgLmtleXdvcmRzIHtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6IzQyNDI0MjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgfVxuICAgICAgICAgLmRhdGUtdGltZXtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICB9XG4gICAgICAgICBhe1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzN3B4O1xuICAgICAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgICB9XG4gICAgICAgICBoNntcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0JTtcbiAgICAgICAgIH1cbiAgICAgICAgICNkb3R7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDo1JTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NSU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCAxNnB4IHJnYigyMDksMjA1LDE5OSwwLjUpLCAtNnB4IC02cHggMTZweCAgcmdiYSgyNTUsMjU1LDI1NSwgMC41KTtcbiAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQXJ0aWNsZVZpZXcgIl19 */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/components/SingleArticleView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleArticleView);

/***/ })

})
//# sourceMappingURL=articles.js.9ebfb447ed257f4b9b29.hot-update.js.map
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
    className: "jsx-528718386",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("h5", {
    key: data.data.id,
    className: "jsx-528718386",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-528718386",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, data.data.title)), __jsx("h6", {
    className: "jsx-528718386",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, data.data.date), __jsx("ul", {
    className: "jsx-528718386" + " " + "keywords",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data.data.keyWords.split(', ').map(function (word, i) {
    return __jsx("li", {
      key: word[i],
      className: "jsx-528718386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, word);
  }), __jsx("h6", {
    className: "jsx-528718386",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("a", {
    href: "articles/".concat(data.data.article),
    className: "jsx-528718386",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Read more on Medium"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "528718386",
    __self: this
  }, "h5.jsx-528718386{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#424242;text-align:center;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;padding:10px;}.keywords.jsx-528718386{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#424242;text-align:center;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;font-size:small;list-style:none;}h6.jsx-528718386{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#424242;text-align:center;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvY29tcG9uZW50cy9TaW5nbGVBcnRpY2xlVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQlMsQUFHb0MsQUFTSixBQVNBLDZGQWpCZ0IsQUFTSixBQVNJLDhCQWpCbEIsQUFTSixBQVNJLGNBakJLLEFBU0osQUFTSSxrQkFoQkQsQUFRSixBQVVJLGdGQWpCSixBQVFELEFBVUMsYUFqQmpCLEFBa0JILEdBVm1CLGdCQUNuQiIsImZpbGUiOiIvVXNlcnMvYWx5b25hcm9kaW4vRGVza3RvcC93ZWJzaXRlL2NvbXBvbmVudHMvU2luZ2xlQXJ0aWNsZVZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuY29uc3QgU2luZ2xlQXJ0aWNsZVZpZXcgPSAoZGF0YSk9PntcbiAgICByZXR1cm4gKFxuICAgICAgIDxkaXYgPlxuICAgICAgICAgICBcbiAgICAgICAgICAgPGg1IGtleT17ZGF0YS5kYXRhLmlkfT48c3Bhbj57ZGF0YS5kYXRhLnRpdGxlfTwvc3Bhbj48L2g1PlxuICAgICAgICAgICA8aDY+e2RhdGEuZGF0YS5kYXRlfTwvaDY+XG4gICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJrZXl3b3Jkc1wiPlxuICAgICAgICAgICB7ZGF0YS5kYXRhLmtleVdvcmRzLnNwbGl0KCcsICcpLm1hcCgod29yZCxpKT0+KFxuICAgICAgICAgICAgICA8bGkga2V5PXt3b3JkW2ldfT5cbiAgICAgICAgICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgICAgICA8L2xpPiBcbiAgICAgICAgICAgKSl9XG4gICAgICAgICAgIDxoNj48YSBocmVmPXtgYXJ0aWNsZXMvJHtkYXRhLmRhdGEuYXJ0aWNsZX1gfT5SZWFkIG1vcmUgb24gTWVkaXVtPC9hPjwvaDY+XG4gICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BoNXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6IzQyNDI0MjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYWxpZ24tdGV4dDpjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIC5rZXl3b3JkcyB7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiM0MjQyNDI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi10ZXh0OmNlbnRlcjsgXG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgIH1cbiAgICAgICAgIGg2e1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiM0MjQyNDI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGFsaWduLXRleHQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUFydGljbGVWaWV3ICJdfQ== */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/components/SingleArticleView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleArticleView);

/***/ })

})
//# sourceMappingURL=articles.js.0d5c019b8634e2b3dfcf.hot-update.js.map
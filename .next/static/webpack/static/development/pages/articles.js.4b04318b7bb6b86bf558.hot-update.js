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
    className: "jsx-474154656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("h4", {
    key: data.data.id,
    className: "jsx-474154656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-474154656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, data.data.title)), __jsx("h6", {
    className: "jsx-474154656" + " " + "date-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, data.data.date, __jsx("span", {
    id: "dot",
    className: "jsx-474154656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "  "), data.data.time, " read"), __jsx("ul", {
    className: "jsx-474154656" + " " + "keywords",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data.data.keyWords.split(', ').map(function (word, i) {
    return __jsx("li", {
      key: word[i],
      className: "jsx-474154656",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "- ", word);
  })), __jsx("h6", {
    className: "jsx-474154656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("a", {
    href: "articles/".concat(data.data.article),
    className: "jsx-474154656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Read more on Medium ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "474154656",
    __self: this
  }, "h4.jsx-474154656{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#424242;text-align:center;padding-top:20px;margin-bottom:5px;}.keywords.jsx-474154656{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#424242;text-align:justify;font-size:small;list-style:none;}.date-time.jsx-474154656{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#bdbdbd;text-align:center;padding:0px;margin-top:0px;margin-bottom:0px;}a.jsx-474154656{-webkit-text-decoration:none;text-decoration:none;font-family:'Lato',sans-serif;padding-bottom:15px;padding-left:37px;color:#bdbdbd;}h6.jsx-474154656{padding-bottom:4%;}#dot.jsx-474154656{position:relative;border-radius:50%;width:5px;height:5px;background-color:red;box-shadow:6px 6px 16px rgb(209,205,199,0.5),-6px -6px 16px rgba(255,255,255,0.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvY29tcG9uZW50cy9TaW5nbGVBcnRpY2xlVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQlMsQUFFb0MsQUFTSixBQVNBLEFBU0UsQUFPSCxBQUdBLGtCQUZyQixBQUl3QixrQkFDUixVQUNDLElBYmlCLE9BY1AscUJBQ2lFLEVBZHJFLGFBNUJlLEFBU0osQUFTQSxPQVdiLGtCQUNKLEtBN0JHLEFBU0osQUFTQyxTQVlqQixLQTdCeUIsQUFTSCxBQVNELGtCQWhCRyxBQWlCVCxDQVJJLElBOEJuQixPQXJCa0IsS0FqQk8sQUFTTixVQVNFLE1BUnJCLEVBVEcsVUFrQkgiLCJmaWxlIjoiL1VzZXJzL2FseW9uYXJvZGluL0Rlc2t0b3Avd2Vic2l0ZS9jb21wb25lbnRzL1NpbmdsZUFydGljbGVWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmNvbnN0IFNpbmdsZUFydGljbGVWaWV3ID0gKGRhdGEpPT57XG4gICAgcmV0dXJuIChcbiAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgXG4gICAgICAgICAgIDxoNCBrZXk9e2RhdGEuZGF0YS5pZH0+PHNwYW4+e2RhdGEuZGF0YS50aXRsZX08L3NwYW4+PC9oND5cbiAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImRhdGUtdGltZVwiPntkYXRhLmRhdGEuZGF0ZX08c3BhbiBpZD0nZG90Jz4gIDwvc3Bhbj57ZGF0YS5kYXRhLnRpbWV9IHJlYWQ8L2g2PlxuICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwia2V5d29yZHNcIj5cbiAgICAgICAgICAge2RhdGEuZGF0YS5rZXlXb3Jkcy5zcGxpdCgnLCAnKS5tYXAoKHdvcmQsaSk9PihcbiAgICAgICAgICAgICAgPGxpIGtleT17d29yZFtpXX0+XG4gICAgICAgICAgICAgICAgICAtIHt3b3JkfVxuICAgICAgICAgICAgICA8L2xpPiBcbiAgICAgICAgICAgKSl9XG4gICAgICAgICAgIFxuICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICA8aDYgPjxhIGhyZWY9e2BhcnRpY2xlcy8ke2RhdGEuZGF0YS5hcnRpY2xlfWB9PlJlYWQgbW9yZSBvbiBNZWRpdW0gPC9hPjwvaDY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BoNHtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6IzQyNDI0MjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIC5rZXl3b3JkcyB7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiM0MjQyNDI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgIH1cbiAgICAgICAgIC5kYXRlLXRpbWV7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgfVxuICAgICAgICAgYXtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzdweDtcbiAgICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICAgfVxuICAgICAgICAgaDZ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNCU7XG4gICAgICAgICB9XG4gICAgICAgICAjZG90e1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6NXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDo1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCAxNnB4IHJnYigyMDksMjA1LDE5OSwwLjUpLCAtNnB4IC02cHggMTZweCAgcmdiYSgyNTUsMjU1LDI1NSwgMC41KTtcbiAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQXJ0aWNsZVZpZXcgIl19 */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/components/SingleArticleView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleArticleView);

/***/ })

})
//# sourceMappingURL=articles.js.4b04318b7bb6b86bf558.hot-update.js.map
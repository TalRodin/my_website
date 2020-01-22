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
    className: "jsx-3153829191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("h4", {
    key: data.data.id,
    className: "jsx-3153829191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3153829191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, data.data.title)), __jsx("h6", {
    className: "jsx-3153829191" + " " + "date-time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, data.data.date, __jsx("span", {
    id: "dot",
    className: "jsx-3153829191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), data.data.time, " read"), __jsx("ul", {
    className: "jsx-3153829191" + " " + "keywords",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data.data.keyWords.split(', ').map(function (word, i) {
    return __jsx("li", {
      key: word[i],
      className: "jsx-3153829191",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "- ", word);
  })), __jsx("h6", {
    className: "jsx-3153829191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("a", {
    href: "articles/".concat(data.data.article),
    className: "jsx-3153829191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Read more on Medium ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3153829191",
    __self: this
  }, "h4.jsx-3153829191{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#424242;text-align:center;padding-top:20px;margin-bottom:5px;}.keywords.jsx-3153829191{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#424242;text-align:justify;font-size:small;list-style:none;}.date-time.jsx-3153829191{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#bdbdbd;text-align:center;padding:0px;margin-top:0px;margin-bottom:0px;}a.jsx-3153829191{-webkit-text-decoration:none;text-decoration:none;font-family:'Lato',sans-serif;padding-bottom:15px;padding-left:37px;color:#bdbdbd;}h6.jsx-3153829191{padding-bottom:4%;}#dot.jsx-3153829191{border-radius:50%;width:5%;height:5%;background-color:#efeeee;background-color:#efeeee;box-shadow:6px 6px 16px rgb(209,205,199,0.5),-6px -6px 16px rgba(255,255,255,0.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvY29tcG9uZW50cy9TaW5nbGVBcnRpY2xlVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQlMsQUFFb0MsQUFTSixBQVNBLEFBU0UsQUFPSCxBQUlELGtCQUhwQixBQUlXLFNBQ0MsVUFDZSxhQWJPLFlBY1Asa0JBYkosT0FjaUUsTUExQ2xELEFBU0osQUFTQSxPQVdiLGtCQUNKLEtBN0JHLEFBU0osQUFTQyxTQVlqQixLQTdCeUIsQUFTSCxBQVNELGtCQWhCRyxBQWlCVCxDQVJJLFdBU0QsRUFxQmxCLEdBdEN5QixBQVNOLFVBU0UsTUFSckIsRUFURyxVQWtCSCIsImZpbGUiOiIvVXNlcnMvYWx5b25hcm9kaW4vRGVza3RvcC93ZWJzaXRlL2NvbXBvbmVudHMvU2luZ2xlQXJ0aWNsZVZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuY29uc3QgU2luZ2xlQXJ0aWNsZVZpZXcgPSAoZGF0YSk9PntcbiAgICByZXR1cm4gKFxuICAgICAgIDxkaXYgPlxuICAgICAgICAgICBcbiAgICAgICAgICAgPGg0IGtleT17ZGF0YS5kYXRhLmlkfT48c3Bhbj57ZGF0YS5kYXRhLnRpdGxlfTwvc3Bhbj48L2g0PlxuICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZGF0ZS10aW1lXCI+e2RhdGEuZGF0YS5kYXRlfTxzcGFuIGlkPSdkb3QnPjwvc3Bhbj57ZGF0YS5kYXRhLnRpbWV9IHJlYWQ8L2g2PlxuICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwia2V5d29yZHNcIj5cbiAgICAgICAgICAge2RhdGEuZGF0YS5rZXlXb3Jkcy5zcGxpdCgnLCAnKS5tYXAoKHdvcmQsaSk9PihcbiAgICAgICAgICAgICAgPGxpIGtleT17d29yZFtpXX0+XG4gICAgICAgICAgICAgICAgICAtIHt3b3JkfVxuICAgICAgICAgICAgICA8L2xpPiBcbiAgICAgICAgICAgKSl9XG4gICAgICAgICAgIFxuICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICA8aDYgPjxhIGhyZWY9e2BhcnRpY2xlcy8ke2RhdGEuZGF0YS5hcnRpY2xlfWB9PlJlYWQgbW9yZSBvbiBNZWRpdW0gPC9hPjwvaDY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BoNHtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6IzQyNDI0MjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIC5rZXl3b3JkcyB7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiM0MjQyNDI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgIH1cbiAgICAgICAgIC5kYXRlLXRpbWV7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgfVxuICAgICAgICAgYXtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzdweDtcbiAgICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICAgfVxuICAgICAgICAgaDZ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNCU7XG4gICAgICAgICB9XG4gICAgICAgICAjZG90e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgICAgICAgIHdpZHRoOjUlO1xuICAgICAgICAgICAgaGVpZ2h0OjUlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZWZlZWVlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZWZlZWVlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCAxNnB4IHJnYigyMDksMjA1LDE5OSwwLjUpLCAtNnB4IC02cHggMTZweCAgcmdiYSgyNTUsMjU1LDI1NSwgMC41KTtcbiAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQXJ0aWNsZVZpZXcgIl19 */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/components/SingleArticleView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleArticleView);

/***/ })

})
//# sourceMappingURL=articles.js.94242bc2a0e41c27c0e5.hot-update.js.map
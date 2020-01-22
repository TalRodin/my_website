webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/SingleProjectView.js":
/*!*****************************************!*\
  !*** ./components/SingleProjectView.js ***!
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
var _jsxFileName = "/Users/alyonarodin/Desktop/website/components/SingleProjectView.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var SingleProjectView = function SingleProjectView(data) {
  return __jsx("div", {
    className: "jsx-2189160949",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2189160949" + " " + 'imgs',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("img", {
    src: data.data.image,
    width: 180,
    height: 180,
    className: "jsx-2189160949",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  })), __jsx("h4", {
    key: data.data.id,
    className: "jsx-2189160949",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2189160949",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data.data.title)), __jsx("h5", {
    key: data.data.id,
    className: "jsx-2189160949",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, data.data.technologies), __jsx("h6", {
    className: "jsx-2189160949",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("a", {
    href: "projects/".concat(data.data.project_github_link),
    className: "jsx-2189160949",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Github")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2189160949",
    __self: this
  }, "h4.jsx-2189160949{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#424242;text-align:center;padding-top:20px;margin-bottom:5px;}.keywords.jsx-2189160949{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#424242;text-align:justify;font-size:small;list-style:none;}h5.jsx-2189160949{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:'Lato',sans-serif;color:#bdbdbd;text-align:center;padding:0px;margin-top:0px;margin-bottom:0px;}a.jsx-2189160949{-webkit-text-decoration:none;text-decoration:none;font-family:'Lato',sans-serif;padding-bottom:15px;padding-left:37px;color:#bdbdbd;}h6.jsx-2189160949{padding-bottom:4%;}img.jsx-2189160949{margin:18px;border-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvY29tcG9uZW50cy9TaW5nbGVQcm9qZWN0Vmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXUyxBQUVvQyxBQVNKLEFBU0EsQUFTRSxBQU9ILEFBR04sWUFDTyxNQUh0QixhQUlBLG1CQVhrQyw4QkFDWCxhQTVCZSxBQVNKLEFBU0EsT0FXYixrQkFDSixLQTdCRyxBQVNKLEFBU0MsU0FZakIsS0E3QnlCLEFBU0gsQUFTRCxrQkFoQkcsQUFpQlQsQ0FSSSxXQVNELEtBakJPLEFBU04sVUFTRSxNQVJyQixFQVRHLFVBa0JIIiwiZmlsZSI6Ii9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvY29tcG9uZW50cy9TaW5nbGVQcm9qZWN0Vmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5jb25zdCBTaW5nbGVQcm9qZWN0VmlldyA9IChkYXRhKT0+e1xuICAgIHJldHVybiAoXG4gICAgICAgPGRpdiA+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWdzJz5cbiAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuZGF0YS5pbWFnZX0gd2lkdGg9ezE4MH0gaGVpZ2h0PXsxODB9Lz5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDxoNCBrZXk9e2RhdGEuZGF0YS5pZH0+PHNwYW4+e2RhdGEuZGF0YS50aXRsZX08L3NwYW4+PC9oND5cbiAgICAgICAgICAgPGg1IGtleT17ZGF0YS5kYXRhLmlkfT57ZGF0YS5kYXRhLnRlY2hub2xvZ2llc308L2g1PlxuICAgICAgICAgICA8aDYgPjxhIGhyZWY9e2Bwcm9qZWN0cy8ke2RhdGEuZGF0YS5wcm9qZWN0X2dpdGh1Yl9saW5rfWB9PkdpdGh1YjwvYT48L2g2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YGg0e1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBjb2xvcjojNDI0MjQyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgLmtleXdvcmRzIHtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6IzQyNDI0MjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgfVxuICAgICAgICAgaDV7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgfVxuICAgICAgICAgYXtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzdweDtcbiAgICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICAgfVxuICAgICAgICAgaDZ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNCU7XG4gICAgICAgICB9XG4gICAgICAgICBpbWd7XG4gICAgICAgICAgICAgbWFyZ2luOjE4cHg7XG4gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2plY3RWaWV3IFxuIl19 */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/components/SingleProjectView.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleProjectView);

/***/ })

})
//# sourceMappingURL=projects.js.1d4e233b7307fecaf3c6.hot-update.js.map
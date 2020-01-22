webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
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
/* harmony import */ var _components_SingleProjectView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SingleProjectView */ "./components/SingleProjectView.js");
var _jsxFileName = "/Users/alyonarodin/Desktop/website/pages/projects.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var arrayOfProjects = [{
  id: 1,
  project_github_link: 'red_project_one',
  title: "Game of Life",
  image: '/game_of_life.png',
  technologies: "JavaScript, HTML, CSS"
}, {
  id: 2,
  project_github_link: 'red_project_two',
  title: "Weather App React",
  image: '/game_of_life.png',
  technologies: "React, API"
}];

var Projects = function Projects() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3723486503" + " " + 'background_body',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3723486503",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Projects"), __jsx("div", {
    className: "jsx-3723486503",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, arrayOfProjects.map(function (project) {
    return __jsx("div", {
      key: project.id,
      className: "jsx-3723486503" + " " + "box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(_components_SingleProjectView__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: project.id,
      data: project,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3723486503",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Lato');h4.jsx-3723486503{text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:'Lato',sans-serif;color:#424242;text-align:center;margin-bottom:5%;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;padding:5%;}.box.jsx-3723486503{position:relative;margin-left:auto;margin-right:auto;margin-top:50px;margin-bottom:50px;border-radius:4px;width:25%;height:50%;background-color:#efeeee;box-shadow:6px 6px 16px rgb(209,205,199,0.5),-6px -6px 16px rgba(255,255,255,0.5);}.background_body.jsx-3723486503{background-color:#efeeee;background-size:100px 100px;background-position:0 0,50px 50px;height:1000px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvcGFnZXMvcHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NpQixBQUM0RCxBQUVsQixBQVVQLEFBWU0sa0JBWFAsT0FWRSxBQXNCUyxVQVhWLGtCQUNILEFBV29CLGdCQVZqQixrQkFXSixDQVZHLGFBV3JCLEtBVmEsVUFDQyxFQWZxQixTQWdCUCxxQkFmWCxJQWdCd0UsVUFmbkUsa0JBQ0YsaUJBQ0MscUNBY3JCLDJDQWJlLFdBQ2YiLCJmaWxlIjoiL1VzZXJzL2FseW9uYXJvZGluL0Rlc2t0b3Avd2Vic2l0ZS9wYWdlcy9wcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTaW5nbGVQcm9qZWN0VmlldyBmcm9tICcuLi9jb21wb25lbnRzL1NpbmdsZVByb2plY3RWaWV3J1xuXG5jb25zdCBhcnJheU9mUHJvamVjdHMgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgcHJvamVjdF9naXRodWJfbGluazogJ3JlZF9wcm9qZWN0X29uZScsXG4gICAgICAgIHRpdGxlOiBcIkdhbWUgb2YgTGlmZVwiLFxuICAgICAgICBpbWFnZTogJy9nYW1lX29mX2xpZmUucG5nJyxcbiAgICAgICAgdGVjaG5vbG9naWVzOiBcIkphdmFTY3JpcHQsIEhUTUwsIENTU1wiLFxuXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBwcm9qZWN0X2dpdGh1Yl9saW5rOiAncmVkX3Byb2plY3RfdHdvJyxcbiAgICAgICAgdGl0bGU6IFwiV2VhdGhlciBBcHAgUmVhY3RcIixcbiAgICAgICAgaW1hZ2U6ICcvZ2FtZV9vZl9saWZlLnBuZycsXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJSZWFjdCwgQVBJXCIsXG5cbiAgICB9XG5dXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+KFxuICAgIFxuICAgIDxMYXlvdXQ+XG4gICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZ3JvdW5kX2JvZHknPlxuICAgICAgICAgICAgPGg0PlByb2plY3RzPC9oND5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2FycmF5T2ZQcm9qZWN0cy5tYXAocHJvamVjdD0+KFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcm9qZWN0LmlkfSBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZVByb2plY3RWaWV3IGtleT17cHJvamVjdC5pZH0gZGF0YT17cHJvamVjdH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bycpO1xuICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6IzQyNDI0MjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1JTtcbiAgICAgICAgICAgICAgICBhbGlnbi10ZXh0OmNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3h7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOjI1JTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2VmZWVlZTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA2cHggNnB4IDE2cHggcmdiKDIwOSwyMDUsMTk5LDAuNSksIC02cHggLTZweCAxNnB4ICByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2tncm91bmRfYm9keXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZmVlZWU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDBweCAxMDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDUwcHggNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuKVxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHMiXX0= */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/pages/projects.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=projects.js.db583764dcf52868a38a.hot-update.js.map
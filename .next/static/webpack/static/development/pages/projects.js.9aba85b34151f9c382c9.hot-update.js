webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/SingleProjectView.js":
/*!*****************************************!*\
  !*** ./components/SingleProjectView.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

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
/* harmony import */ var _components_SingleProjectView__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_SingleProjectView__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/alyonarodin/Desktop/website/pages/projects.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var arrayOfProjects = [{
  id: 1,
  project_github_link: 'red_project_one',
  title: "Game of Life",
  image: "public/game_of_life.png",
  technologies: "JavaScript, HTML, CSS"
}, {
  id: 2,
  project_github_link: 'red_project_two',
  title: "Weather App React",
  image: "public/game_of_life.png",
  technologies: "React, API"
}];

var Projects = function Projects() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3135493725" + " " + 'background_body',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3135493725",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Projects"), __jsx("div", {
    className: "jsx-3135493725",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, arrayOfProjects.map(function (project) {
    return __jsx("div", {
      key: project.id,
      className: "jsx-3135493725" + " " + "box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(_components_SingleProjectView__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: project.id,
      data: project,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3135493725",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Lato');h4.jsx-3135493725{text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:'Lato',sans-serif;color:#424242;text-align:center;margin-bottom:5%;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;padding:5%;}.box.jsx-3135493725{position:relative;margin-left:auto;margin-right:auto;margin-top:50px;margin-bottom:50px;border-radius:4px;width:50%;height:auto;background-color:#efeeee;box-shadow:6px 6px 16px rgb(209,205,199,0.5),-6px -6px 16px rgba(255,255,255,0.5);}.background_body.jsx-3135493725{background-color:#efeeee;background-size:100px 100px;background-position:0 0,50px 50px;height:1000px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvcGFnZXMvcHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNpQixBQUM0RCxBQUVsQixBQVVQLEFBWU0sa0JBWFAsT0FWRSxBQXNCUyxVQVhWLGtCQUNILEFBV29CLGdCQVZqQixrQkFXSixDQVZHLGFBV3JCLEtBVmEsVUFDRSxFQWZvQixVQWdCUCxvQkFmWCxLQWdCd0UsU0FmbkUsa0JBQ0YsaUJBQ0Msc0NBY3JCLDBDQWJlLFdBQ2YiLCJmaWxlIjoiL1VzZXJzL2FseW9uYXJvZGluL0Rlc2t0b3Avd2Vic2l0ZS9wYWdlcy9wcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTaW5nbGVQcm9qZWN0VmlldyBmcm9tICcuLi9jb21wb25lbnRzL1NpbmdsZVByb2plY3RWaWV3J1xuXG5jb25zdCBhcnJheU9mUHJvamVjdHMgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgcHJvamVjdF9naXRodWJfbGluazogJ3JlZF9wcm9qZWN0X29uZScsXG4gICAgICAgIHRpdGxlOiBcIkdhbWUgb2YgTGlmZVwiLFxuICAgICAgICBpbWFnZTogXCJwdWJsaWMvZ2FtZV9vZl9saWZlLnBuZ1wiLFxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwiSmF2YVNjcmlwdCwgSFRNTCwgQ1NTXCIsXG5cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHByb2plY3RfZ2l0aHViX2xpbms6ICdyZWRfcHJvamVjdF90d28nLFxuICAgICAgICB0aXRsZTogXCJXZWF0aGVyIEFwcCBSZWFjdFwiLFxuICAgICAgICBpbWFnZTogXCJwdWJsaWMvZ2FtZV9vZl9saWZlLnBuZ1wiLFxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwiUmVhY3QsIEFQSVwiLFxuXG4gICAgfVxuXVxuY29uc3QgUHJvamVjdHMgPSAoKSA9PihcbiAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFja2dyb3VuZF9ib2R5Jz5cbiAgICAgICAgICAgIDxoND5Qcm9qZWN0czwvaDQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHthcnJheU9mUHJvamVjdHMubWFwKHByb2plY3Q9PihcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJvamVjdC5pZH0gY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVQcm9qZWN0VmlldyBrZXk9e3Byb2plY3QuaWR9IGRhdGE9e3Byb2plY3R9Lz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvJyk7XG4gICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBjb2xvcjojNDI0MjQyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjUlO1xuICAgICAgICAgICAgICAgIGFsaWduLXRleHQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJveHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo0cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6NTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDphdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2VmZWVlZTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA2cHggNnB4IDE2cHggcmdiKDIwOSwyMDUsMTk5LDAuNSksIC02cHggLTZweCAxNnB4ICByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2tncm91bmRfYm9keXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZmVlZWU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDBweCAxMDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDUwcHggNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuKVxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHMiXX0= */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/pages/projects.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=projects.js.9aba85b34151f9c382c9.hot-update.js.map
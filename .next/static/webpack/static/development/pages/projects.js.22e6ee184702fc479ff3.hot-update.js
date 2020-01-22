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
    className: "jsx-960590123" + " " + 'background_body',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-960590123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Projects"), __jsx("div", {
    className: "jsx-960590123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, arrayOfProjects.map(function (project) {
    return __jsx("div", {
      key: project.id,
      className: "jsx-960590123" + " " + "box",
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
    id: "960590123",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Lato');h4.jsx-960590123{text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:'Lato',sans-serif;color:#424242;text-align:center;margin-bottom:5%;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;padding:5%;}.box.jsx-960590123{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-left:auto;margin-right:auto;margin-top:50px;margin-bottom:50px;border-radius:4px;width:25%;height:auto;background-color:#efeeee;box-shadow:6px 6px 16px rgb(209,205,199,0.5),-6px -6px 16px rgba(255,255,255,0.5);}.background_body.jsx-960590123{background-color:#efeeee;background-size:100px 100px;background-position:0 0,50px 50px;height:1000px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvcGFnZXMvcHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NpQixBQUM0RCxBQUVsQixBQVVaLEFBYVcseUJBdEJMLEFBdUJTLDRCQUNPLHFCQWRMLGFBZWhCLGNBQ2xCLGlCQXpCbUMsOEJBQ2xCLGNBQ0ssa0JBQ0YsU0FPQyxRQU5BLFNBT0Msa0JBQ0gsZ0JBQ0csbUJBQ0Qsa0JBVE4sQUFVRixVQUNFLENBVmYsV0FXNEIseUJBQzZELGtGQUN6RiIsImZpbGUiOiIvVXNlcnMvYWx5b25hcm9kaW4vRGVza3RvcC93ZWJzaXRlL3BhZ2VzL3Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFNpbmdsZVByb2plY3RWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvU2luZ2xlUHJvamVjdFZpZXcnXG5cbmNvbnN0IGFycmF5T2ZQcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBwcm9qZWN0X2dpdGh1Yl9saW5rOiAncmVkX3Byb2plY3Rfb25lJyxcbiAgICAgICAgdGl0bGU6IFwiR2FtZSBvZiBMaWZlXCIsXG4gICAgICAgIGltYWdlOiAnL2dhbWVfb2ZfbGlmZS5wbmcnLFxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwiSmF2YVNjcmlwdCwgSFRNTCwgQ1NTXCIsXG5cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHByb2plY3RfZ2l0aHViX2xpbms6ICdyZWRfcHJvamVjdF90d28nLFxuICAgICAgICB0aXRsZTogXCJXZWF0aGVyIEFwcCBSZWFjdFwiLFxuICAgICAgICBpbWFnZTogJy9nYW1lX29mX2xpZmUucG5nJyxcbiAgICAgICAgdGVjaG5vbG9naWVzOiBcIlJlYWN0LCBBUElcIixcblxuICAgIH1cbl1cbmNvbnN0IFByb2plY3RzID0gKCkgPT4oXG4gICAgXG4gICAgPExheW91dD5cbiAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tncm91bmRfYm9keSc+XG4gICAgICAgICAgICA8aDQ+UHJvamVjdHM8L2g0PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7YXJyYXlPZlByb2plY3RzLm1hcChwcm9qZWN0PT4oXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2plY3QuaWR9IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlUHJvamVjdFZpZXcga2V5PXtwcm9qZWN0LmlkfSBkYXRhPXtwcm9qZWN0fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvJyk7XG4gICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBjb2xvcjojNDI0MjQyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjUlO1xuICAgICAgICAgICAgICAgIGFsaWduLXRleHQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJveHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDoyNSU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZWZlZWVlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggMTZweCByZ2IoMjA5LDIwNSwxOTksMC41KSwgLTZweCAtNnB4IDE2cHggIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFja2dyb3VuZF9ib2R5e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2VmZWVlZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4IDEwMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgNTBweCA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4pXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cyJdfQ== */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/pages/projects.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=projects.js.22e6ee184702fc479ff3.hot-update.js.map
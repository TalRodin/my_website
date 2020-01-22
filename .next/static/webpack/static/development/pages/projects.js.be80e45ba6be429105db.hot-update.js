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
  technologies: "React, API, CSS, HTML"
}, {
  id: 3,
  project_github_link: 'red_project_two',
  title: "Number game",
  image: '/game_of_life.png',
  technologies: "JavaScript, CSS, HTML"
}, {
  id: 4,
  project_github_link: 'red_project_one',
  title: "Game of Life",
  image: '/game_of_life.png',
  technologies: "JavaScript, HTML, CSS"
}, {
  id: 5,
  project_github_link: 'red_project_two',
  title: "Weather App React",
  image: '/game_of_life.png',
  technologies: "React, API, CSS, HTML"
}, {
  id: 6,
  project_github_link: 'red_project_two',
  title: "Number game",
  image: '/game_of_life.png',
  technologies: "JavaScript, CSS, HTML"
}];

var Projects = function Projects() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2951338561" + " " + 'background_body',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-2951338561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Projects"), __jsx("div", {
    className: "jsx-2951338561" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, arrayOfProjects.map(function (project) {
    return __jsx("div", {
      key: project.id,
      className: "jsx-2951338561" + " " + "box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(_components_SingleProjectView__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: project.id,
      data: project,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2951338561",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Lato');h4.jsx-2951338561{text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:'Lato',sans-serif;color:#424242;text-align:center;margin-bottom:5%;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;padding:5%;}.box.jsx-2951338561{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;margin-right:auto;margin-top:50px;margin-bottom:50px;border-radius:4px;width:25%;height:auto;background-color:#efeeee;box-shadow:6px 6px 16px rgb(209,205,199,0.5),-6px -6px 16px rgba(255,255,255,0.5);}.background_body.jsx-2951338561{background-color:#efeeee;background-size:100px 100px;background-position:0 0,50px 50px;height:1000px;box-sizing:border-box;}.row.jsx-2951338561{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:80%;margin-left:10%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvcGFnZXMvcHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVpQixBQUM0RCxBQUVsQixBQVVGLEFBYUMsQUFRWCx5QkE5Qk0sQUF1QlMsNEJBQ08scUJBT2hCLGFBTkwsWUFmRCxFQWlCTixpQkExQndCLEtBMkJuQyxvQkFJYyxLQTlCRyxLQStCRSxTQTlCRyxPQStCSCxJQXZCRSxPQVBELFVBUUUsT0FQRCxXQVFGLGdCQUNHLEVBc0J0QixpQkFyQnFCLGtCQUNSLFVBQ0UsTUFYQSxNQVlhLEtBWDVCLG9CQVl5RixrRkFDekYiLCJmaWxlIjoiL1VzZXJzL2FseW9uYXJvZGluL0Rlc2t0b3Avd2Vic2l0ZS9wYWdlcy9wcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTaW5nbGVQcm9qZWN0VmlldyBmcm9tICcuLi9jb21wb25lbnRzL1NpbmdsZVByb2plY3RWaWV3J1xuXG5jb25zdCBhcnJheU9mUHJvamVjdHMgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgcHJvamVjdF9naXRodWJfbGluazogJ3JlZF9wcm9qZWN0X29uZScsXG4gICAgICAgIHRpdGxlOiBcIkdhbWUgb2YgTGlmZVwiLFxuICAgICAgICBpbWFnZTogJy9nYW1lX29mX2xpZmUucG5nJyxcbiAgICAgICAgdGVjaG5vbG9naWVzOiBcIkphdmFTY3JpcHQsIEhUTUwsIENTU1wiLFxuXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBwcm9qZWN0X2dpdGh1Yl9saW5rOiAncmVkX3Byb2plY3RfdHdvJyxcbiAgICAgICAgdGl0bGU6IFwiV2VhdGhlciBBcHAgUmVhY3RcIixcbiAgICAgICAgaW1hZ2U6ICcvZ2FtZV9vZl9saWZlLnBuZycsXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJSZWFjdCwgQVBJLCBDU1MsIEhUTUxcIixcblxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgcHJvamVjdF9naXRodWJfbGluazogJ3JlZF9wcm9qZWN0X3R3bycsXG4gICAgICAgIHRpdGxlOiBcIk51bWJlciBnYW1lXCIsXG4gICAgICAgIGltYWdlOiAnL2dhbWVfb2ZfbGlmZS5wbmcnLFxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwiSmF2YVNjcmlwdCwgQ1NTLCBIVE1MXCIsXG5cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIHByb2plY3RfZ2l0aHViX2xpbms6ICdyZWRfcHJvamVjdF9vbmUnLFxuICAgICAgICB0aXRsZTogXCJHYW1lIG9mIExpZmVcIixcbiAgICAgICAgaW1hZ2U6ICcvZ2FtZV9vZl9saWZlLnBuZycsXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJKYXZhU2NyaXB0LCBIVE1MLCBDU1NcIixcblxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgcHJvamVjdF9naXRodWJfbGluazogJ3JlZF9wcm9qZWN0X3R3bycsXG4gICAgICAgIHRpdGxlOiBcIldlYXRoZXIgQXBwIFJlYWN0XCIsXG4gICAgICAgIGltYWdlOiAnL2dhbWVfb2ZfbGlmZS5wbmcnLFxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwiUmVhY3QsIEFQSSwgQ1NTLCBIVE1MXCIsXG5cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIHByb2plY3RfZ2l0aHViX2xpbms6ICdyZWRfcHJvamVjdF90d28nLFxuICAgICAgICB0aXRsZTogXCJOdW1iZXIgZ2FtZVwiLFxuICAgICAgICBpbWFnZTogJy9nYW1lX29mX2xpZmUucG5nJyxcbiAgICAgICAgdGVjaG5vbG9naWVzOiBcIkphdmFTY3JpcHQsIENTUywgSFRNTFwiLFxuXG4gICAgfVxuXG5dXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+KFxuICAgIFxuICAgIDxMYXlvdXQ+XG4gICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZ3JvdW5kX2JvZHknPlxuICAgICAgICAgICAgPGg0PlByb2plY3RzPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge2FycmF5T2ZQcm9qZWN0cy5tYXAocHJvamVjdD0+KFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJvamVjdC5pZH0gY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVQcm9qZWN0VmlldyBrZXk9e3Byb2plY3QuaWR9IGRhdGE9e3Byb2plY3R9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bycpO1xuICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6IzQyNDI0MjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1JTtcbiAgICAgICAgICAgICAgICBhbGlnbi10ZXh0OmNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3h7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDoyNSU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZWZlZWVlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggMTZweCByZ2IoMjA5LDIwNSwxOTksMC41KSwgLTZweCAtNnB4IDE2cHggIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFja2dyb3VuZF9ib2R5e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2VmZWVlZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4IDEwMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgNTBweCA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwMHB4O1xuXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm93e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwJTtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4pXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cyJdfQ== */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/pages/projects.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=projects.js.be80e45ba6be429105db.hot-update.js.map
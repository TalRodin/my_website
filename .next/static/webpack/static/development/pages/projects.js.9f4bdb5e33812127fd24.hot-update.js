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
    className: "jsx-952776841" + " " + 'background_body',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-952776841",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Projects"), __jsx("div", {
    className: "jsx-952776841" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, arrayOfProjects.map(function (project) {
    return __jsx("div", {
      key: project.id,
      className: "jsx-952776841" + " " + "box",
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
    id: "952776841",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Lato');h4.jsx-952776841{text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:'Lato',sans-serif;color:#424242;text-align:center;margin-bottom:5%;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;padding:5%;}.box.jsx-952776841{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;margin-right:auto;margin-top:50px;margin-bottom:50px;border-radius:4px;width:25%;height:auto;background-color:#efeeee;box-shadow:6px 6px 16px rgb(209,205,199,0.5),-6px -6px 16px rgba(255,255,255,0.5);}.background_body.jsx-952776841{background-color:#efeeee;background-size:100px 100px;background-position:0 0,50px 50px;height:1000px;}.row.jsx-952776841{width:100%;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvcGFnZXMvcHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NpQixBQUM0RCxBQUVsQixBQVVGLEFBYUMsQUFNYixXQUNnQixjQTdCUixBQXVCUyw0QkFDTyxrQ0FDckIsWUFmRCxFQWdCakIsZUFJaUIsRUE3QmtCLDhCQUNsQixjQUNLLFdBUUQsT0FQRCxVQVFFLEFBbUJDLE9BMUJGLFdBUUYsZ0JBQ0csbUJBQ0QsZ0JBaUJyQixFQWhCYSxVQUNFLE1BWEEsTUFZYSxLQVg1QixvQkFZeUYsa0ZBQ3pGIiwiZmlsZSI6Ii9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvcGFnZXMvcHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgU2luZ2xlUHJvamVjdFZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9TaW5nbGVQcm9qZWN0VmlldydcblxuY29uc3QgYXJyYXlPZlByb2plY3RzID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHByb2plY3RfZ2l0aHViX2xpbms6ICdyZWRfcHJvamVjdF9vbmUnLFxuICAgICAgICB0aXRsZTogXCJHYW1lIG9mIExpZmVcIixcbiAgICAgICAgaW1hZ2U6ICcvZ2FtZV9vZl9saWZlLnBuZycsXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJKYXZhU2NyaXB0LCBIVE1MLCBDU1NcIixcblxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgcHJvamVjdF9naXRodWJfbGluazogJ3JlZF9wcm9qZWN0X3R3bycsXG4gICAgICAgIHRpdGxlOiBcIldlYXRoZXIgQXBwIFJlYWN0XCIsXG4gICAgICAgIGltYWdlOiAnL2dhbWVfb2ZfbGlmZS5wbmcnLFxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwiUmVhY3QsIEFQSVwiLFxuXG4gICAgfVxuXVxuY29uc3QgUHJvamVjdHMgPSAoKSA9PihcbiAgICBcbiAgICA8TGF5b3V0PlxuICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFja2dyb3VuZF9ib2R5Jz5cbiAgICAgICAgICAgIDxoND5Qcm9qZWN0czwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICB7YXJyYXlPZlByb2plY3RzLm1hcChwcm9qZWN0PT4oXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2plY3QuaWR9IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlUHJvamVjdFZpZXcga2V5PXtwcm9qZWN0LmlkfSBkYXRhPXtwcm9qZWN0fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvJyk7XG4gICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBjb2xvcjojNDI0MjQyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjUlO1xuICAgICAgICAgICAgICAgIGFsaWduLXRleHQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJveHtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOjI1JTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6YXV0bztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZmVlZWU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCAxNnB4IHJnYigyMDksMjA1LDE5OSwwLjUpLCAtNnB4IC02cHggMTZweCAgcmdiYSgyNTUsMjU1LDI1NSwgMC41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYWNrZ3JvdW5kX2JvZHl7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZWZlZWVlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCA1MHB4IDUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm93e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4pXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cyJdfQ== */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/pages/projects.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=projects.js.9f4bdb5e33812127fd24.hot-update.js.map
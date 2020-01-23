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
    className: "jsx-351677416" + " " + 'background_body',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-351677416",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Projects"), __jsx("div", {
    className: "jsx-351677416" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, arrayOfProjects.map(function (project) {
    return __jsx("div", {
      key: project.id,
      className: "jsx-351677416" + " " + "box",
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
    id: "351677416",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Lato');h4.jsx-351677416{text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:'Lato',sans-serif;color:#424242;text-align:center;margin-bottom:5%;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;padding:5%;}.box.jsx-351677416{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;margin-right:auto;margin-top:50px;margin-bottom:50px;border-radius:1rem;width:90%;height:auto;background-color:#eee;box-shadow: -2.3px -2.3px 3.8px rgba(255,255,255,0.2), -6.3px -6.3px 10.6px rgba(255,255,255,0.3), -15.1px -15.1px 25.6px rgba(255,255,255,0.4), -50px -50px 85px rgba(0255,255,255,0.07),  2.3px 2.3px 3.8px rgba(0,0,0,0.024), 6.3px 6.3px 10.6px rgba(0,0,0,0.035), 15.1px 15.1px 25.6px rgba(0,0,0,0.046), 50px 50px 85px rgba(0,0,0,0.07);}.background_body.jsx-351677416{background-color:#efeeee;background-size:100px 100px;background-position:0 0,50px 50px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;box-sizing:border-box;}.row.jsx-351677416{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:5px;margin-left:15%;margin-right:15%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvcGFnZXMvcHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVpQixBQUM0RCxBQUVsQixBQVVWLEFBdUJTLEFBVVgsYUFDd0IsWUEzQ2xCLEFBaUNTLHdCQVdmLElBVnNCLElBeEJaLEtBbUNQLGdCQUNDLFNBWEYsUUFZbkIsdUJBOUNtQywwQkFzQ3hCLElBckNNLFFBU0EsTUFSSyxJQXFDdEIsY0FwQ29CLGlCQUNDLGlDQU9BLGlCQUNDLGtCQUNILFlBUkosSUFTTyxPQVJ0QixZQVNzQixtQkFDVCxVQUNFLFlBQ1Usc0JBVUQsK1VBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvcGFnZXMvcHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgU2luZ2xlUHJvamVjdFZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9TaW5nbGVQcm9qZWN0VmlldydcblxuY29uc3QgYXJyYXlPZlByb2plY3RzID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHByb2plY3RfZ2l0aHViX2xpbms6ICdyZWRfcHJvamVjdF9vbmUnLFxuICAgICAgICB0aXRsZTogXCJHYW1lIG9mIExpZmVcIixcbiAgICAgICAgaW1hZ2U6ICcvZ2FtZV9vZl9saWZlLnBuZycsXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJKYXZhU2NyaXB0LCBIVE1MLCBDU1NcIixcblxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgcHJvamVjdF9naXRodWJfbGluazogJ3JlZF9wcm9qZWN0X3R3bycsXG4gICAgICAgIHRpdGxlOiBcIldlYXRoZXIgQXBwIFJlYWN0XCIsXG4gICAgICAgIGltYWdlOiAnL2dhbWVfb2ZfbGlmZS5wbmcnLFxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwiUmVhY3QsIEFQSSwgQ1NTLCBIVE1MXCIsXG5cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHByb2plY3RfZ2l0aHViX2xpbms6ICdyZWRfcHJvamVjdF90d28nLFxuICAgICAgICB0aXRsZTogXCJOdW1iZXIgZ2FtZVwiLFxuICAgICAgICBpbWFnZTogJy9nYW1lX29mX2xpZmUucG5nJyxcbiAgICAgICAgdGVjaG5vbG9naWVzOiBcIkphdmFTY3JpcHQsIENTUywgSFRNTFwiLFxuXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBwcm9qZWN0X2dpdGh1Yl9saW5rOiAncmVkX3Byb2plY3Rfb25lJyxcbiAgICAgICAgdGl0bGU6IFwiR2FtZSBvZiBMaWZlXCIsXG4gICAgICAgIGltYWdlOiAnL2dhbWVfb2ZfbGlmZS5wbmcnLFxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwiSmF2YVNjcmlwdCwgSFRNTCwgQ1NTXCIsXG5cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIHByb2plY3RfZ2l0aHViX2xpbms6ICdyZWRfcHJvamVjdF90d28nLFxuICAgICAgICB0aXRsZTogXCJXZWF0aGVyIEFwcCBSZWFjdFwiLFxuICAgICAgICBpbWFnZTogJy9nYW1lX29mX2xpZmUucG5nJyxcbiAgICAgICAgdGVjaG5vbG9naWVzOiBcIlJlYWN0LCBBUEksIENTUywgSFRNTFwiLFxuXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICBwcm9qZWN0X2dpdGh1Yl9saW5rOiAncmVkX3Byb2plY3RfdHdvJyxcbiAgICAgICAgdGl0bGU6IFwiTnVtYmVyIGdhbWVcIixcbiAgICAgICAgaW1hZ2U6ICcvZ2FtZV9vZl9saWZlLnBuZycsXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJKYXZhU2NyaXB0LCBDU1MsIEhUTUxcIixcblxuICAgIH1cblxuXVxuY29uc3QgUHJvamVjdHMgPSAoKSA9PihcbiAgICBcbiAgICA8TGF5b3V0PlxuICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFja2dyb3VuZF9ib2R5Jz5cbiAgICAgICAgICAgIDxoND5Qcm9qZWN0czwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHthcnJheU9mUHJvamVjdHMubWFwKHByb2plY3Q9PihcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2plY3QuaWR9IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlUHJvamVjdFZpZXcga2V5PXtwcm9qZWN0LmlkfSBkYXRhPXtwcm9qZWN0fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8nKTtcbiAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiM0MjQyNDI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NSU7XG4gICAgICAgICAgICAgICAgYWxpZ24tdGV4dDpjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm94e1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjUwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MXJlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDo5MCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZWVlO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6XG4gICAgLTIuM3B4IC0yLjNweCAzLjhweCByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpLFxuICAtNi4zcHggLTYuM3B4IDEwLjZweCByZ2JhKDI1NSwyNTUsMjU1LCAwLjMpLFxuICAtMTUuMXB4IC0xNS4xcHggMjUuNnB4IHJnYmEoMjU1LDI1NSwyNTUsIDAuNCksXG4gIC01MHB4IC01MHB4IDg1cHggcmdiYSgwMjU1LDI1NSwyNTUsIDAuMDcpLFxuICBcbiAgMi4zcHggMi4zcHggMy44cHggcmdiYSgwLCAwLCAwLCAwLjAyNCksXG4gIDYuM3B4IDYuM3B4IDEwLjZweCByZ2JhKDAsIDAsIDAsIDAuMDM1KSxcbiAgMTUuMXB4IDE1LjFweCAyNS42cHggcmdiYSgwLCAwLCAwLCAwLjA0NiksXG4gIDUwcHggNTBweCA4NXB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFja2dyb3VuZF9ib2R5e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2VmZWVlZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4IDEwMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgNTBweCA1MHB4O1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICBcblxuXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm93e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgICAgICAgICBncmlkLWdhcDogNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4pXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cyJdfQ== */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/pages/projects.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=projects.js.85f7effbe6688be98c81.hot-update.js.map
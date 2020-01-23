webpackHotUpdate("static/development/pages/articles.js",{

/***/ "./pages/articles.js":
/*!***************************!*\
  !*** ./pages/articles.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_SingleArticleView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SingleArticleView */ "./components/SingleArticleView.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");








var _jsxFileName = "/Users/alyonarodin/Desktop/website/pages/articles.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;




var arrayOfArticls = [{
  id: 1,
  article: 'red_art_one',
  title: "Build React Project from Scratch",
  keyWords: "React, Webpack, Babel, Development and Production environment",
  date: 'Nov 3, 2019',
  time: '9 min'
}, {
  id: 2,
  article: 'red_art_two',
  title: "Create Database and Normalize it",
  keyWords: "Entity Relationship (ER) Diagram, Database, Normalization, Relational Model",
  date: 'Nov 12, 2019',
  time: '9 min'
}]; // const Articles = () =>(

var Articles =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Articles, _React$Component);

  function Articles() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Articles);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Articles).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Articles, [{
    key: "render",
    value: function render() {
      console.log(this);
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-215600500" + " " + "background_body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("h4", {
        className: "jsx-215600500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Articles"), __jsx("div", {
        className: "jsx-215600500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, articles.map(function (art) {
        return __jsx("div", {
          key: art.id,
          className: "jsx-215600500" + " " + "box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, __jsx(_components_SingleArticleView__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: art.id,
          data: art,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }));
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "215600500",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Lato');h4.jsx-215600500{text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:'Lato',sans-serif;color:#424242;text-align:center;margin-bottom:5%;-webkit-align-text:center;-ms-flex-line-packalign-text:center;align-text:center;padding:5%;}.box.jsx-215600500{position:relative;margin-left:auto;margin-right:auto;margin-top:50px;margin-bottom:50px;border-radius:1rem;width:50%;height:auto;background-color:#eee;box-shadow: -2.3px -2.3px 3.8px rgba(255,255,255,0.2), -6.3px -6.3px 10.6px rgba(255,255,255,0.3), -15.1px -15.1px 25.6px rgba(255,255,255,0.4), -50px -50px 85px rgba(0255,255,255,0.07),  2.3px 2.3px 3.8px rgba(0,0,0,0.024), 6.3px 6.3px 10.6px rgba(0,0,0,0.035), 15.1px 15.1px 25.6px rgba(0,0,0,0.046), 50px 50px 85px rgba(0,0,0,0.07);}.background_body.jsx-215600500{background-color:#eee;background-size:100px 100px;background-position:0 0,50px 50px;height:1000px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHlvbmFyb2Rpbi9EZXNrdG9wL3dlYnNpdGUvcGFnZXMvYXJ0aWNsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VpQixBQUM0RCxBQUVsQixBQVVQLEFBcUJHLGtCQXBCSixJQXFCVyxHQS9CVCxVQVdELGVBcUJpQixHQXBCcEIsZ0JBQ0csZUFvQkosSUFuQkksVUFvQnRCLFNBbkJhLFVBQ0UsQ0Fmb0IsV0FnQlYsbUJBZlIsR0F5Qk8sV0F4QkYsa0JBQ0YsaUJBQ0MsZ0ZBQ04sV0FDZixzTUFxQkEiLCJmaWxlIjoiL1VzZXJzL2FseW9uYXJvZGluL0Rlc2t0b3Avd2Vic2l0ZS9wYWdlcy9hcnRpY2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTaW5nbGVBcnRpY2xlVmlldyBmcm9tICcuLi9jb21wb25lbnRzL1NpbmdsZUFydGljbGVWaWV3J1xuaW1wb3J0IHtsb2FkRmlyZWJhc2V9IGZyb20gJy4uL2xpYi9kYidcblxuY29uc3QgYXJyYXlPZkFydGljbHMgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgYXJ0aWNsZTogJ3JlZF9hcnRfb25lJyxcbiAgICAgICAgdGl0bGU6IFwiQnVpbGQgUmVhY3QgUHJvamVjdCBmcm9tIFNjcmF0Y2hcIixcbiAgICAgICAga2V5V29yZHM6IFwiUmVhY3QsIFdlYnBhY2ssIEJhYmVsLCBEZXZlbG9wbWVudCBhbmQgUHJvZHVjdGlvbiBlbnZpcm9ubWVudFwiLFxuICAgICAgICBkYXRlOiAnTm92IDMsIDIwMTknLFxuICAgICAgICB0aW1lOiAnOSBtaW4nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBhcnRpY2xlOiAncmVkX2FydF90d28nLFxuICAgICAgICB0aXRsZTogXCJDcmVhdGUgRGF0YWJhc2UgYW5kIE5vcm1hbGl6ZSBpdFwiLFxuICAgICAgICBrZXlXb3JkczogXCJFbnRpdHkgUmVsYXRpb25zaGlwIChFUikgRGlhZ3JhbSwgRGF0YWJhc2UsIE5vcm1hbGl6YXRpb24sIFJlbGF0aW9uYWwgTW9kZWxcIixcbiAgICAgICAgZGF0ZTogJ05vdiAxMiwgMjAxOScsXG4gICAgICAgIHRpbWU6ICc5IG1pbidcbiAgICB9XG5dXG4vLyBjb25zdCBBcnRpY2xlcyA9ICgpID0+KFxuY2xhc3MgQXJ0aWNsZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xuICAgICAgICBsZXQgZmlyZWJhc2U9YXdhaXQgbG9hZEZpcmViYXNlKClcblxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ2FydGljbGVzJylcbiAgICAgICAgICAgICAgICAgICAgIC5nZXQoKVxuICAgICAgICAgICAgICAgICAgICAgLnRoZW4oc25hcHNob3Q9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNuYXBzaG90KVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgc25hcHNob3QuZm9yRWFjaChkb2M9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkb2MuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBkb2MuZGF0YSgpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGRvY3VtZW50OiBcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgIHJldHVybiB7YXJ0aWNsZXM6IHJlc3VsdH1cblxuICAgIH1cbiAgICAgICAgcmVuZGVyKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKSAgXG4gICAgcmV0dXJuICg8TGF5b3V0PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kX2JvZHlcIj5cbiAgICAgICAgICAgXG4gICAgICAgICAgICA8aDQ+QXJ0aWNsZXM8L2g0PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7YXJ0aWNsZXMubWFwKGFydD0+KFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXthcnQuaWR9IGNsYXNzTmFtZT1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlQXJ0aWNsZVZpZXcga2V5PXthcnQuaWR9IGRhdGE9e2FydH0vPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8nKTtcbiAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiM0MjQyNDI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NSU7XG4gICAgICAgICAgICAgICAgYWxpZ24tdGV4dDpjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm94e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjFyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6NTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDphdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2VlZTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OlxuICAgIC0yLjNweCAtMi4zcHggMy44cHggcmdiYSgyNTUsMjU1LDI1NSwgMC4yKSxcbiAgLTYuM3B4IC02LjNweCAxMC42cHggcmdiYSgyNTUsMjU1LDI1NSwgMC4zKSxcbiAgLTE1LjFweCAtMTUuMXB4IDI1LjZweCByZ2JhKDI1NSwyNTUsMjU1LCAwLjQpLFxuICAtNTBweCAtNTBweCA4NXB4IHJnYmEoMDI1NSwyNTUsMjU1LCAwLjA3KSxcbiAgXG4gIDIuM3B4IDIuM3B4IDMuOHB4IHJnYmEoMCwgMCwgMCwgMC4wMjQpLFxuICA2LjNweCA2LjNweCAxMC42cHggcmdiYSgwLCAwLCAwLCAwLjAzNSksXG4gIDE1LjFweCAxNS4xcHggMjUuNnB4IHJnYmEoMCwgMCwgMCwgMC4wNDYpLFxuICA1MHB4IDUwcHggODVweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2tncm91bmRfYm9keXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDBweCAxMDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDUwcHggNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0Pilcbn1cbn1cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzIl19 */\n/*@ sourceURL=/Users/alyonarodin/Desktop/website/pages/articles.js */")));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      var firebase, result;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_lib_db__WEBPACK_IMPORTED_MODULE_13__["loadFirebase"])());

            case 2:
              firebase = _context.sent;
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
                firebase.firestore().collection('articles').get().then(function (snapshot) {
                  console.log(snapshot);
                  var data = [];
                  snapshot.forEach(function (doc) {
                    data.push(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
                      id: doc.id
                    }, doc.data()));
                  });
                  resolve(data);
                })["catch"](function (error) {
                  console.error("Error adding document: ", error);
                });
              }));

            case 5:
              result = _context.sent;
              console.log(result);
              return _context.abrupt("return", {
                articles: result
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return Articles;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Articles);

/***/ })

})
//# sourceMappingURL=articles.js.4506e600db06695dad93.hot-update.js.map
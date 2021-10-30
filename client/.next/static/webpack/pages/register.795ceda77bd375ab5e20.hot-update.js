"use strict";
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projet_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/link */ "./node_modules/next/dist/client/link.js");
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_forms_authForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/forms/authForm */ "./components/forms/authForm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\projet\\client\\pages\\register.js",
    _this = undefined,
    _s = $RefreshSig$();












var register = function register() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      name = _useState3[0],
      setName = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      secret = _useState5[0],
      setSecret = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      ok = _useState6[0],
      setOk = _useState6[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_context__WEBPACK_IMPORTED_MODULE_8__.UserContext),
      state = _useContext[0],
      setstate = _useContext[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_projet_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var _yield$axios$post, data;

      return C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              setLoading(true);
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().post("".concat("http://localhost:8000/api", "/register"), {
                name: name,
                email: email,
                password: password,
                secret: secret
              });

            case 5:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              setName('');
              setEmail('');
              setPassword('');
              setSecret('');
              setOk(data.ok);
              setLoading(false);
              _context.next = 19;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](1);
              react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(_context.t0.response.data);
              setLoading(false);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 15]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  if (state && state.token) router.push("/");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: "container-fluid",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "row py-5 img-default  -light",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "col-4 text-center"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "row py-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "col-md-6 offset-md-3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_forms_authForm__WEBPACK_IMPORTED_MODULE_5__.default, {
          handleSubmit: handleSubmit,
          name: name,
          setName: setName,
          email: email,
          setEmail: setEmail,
          password: password,
          setPassword: setPassword,
          secret: secret,
          setSecret: setSecret
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 20
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {
        children: "Loading.."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "col",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_10__.Modal, {
            title: "congrat !",
            visible: ok,
            onCancel: function onCancel() {
              return setOk(false);
            },
            footer: null,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
              children: " you have succefuly registred"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 28
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/login",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                className: "btn btn-primary btn-sm",
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 32
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 28
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 24
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 20
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 20
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "col",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
            className: "text-center",
            children: ["Already registred ?", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/login",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 27
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 23
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 23
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 19
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, _this);
};

_s(register, "w2v7AS0cDJrlphaQTbz0bzE5MtM=");

/* harmony default export */ __webpack_exports__["default"] = (register);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuNzk1Y2VkYTc3YmQzNzVhYjVlMjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLElBQU1TLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkIsa0JBQTJCSCwrQ0FBUSxDQUFDLEtBQUQsQ0FBbkM7QUFBQSxNQUFPSSxPQUFQO0FBQUEsTUFBZUMsVUFBZjs7QUFDQSxtQkFBMEJMLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9NLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUF3QlAsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT1EsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQWdDVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPVSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0QlgsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT1ksTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQW9CYiwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUI7QUFBQSxNQUFPYyxFQUFQO0FBQUEsTUFBV0MsS0FBWDs7QUFDQSxvQkFBMEJoQixpREFBVSxDQUFDRyxpREFBRCxDQUFwQztBQUFBLE1BQU9jLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUdBLE1BQU1DLFlBQVk7QUFBQSxpUEFBRyxpQkFBT0MsQ0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFEaUI7QUFHYmYsY0FBQUEsVUFBVSxDQUFDLElBQUQsQ0FBVjtBQUhhO0FBQUEscUJBSVVYLGlEQUFBLFdBQWM0QiwyQkFBZCxnQkFDbkI7QUFDSWQsZ0JBQUFBLElBQUksRUFBSkEs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QUFBQTtBQUFBO0FBQUEscUJBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUF3REgsQ0FoR0Q7O0dBQU1aOztBQWlHTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9saW5rJztcclxuaW1wb3J0IEF1dGhGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybXMvYXV0aEZvcm0nO1xyXG5pbXBvcnQge3VzZUNvbnRleHQsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0JztcclxuXHJcblxyXG5jb25zdCByZWdpc3RlciA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ109dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWNyZXQsIHNldFNlY3JldF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbb2ssIHNldE9rXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0c3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dClcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSX0vcmVnaXN0ZXJgLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VjcmV0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNldE5hbWUoJycpO1xyXG4gICAgICAgICAgICBzZXRFbWFpbCgnJyk7XHJcbiAgICAgICAgICAgIHNldFBhc3N3b3JkKCcnKTtcclxuICAgICAgICAgICAgc2V0U2VjcmV0KCcnKTtcclxuICAgICAgICAgICAgc2V0T2soZGF0YS5vayk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihlcnIucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpZihzdGF0ZSAmJiBzdGF0ZS50b2tlbikgcm91dGVyLnB1c2goXCIvXCIpXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktNSBpbWctZGVmYXVsdCAgLWxpZ2h0XCIgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgPEF1dGhGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TmFtZT17c2V0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBlbWFpbD17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RW1haWw9e3NldEVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZD17c2V0UGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VjcmV0PXtzZWNyZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VjcmV0PXtzZXRTZWNyZXR9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxoMT5Mb2FkaW5nLi48L2gxPiA6IFxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiY29uZ3JhdCAhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17b2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRPayhmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB5b3UgaGF2ZSBzdWNjZWZ1bHkgcmVnaXN0cmVkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+TG9naW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BbHJlYWR5IHJlZ2lzdHJlZCA/eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5Mb2dpbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXI7Il0sIm5hbWVzIjpbImF4aW9zIiwidG9hc3QiLCJNb2RhbCIsIkxpbmsiLCJBdXRoRm9ybSIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwicmVnaXN0ZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVtYWlsIiwic2V0RW1haWwiLCJuYW1lIiwic2V0TmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzZWNyZXQiLCJzZXRTZWNyZXQiLCJvayIsInNldE9rIiwic3RhdGUiLCJzZXRzdGF0ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJIiwiZGF0YSIsImVycm9yIiwicmVzcG9uc2UiLCJ0b2tlbiIsInJvdXRlciIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9
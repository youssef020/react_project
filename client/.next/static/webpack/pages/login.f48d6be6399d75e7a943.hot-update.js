"use strict";
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_projet_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_projet_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/link */ "./node_modules/next/dist/client/link.js");
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_forms_authForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/forms/authForm */ "./components/forms/authForm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\projet\\client\\pages\\login.js",
    _this = undefined,
    _s = $RefreshSig$();











var Login = function Login() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useContext = useContext(_context__WEBPACK_IMPORTED_MODULE_9__.UserContext),
      _useContext2 = (0,C_projet_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useContext, 2),
      state = _useContext2[0],
      setstate = _useContext2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_projet_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var _yield$axios$post, data;

      return C_projet_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              setLoading(true);
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().post("".concat("http://localhost:8000/api", "/login"), {
                email: email,
                password: password
              });

            case 5:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              //saving in context
              setstate({
                user: data.user,
                token: data.token
              }); //saving in local storage

              window.localStorage.setItem('auth', JSON.stringify(data));
              router.push("/");
              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(_context.t0.response.data);
              setLoading(false);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  if (state && state.token) router.push("/");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: "container-fluid",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: "row py-5 img-default  -light",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "col-4 text-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
          children: "login page"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: "row py-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "col-md-6 offset-md-3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_forms_authForm__WEBPACK_IMPORTED_MODULE_7__.default, {
          handleSubmit: handleSubmit,
          email: email,
          setEmail: setEmail,
          password: password,
          setPassword: setPassword,
          page: "login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "col",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
            className: "text-center",
            children: ["Not yet registred ?", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/register",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                children: "Register"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, _this);
};

_s(Login, "lSrgy4oiKTJWtbWv2hJ4u+p7DT0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZjQ4ZDZiZTYzOTlkNzVlN2E5NDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTU8sS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUVoQixrQkFBOEJQLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9RLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQTBCVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPVSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBZ0NYLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9ZLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0Esb0JBQTBCQyxVQUFVLENBQUNSLGlEQUFELENBQXBDO0FBQUE7QUFBQSxNQUFPUyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFHQSxNQUFNQyxNQUFNLEdBQUdaLHNEQUFTLEVBQXhCOztBQUVBLE1BQU1hLFlBQVk7QUFBQSxpUEFBRyxpQkFBT0MsQ0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFEaUI7QUFHYlgsY0FBQUEsVUFBVSxDQUFDLElBQUQsQ0FBVjtBQUhhO0FBQUEscUJBSVVSLGlEQUFBLFdBQWNxQiwyQkFBZCxhQUNuQjtBQUVJWixnQkFBQUEsS0FBSyxFQUFMQSxLQUZKO0FBR0lFLGdCQUFBQSxRQUFRLEVBQVJBO0FBSEosZUFEbUIsQ0FKVjs7QUFBQTtBQUFBO0FBSUxhLGNBQUFBLElBSksscUJBSUxBLElBSks7QUFZYjtBQUNBVCxjQUFBQSxRQUFRLENBQUM7QUFDTFUsZ0JBQUFBLElBQUksRUFBQ0QsSUFBSSxDQUFDQyxJQURMO0FBRUxDLGdCQUFBQSxLQUFLLEVBQUVGLElBQUksQ0FBQ0U7QUFGUCxlQUFELENBQVIsQ0FiYSxDQWtCYjs7QUFDQUMsY0FBQUEsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixNQUE1QixFQUFtQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWYsQ0FBbkM7QUFDQVIsY0FBQUEsTUFBTSxDQUFDZ0IsSUFBUCxDQUFZLEdBQVo7QUFwQmE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF3QmIvQixjQUFBQSx1REFBQSxDQUFZLFlBQUlpQyxRQUFKLENBQWFWLElBQXpCO0FBQ0FoQixjQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWOztBQXpCYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaUyxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQTZCQSxNQUFHSCxLQUFLLElBQUlBLEtBQUssQ0FBQ1ksS0FBbEIsRUFBeUJWLE1BQU0sQ0FBQ2dCLElBQVAsQ0FBWSxHQUFaO0FBQ3pCLHNCQUVJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFNSTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsK0JBQ0ksK0RBQUMsK0RBQUQ7QUFDSSxzQkFBWSxFQUFFZixZQURsQjtBQUdJLGVBQUssRUFBRVIsS0FIWDtBQUlJLGtCQUFRLEVBQUVDLFFBSmQ7QUFLSSxrQkFBUSxFQUFFQyxRQUxkO0FBTUkscUJBQVcsRUFBRUMsV0FOakI7QUFPSSxjQUFJLEVBQUM7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBaUJJO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxpQ0FDSTtBQUFHLHFCQUFTLEVBQUMsYUFBYjtBQUFBLDhDQUErQyxHQUEvQyxlQUNJLCtEQUFDLDhEQUFEO0FBQU0sa0JBQUksRUFBQyxXQUFYO0FBQUEscUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBdUNILENBL0VEOztHQUFNTjtVQVFhRjs7O0tBUmJFO0FBZ0ZOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9saW5rJztcclxuaW1wb3J0IEF1dGhGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybXMvYXV0aEZvcm0nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dCc7XHJcblxyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0c3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dClcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEl9L2xvZ2luYCxcclxuICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQsXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvL3NhdmluZyBpbiBjb250ZXh0XHJcbiAgICAgICAgICAgIHNldHN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHVzZXI6ZGF0YS51c2VyLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IGRhdGEudG9rZW5cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vc2F2aW5nIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJyxKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihlcnIucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpZihzdGF0ZSAmJiBzdGF0ZS50b2tlbikgcm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS01IGltZy1kZWZhdWx0ICAtbGlnaHRcIiAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5sb2dpbiBwYWdlPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdXRoRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWw9e3NldEVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZD17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkPXtzZXRQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT1cImxvZ2luXCJcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Ob3QgeWV0IHJlZ2lzdHJlZCA/eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5SZWdpc3RlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJ0b2FzdCIsIkxpbmsiLCJBdXRoRm9ybSIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiTG9naW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidXNlQ29udGV4dCIsInN0YXRlIiwic2V0c3RhdGUiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSSIsImRhdGEiLCJ1c2VyIiwidG9rZW4iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJlcnJvciIsInJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==
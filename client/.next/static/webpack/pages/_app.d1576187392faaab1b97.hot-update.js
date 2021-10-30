"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\projet\\client\\components\\Nav.js",
    _this = undefined,
    _s = $RefreshSig$();








var Nav = function Nav() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.UserContext),
      state = _useContext[0],
      setState = _useContext[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      current = _useState[0],
      setCurrent = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
     true && setCurrent(window.location.pathname);
  }, [ true && window.location.pathname]);
  console.log('current =>', current);

  var logout = function logout() {
    window.localStorage.removeItem('auth');
    setState(null);
    router.push("/login");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("nav", {
    className: "nav bg-dark d-flex justify-content-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
        className: "nav-link text-light",
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), state !== null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/user/dashboard",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          className: "nav-link text-light ".concat(current === "/user/dashboard" && "active"),
          children: [state && state.user && state.user.name, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
        onClick: logout,
        className: "nav-link text-light",
        children: "logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, _this)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/login",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          className: "nav-link text-light ".concat(current === "/login" && "active"),
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/register",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          className: "nav-link text-light ".concat(current === "/register" && "active"),
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }, _this)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
};

_s(Nav, "au9efT4fWMiQ5xB2GDWBfuIzPSM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kMTU3NjE4NzM5MmZhYWFiMWI5Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTU0sR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUNkLG9CQUEwQkwsaURBQVUsQ0FBQ0csaURBQUQsQ0FBcEM7QUFBQSxNQUFPRyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxrQkFBNEJMLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFlQyxVQUFmOztBQUdBLE1BQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBeEI7QUFDQ0gsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFJO0FBQ1YsYUFBbUJRLFVBQVUsQ0FBQ0UsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFqQixDQUE3QjtBQUNILEdBRlEsRUFFUCxDQUFDLFNBQW1CRixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQXBDLENBRk8sQ0FBVDtBQUdBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQXlCUCxPQUF6Qjs7QUFDRCxNQUFNUSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCTCxJQUFBQSxNQUFNLENBQUNNLFlBQVAsQ0FBb0JDLFVBQXBCLENBQStCLE1BQS9CO0FBQ0FYLElBQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDQUcsSUFBQUEsTUFBTSxDQUFDUyxJQUFQLENBQVksUUFBWjtBQUNILEdBSkQ7O0FBTUEsc0JBRUk7QUFBSyxhQUFTLEVBQUMsMkNBQWY7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0k7QUFBRyxpQkFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBS0tiLEtBQUssS0FBSyxJQUFWLGdCQUFpQjtBQUFBLDhCQUNkLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLGlCQUFYO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxnQ0FBeUJFLE9BQU8sS0FBSyxpQkFBWixJQUFpQyxRQUExRCxDQUFaO0FBQUEscUJBQW1GRixLQUFLLElBQUlBLEtBQUssQ0FBQ2MsSUFBZixJQUF1QmQsS0FBSyxDQUFDYyxJQUFOLENBQVdDLElBQXJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYyxlQUlkO0FBQUcsZUFBTyxFQUFFTCxNQUFaO0FBQW9CLGlCQUFTLEVBQUMscUJBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSmM7QUFBQSxvQkFBakIsZ0JBTUc7QUFBQSw4QkFDSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxnQ0FBeUJSLE9BQU8sS0FBSyxRQUFaLElBQXdCLFFBQWpELENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxXQUFYO0FBQUEsK0JBQ0k7QUFBRyxtQkFBUyxnQ0FBeUJBLE9BQU8sS0FBSyxXQUFaLElBQTJCLFFBQXBELENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQSxvQkFYUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQTJCSCxDQTNDRDs7R0FBTUg7VUFLYUQ7OztLQUxiQztBQTRDTiwrREFBZUEsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHsgdXNlQ29udGV4dCx1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc3QgW2N1cnJlbnQsc2V0Q3VycmVudF09IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgcHJvY2Vzcy5icm93c2VyICYmIHNldEN1cnJlbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICB9LFtwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXSlcclxuICAgICBjb25zb2xlLmxvZygnY3VycmVudCA9PicsY3VycmVudClcclxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGgnKTtcclxuICAgICAgICBzZXRTdGF0ZShudWxsKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdiBiZy1kYXJrIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayB0ZXh0LWxpZ2h0XCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAge3N0YXRlICE9PSBudWxsID8gPD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BuYXYtbGluayB0ZXh0LWxpZ2h0ICR7Y3VycmVudCA9PT0gXCIvdXNlci9kYXNoYm9hcmRcIiAmJiBcImFjdGl2ZVwifWB9PntzdGF0ZSAmJiBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIubmFtZX0gPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9XCJuYXYtbGluayB0ZXh0LWxpZ2h0XCI+bG9nb3V0PC9hPlxyXG4gICAgICAgICAgICA8Lz4gOlxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YG5hdi1saW5rIHRleHQtbGlnaHQgJHtjdXJyZW50ID09PSBcIi9sb2dpblwiICYmIFwiYWN0aXZlXCJ9YH0+TG9naW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgbmF2LWxpbmsgdGV4dC1saWdodCAke2N1cnJlbnQgPT09IFwiL3JlZ2lzdGVyXCIgJiYgXCJhY3RpdmVcIn1gfT5SZWdpc3RlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8Lz59XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdjsiXSwibmFtZXMiOlsiTGluayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZXJDb250ZXh0IiwidXNlUm91dGVyIiwiTmF2Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwicm91dGVyIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicHVzaCIsInVzZXIiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==
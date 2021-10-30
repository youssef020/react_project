"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserContext": function() { return /* binding */ UserContext; },
/* harmony export */   "UserProvider": function() { return /* binding */ UserProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\projet\\client\\context\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



var UserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();

var UserProvider = function UserProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    user: {},
    token: ""
  }),
      state = _useState[0],
      setState = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setState(window.localStorage.getItem('auth'));
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserContext.Provider, {
    value: [state, setState],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this);
};

_s(UserProvider, "IOdpAcSpsZhskXECyoGU89YElS8=");

_c = UserProvider;


var _c;

$RefreshReg$(_c, "UserProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWY5Yzg4ZjkwZTI2M2Q2NTViNjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1HLFdBQVcsZ0JBQUVGLG9EQUFhLEVBQWhDOztBQUNBLElBQU1HLFlBQVksR0FBQyxTQUFiQSxZQUFhLE9BQWdCO0FBQUE7O0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUMvQixrQkFBeUJMLCtDQUFRLENBQUM7QUFDOUJNLElBQUFBLElBQUksRUFBRyxFQUR1QjtBQUU5QkMsSUFBQUEsS0FBSyxFQUFFO0FBRnVCLEdBQUQsQ0FBakM7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBYUMsUUFBYjs7QUFJQVAsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFJO0FBQ1ZPLElBQUFBLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixNQUE1QixDQUFELENBQVI7QUFFSCxHQUhRLEVBR1AsRUFITyxDQUFUO0FBSUEsc0JBQ0ksOERBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFLENBQUNKLEtBQUQsRUFBT0MsUUFBUCxDQUE3QjtBQUFBLGNBQ0tKO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0FkRDs7R0FBTUQ7O0tBQUFBO0FBZU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSAsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IFVzZXJDb250ZXh0PSBjcmVhdGVDb250ZXh0KCkgO1xyXG5jb25zdCBVc2VyUHJvdmlkZXI9KHtjaGlsZHJlbn0pID0+IHtcclxuICAgIGNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlciA6IHt9LFxyXG4gICAgICAgIHRva2VuOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRTdGF0ZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSlcclxuXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSxzZXRTdGF0ZV19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5leHBvcnQge1VzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXJ9IDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJ0b2tlbiIsInN0YXRlIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==
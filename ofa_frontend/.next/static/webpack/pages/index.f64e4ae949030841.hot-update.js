"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Header = ()=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [sticky, setSticky] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggle = ()=>setIsOpen(!isOpen);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n    });\n    const handleScroll = ()=>{\n        if (window.scrollY > 180) {\n            setSticky(true);\n        } else if (window.scrollY < 180) {\n            setSticky(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n        color: \"dark\",\n        opacity: \"0.3\",\n        light: true,\n        container: \"md\",\n        expand: \"md\",\n        sticky: sticky ? \"top\" : \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarBrand, {\n                href: \"/\",\n                children: \"OFA\"\n            }, void 0, false, {\n                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Header.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarToggler, {\n                onClick: toggle\n            }, void 0, false, {\n                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Header.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                isOpen: isOpen,\n                navbar: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                    className: \"ms-auto\",\n                    navbar: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                        className: \"m-auto\",\n                        navbar: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                                    href: \"/\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Header.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Header.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                                    href: \"#service\",\n                                    children: \"Service\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Header.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Header.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                                    href: \"#app\",\n                                    children: \"Buzz\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Header.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Header.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Header.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Header.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Header.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Header.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"EB1hWeXXzwNobAe9UF3xD+oGEAk=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQVMvQjtBQUVwQixNQUFNVSxTQUFTLElBQU07O0lBQ25CLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDLE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDLE1BQU1jLFNBQVMsSUFBTUgsVUFBVSxDQUFDRDtJQUVoQ1QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkYyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVQztJQUNwQztJQUVBLE1BQU1BLGVBQWUsSUFBTTtRQUN6QixJQUFJRixPQUFPRyxPQUFPLEdBQUcsS0FBSztZQUN4QkwsVUFBVSxJQUFJO1FBQ2hCLE9BQU8sSUFBSUUsT0FBT0csT0FBTyxHQUFHLEtBQUs7WUFDL0JMLFVBQVUsS0FBSztRQUNqQixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ1YsOENBQU1BO1FBQ0xnQixPQUFNO1FBQ05DLFNBQVE7UUFDUkMsS0FBSztRQUNMQyxXQUFVO1FBQ1ZDLFFBQU87UUFDUFgsUUFBUUEsU0FBUyxRQUFRLEVBQUU7OzBCQUUzQiw4REFBQ1AsbURBQVdBO2dCQUFDbUIsTUFBSzswQkFBSTs7Ozs7OzBCQUN0Qiw4REFBQ3BCLHFEQUFhQTtnQkFBQ3FCLFNBQVNYOzs7Ozs7MEJBQ3hCLDhEQUFDWixnREFBUUE7Z0JBQUNRLFFBQVFBO2dCQUFRZ0IsTUFBTTswQkFDOUIsNEVBQUNwQiwyQ0FBR0E7b0JBQUNxQixXQUFVO29CQUFVRCxNQUFNOzhCQUM3Qiw0RUFBQ3BCLDJDQUFHQTt3QkFBQ3FCLFdBQVU7d0JBQVNELE1BQU07OzBDQUM1Qiw4REFBQ25CLCtDQUFPQTswQ0FDTiw0RUFBQ0MsK0NBQU9BO29DQUFDZ0IsTUFBSzs4Q0FBSTs7Ozs7Ozs7Ozs7MENBRXBCLDhEQUFDakIsK0NBQU9BOzBDQUNOLDRFQUFDQywrQ0FBT0E7b0NBQUNnQixNQUFLOzhDQUFXOzs7Ozs7Ozs7OzswQ0FFM0IsOERBQUNqQiwrQ0FBT0E7MENBQ04sNEVBQUNDLCtDQUFPQTtvQ0FBQ2dCLE1BQUs7OENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uQztHQTdDTWY7S0FBQUE7QUErQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQ29sbGFwc2UsXG4gIE5hdmJhcixcbiAgTmF2YmFyVG9nZ2xlcixcbiAgTmF2YmFyQnJhbmQsXG4gIE5hdixcbiAgTmF2SXRlbSxcbiAgTmF2TGluayxcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3RpY2t5LCBzZXRTdGlja3ldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICB9KTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTgwKSB7XG4gICAgICBzZXRTdGlja3kodHJ1ZSk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuc2Nyb2xsWSA8IDE4MCkge1xuICAgICAgc2V0U3RpY2t5KGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyXG4gICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgb3BhY2l0eT1cIjAuM1wiXG4gICAgICBsaWdodFxuICAgICAgY29udGFpbmVyPVwibWRcIlxuICAgICAgZXhwYW5kPVwibWRcIlxuICAgICAgc3RpY2t5PXtzdGlja3kgPyBcInRvcFwiIDogXCJcIn1cbiAgICA+XG4gICAgICA8TmF2YmFyQnJhbmQgaHJlZj1cIi9cIj5PRkE8L05hdmJhckJyYW5kPlxuICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxuICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XG4gICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXMtYXV0b1wiIG5hdmJhcj5cbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm0tYXV0b1wiIG5hdmJhcj5cbiAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL1wiPkhvbWU8L05hdkxpbms+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIiNzZXJ2aWNlXCI+U2VydmljZTwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiI2FwcFwiPkJ1eno8L05hdkxpbms+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvTmF2PlxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8L05hdmJhcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29sbGFwc2UiLCJOYXZiYXIiLCJOYXZiYXJUb2dnbGVyIiwiTmF2YmFyQnJhbmQiLCJOYXYiLCJOYXZJdGVtIiwiTmF2TGluayIsIkhlYWRlciIsImlzT3BlbiIsInNldElzT3BlbiIsInN0aWNreSIsInNldFN0aWNreSIsInRvZ2dsZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxZIiwiY29sb3IiLCJvcGFjaXR5IiwibGlnaHQiLCJjb250YWluZXIiLCJleHBhbmQiLCJocmVmIiwib25DbGljayIsIm5hdmJhciIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});
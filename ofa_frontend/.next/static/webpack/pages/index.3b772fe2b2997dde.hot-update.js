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

/***/ "./components/Services.js":
/*!********************************!*\
  !*** ./components/Services.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst items = [\n    {\n        title: \"QR Generator\",\n        src: \"https://picsum.photos/id/123/1200/400\",\n        altText: \"Slide 1\",\n        caption: \"Slide 1\",\n        key: 1\n    },\n    {\n        title: \"Manga Reader\",\n        src: \"https://picsum.photos/id/456/1200/400\",\n        altText: \"Slide 2\",\n        caption: \"Slide 2\",\n        key: 2\n    },\n    {\n        title: \"Chat App\",\n        src: \"https://picsum.photos/id/678/1200/400\",\n        altText: \"Slide 3\",\n        caption: \"Slide 3\",\n        key: 3\n    }\n];\nconst Services = (args)=>{\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [animating, setAnimating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const next = ()=>{\n        if (animating) return;\n        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;\n        setActiveIndex(nextIndex);\n    };\n    const previous = ()=>{\n        if (animating) return;\n        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;\n        setActiveIndex(nextIndex);\n    };\n    const goToIndex = (newIndex)=>{\n        if (animating) return;\n        setActiveIndex(newIndex);\n    };\n    const slides = items.map((item)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n            onExiting: ()=>setAnimating(true),\n            onExited: ()=>setAnimating(false),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                        lg: 6,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Hands-on learning via real-life\"\n                            }, void 0, false, {\n                                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                        lg: 6,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: item.src,\n                            alt: item.altText\n                        }, void 0, false, {\n                            fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined)\n        }, item.src, false, {\n            fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"section position-relative\",\n        id: \"service\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center\",\n                children: \"Our Services\"\n            }, void 0, false, {\n                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                lineNumber: 86,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n                className: \"justify-content-center my-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n                    activeIndex: activeIndex,\n                    next: next,\n                    previous: previous,\n                    ...args,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselIndicators, {\n                            items: items,\n                            activeIndex: activeIndex,\n                            onClickHandler: goToIndex\n                        }, void 0, false, {\n                            fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined),\n                        slides,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselControl, {\n                            direction: \"prev\",\n                            directionText: \"Previous\",\n                            onClickHandler: previous\n                        }, void 0, false, {\n                            fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselControl, {\n                            direction: \"next\",\n                            directionText: \"Next\",\n                            onClickHandler: next\n                        }, void 0, false, {\n                            fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Services, \"FYd3Lqf74+dQScd+D3/2SfzV0cE=\");\n_c = Services;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Services);\nvar _c;\n$RefreshReg$(_c, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlcnZpY2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDO0FBVWxCO0FBRXBCLE1BQU1VLFFBQVE7SUFDWjtRQUNFQyxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLEtBQUs7SUFDUDtJQUNBO1FBQ0VKLE9BQU87UUFDUEMsS0FBSztRQUNMQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsS0FBSztJQUNQO0lBQ0E7UUFDRUosT0FBTztRQUNQQyxLQUFLO1FBQ0xDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxLQUFLO0lBQ1A7Q0FDRDtBQUVELE1BQU1DLFdBQVcsQ0FBQ0MsT0FBUzs7SUFDekIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNtQixXQUFXQyxhQUFhLEdBQUdwQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhELE1BQU1xQixPQUFPLElBQU07UUFDakIsSUFBSUYsV0FBVztRQUNmLE1BQU1HLFlBQVlMLGdCQUFnQlIsTUFBTWMsTUFBTSxHQUFHLElBQUksSUFBSU4sY0FBYyxDQUFDO1FBQ3hFQyxlQUFlSTtJQUNqQjtJQUVBLE1BQU1FLFdBQVcsSUFBTTtRQUNyQixJQUFJTCxXQUFXO1FBQ2YsTUFBTUcsWUFBWUwsZ0JBQWdCLElBQUlSLE1BQU1jLE1BQU0sR0FBRyxJQUFJTixjQUFjLENBQUM7UUFDeEVDLGVBQWVJO0lBQ2pCO0lBRUEsTUFBTUcsWUFBWSxDQUFDQyxXQUFhO1FBQzlCLElBQUlQLFdBQVc7UUFDZkQsZUFBZVE7SUFDakI7SUFFQSxNQUFNQyxTQUFTbEIsTUFBTW1CLEdBQUcsQ0FBQyxDQUFDQyxPQUFTO1FBQ2pDLHFCQUNFLDhEQUFDeEIsb0RBQVlBO1lBQ1h5QixXQUFXLElBQU1WLGFBQWEsSUFBSTtZQUNsQ1csVUFBVSxJQUFNWCxhQUFhLEtBQUs7c0JBR2xDLDRFQUFDbEIsMkNBQUdBOztrQ0FDRiw4REFBQ0MsMkNBQUdBO3dCQUFDNkIsSUFBSTs7MENBQ1AsOERBQUNDOzBDQUFJSixLQUFLbkIsS0FBSzs7Ozs7OzBDQUNmLDhEQUFDd0I7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FFTCw4REFBQy9CLDJDQUFHQTt3QkFBQzZCLElBQUk7a0NBR1QsNEVBQUNHOzRCQUFJeEIsS0FBS2tCLEtBQUtsQixHQUFHOzRCQUFFeUIsS0FBS1AsS0FBS2pCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O1dBVmxDaUIsS0FBS2xCLEdBQUc7Ozs7O0lBbUJuQjtJQUVBLHFCQUNFLDhEQUFDMEI7UUFBUUMsV0FBVTtRQUE0QkMsSUFBRzs7MEJBQ2xELDhEQUFDQztnQkFBR0YsV0FBVTswQkFBYzs7Ozs7OzBCQUMxQiw4REFBQ3JDLGlEQUFTQTtnQkFBQ3FDLFdBQVU7MEJBRW5CLDRFQUFDbEMsZ0RBQVFBO29CQUNQYSxhQUFhQTtvQkFDYkksTUFBTUE7b0JBQ05HLFVBQVVBO29CQUNULEdBQUdSLElBQUk7O3NDQUVSLDhEQUFDVCwwREFBa0JBOzRCQUNqQkUsT0FBT0E7NEJBQ1BRLGFBQWFBOzRCQUNid0IsZ0JBQWdCaEI7Ozs7Ozt3QkFFakJFO3NDQUNELDhEQUFDckIsdURBQWVBOzRCQUNkb0MsV0FBVTs0QkFDVkMsZUFBYzs0QkFDZEYsZ0JBQWdCakI7Ozs7OztzQ0FFbEIsOERBQUNsQix1REFBZUE7NEJBQ2RvQyxXQUFVOzRCQUNWQyxlQUFjOzRCQUNkRixnQkFBZ0JwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUI7R0E5RU1OO0tBQUFBO0FBK0VOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VydmljZXMuanM/YWMzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFJvdywgXG4gIENvbCxcbiAgQ2Fyb3VzZWwsXG4gIENhcm91c2VsSXRlbSxcbiAgQ2Fyb3VzZWxDb250cm9sLFxuICBDYXJvdXNlbEluZGljYXRvcnMsXG4gIENhcm91c2VsQ2FwdGlvbixcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuY29uc3QgaXRlbXMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJRUiBHZW5lcmF0b3JcIixcbiAgICBzcmM6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEyMy8xMjAwLzQwMFwiLFxuICAgIGFsdFRleHQ6IFwiU2xpZGUgMVwiLFxuICAgIGNhcHRpb246IFwiU2xpZGUgMVwiLFxuICAgIGtleTogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk1hbmdhIFJlYWRlclwiLFxuICAgIHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvNDU2LzEyMDAvNDAwXCIsXG4gICAgYWx0VGV4dDogXCJTbGlkZSAyXCIsXG4gICAgY2FwdGlvbjogXCJTbGlkZSAyXCIsXG4gICAga2V5OiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ2hhdCBBcHBcIixcbiAgICBzcmM6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzY3OC8xMjAwLzQwMFwiLFxuICAgIGFsdFRleHQ6IFwiU2xpZGUgM1wiLFxuICAgIGNhcHRpb246IFwiU2xpZGUgM1wiLFxuICAgIGtleTogMyxcbiAgfSxcbl07XG5cbmNvbnN0IFNlcnZpY2VzID0gKGFyZ3MpID0+IHtcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2FuaW1hdGluZywgc2V0QW5pbWF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgIGlmIChhbmltYXRpbmcpIHJldHVybjtcbiAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSA/IDAgOiBhY3RpdmVJbmRleCArIDE7XG4gICAgc2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KTtcbiAgfTtcblxuICBjb25zdCBwcmV2aW91cyA9ICgpID0+IHtcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XG4gICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPT09IDAgPyBpdGVtcy5sZW5ndGggLSAxIDogYWN0aXZlSW5kZXggLSAxO1xuICAgIHNldEFjdGl2ZUluZGV4KG5leHRJbmRleCk7XG4gIH07XG5cbiAgY29uc3QgZ29Ub0luZGV4ID0gKG5ld0luZGV4KSA9PiB7XG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUluZGV4KG5ld0luZGV4KTtcbiAgfTtcblxuICBjb25zdCBzbGlkZXMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPENhcm91c2VsSXRlbVxuICAgICAgICBvbkV4aXRpbmc9eygpID0+IHNldEFuaW1hdGluZyh0cnVlKX1cbiAgICAgICAgb25FeGl0ZWQ9eygpID0+IHNldEFuaW1hdGluZyhmYWxzZSl9XG4gICAgICAgIGtleT17aXRlbS5zcmN9XG4gICAgICA+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCBsZz17Nn0+XG4gICAgICAgICAgICA8aDI+e2l0ZW0udGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxwPkhhbmRzLW9uIGxlYXJuaW5nIHZpYSByZWFsLWxpZmU8L3A+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBsZz17Nn0+XG5cbiAgICAgICAgXG4gICAgICAgICAgPGltZyBzcmM9e2l0ZW0uc3JjfSBhbHQ9e2l0ZW0uYWx0VGV4dH0gLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIHsvKiA8Q2Fyb3VzZWxDYXB0aW9uXG4gICAgICAgICAgY2FwdGlvblRleHQ9e2l0ZW0uY2FwdGlvbn1cbiAgICAgICAgICBjYXB0aW9uSGVhZGVyPXtpdGVtLmNhcHRpb259XG4gICAgICAgIC8+ICovfVxuICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHBvc2l0aW9uLXJlbGF0aXZlXCIgaWQ9XCJzZXJ2aWNlXCI+XG4gICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+T3VyIFNlcnZpY2VzPC9oMT5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlciBteS01XCI+XG5cbiAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxuICAgICAgICAgIG5leHQ9e25leHR9XG4gICAgICAgICAgcHJldmlvdXM9e3ByZXZpb3VzfVxuICAgICAgICAgIHsuLi5hcmdzfVxuICAgICAgICA+XG4gICAgICAgICAgPENhcm91c2VsSW5kaWNhdG9yc1xuICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxuICAgICAgICAgICAgb25DbGlja0hhbmRsZXI9e2dvVG9JbmRleH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtzbGlkZXN9XG4gICAgICAgICAgPENhcm91c2VsQ29udHJvbFxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicHJldlwiXG4gICAgICAgICAgICBkaXJlY3Rpb25UZXh0PVwiUHJldmlvdXNcIlxuICAgICAgICAgICAgb25DbGlja0hhbmRsZXI9e3ByZXZpb3VzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcm91c2VsQ29udHJvbFxuICAgICAgICAgICAgZGlyZWN0aW9uPVwibmV4dFwiXG4gICAgICAgICAgICBkaXJlY3Rpb25UZXh0PVwiTmV4dFwiXG4gICAgICAgICAgICBvbkNsaWNrSGFuZGxlcj17bmV4dH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJDYXJvdXNlbCIsIkNhcm91c2VsSXRlbSIsIkNhcm91c2VsQ29udHJvbCIsIkNhcm91c2VsSW5kaWNhdG9ycyIsIkNhcm91c2VsQ2FwdGlvbiIsIml0ZW1zIiwidGl0bGUiLCJzcmMiLCJhbHRUZXh0IiwiY2FwdGlvbiIsImtleSIsIlNlcnZpY2VzIiwiYXJncyIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJhbmltYXRpbmciLCJzZXRBbmltYXRpbmciLCJuZXh0IiwibmV4dEluZGV4IiwibGVuZ3RoIiwicHJldmlvdXMiLCJnb1RvSW5kZXgiLCJuZXdJbmRleCIsInNsaWRlcyIsIm1hcCIsIml0ZW0iLCJvbkV4aXRpbmciLCJvbkV4aXRlZCIsImxnIiwiaDIiLCJwIiwiaW1nIiwiYWx0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImlkIiwiaDEiLCJvbkNsaWNrSGFuZGxlciIsImRpcmVjdGlvbiIsImRpcmVjdGlvblRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Services.js\n"));

/***/ })

});
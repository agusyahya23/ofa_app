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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst items = [\n    {\n        title: \"QR Generator\",\n        desc: \"\",\n        src: \"https://picsum.photos/id/123/1200/400\",\n        altText: \"Slide 1\",\n        key: 1\n    },\n    {\n        title: \"Manga Reader\",\n        desc: \"Introducing Manga Reader - the ultimate manga reader app for manga enthusiasts! Dive into a world of captivating stories, vibrant artwork, and immersive storytelling with Manga Reader. With an extensive collection of popular manga series from various genres, Manga Reader offers a seamless reading experience that brings your favorite manga to life on your device. \",\n        src: \"https://picsum.photos/id/456/1200/400\",\n        altText: \"Slide 2\",\n        key: 2\n    },\n    {\n        title: \"Chat App\",\n        src: \"https://picsum.photos/id/678/1200/400\",\n        altText: \"Slide 3\",\n        key: 3\n    }\n];\nconst Services = (args)=>{\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [animating, setAnimating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const next = ()=>{\n        if (animating) return;\n        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;\n        setActiveIndex(nextIndex);\n    };\n    const previous = ()=>{\n        if (animating) return;\n        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;\n        setActiveIndex(nextIndex);\n    };\n    const goToIndex = (newIndex)=>{\n        if (animating) return;\n        setActiveIndex(newIndex);\n    };\n    const slides = items.map((item)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n            onExiting: ()=>setAnimating(true),\n            onExited: ()=>setAnimating(false),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                        lg: 6,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.desc\n                            }, void 0, false, {\n                                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                        lg: 6,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: item.src,\n                            alt: item.altText\n                        }, void 0, false, {\n                            fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined)\n        }, item.src, false, {\n            fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"section position-relative\",\n        id: \"service\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center\",\n                children: \"Our Services\"\n            }, void 0, false, {\n                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                lineNumber: 85,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n                className: \"justify-content-center my-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n                    activeIndex: activeIndex,\n                    next: next,\n                    previous: previous,\n                    ...args,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselIndicators, {\n                            items: items,\n                            activeIndex: activeIndex,\n                            onClickHandler: goToIndex\n                        }, void 0, false, {\n                            fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined),\n                        slides,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselControl, {\n                            direction: \"prev\",\n                            directionText: \"Previous\",\n                            onClickHandler: previous\n                        }, void 0, false, {\n                            fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselControl, {\n                            direction: \"next\",\n                            directionText: \"Next\",\n                            onClickHandler: next\n                        }, void 0, false, {\n                            fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Services, \"FYd3Lqf74+dQScd+D3/2SfzV0cE=\");\n_c = Services;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Services);\nvar _c;\n$RefreshReg$(_c, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlcnZpY2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDO0FBVWxCO0FBRXBCLE1BQU1VLFFBQVE7SUFDWjtRQUNFQyxPQUFPO1FBQ1BDLE1BQUs7UUFDTEMsS0FBSztRQUNMQyxTQUFTO1FBQ1RDLEtBQUs7SUFDUDtJQUNBO1FBQ0VKLE9BQU87UUFDUEMsTUFBSztRQUNMQyxLQUFLO1FBQ0xDLFNBQVM7UUFDVEMsS0FBSztJQUNQO0lBQ0E7UUFDRUosT0FBTztRQUNQRSxLQUFLO1FBQ0xDLFNBQVM7UUFDVEMsS0FBSztJQUNQO0NBQ0Q7QUFFRCxNQUFNQyxXQUFXLENBQUNDLE9BQVM7O0lBQ3pCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHbEIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDbUIsV0FBV0MsYUFBYSxHQUFHcEIsK0NBQVFBLENBQUMsS0FBSztJQUVoRCxNQUFNcUIsT0FBTyxJQUFNO1FBQ2pCLElBQUlGLFdBQVc7UUFDZixNQUFNRyxZQUFZTCxnQkFBZ0JSLE1BQU1jLE1BQU0sR0FBRyxJQUFJLElBQUlOLGNBQWMsQ0FBQztRQUN4RUMsZUFBZUk7SUFDakI7SUFFQSxNQUFNRSxXQUFXLElBQU07UUFDckIsSUFBSUwsV0FBVztRQUNmLE1BQU1HLFlBQVlMLGdCQUFnQixJQUFJUixNQUFNYyxNQUFNLEdBQUcsSUFBSU4sY0FBYyxDQUFDO1FBQ3hFQyxlQUFlSTtJQUNqQjtJQUVBLE1BQU1HLFlBQVksQ0FBQ0MsV0FBYTtRQUM5QixJQUFJUCxXQUFXO1FBQ2ZELGVBQWVRO0lBQ2pCO0lBRUEsTUFBTUMsU0FBU2xCLE1BQU1tQixHQUFHLENBQUMsQ0FBQ0MsT0FBUztRQUNqQyxxQkFDRSw4REFBQ3hCLG9EQUFZQTtZQUNYeUIsV0FBVyxJQUFNVixhQUFhLElBQUk7WUFDbENXLFVBQVUsSUFBTVgsYUFBYSxLQUFLO3NCQUdsQyw0RUFBQ2xCLDJDQUFHQTs7a0NBQ0YsOERBQUNDLDJDQUFHQTt3QkFBQzZCLElBQUk7OzBDQUNQLDhEQUFDQzswQ0FBSUosS0FBS25CLEtBQUs7Ozs7OzswQ0FDZiw4REFBQ3dCOzBDQUFHTCxLQUFLbEIsSUFBSTs7Ozs7Ozs7Ozs7O2tDQUVmLDhEQUFDUiwyQ0FBR0E7d0JBQUM2QixJQUFJO2tDQUdULDRFQUFDRzs0QkFBSXZCLEtBQUtpQixLQUFLakIsR0FBRzs0QkFBRXdCLEtBQUtQLEtBQUtoQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztXQVZsQ2dCLEtBQUtqQixHQUFHOzs7OztJQW1CbkI7SUFFQSxxQkFDRSw4REFBQ3lCO1FBQVFDLFdBQVU7UUFBNEJDLElBQUc7OzBCQUNsRCw4REFBQ0M7Z0JBQUdGLFdBQVU7MEJBQWM7Ozs7OzswQkFDMUIsOERBQUNyQyxpREFBU0E7Z0JBQUNxQyxXQUFVOzBCQUVuQiw0RUFBQ2xDLGdEQUFRQTtvQkFDUGEsYUFBYUE7b0JBQ2JJLE1BQU1BO29CQUNORyxVQUFVQTtvQkFDVCxHQUFHUixJQUFJOztzQ0FFUiw4REFBQ1QsMERBQWtCQTs0QkFDakJFLE9BQU9BOzRCQUNQUSxhQUFhQTs0QkFDYndCLGdCQUFnQmhCOzs7Ozs7d0JBRWpCRTtzQ0FDRCw4REFBQ3JCLHVEQUFlQTs0QkFDZG9DLFdBQVU7NEJBQ1ZDLGVBQWM7NEJBQ2RGLGdCQUFnQmpCOzs7Ozs7c0NBRWxCLDhEQUFDbEIsdURBQWVBOzRCQUNkb0MsV0FBVTs0QkFDVkMsZUFBYzs0QkFDZEYsZ0JBQWdCcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVCO0dBOUVNTjtLQUFBQTtBQStFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlcnZpY2VzLmpzP2FjMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSb3csIFxuICBDb2wsXG4gIENhcm91c2VsLFxuICBDYXJvdXNlbEl0ZW0sXG4gIENhcm91c2VsQ29udHJvbCxcbiAgQ2Fyb3VzZWxJbmRpY2F0b3JzLFxuICBDYXJvdXNlbENhcHRpb24sXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmNvbnN0IGl0ZW1zID0gW1xuICB7XG4gICAgdGl0bGU6IFwiUVIgR2VuZXJhdG9yXCIsXG4gICAgZGVzYzpcIlwiLFxuICAgIHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTIzLzEyMDAvNDAwXCIsXG4gICAgYWx0VGV4dDogXCJTbGlkZSAxXCIsXG4gICAga2V5OiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTWFuZ2EgUmVhZGVyXCIsXG4gICAgZGVzYzpcIkludHJvZHVjaW5nIE1hbmdhIFJlYWRlciAtIHRoZSB1bHRpbWF0ZSBtYW5nYSByZWFkZXIgYXBwIGZvciBtYW5nYSBlbnRodXNpYXN0cyEgRGl2ZSBpbnRvIGEgd29ybGQgb2YgY2FwdGl2YXRpbmcgc3RvcmllcywgdmlicmFudCBhcnR3b3JrLCBhbmQgaW1tZXJzaXZlIHN0b3J5dGVsbGluZyB3aXRoIE1hbmdhIFJlYWRlci4gV2l0aCBhbiBleHRlbnNpdmUgY29sbGVjdGlvbiBvZiBwb3B1bGFyIG1hbmdhIHNlcmllcyBmcm9tIHZhcmlvdXMgZ2VucmVzLCBNYW5nYSBSZWFkZXIgb2ZmZXJzIGEgc2VhbWxlc3MgcmVhZGluZyBleHBlcmllbmNlIHRoYXQgYnJpbmdzIHlvdXIgZmF2b3JpdGUgbWFuZ2EgdG8gbGlmZSBvbiB5b3VyIGRldmljZS4gXCIsXG4gICAgc3JjOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC80NTYvMTIwMC80MDBcIixcbiAgICBhbHRUZXh0OiBcIlNsaWRlIDJcIixcbiAgICBrZXk6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDaGF0IEFwcFwiLFxuICAgIHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvNjc4LzEyMDAvNDAwXCIsXG4gICAgYWx0VGV4dDogXCJTbGlkZSAzXCIsXG4gICAga2V5OiAzLFxuICB9LFxuXTtcblxuY29uc3QgU2VydmljZXMgPSAoYXJncykgPT4ge1xuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYW5pbWF0aW5nLCBzZXRBbmltYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2ZUluZGV4ID09PSBpdGVtcy5sZW5ndGggLSAxID8gMCA6IGFjdGl2ZUluZGV4ICsgMTtcbiAgICBzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IHByZXZpb3VzID0gKCkgPT4ge1xuICAgIGlmIChhbmltYXRpbmcpIHJldHVybjtcbiAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA9PT0gMCA/IGl0ZW1zLmxlbmd0aCAtIDEgOiBhY3RpdmVJbmRleCAtIDE7XG4gICAgc2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KTtcbiAgfTtcblxuICBjb25zdCBnb1RvSW5kZXggPSAobmV3SW5kZXgpID0+IHtcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XG4gICAgc2V0QWN0aXZlSW5kZXgobmV3SW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IHNsaWRlcyA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8Q2Fyb3VzZWxJdGVtXG4gICAgICAgIG9uRXhpdGluZz17KCkgPT4gc2V0QW5pbWF0aW5nKHRydWUpfVxuICAgICAgICBvbkV4aXRlZD17KCkgPT4gc2V0QW5pbWF0aW5nKGZhbHNlKX1cbiAgICAgICAga2V5PXtpdGVtLnNyY31cbiAgICAgID5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIGxnPXs2fT5cbiAgICAgICAgICAgIDxoMj57aXRlbS50aXRsZX08L2gyPlxuICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY308L3A+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBsZz17Nn0+XG5cbiAgICAgICAgXG4gICAgICAgICAgPGltZyBzcmM9e2l0ZW0uc3JjfSBhbHQ9e2l0ZW0uYWx0VGV4dH0gLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIHsvKiA8Q2Fyb3VzZWxDYXB0aW9uXG4gICAgICAgICAgY2FwdGlvblRleHQ9e2l0ZW0uY2FwdGlvbn1cbiAgICAgICAgICBjYXB0aW9uSGVhZGVyPXtpdGVtLmNhcHRpb259XG4gICAgICAgIC8+ICovfVxuICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHBvc2l0aW9uLXJlbGF0aXZlXCIgaWQ9XCJzZXJ2aWNlXCI+XG4gICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+T3VyIFNlcnZpY2VzPC9oMT5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlciBteS01XCI+XG5cbiAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxuICAgICAgICAgIG5leHQ9e25leHR9XG4gICAgICAgICAgcHJldmlvdXM9e3ByZXZpb3VzfVxuICAgICAgICAgIHsuLi5hcmdzfVxuICAgICAgICA+XG4gICAgICAgICAgPENhcm91c2VsSW5kaWNhdG9yc1xuICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxuICAgICAgICAgICAgb25DbGlja0hhbmRsZXI9e2dvVG9JbmRleH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtzbGlkZXN9XG4gICAgICAgICAgPENhcm91c2VsQ29udHJvbFxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicHJldlwiXG4gICAgICAgICAgICBkaXJlY3Rpb25UZXh0PVwiUHJldmlvdXNcIlxuICAgICAgICAgICAgb25DbGlja0hhbmRsZXI9e3ByZXZpb3VzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcm91c2VsQ29udHJvbFxuICAgICAgICAgICAgZGlyZWN0aW9uPVwibmV4dFwiXG4gICAgICAgICAgICBkaXJlY3Rpb25UZXh0PVwiTmV4dFwiXG4gICAgICAgICAgICBvbkNsaWNrSGFuZGxlcj17bmV4dH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJDYXJvdXNlbCIsIkNhcm91c2VsSXRlbSIsIkNhcm91c2VsQ29udHJvbCIsIkNhcm91c2VsSW5kaWNhdG9ycyIsIkNhcm91c2VsQ2FwdGlvbiIsIml0ZW1zIiwidGl0bGUiLCJkZXNjIiwic3JjIiwiYWx0VGV4dCIsImtleSIsIlNlcnZpY2VzIiwiYXJncyIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJhbmltYXRpbmciLCJzZXRBbmltYXRpbmciLCJuZXh0IiwibmV4dEluZGV4IiwibGVuZ3RoIiwicHJldmlvdXMiLCJnb1RvSW5kZXgiLCJuZXdJbmRleCIsInNsaWRlcyIsIm1hcCIsIml0ZW0iLCJvbkV4aXRpbmciLCJvbkV4aXRlZCIsImxnIiwiaDIiLCJwIiwiaW1nIiwiYWx0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImlkIiwiaDEiLCJvbkNsaWNrSGFuZGxlciIsImRpcmVjdGlvbiIsImRpcmVjdGlvblRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Services.js\n"));

/***/ })

});
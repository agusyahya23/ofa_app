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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst items = [\n    {\n        title: \"QR Generator\",\n        desc: \"\",\n        src: \"https://picsum.photos/id/123/1200/400\",\n        altText: \"Slide 1\",\n        key: 1\n    },\n    {\n        title: \"Manga Reader\",\n        desc: \"Introducing MangaVerse - the ultimate manga reader app for manga enthusiasts! Dive into a world of captivating stories, vibrant artwork, and immersive storytelling with MangaVerse. With an extensive collection of popular manga series from various genres, MangaVerse offers a seamless reading experience that brings your favorite manga to life on your device. Featuring a user-friendly interface and easy-to-navigate design, MangaVerse makes it a breeze to discover, browse, and read manga. Choose from a wide range of genres, including action, romance, fantasy, adventure, horror, and more, and explore a vast library of manga titles from both established and up-and-coming manga artists.\",\n        src: \"https://picsum.photos/id/456/1200/400\",\n        altText: \"Slide 2\",\n        key: 2\n    },\n    {\n        title: \"Chat App\",\n        src: \"https://picsum.photos/id/678/1200/400\",\n        altText: \"Slide 3\",\n        key: 3\n    }\n];\nconst Services = (args)=>{\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [animating, setAnimating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const next = ()=>{\n        if (animating) return;\n        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;\n        setActiveIndex(nextIndex);\n    };\n    const previous = ()=>{\n        if (animating) return;\n        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;\n        setActiveIndex(nextIndex);\n    };\n    const goToIndex = (newIndex)=>{\n        if (animating) return;\n        setActiveIndex(newIndex);\n    };\n    const slides = items.map((item)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n            onExiting: ()=>setAnimating(true),\n            onExited: ()=>setAnimating(false),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                        lg: 6,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.desc\n                            }, void 0, false, {\n                                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                        lg: 6,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: item.src,\n                            alt: item.altText\n                        }, void 0, false, {\n                            fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined)\n        }, item.src, false, {\n            fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"section position-relative\",\n        id: \"service\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center\",\n                children: \"Our Services\"\n            }, void 0, false, {\n                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                lineNumber: 85,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n                className: \"justify-content-center my-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n                    activeIndex: activeIndex,\n                    next: next,\n                    previous: previous,\n                    ...args,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselIndicators, {\n                            items: items,\n                            activeIndex: activeIndex,\n                            onClickHandler: goToIndex\n                        }, void 0, false, {\n                            fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined),\n                        slides,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselControl, {\n                            direction: \"prev\",\n                            directionText: \"Previous\",\n                            onClickHandler: previous\n                        }, void 0, false, {\n                            fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.CarouselControl, {\n                            direction: \"next\",\n                            directionText: \"Next\",\n                            onClickHandler: next\n                        }, void 0, false, {\n                            fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hiyoshi/dev/web/ofa_app/ofa_frontend/components/Services.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Services, \"FYd3Lqf74+dQScd+D3/2SfzV0cE=\");\n_c = Services;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Services);\nvar _c;\n$RefreshReg$(_c, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlcnZpY2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDO0FBVWxCO0FBRXBCLE1BQU1VLFFBQVE7SUFDWjtRQUNFQyxPQUFPO1FBQ1BDLE1BQUs7UUFDTEMsS0FBSztRQUNMQyxTQUFTO1FBQ1RDLEtBQUs7SUFDUDtJQUNBO1FBQ0VKLE9BQU87UUFDUEMsTUFBSztRQUNMQyxLQUFLO1FBQ0xDLFNBQVM7UUFDVEMsS0FBSztJQUNQO0lBQ0E7UUFDRUosT0FBTztRQUNQRSxLQUFLO1FBQ0xDLFNBQVM7UUFDVEMsS0FBSztJQUNQO0NBQ0Q7QUFFRCxNQUFNQyxXQUFXLENBQUNDLE9BQVM7O0lBQ3pCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHbEIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDbUIsV0FBV0MsYUFBYSxHQUFHcEIsK0NBQVFBLENBQUMsS0FBSztJQUVoRCxNQUFNcUIsT0FBTyxJQUFNO1FBQ2pCLElBQUlGLFdBQVc7UUFDZixNQUFNRyxZQUFZTCxnQkFBZ0JSLE1BQU1jLE1BQU0sR0FBRyxJQUFJLElBQUlOLGNBQWMsQ0FBQztRQUN4RUMsZUFBZUk7SUFDakI7SUFFQSxNQUFNRSxXQUFXLElBQU07UUFDckIsSUFBSUwsV0FBVztRQUNmLE1BQU1HLFlBQVlMLGdCQUFnQixJQUFJUixNQUFNYyxNQUFNLEdBQUcsSUFBSU4sY0FBYyxDQUFDO1FBQ3hFQyxlQUFlSTtJQUNqQjtJQUVBLE1BQU1HLFlBQVksQ0FBQ0MsV0FBYTtRQUM5QixJQUFJUCxXQUFXO1FBQ2ZELGVBQWVRO0lBQ2pCO0lBRUEsTUFBTUMsU0FBU2xCLE1BQU1tQixHQUFHLENBQUMsQ0FBQ0MsT0FBUztRQUNqQyxxQkFDRSw4REFBQ3hCLG9EQUFZQTtZQUNYeUIsV0FBVyxJQUFNVixhQUFhLElBQUk7WUFDbENXLFVBQVUsSUFBTVgsYUFBYSxLQUFLO3NCQUdsQyw0RUFBQ2xCLDJDQUFHQTs7a0NBQ0YsOERBQUNDLDJDQUFHQTt3QkFBQzZCLElBQUk7OzBDQUNQLDhEQUFDQzswQ0FBSUosS0FBS25CLEtBQUs7Ozs7OzswQ0FDZiw4REFBQ3dCOzBDQUFHTCxLQUFLbEIsSUFBSTs7Ozs7Ozs7Ozs7O2tDQUVmLDhEQUFDUiwyQ0FBR0E7d0JBQUM2QixJQUFJO2tDQUdULDRFQUFDRzs0QkFBSXZCLEtBQUtpQixLQUFLakIsR0FBRzs0QkFBRXdCLEtBQUtQLEtBQUtoQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztXQVZsQ2dCLEtBQUtqQixHQUFHOzs7OztJQW1CbkI7SUFFQSxxQkFDRSw4REFBQ3lCO1FBQVFDLFdBQVU7UUFBNEJDLElBQUc7OzBCQUNsRCw4REFBQ0M7Z0JBQUdGLFdBQVU7MEJBQWM7Ozs7OzswQkFDMUIsOERBQUNyQyxpREFBU0E7Z0JBQUNxQyxXQUFVOzBCQUVuQiw0RUFBQ2xDLGdEQUFRQTtvQkFDUGEsYUFBYUE7b0JBQ2JJLE1BQU1BO29CQUNORyxVQUFVQTtvQkFDVCxHQUFHUixJQUFJOztzQ0FFUiw4REFBQ1QsMERBQWtCQTs0QkFDakJFLE9BQU9BOzRCQUNQUSxhQUFhQTs0QkFDYndCLGdCQUFnQmhCOzs7Ozs7d0JBRWpCRTtzQ0FDRCw4REFBQ3JCLHVEQUFlQTs0QkFDZG9DLFdBQVU7NEJBQ1ZDLGVBQWM7NEJBQ2RGLGdCQUFnQmpCOzs7Ozs7c0NBRWxCLDhEQUFDbEIsdURBQWVBOzRCQUNkb0MsV0FBVTs0QkFDVkMsZUFBYzs0QkFDZEYsZ0JBQWdCcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVCO0dBOUVNTjtLQUFBQTtBQStFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlcnZpY2VzLmpzP2FjMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSb3csIFxuICBDb2wsXG4gIENhcm91c2VsLFxuICBDYXJvdXNlbEl0ZW0sXG4gIENhcm91c2VsQ29udHJvbCxcbiAgQ2Fyb3VzZWxJbmRpY2F0b3JzLFxuICBDYXJvdXNlbENhcHRpb24sXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmNvbnN0IGl0ZW1zID0gW1xuICB7XG4gICAgdGl0bGU6IFwiUVIgR2VuZXJhdG9yXCIsXG4gICAgZGVzYzpcIlwiLFxuICAgIHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTIzLzEyMDAvNDAwXCIsXG4gICAgYWx0VGV4dDogXCJTbGlkZSAxXCIsXG4gICAga2V5OiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTWFuZ2EgUmVhZGVyXCIsXG4gICAgZGVzYzpcIkludHJvZHVjaW5nIE1hbmdhVmVyc2UgLSB0aGUgdWx0aW1hdGUgbWFuZ2EgcmVhZGVyIGFwcCBmb3IgbWFuZ2EgZW50aHVzaWFzdHMhIERpdmUgaW50byBhIHdvcmxkIG9mIGNhcHRpdmF0aW5nIHN0b3JpZXMsIHZpYnJhbnQgYXJ0d29yaywgYW5kIGltbWVyc2l2ZSBzdG9yeXRlbGxpbmcgd2l0aCBNYW5nYVZlcnNlLiBXaXRoIGFuIGV4dGVuc2l2ZSBjb2xsZWN0aW9uIG9mIHBvcHVsYXIgbWFuZ2Egc2VyaWVzIGZyb20gdmFyaW91cyBnZW5yZXMsIE1hbmdhVmVyc2Ugb2ZmZXJzIGEgc2VhbWxlc3MgcmVhZGluZyBleHBlcmllbmNlIHRoYXQgYnJpbmdzIHlvdXIgZmF2b3JpdGUgbWFuZ2EgdG8gbGlmZSBvbiB5b3VyIGRldmljZS4gRmVhdHVyaW5nIGEgdXNlci1mcmllbmRseSBpbnRlcmZhY2UgYW5kIGVhc3ktdG8tbmF2aWdhdGUgZGVzaWduLCBNYW5nYVZlcnNlIG1ha2VzIGl0IGEgYnJlZXplIHRvIGRpc2NvdmVyLCBicm93c2UsIGFuZCByZWFkIG1hbmdhLiBDaG9vc2UgZnJvbSBhIHdpZGUgcmFuZ2Ugb2YgZ2VucmVzLCBpbmNsdWRpbmcgYWN0aW9uLCByb21hbmNlLCBmYW50YXN5LCBhZHZlbnR1cmUsIGhvcnJvciwgYW5kIG1vcmUsIGFuZCBleHBsb3JlIGEgdmFzdCBsaWJyYXJ5IG9mIG1hbmdhIHRpdGxlcyBmcm9tIGJvdGggZXN0YWJsaXNoZWQgYW5kIHVwLWFuZC1jb21pbmcgbWFuZ2EgYXJ0aXN0cy5cIixcbiAgICBzcmM6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzQ1Ni8xMjAwLzQwMFwiLFxuICAgIGFsdFRleHQ6IFwiU2xpZGUgMlwiLFxuICAgIGtleTogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkNoYXQgQXBwXCIsXG4gICAgc3JjOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC82NzgvMTIwMC80MDBcIixcbiAgICBhbHRUZXh0OiBcIlNsaWRlIDNcIixcbiAgICBrZXk6IDMsXG4gIH0sXG5dO1xuXG5jb25zdCBTZXJ2aWNlcyA9IChhcmdzKSA9PiB7XG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFthbmltYXRpbmcsIHNldEFuaW1hdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm47XG4gICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEgPyAwIDogYWN0aXZlSW5kZXggKyAxO1xuICAgIHNldEFjdGl2ZUluZGV4KG5leHRJbmRleCk7XG4gIH07XG5cbiAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XG4gICAgaWYgKGFuaW1hdGluZykgcmV0dXJuO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2ZUluZGV4ID09PSAwID8gaXRlbXMubGVuZ3RoIC0gMSA6IGFjdGl2ZUluZGV4IC0gMTtcbiAgICBzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IGdvVG9JbmRleCA9IChuZXdJbmRleCkgPT4ge1xuICAgIGlmIChhbmltYXRpbmcpIHJldHVybjtcbiAgICBzZXRBY3RpdmVJbmRleChuZXdJbmRleCk7XG4gIH07XG5cbiAgY29uc3Qgc2xpZGVzID0gaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJvdXNlbEl0ZW1cbiAgICAgICAgb25FeGl0aW5nPXsoKSA9PiBzZXRBbmltYXRpbmcodHJ1ZSl9XG4gICAgICAgIG9uRXhpdGVkPXsoKSA9PiBzZXRBbmltYXRpbmcoZmFsc2UpfVxuICAgICAgICBrZXk9e2l0ZW0uc3JjfVxuICAgICAgPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgbGc9ezZ9PlxuICAgICAgICAgICAgPGgyPntpdGVtLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICA8cD57aXRlbS5kZXNjfTwvcD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIGxnPXs2fT5cblxuICAgICAgICBcbiAgICAgICAgICA8aW1nIHNyYz17aXRlbS5zcmN9IGFsdD17aXRlbS5hbHRUZXh0fSAvPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgey8qIDxDYXJvdXNlbENhcHRpb25cbiAgICAgICAgICBjYXB0aW9uVGV4dD17aXRlbS5jYXB0aW9ufVxuICAgICAgICAgIGNhcHRpb25IZWFkZXI9e2l0ZW0uY2FwdGlvbn1cbiAgICAgICAgLz4gKi99XG4gICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gcG9zaXRpb24tcmVsYXRpdmVcIiBpZD1cInNlcnZpY2VcIj5cbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5PdXIgU2VydmljZXM8L2gxPlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG15LTVcIj5cblxuICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XG4gICAgICAgICAgbmV4dD17bmV4dH1cbiAgICAgICAgICBwcmV2aW91cz17cHJldmlvdXN9XG4gICAgICAgICAgey4uLmFyZ3N9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2Fyb3VzZWxJbmRpY2F0b3JzXG4gICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XG4gICAgICAgICAgICBvbkNsaWNrSGFuZGxlcj17Z29Ub0luZGV4fVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3NsaWRlc31cbiAgICAgICAgICA8Q2Fyb3VzZWxDb250cm9sXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJwcmV2XCJcbiAgICAgICAgICAgIGRpcmVjdGlvblRleHQ9XCJQcmV2aW91c1wiXG4gICAgICAgICAgICBvbkNsaWNrSGFuZGxlcj17cHJldmlvdXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2Fyb3VzZWxDb250cm9sXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJuZXh0XCJcbiAgICAgICAgICAgIGRpcmVjdGlvblRleHQ9XCJOZXh0XCJcbiAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGVyPXtuZXh0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkNhcm91c2VsIiwiQ2Fyb3VzZWxJdGVtIiwiQ2Fyb3VzZWxDb250cm9sIiwiQ2Fyb3VzZWxJbmRpY2F0b3JzIiwiQ2Fyb3VzZWxDYXB0aW9uIiwiaXRlbXMiLCJ0aXRsZSIsImRlc2MiLCJzcmMiLCJhbHRUZXh0Iiwia2V5IiwiU2VydmljZXMiLCJhcmdzIiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsImFuaW1hdGluZyIsInNldEFuaW1hdGluZyIsIm5leHQiLCJuZXh0SW5kZXgiLCJsZW5ndGgiLCJwcmV2aW91cyIsImdvVG9JbmRleCIsIm5ld0luZGV4Iiwic2xpZGVzIiwibWFwIiwiaXRlbSIsIm9uRXhpdGluZyIsIm9uRXhpdGVkIiwibGciLCJoMiIsInAiLCJpbWciLCJhbHQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaWQiLCJoMSIsIm9uQ2xpY2tIYW5kbGVyIiwiZGlyZWN0aW9uIiwiZGlyZWN0aW9uVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Services.js\n"));

/***/ })

});
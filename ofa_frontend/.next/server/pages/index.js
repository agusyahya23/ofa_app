"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getServerSideProps() {\n    const { name , uni  } = await fetch(\"http://localhost:8000/founder\").then((x)=>x.json());\n    console.log(name);\n    console.log(uni);\n    return {\n        props: {\n            name: name,\n            uni: uni\n        }\n    };\n}\nfunction Home({ name , uni  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to OFA\"\n            }, void 0, false, {\n                fileName: \"/Users/muhammad.yahya/ofa/ofa_app/ofa_frontend/pages/index.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: [\n                    \"Created by \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/muhammad.yahya/ofa/ofa_app/ofa_frontend/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/muhammad.yahya/ofa/ofa_app/ofa_frontend/pages/index.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFPLGVBQWVBLHFCQUFxQjtJQUN2QyxNQUFNLEVBQUNDLEtBQUksRUFBRUMsSUFBRyxFQUFDLEdBQUcsTUFBTUMsTUFBTSxpQ0FBaUNDLElBQUksQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRUMsSUFBSTtJQUNqRkMsUUFBUUMsR0FBRyxDQUFDUDtJQUNaTSxRQUFRQyxHQUFHLENBQUNOO0lBQ1osT0FBTztRQUNMTyxPQUFPO1lBQ0xSLE1BQU1BO1lBQ05DLEtBQUtBO1FBQ1A7SUFDRjtBQUNGLENBQUM7QUFFWSxTQUFTUSxLQUFLLEVBQUNULEtBQUksRUFBRUMsSUFBRyxFQUFDLEVBQUM7SUFDckMscUJBQ0ksOERBQUNTOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7O29CQUFHO29CQUFZWjs7Ozs7Ozs7Ozs7OztBQUc1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAgIGNvbnN0IHtuYW1lLCB1bml9ID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvZm91bmRlclwiKS50aGVuKHggPT4geC5qc29uKCkpO1xuICAgIGNvbnNvbGUubG9nKG5hbWUpXG4gICAgY29uc29sZS5sb2codW5pKVxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBuYW1lOiBuYW1lICxcbiAgICAgICAgdW5pOiB1bmkgXG4gICAgICB9XG4gICAgfVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe25hbWUsIHVuaX0pe1xuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gT0ZBPC9oMT5cbiAgICAgICAgICAgIDxoND5DcmVhdGVkIGJ5IHtuYW1lfTwvaDQ+XG4gICAgICAgIDwvbWFpbj5cbiAgICApXG59Il0sIm5hbWVzIjpbImdldFNlcnZlclNpZGVQcm9wcyIsIm5hbWUiLCJ1bmkiLCJmZXRjaCIsInRoZW4iLCJ4IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIkhvbWUiLCJtYWluIiwiaDEiLCJoNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
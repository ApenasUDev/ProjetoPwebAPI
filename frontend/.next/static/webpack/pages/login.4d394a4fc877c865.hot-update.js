"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Login = ()=>{\n    _s();\n    const [username, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleLogin = async ()=>{\n        if (!username || !password) {\n            console.error(\"Username and password are required.\");\n            return;\n        }\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/users/login/\", {\n                params\n            });\n            // Check if the response status is successful (e.g., 200)\n            if (response.status === 200) {\n                // Handle successful login, e.g., redirect to another page\n                console.log(\"Login successful\");\n            } else {\n                // Handle other status codes (e.g., display an error message)\n                console.error(\"Login failed. Status:\", response.status);\n            }\n        } catch (error) {\n            console.error(\"Error during login:\", error);\n        // Handle login failure, show an error message, etc.\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"../\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"voltar\"\n                }, void 0, false, {\n                    fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/login.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/login.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"username\",\n                value: username,\n                onChange: (e)=>setUserName(e.target.value)\n            }, void 0, false, {\n                fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/login.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                placeholder: \"senha\",\n                value: password,\n                onChange: (e)=>setPassword(e.target.value)\n            }, void 0, false, {\n                fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/login.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogin,\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/login.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/login.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Login, \"77lfu0QofYWzE21P+Ljjc0SKKFw=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNkO0FBRTFCLE1BQU1HLFFBQVE7O0lBQ1YsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNTyxjQUFjO1FBRWhCLElBQUksQ0FBQ0osWUFBWSxDQUFDRSxVQUFVO1lBQ3hCRyxRQUFRQyxLQUFLLENBQUM7WUFDZDtRQUNKO1FBQ0EsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTVQsaURBQVMsQ0FBQyxzQ0FBc0M7Z0JBQ25FVztZQUNKO1lBRUEseURBQXlEO1lBQ3pELElBQUlGLFNBQVNHLE1BQU0sS0FBSyxLQUFLO2dCQUN6QiwwREFBMEQ7Z0JBQzFETCxRQUFRTSxHQUFHLENBQUM7WUFDaEIsT0FBTztnQkFDSCw2REFBNkQ7Z0JBQzdETixRQUFRQyxLQUFLLENBQUMseUJBQXlCQyxTQUFTRyxNQUFNO1lBQzFEO1FBQ0osRUFBRSxPQUFPSixPQUFPO1lBQ1pELFFBQVFDLEtBQUssQ0FBQyx1QkFBdUJBO1FBQ3JDLG9EQUFvRDtRQUN4RDtJQUNKO0lBQ0EscUJBQ0ksOERBQUNNOzswQkFDRyw4REFBQ0M7Z0JBQUVDLE1BQUs7MEJBQ0osNEVBQUNDOzhCQUFHOzs7Ozs7Ozs7OzswQkFFUiw4REFBQ0M7Z0JBQ0dDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLE9BQU9uQjtnQkFDUG9CLFVBQVUsQ0FBQ0MsSUFBTXBCLFlBQVlvQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQkFFL0MsOERBQUNIO2dCQUNHQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxPQUFPakI7Z0JBQ1BrQixVQUFVLENBQUNDLElBQU1sQixZQUFZa0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7MEJBRS9DLDhEQUFDSTtnQkFBT0MsU0FBU3BCOzBCQUFhOzs7Ozs7Ozs7Ozs7QUFHMUM7R0FoRE1MO0tBQUFBO0FBa0ROLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgTG9naW4gPSAoKSA9PiB7XG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVXNlcm5hbWUgYW5kIHBhc3N3b3JkIGFyZSByZXF1aXJlZC4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC91c2Vycy9sb2dpbi8nLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSByZXNwb25zZSBzdGF0dXMgaXMgc3VjY2Vzc2Z1bCAoZS5nLiwgMjAwKVxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIHN1Y2Nlc3NmdWwgbG9naW4sIGUuZy4sIHJlZGlyZWN0IHRvIGFub3RoZXIgcGFnZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzZnVsJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBzdGF0dXMgY29kZXMgKGUuZy4sIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdMb2dpbiBmYWlsZWQuIFN0YXR1czonLCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIGxvZ2luOicsIGVycm9yKTtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBsb2dpbiBmYWlsdXJlLCBzaG93IGFuIGVycm9yIG1lc3NhZ2UsIGV0Yy5cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9cIj5cbiAgICAgICAgICAgICAgICA8aDE+dm9sdGFyPC9oMT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlbmhhXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+TG9naW48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJMb2dpbiIsInVzZXJuYW1lIiwic2V0VXNlck5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlTG9naW4iLCJjb25zb2xlIiwiZXJyb3IiLCJyZXNwb25zZSIsImdldCIsInBhcmFtcyIsInN0YXR1cyIsImxvZyIsImRpdiIsImEiLCJocmVmIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});
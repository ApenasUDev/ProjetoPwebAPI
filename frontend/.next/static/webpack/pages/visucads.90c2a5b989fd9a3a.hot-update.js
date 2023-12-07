"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/visucads",{

/***/ "./pages/visucads.js":
/*!***************************!*\
  !*** ./pages/visucads.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Visu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Visu() {\n    _s();\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"http://127.0.0.1:8001/visucards/\");\n                const data = await response.json();\n                console.log(data); // Verifique se os dados são impressos corretamente\n                setCards(data.cards);\n                console.log(cards);\n            } catch (error) {\n                console.error(\"Erro ao buscar dados do backend:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"../\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"voltar\"\n                }, void 0, false, {\n                    fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/visucads.js\",\n                    lineNumber: 25,\n                    columnNumber: 27\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/visucads.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Cartas de Yu-Gi-Oh!\"\n            }, void 0, false, {\n                fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/visucads.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    cards.map((cards)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: cards.image,\n                                    alt: cards.name\n                                }, void 0, false, {\n                                    fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/visucads.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Name: \",\n                                        cards.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/visucads.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Type: \",\n                                        cards.type\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/visucads.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Attack: \",\n                                        cards.atk\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/visucads.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, this),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Defense: \",\n                                        cards.def\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/visucads.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Level: \",\n                                        cards.level\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/visucads.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Race: \",\n                                        cards.race\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/visucads.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Attribute: \",\n                                        cards.attribute\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/visucads.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Attribute: \",\n                                        cards.desc\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/visucads.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, cards.id, true, {\n                            fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/visucads.js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this)),\n                    \";\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/visucads.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/apenasudev/Documentos/GitHub/ProjetoPwebAPI/frontend/pages/visucads.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(Visu, \"M51NroWgc5aUEHiqsZiaQ+7WeWA=\");\n_c = Visu;\nvar _c;\n$RefreshReg$(_c, \"Visu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aXN1Y2Fkcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBRXBDLFNBQVNHOztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUVyQ0QsZ0RBQVNBLENBQUM7UUFDTixNQUFNSyxZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7Z0JBQ2hDQyxRQUFRQyxHQUFHLENBQUNILE9BQU8sbURBQW1EO2dCQUN0RUosU0FBU0ksS0FBS0wsS0FBSztnQkFDbkJPLFFBQVFDLEdBQUcsQ0FBQ1I7WUFDZCxFQUFFLE9BQU9TLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQyxvQ0FBb0NBO1lBQ3BEO1FBQ0Y7UUFFQVA7SUFDRixHQUFHLEVBQUU7SUFHUCxxQkFDSSw4REFBQ1E7OzBCQUNHLDhEQUFDQztnQkFBRUMsTUFBSzswQkFBTSw0RUFBQ0M7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUNsQiw4REFBQ0E7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7O29CQUNLZCxNQUFNZSxHQUFHLENBQUNmLENBQUFBLHNCQUdSLDhEQUFDZ0I7OzhDQUNHLDhEQUFDQztvQ0FBSUMsS0FBS2xCLE1BQU1tQixLQUFLO29DQUFFQyxLQUFLcEIsTUFBTXFCLElBQUk7Ozs7Ozs4Q0FDdEMsOERBQUNDOzt3Q0FBRTt3Q0FBT3RCLE1BQU1xQixJQUFJOzs7Ozs7OzhDQUNwQiw4REFBQ0M7O3dDQUFFO3dDQUFPdEIsTUFBTXVCLElBQUk7Ozs7Ozs7OENBQ3BCLDhEQUFDRDs7d0NBQUU7d0NBQVN0QixNQUFNd0IsR0FBRzs7Ozs7OztnQ0FBSzs4Q0FDMUIsOERBQUNGOzt3Q0FBRTt3Q0FBVXRCLE1BQU15QixHQUFHOzs7Ozs7OzhDQUN0Qiw4REFBQ0g7O3dDQUFFO3dDQUFRdEIsTUFBTTBCLEtBQUs7Ozs7Ozs7OENBQ3RCLDhEQUFDSjs7d0NBQUU7d0NBQU90QixNQUFNMkIsSUFBSTs7Ozs7Ozs4Q0FDcEIsOERBQUNMOzt3Q0FBRTt3Q0FBWXRCLE1BQU00QixTQUFTOzs7Ozs7OzhDQUM5Qiw4REFBQ047O3dDQUFFO3dDQUFZdEIsTUFBTTZCLElBQUk7Ozs7Ozs7OzJCQVRwQjdCLE1BQU04QixFQUFFOzs7OztvQkFXbEI7Ozs7Ozs7Ozs7Ozs7QUFJbkI7R0EzQ3dCL0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzdWNhZHMuanM/MmM5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlzdSgpIHtcbiAgICBjb25zdCBbY2FyZHMsIHNldENhcmRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo4MDAxL3Zpc3VjYXJkcy8nKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTsgLy8gVmVyaWZpcXVlIHNlIG9zIGRhZG9zIHPDo28gaW1wcmVzc29zIGNvcnJldGFtZW50ZVxuICAgICAgICAgICAgc2V0Q2FyZHMoZGF0YS5jYXJkcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJkcylcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBidXNjYXIgZGFkb3MgZG8gYmFja2VuZDonLCBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgXG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgICAgfSwgW10pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj0nLi4vJz48aDE+dm9sdGFyPC9oMT48L2E+XG4gICAgICAgICAgICA8aDE+Q2FydGFzIGRlIFl1LUdpLU9oITwvaDE+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgIHtjYXJkcy5tYXAoY2FyZHMgPT4gKCBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2FyZHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NhcmRzLmltYWdlfSBhbHQ9e2NhcmRzLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5OYW1lOiB7Y2FyZHMubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UeXBlOiB7Y2FyZHMudHlwZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BdHRhY2s6IHtjYXJkcy5hdGt9PC9wPiB7LyogQWRpY2lvbmUgZXN0YXMgbGluaGFzIHBhcmEgZXhpYmlyIG91dHJhcyBwcm9wcmllZGFkZXMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EZWZlbnNlOiB7Y2FyZHMuZGVmfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxldmVsOiB7Y2FyZHMubGV2ZWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmFjZToge2NhcmRzLnJhY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXR0cmlidXRlOiB7Y2FyZHMuYXR0cmlidXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkF0dHJpYnV0ZToge2NhcmRzLmRlc2N9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfTtcbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJWaXN1IiwiY2FyZHMiLCJzZXRDYXJkcyIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImEiLCJocmVmIiwiaDEiLCJ1bCIsIm1hcCIsImxpIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJuYW1lIiwicCIsInR5cGUiLCJhdGsiLCJkZWYiLCJsZXZlbCIsInJhY2UiLCJhdHRyaWJ1dGUiLCJkZXNjIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/visucads.js\n"));

/***/ })

});
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_buildspace_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/buildspace-logo.png */ \"./assets/buildspace-logo.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [apiOutput, setApiOutput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [isGenerating, setIsGenerating] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const callGenerateEndpoint = async ()=>{\n        setIsGenerating(true);\n        console.log(\"Calling OpenAI...\");\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                userInput\n            })\n        });\n        const data = await response.json();\n        const { output } = data;\n        console.log(\"OpenAI replied...\", output.text);\n        setApiOutput(\"\".concat(output.text));\n        setIsGenerating(false);\n    };\n    const onUserChangedText = (event)=>{\n        // console.log(event.target.value);\n        setUserInput(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header-title\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Elevate Your Script\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header-subtitle\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"An Editing Tool to Enhance Your Story Using Director Feedback and Cutting-Edge Scripting Techniques\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"prompt-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                placeholder: \"Write in this format: Desired style and paste the script below\",\n                                className: \"prompt-box\",\n                                value: userInput,\n                                onChange: onUserChangedText\n                            }, void 0, false, {\n                                fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"prompt-buttons\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"generate-button\",\n                                    onClick: callGenerateEndpoint,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"generate\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Generate\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    apiOutput && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"output\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"output-header-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"output-header\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Output\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"output-content\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: apiOutput\n                                }, void 0, false, {\n                                    fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"prompt-buttons\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: isGenerating ? \"generate-button loading\" : \"generate-button\",\n                    onClick: callGenerateEndpoint,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"generate\",\n                        children: isGenerating ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"loader\"\n                        }, void 0, false, {\n                            fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                            lineNumber: 81,\n                            columnNumber: 27\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Generate\"\n                        }, void 0, false, {\n                            fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                            lineNumber: 81,\n                            columnNumber: 62\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"badge-container grow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://github.com/premilar/script-editor-ext\",\n                    target: \"_blank\",\n                    rel: \"noreferrer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"badge\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _assets_buildspace_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"buildspace logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"try the chrome extension!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/premilarowles/Documents/PROD/script-editor/pages/index.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"zURHhZF+x6f0bxSt0B3dBbYqFAU=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRTtBQUM0QjtBQUMxQjtBQUdqQyxNQUFNSSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNLENBQUNJLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDTSxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUM7SUFFakQsTUFBTVEsdUJBQXVCO1FBQzNCRCxnQkFBZ0I7UUFFaEJFLFFBQVFDLElBQUk7UUFDWixNQUFNQyxXQUFXLE1BQU1DLE1BQU0saUJBQWlCO1lBQzVDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFVBQVU7Z0JBQUVmO1lBQVU7UUFDbkM7UUFFQSxNQUFNZ0IsT0FBTyxNQUFNUCxTQUFTUTtRQUM1QixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRjtRQUNuQlQsUUFBUUMsSUFBSSxxQkFBcUJVLE9BQU9DO1FBRXhDaEIsYUFBYSxHQUFlLE9BQVplLE9BQU9DO1FBQ3ZCZCxnQkFBZ0I7SUFDbEI7SUFDQSxNQUFNZSxvQkFBb0IsQ0FBQ0M7UUFDekIsbUNBQW1DO1FBQ25DcEIsYUFBYW9CLE1BQU1DLE9BQU9DO0lBQzVCO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNDOzhDQUFHOzs7Ozs7Ozs7OzswQ0FFTiw4REFBQ0Y7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNFOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHUiw4REFBQ0g7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRztnQ0FDQ0MsYUFBWTtnQ0FDWkosV0FBVTtnQ0FDVkYsT0FBT3ZCO2dDQUNQOEIsVUFBVVY7Ozs7OzswQ0FFWiw4REFBQ0k7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNNO29DQUFFTixXQUFVO29DQUFrQk8sU0FBUzFCOzhDQUN0Qyw0RUFBQ2tCO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDUTtzREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUtWL0IsMkJBQ0QsOERBQUNzQjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ1M7a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR1IsOERBQUNWO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDUTs4Q0FBRy9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLViw4REFBQ3NCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDTTtvQkFDQ04sV0FBV3JCLGVBQWUsNEJBQTRCO29CQUN0RDRCLFNBQVMxQjs4QkFFVCw0RUFBQ2tCO3dCQUFJQyxXQUFVO2tDQUNkckIsNkJBQWUsOERBQUMrQjs0QkFBS1YsV0FBVTs7Ozs7c0RBQW1CLDhEQUFDUTtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkxRCw4REFBQ1Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNNO29CQUNDSyxNQUFLO29CQUNMZCxRQUFPO29CQUNQZSxLQUFJOzhCQUVKLDRFQUFDYjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUM3QixtREFBS0E7Z0NBQUMwQyxLQUFLekMsbUVBQWNBO2dDQUFFMEMsS0FBSTs7Ozs7OzBDQUNoQyw4REFBQ047MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNZjtHQTVGTWxDO0tBQUFBO0FBOEZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBidWlsZHNwYWNlTG9nbyBmcm9tICcuLi9hc3NldHMvYnVpbGRzcGFjZS1sb2dvLnBuZyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IFthcGlPdXRwdXQsIHNldEFwaU91dHB1dF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2lzR2VuZXJhdGluZywgc2V0SXNHZW5lcmF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGNhbGxHZW5lcmF0ZUVuZHBvaW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzR2VuZXJhdGluZyh0cnVlKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcIkNhbGxpbmcgT3BlbkFJLi4uXCIpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9nZW5lcmF0ZScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcklucHV0IH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCB7IG91dHB1dCB9ID0gZGF0YTtcbiAgICBjb25zb2xlLmxvZyhcIk9wZW5BSSByZXBsaWVkLi4uXCIsIG91dHB1dC50ZXh0KVxuXG4gICAgc2V0QXBpT3V0cHV0KGAke291dHB1dC50ZXh0fWApO1xuICAgIHNldElzR2VuZXJhdGluZyhmYWxzZSk7XG4gIH1cbiAgY29uc3Qgb25Vc2VyQ2hhbmdlZFRleHQgPSAoZXZlbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldFVzZXJJbnB1dChldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPlxuICAgICAgICAgICAgPGgxPkVsZXZhdGUgWW91ciBTY3JpcHQ8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICA8aDI+QW4gRWRpdGluZyBUb29sIHRvIEVuaGFuY2UgWW91ciBTdG9yeSBVc2luZyBEaXJlY3RvciBGZWVkYmFjayBhbmQgQ3V0dGluZy1FZGdlIFNjcmlwdGluZyBUZWNobmlxdWVzPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvbXB0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgaW4gdGhpcyBmb3JtYXQ6IERlc2lyZWQgc3R5bGUgYW5kIHBhc3RlIHRoZSBzY3JpcHQgYmVsb3dcIiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb21wdC1ib3hcIlxuICAgICAgICAgICAgdmFsdWU9e3VzZXJJbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVzZXJDaGFuZ2VkVGV4dH0gXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb21wdC1idXR0b25zXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJnZW5lcmF0ZS1idXR0b25cIiBvbkNsaWNrPXtjYWxsR2VuZXJhdGVFbmRwb2ludH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVcIj5cbiAgICAgICAgICAgICAgICA8cD5HZW5lcmF0ZTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7YXBpT3V0cHV0ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRwdXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dC1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGgzPk91dHB1dDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dC1jb250ZW50XCI+XG4gICAgICAgICAgICA8cD57YXBpT3V0cHV0fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb21wdC1idXR0b25zXCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPXtpc0dlbmVyYXRpbmcgPyAnZ2VuZXJhdGUtYnV0dG9uIGxvYWRpbmcnIDogJ2dlbmVyYXRlLWJ1dHRvbid9XG4gICAgICAgICAgb25DbGljaz17Y2FsbEdlbmVyYXRlRW5kcG9pbnR9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyYXRlXCI+XG4gICAgICAgICAge2lzR2VuZXJhdGluZyA/IDxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiPjwvc3Bhbj4gOiA8cD5HZW5lcmF0ZTwvcD59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZS1jb250YWluZXIgZ3Jvd1wiPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcHJlbWlsYXIvc2NyaXB0LWVkaXRvci1leHRcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhZGdlXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtidWlsZHNwYWNlTG9nb30gYWx0PVwiYnVpbGRzcGFjZSBsb2dvXCIgLz5cbiAgICAgICAgICAgIDxwPnRyeSB0aGUgY2hyb21lIGV4dGVuc2lvbiE8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJidWlsZHNwYWNlTG9nbyIsInVzZVN0YXRlIiwiSG9tZSIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsImFwaU91dHB1dCIsInNldEFwaU91dHB1dCIsImlzR2VuZXJhdGluZyIsInNldElzR2VuZXJhdGluZyIsImNhbGxHZW5lcmF0ZUVuZHBvaW50IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsIm91dHB1dCIsInRleHQiLCJvblVzZXJDaGFuZ2VkVGV4dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYSIsIm9uQ2xpY2siLCJwIiwiaDMiLCJzcGFuIiwiaHJlZiIsInJlbCIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
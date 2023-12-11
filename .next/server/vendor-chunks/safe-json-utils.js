"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/safe-json-utils";
exports.ids = ["vendor-chunks/safe-json-utils"];
exports.modules = {

/***/ "(ssr)/./node_modules/safe-json-utils/dist/cjs/index.js":
/*!********************************************************!*\
  !*** ./node_modules/safe-json-utils/dist/cjs/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction safeJsonParse(value) {\n    if (typeof value !== 'string') {\n        throw new Error(`Cannot safe json parse value of type ${typeof value}`);\n    }\n    try {\n        return JSON.parse(value);\n    }\n    catch (_a) {\n        return value;\n    }\n}\nexports.safeJsonParse = safeJsonParse;\nfunction safeJsonStringify(value) {\n    return typeof value === 'string'\n        ? value\n        : JSON.stringify(value, (key, value) => typeof value === 'undefined' ? null : value);\n}\nexports.safeJsonStringify = safeJsonStringify;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2FmZS1qc29uLXV0aWxzL2Rpc3QvY2pzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQSxnRUFBZ0UsYUFBYTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0aC8uL25vZGVfbW9kdWxlcy9zYWZlLWpzb24tdXRpbHMvZGlzdC9janMvaW5kZXguanM/OGI4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHNhZmVKc29uUGFyc2UodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBzYWZlIGpzb24gcGFyc2UgdmFsdWUgb2YgdHlwZSAke3R5cGVvZiB2YWx1ZX1gKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuc2FmZUpzb25QYXJzZSA9IHNhZmVKc29uUGFyc2U7XG5mdW5jdGlvbiBzYWZlSnNvblN0cmluZ2lmeSh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICAgID8gdmFsdWVcbiAgICAgICAgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgKGtleSwgdmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogdmFsdWUpO1xufVxuZXhwb3J0cy5zYWZlSnNvblN0cmluZ2lmeSA9IHNhZmVKc29uU3RyaW5naWZ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/safe-json-utils/dist/cjs/index.js\n");

/***/ })

};
;
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/minesweeper_wasm.js":
/*!**********************************!*\
  !*** ../pkg/minesweeper_wasm.js ***!
  \**********************************/
/*! exports provided: Board, Cell, __wbg_random_a582babfa4489c72, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minesweeper_wasm_bg.wasm */ \"../pkg/minesweeper_wasm_bg.wasm\");\n/* harmony import */ var _minesweeper_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minesweeper_wasm_bg.js */ \"../pkg/minesweeper_wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return _minesweeper_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Board\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return _minesweeper_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_a582babfa4489c72\", function() { return _minesweeper_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_a582babfa4489c72\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _minesweeper_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/minesweeper_wasm.js?");

/***/ }),

/***/ "../pkg/minesweeper_wasm_bg.js":
/*!*************************************!*\
  !*** ../pkg/minesweeper_wasm_bg.js ***!
  \*************************************/
/*! exports provided: Board, Cell, __wbg_random_a582babfa4489c72, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_a582babfa4489c72\", function() { return __wbg_random_a582babfa4489c72; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minesweeper_wasm_bg.wasm */ \"../pkg/minesweeper_wasm_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nclass Board {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Board.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_board_free\"](ptr);\n    }\n    /**\n    */\n    get number_of_flags() {\n        var ret = _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_board_number_of_flags\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set number_of_flags(arg0) {\n        _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_board_number_of_flags\"](this.ptr, arg0);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @returns {Board}\n    */\n    static new(width, height) {\n        var ret = _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_new\"](width, height);\n        return Board.__wrap(ret);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @returns {boolean}\n    */\n    reveal(x, y) {\n        var ret = _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_reveal\"](this.ptr, x, y);\n        return ret !== 0;\n    }\n    /**\n    */\n    reveal_bombs() {\n        _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_reveal_bombs\"](this.ptr);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    */\n    toggle_flag(x, y) {\n        _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_toggle_flag\"](this.ptr, x, y);\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        try {\n            const retptr = _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_render\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @returns {boolean}\n    */\n    check_win_condition() {\n        var ret = _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_check_win_condition\"](this.ptr);\n        return ret !== 0;\n    }\n    /**\n    * @returns {number}\n    */\n    number_of_bombs() {\n        var ret = _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_number_of_bombs\"](this.ptr);\n        return ret >>> 0;\n    }\n}\n/**\n*/\nclass Cell {\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_cell_free\"](ptr);\n    }\n}\n\nconst __wbg_random_a582babfa4489c72 = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../frontend/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/minesweeper_wasm_bg.js?");

/***/ }),

/***/ "../pkg/minesweeper_wasm_bg.wasm":
/*!***************************************!*\
  !*** ../pkg/minesweeper_wasm_bg.wasm ***!
  \***************************************/
/*! exports provided: memory, __wbg_cell_free, __wbg_board_free, __wbg_get_board_number_of_flags, __wbg_set_board_number_of_flags, board_new, board_reveal, board_reveal_bombs, board_toggle_flag, board_render, board_check_win_condition, board_number_of_bombs, __wbindgen_add_to_stack_pointer, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./minesweeper_wasm_bg.js */ \"../pkg/minesweeper_wasm_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/minesweeper_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var minesweeper_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! minesweeper-wasm */ \"../pkg/minesweeper_wasm.js\");\n\n\nconst BOARD_WIDTH = 20;\nconst BOARD_HEIGHT = 12;\nconst CELL_SIZE = 15;\n\nfunction setRemainingBombCount() {\n    document.getElementById(\"remaining-bombs\").innerText = \n        game_board.number_of_bombs() - game_board.number_of_flags;\n}\n\nconst game_dom_element = document.getElementById(\"game\");\nconst game_board = minesweeper_wasm__WEBPACK_IMPORTED_MODULE_0__[\"Board\"].new(BOARD_WIDTH, BOARD_HEIGHT);\ngame_dom_element.innerHTML = game_board.render();\nsetRemainingBombCount();\n\nwindow.addEventListener(\"click\", (event) => {\n    const x_clicked = Math.floor(event.clientX / CELL_SIZE);\n    const y_clicked = Math.floor(event.clientY / CELL_SIZE);\n\n    const was_bomb = game_board.reveal(x_clicked, y_clicked);\n\n    if (was_bomb) {\n        game_board.reveal_bombs();\n    }\n\n    game_dom_element.innerHTML = game_board.render();\n    setRemainingBombCount();\n\n    const victory = game_board.check_win_condition();\n    if (victory) {\n        console.log(\"print\");\n        game_dom_element.innerHTML = \"YOU WON!!!!!!!!!!!!!! Gratulererer!\";\n    }\n});\n\nwindow.addEventListener('contextmenu', (event) => {\n    event.preventDefault();\n    const x_clicked = Math.floor(event.clientX / 15);\n    const y_clicked = Math.floor(event.clientY / 15);\n\n    game_board.toggle_flag(x_clicked, y_clicked);\n    game_dom_element.innerHTML = game_board.render();\n    setRemainingBombCount();\n\n    const victory = game_board.check_win_condition();\n    if (victory) {\n        console.log(\"print\");\n        game_dom_element.innerHTML = \"YOU WON!!!!!!!!!!!!!! Gratulererer!\";\n    }\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);
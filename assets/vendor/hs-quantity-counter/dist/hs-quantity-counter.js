(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSQuantityCounter"] = factory();
	else
		root["HSQuantityCounter"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-quantity-counter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-quantity-counter.js":
/*!***************************************!*\
  !*** ./src/js/hs-quantity-counter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar HSQuantityCounter = function () {\n\tfunction HSQuantityCounter(elem, settings) {\n\t\t_classCallCheck(this, HSQuantityCounter);\n\n\t\tthis.elem = elem;\n\t\tthis.defaults = {\n\t\t\tclassMap: {\n\t\t\t\tplus: '.js-plus',\n\t\t\t\tminus: '.js-minus',\n\t\t\t\tresult: '.js-result'\n\t\t\t},\n\n\t\t\tresultVal: null\n\t\t};\n\t\tthis.settings = settings;\n\t}\n\n\t_createClass(HSQuantityCounter, [{\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tvar context = this,\n\t\t\t    $el = context.elem,\n\t\t\t    dataSettings = $el.attr('data-hs-quantity-counter-options') ? JSON.parse($el.attr('data-hs-quantity-counter-options')) : {},\n\t\t\t    options = $.extend(true, context.defaults, dataSettings, context.settings);\n\n\t\t\t// Change Default Values\n\t\t\toptions.resultVal = parseInt($el.find(options.classMap.result).val());\n\n\t\t\t// Plus Click Events\n\t\t\t$el.find(options.classMap.plus).on('click', function () {\n\t\t\t\tcontext._plusClickEvents($el, options);\n\t\t\t});\n\n\t\t\t// Minus Click Events\n\t\t\t$el.find(options.classMap.minus).on('click', function () {\n\t\t\t\tcontext._minusClickEvents($el, options);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: '_plusClickEvents',\n\t\tvalue: function _plusClickEvents(el, params) {\n\t\t\tvar options = params;\n\n\t\t\toptions.resultVal += 1;\n\n\t\t\tel.find(options.classMap.result).val(options.resultVal);\n\t\t}\n\t}, {\n\t\tkey: '_minusClickEvents',\n\t\tvalue: function _minusClickEvents(el, params) {\n\t\t\tvar options = params;\n\n\t\t\tif (options.resultVal >= 1) {\n\t\t\t\toptions.resultVal -= 1;\n\n\t\t\t\tel.find(options.classMap.result).val(options.resultVal);\n\t\t\t} else {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn HSQuantityCounter;\n}();\n\nexports.default = HSQuantityCounter;\n\n//# sourceURL=webpack://HSQuantityCounter/./src/js/hs-quantity-counter.js?");

/***/ })

/******/ })["default"];
});
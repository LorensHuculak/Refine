(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSCounter"] = factory();
	else
		root["HSCounter"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-counter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-counter.js":
/*!******************************!*\
  !*** ./src/js/hs-counter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*\n* HSCounter Plugin\n* @version: 2.0.0 (Mon, 25 Nov 2019)\n* @requires: jQuery v3.0 or later, appear.js v1.0.3\n* @author: HtmlStream\n* @event-namespace: .HSCounter\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\n\nvar HSCounter = function () {\n\tfunction HSCounter(elem, settings) {\n\t\t_classCallCheck(this, HSCounter);\n\n\t\tthis.elem = elem;\n\t\tthis.defaults = {\n\t\t\tbounds: -100,\n\t\t\tdebounce: 10,\n\t\t\ttime: 1750,\n\t\t\tfps: 60,\n\t\t\tisCommaSeparated: false,\n\t\t\tisReduceThousandsTo: false,\n\t\t\tintervalId: null\n\t\t};\n\t\tthis.settings = settings;\n\t}\n\n\t_createClass(HSCounter, [{\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tvar context = this,\n\t\t\t    $el = context.elem,\n\t\t\t    dataSettings = $el.attr('data-hs-counter-options') ? JSON.parse($el.attr('data-hs-counter-options')) : {};\n\t\t\tvar options = $.extend(true, context.defaults, dataSettings, context.settings);\n\t\t\tvar appearSettings = {\n\t\t\t\tinit: function init() {\n\t\t\t\t\tvar value = parseInt($el.text(), 10);\n\n\t\t\t\t\t$el.text('0');\n\t\t\t\t\t$el.attr('data-value', value);\n\t\t\t\t},\n\t\t\t\telements: function elements() {\n\t\t\t\t\treturn $el;\n\t\t\t\t},\n\t\t\t\tappear: function appear(innerEl) {\n\t\t\t\t\tvar $item = $(innerEl),\n\t\t\t\t\t    counter = 1,\n\t\t\t\t\t    endValue = $item.data('value'),\n\t\t\t\t\t    iterationValue = parseInt(endValue / (options.time / options.fps), 10);\n\n\t\t\t\t\tif (iterationValue === 0) {\n\t\t\t\t\t\titerationValue = 1;\n\t\t\t\t\t}\n\n\t\t\t\t\t$item.data('intervalId', setInterval(function () {\n\t\t\t\t\t\tif (options.isCommaSeparated) {\n\t\t\t\t\t\t\t$item.text(context._getCommaSeparatedValue(counter += iterationValue));\n\t\t\t\t\t\t} else if (options.isReduceThousandsTo) {\n\t\t\t\t\t\t\t$item.text(context._getCommaReducedValue(counter += iterationValue, options.isReduceThousandsTo));\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t$item.text(counter += iterationValue);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (counter > endValue) {\n\t\t\t\t\t\t\tclearInterval($item.data('intervalId'));\n\n\t\t\t\t\t\t\tif (options.isCommaSeparated) {\n\t\t\t\t\t\t\t\t$item.text(context._getCommaSeparatedValue(endValue));\n\t\t\t\t\t\t\t} else if (options.isReduceThousandsTo) {\n\t\t\t\t\t\t\t\t$item.text(context._getCommaReducedValue(endValue, options.isReduceThousandsTo));\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t$item.text(endValue);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}, options.time / options.fps));\n\t\t\t\t}\n\t\t\t};\n\t\t\toptions = $.extend(true, options, appearSettings);\n\n\t\t\tappear(options);\n\t\t}\n\t}, {\n\t\tkey: '_getCommaReducedValue',\n\t\tvalue: function _getCommaReducedValue(value, additionalText) {\n\t\t\treturn parseInt(value / 1000, 10) + additionalText;\n\t\t}\n\t}, {\n\t\tkey: '_getCommaSeparatedValue',\n\t\tvalue: function _getCommaSeparatedValue(value) {\n\t\t\tvalue = value.toString();\n\n\t\t\tswitch (value.length) {\n\t\t\t\tcase 4:\n\t\t\t\t\treturn value.substr(0, 1) + ',' + value.substr(1);\n\t\t\t\t\tbreak;\n\t\t\t\tcase 5:\n\t\t\t\t\treturn value.substr(0, 2) + ',' + value.substr(2);\n\t\t\t\t\tbreak;\n\t\t\t\tcase 6:\n\t\t\t\t\treturn value.substr(0, 3) + ',' + value.substr(3);\n\t\t\t\t\tbreak;\n\t\t\t\tcase 7:\n\t\t\t\t\tvalue = value.substr(0, 1) + ',' + value.substr(1);\n\t\t\t\t\treturn value.substr(0, 5) + ',' + value.substr(5);\n\t\t\t\t\tbreak;\n\t\t\t\tcase 8:\n\t\t\t\t\tvalue = value.substr(0, 2) + ',' + value.substr(2);\n\t\t\t\t\treturn value.substr(0, 6) + ',' + value.substr(6);\n\t\t\t\t\tbreak;\n\t\t\t\tcase 9:\n\t\t\t\t\tvalue = value.substr(0, 3) + ',' + value.substr(3);\n\t\t\t\t\treturn value.substr(0, 7) + ',' + value.substr(7);\n\t\t\t\t\tbreak;\n\t\t\t\tcase 10:\n\t\t\t\t\tvalue = value.substr(0, 1) + ',' + value.substr(1);\n\t\t\t\t\tvalue = value.substr(0, 5) + ',' + value.substr(5);\n\t\t\t\t\treturn value.substr(0, 9) + ',' + value.substr(9);\n\t\t\t\t\tbreak;\n\t\t\t\tdefault:\n\t\t\t\t\treturn value;\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn HSCounter;\n}();\n\nexports.default = HSCounter;\n\n//# sourceURL=webpack://HSCounter/./src/js/hs-counter.js?");

/***/ })

/******/ })["default"];
});
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSToggleState"] = factory();
	else
		root["HSToggleState"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-toggle-state.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-toggle-state.js":
/*!***********************************!*\
  !*** ./src/js/hs-toggle-state.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*\n* HSToggleState Plugin\n* @version: 2.0.0 (Mon, 25 Nov 2019)\n* @requires: jQuery v3.0 or later\n* @author: HtmlStream\n* @event-namespace: .HSToggleState\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\n\nvar HSToggleState = function () {\n\tfunction HSToggleState(elem, settings) {\n\t\t_classCallCheck(this, HSToggleState);\n\n\t\tthis.elem = elem;\n\t\tthis.defaults = {\n\t\t\ttargetSelector: null,\n\t\t\tslaveSelector: null,\n\n\t\t\tclassMap: {\n\t\t\t\ttoggle: 'toggled'\n\t\t\t}\n\t\t};\n\t\tthis.settings = settings;\n\t}\n\n\t_createClass(HSToggleState, [{\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tvar context = this,\n\t\t\t    $el = context.elem,\n\t\t\t    dataSettings = $el.attr('data-hs-toggle-state-options') ? JSON.parse($el.attr('data-hs-toggle-state-options')) : {},\n\t\t\t    options = $.extend(true, context.defaults, dataSettings, context.settings);\n\n\t\t\tcontext._prepareObject($el, options);\n\n\t\t\t$el.on('click', function () {\n\t\t\t\t$el.toggleClass(options.classMap.toggle);\n\n\t\t\t\tif (options.slaveSelector) {\n\t\t\t\t\tif ($el.hasClass(options.classMap.toggle)) {\n\t\t\t\t\t\t$(options.slaveSelector).addClass(options.classMap.toggle);\n\t\t\t\t\t} else {\n\t\t\t\t\t\t$(options.slaveSelector).removeClass(options.classMap.toggle);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tcontext._checkState($el, options);\n\t\t\t});\n\n\t\t\t$(options.slaveSelector).on('click', function () {\n\t\t\t\t$('[data-hs-toggle-state-slave=\"' + options.slaveSelector + '\"]').removeClass(options.classMap.toggle);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: '_prepareObject',\n\t\tvalue: function _prepareObject(el, params) {\n\t\t\tvar options = params;\n\n\t\t\tel.attr('data-hs-toggle-state-slave', options.slaveSelector);\n\t\t}\n\t}, {\n\t\tkey: '_checkState',\n\t\tvalue: function _checkState(el, params) {\n\t\t\tvar options = params;\n\n\t\t\tif (el.hasClass(options.classMap.toggle)) {\n\t\t\t\t$(options.targetSelector).prop('checked', true);\n\t\t\t} else {\n\t\t\t\t$(options.targetSelector).prop('checked', false);\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn HSToggleState;\n}();\n\nexports.default = HSToggleState;\n\n//# sourceURL=webpack://HSToggleState/./src/js/hs-toggle-state.js?");

/***/ })

/******/ })["default"];
});
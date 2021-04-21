(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSProgressBar"] = factory();
	else
		root["HSProgressBar"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-progress-bar.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-progress-bar.js":
/*!***********************************!*\
  !*** ./src/js/hs-progress-bar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar HSProgressBar = function () {\n\tfunction HSProgressBar(elem, settings) {\n\t\t_classCallCheck(this, HSProgressBar);\n\n\t\tthis.elem = elem;\n\t\tthis.defaults = {\n\t\t\tbounds: -100,\n\t\t\tdebounce: 10,\n\t\t\tduration: 1000,\n\t\t\tisRtl: false,\n\t\t\tdirection: 'horizontal',\n\t\t\tuseProgressElement: false,\n\t\t\tindicatorSelector: '.hs-progress-bar-indicator',\n\n\t\t\tafterUpdate: function afterUpdate() {}\n\t\t};\n\t\tthis.settings = settings;\n\t}\n\n\t_createClass(HSProgressBar, [{\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tvar context = this,\n\t\t\t    $el = context.elem,\n\t\t\t    dataSettings = $el.attr('data-hs-progress-bar-options') ? JSON.parse($el.attr('data-hs-progress-bar-options')) : {};\n\t\t\tvar options = $.extend(true, context.defaults, dataSettings, context.settings);\n\n\t\t\toptions.init = function () {\n\t\t\t\tif (options.direction === 'horizontal') {\n\t\t\t\t\tcontext._buildHorizontalProgressBar($el, options);\n\t\t\t\t} else {\n\t\t\t\t\tcontext._buildVerticalProgressBar($el, options);\n\t\t\t\t}\n\t\t\t};\n\t\t\toptions.elements = function () {\n\t\t\t\treturn $el;\n\t\t\t};\n\t\t\toptions.appear = function (el) {\n\t\t\t\tif (options.direction === 'horizontal') {\n\t\t\t\t\t$(el).find(options.indicatorSelector).stop().animate({\n\t\t\t\t\t\twidth: $(el).data('value') + '%'\n\t\t\t\t\t}, {\n\t\t\t\t\t\tduration: options.duration,\n\t\t\t\t\t\tcomplete: function complete() {\n\t\t\t\t\t\t\toptions.afterUpdate();\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t} else {\n\t\t\t\t\t$(el).find(options.indicatorSelector).stop().animate({\n\t\t\t\t\t\theight: $(el).data('value') + '%'\n\t\t\t\t\t}, {\n\t\t\t\t\t\tduration: options.duration,\n\t\t\t\t\t\tcomplete: function complete() {\n\t\t\t\t\t\t\toptions.afterUpdate();\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tappear(options);\n\t\t}\n\t}, {\n\t\tkey: '_buildHorizontalProgressBar',\n\t\tvalue: function _buildHorizontalProgressBar(el, params) {\n\t\t\tvar options = params;\n\n\t\t\tif (options.useProgressElement) {\n\t\t\t\tel.attr('data-value', el.attr('value'));\n\t\t\t\tel.attr('value', 0);\n\t\t\t} else {\n\t\t\t\tel.attr('data-value', el.find(options.indicatorSelector).length ? Math.round(el.find(options.indicatorSelector).outerWidth() / el.outerWidth() * 100) : 0);\n\t\t\t\tel.find(options.indicatorSelector).css({\n\t\t\t\t\twidth: 0\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: '_buildVerticalProgressBar',\n\t\tvalue: function _buildVerticalProgressBar(el, params) {\n\t\t\tvar options = params;\n\n\t\t\tif (!el.find(options.indicatorSelector).length) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tel.attr('data-value', parseInt(el.find(options.indicatorSelector).css('height'), 10) / el.find(options.indicatorSelector).parent().outerHeight() * 100);\n\t\t\tel.find(options.indicatorSelector).css({\n\t\t\t\theight: 0\n\t\t\t});\n\t\t}\n\t}]);\n\n\treturn HSProgressBar;\n}();\n\nexports.default = HSProgressBar;\n\n//# sourceURL=webpack://HSProgressBar/./src/js/hs-progress-bar.js?");

/***/ })

/******/ })["default"];
});
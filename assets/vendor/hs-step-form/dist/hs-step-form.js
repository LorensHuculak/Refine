(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSStepForm"] = factory();
	else
		root["HSStepForm"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-step-form.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-step-form.js":
/*!********************************!*\
  !*** ./src/js/hs-step-form.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*\n* HSStepForm Plugin\n* @version: 2.0.0 (Mon, 25 Nov 2019)\n* @requires: jQuery v3.0 or later\n* @author: HtmlStream\n* @event-namespace: .HSStepForm\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\n\nvar HSStepForm = function () {\n\tfunction HSStepForm(elem, settings) {\n\t\t_classCallCheck(this, HSStepForm);\n\n\t\tthis.elem = elem;\n\t\tthis.defaults = {\n\t\t\tprogressSelector: null,\n\t\t\tprogressItems: null,\n\n\t\t\tstepsSelector: null,\n\t\t\tstepsItems: null,\n\t\t\tstepsActiveItem: null,\n\n\t\t\tnextSelector: '[data-hs-step-form-next-options]',\n\t\t\tprevSelector: '[data-hs-step-form-prev-options]',\n\n\t\t\tisValidate: false,\n\n\t\t\tclassMap: {\n\t\t\t\tactive: 'active',\n\t\t\t\tchecked: 'is-valid',\n\t\t\t\terror: 'is-invalid'\n\t\t\t}\n\t\t};\n\t\tthis.settings = settings;\n\t}\n\n\t_createClass(HSStepForm, [{\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tvar context = this,\n\t\t\t    $el = context.elem,\n\t\t\t    dataSettings = $el.attr('data-hs-step-form-options') ? JSON.parse($el.attr('data-hs-step-form-options')) : {};\n\t\t\tvar options = $.extend(true, context.defaults, dataSettings, context.settings);\n\n\t\t\toptions.progressItems = $(options.progressSelector).find('> *');\n\t\t\toptions.stepsItems = $(options.stepsSelector).find('> *');\n\t\t\toptions.stepsActiveItem = $(options.stepsSelector).find('> .' + options.classMap.active);\n\n\t\t\tcontext._prepareObject($el, options);\n\n\t\t\t$el.find(options.nextSelector).on('click', function () {\n\t\t\t\tcontext._nextClickEvents($el, options, $(this));\n\t\t\t});\n\n\t\t\t$el.find(options.prevSelector).on('click', function () {\n\t\t\t\tcontext._prevClickEvents($el, options, $(this));\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: '_prepareObject',\n\t\tvalue: function _prepareObject(el, params) {\n\t\t\tvar options = params;\n\n\t\t\toptions.stepsItems.not('.' + options.classMap.active).hide();\n\t\t\toptions.progressItems.eq(options.stepsActiveItem.index()).addClass(options.classMap.active);\n\t\t}\n\t}, {\n\t\tkey: '_nextClickEvents',\n\t\tvalue: function _nextClickEvents(el, params, nextEl) {\n\t\t\tvar nextDataSettings = nextEl.attr('data-hs-step-form-next-options') ? JSON.parse(nextEl.attr('data-hs-step-form-next-options')) : {};\n\t\t\tvar options = params,\n\t\t\t    nextItemDefaults = {\n\t\t\t\ttargetSelector: null\n\t\t\t},\n\t\t\t    nextItemOptions = $.extend(true, nextItemDefaults, nextDataSettings);\n\n\t\t\tif (typeof $(window).validate !== 'undefined' && options.isValidate) {\n\t\t\t\tif (!el.valid()) {\n\t\t\t\t\toptions.progressItems.eq($(nextItemOptions.targetSelector).index() - 1).addClass(options.classMap.error);\n\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\toptions.progressItems.removeClass(options.classMap.active);\n\n\t\t\tif (typeof $(window).validate !== 'undefined' && options.isValidate) {\n\t\t\t\toptions.progressItems.eq($(nextItemOptions.targetSelector).index() - 1).removeClass(options.classMap.error);\n\t\t\t}\n\n\t\t\toptions.progressItems.eq($(nextItemOptions.targetSelector).index() - 1).addClass(options.classMap.checked);\n\t\t\toptions.progressItems.eq($(nextItemOptions.targetSelector).index()).addClass(options.classMap.active);\n\n\t\t\toptions.stepsItems.hide().removeClass(options.classMap.active);\n\t\t\t$(nextItemOptions.targetSelector).fadeIn(400).addClass(options.classMap.active);\n\t\t}\n\t}, {\n\t\tkey: '_prevClickEvents',\n\t\tvalue: function _prevClickEvents(el, params, prevEl) {\n\t\t\tvar options = params,\n\t\t\t    prevItemDefaults = {\n\t\t\t\ttargetSelector: null\n\t\t\t};\n\t\t\tvar prevDataSettings = prevEl.attr('data-hs-step-form-prev-options') ? JSON.parse(prevEl.attr('data-hs-step-form-prev-options')) : {};\n\t\t\tvar prevItemOptions = $.extend(true, prevItemDefaults, prevDataSettings);\n\n\t\t\toptions.progressItems.removeClass(options.classMap.active);\n\t\t\t//options.progressItems.eq($(prevItemOptions.targetSelector).index() - 1).addClass(options.classMap.checked);\n\t\t\toptions.progressItems.eq($(prevItemOptions.targetSelector).index()).addClass(options.classMap.active);\n\n\t\t\toptions.stepsItems.hide().removeClass(options.classMap.active);\n\t\t\t$(prevItemOptions.targetSelector).fadeIn(400).addClass(options.classMap.active);\n\t\t}\n\t}]);\n\n\treturn HSStepForm;\n}();\n\nexports.default = HSStepForm;\n\n//# sourceURL=webpack://HSStepForm/./src/js/hs-step-form.js?");

/***/ })

/******/ })["default"];
});
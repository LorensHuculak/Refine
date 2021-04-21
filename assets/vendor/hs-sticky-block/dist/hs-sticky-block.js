(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSStickyBlock"] = factory();
	else
		root["HSStickyBlock"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-sticky-block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-sticky-block.js":
/*!***********************************!*\
  !*** ./src/js/hs-sticky-block.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSStickyBlock; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSStickyBlock Plugin\n* @version: 2.0.0 (Mon, 25 Nov 2019)\n* @requires: jQuery v3.0 or laters\n* @author: HtmlStream\n* @event-namespace: .HSStickyBlock\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\nvar HSStickyBlock = /*#__PURE__*/function () {\n  function HSStickyBlock(elem, settings) {\n    _classCallCheck(this, HSStickyBlock);\n\n    this.elem = elem;\n    this.defaults = {\n      parentSelector: null,\n      parentWidth: null,\n      parentPaddingLeft: null,\n      parentOffsetLeft: null,\n      targetSelector: null,\n      targetHeight: 0,\n      stickyHeight: null,\n      stickyOffsetTop: 0,\n      stickyOffsetBottom: 0,\n      windowOffsetTop: 0,\n      startPoint: null,\n      endPoint: null,\n      resolutionsList: {\n        xs: 0,\n        sm: 576,\n        md: 768,\n        lg: 992,\n        xl: 1200\n      },\n      breakpoint: 'lg',\n      styles: {\n        position: 'fixed'\n      },\n      classMap: {\n        kill: 'hs-kill-sticky'\n      }\n    };\n    this.settings = settings;\n    this.init();\n  }\n\n  _createClass(HSStickyBlock, [{\n    key: \"init\",\n    value: function init() {\n      var context = this,\n          $el = context.elem,\n          dataSettings = $el.attr('data-hs-sticky-block-options') ? JSON.parse($el.attr('data-hs-sticky-block-options')) : {},\n          options = $.extend(true, context.defaults, dataSettings, context.settings);\n\n      context._setRules($el, options);\n\n      $(window).on('resize scroll', function () {\n        context.update();\n      });\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      var context = this,\n          $el = context.elem,\n          dataSettings = $el.attr('data-hs-sticky-block-options') ? JSON.parse($el.attr('data-hs-sticky-block-options')) : {},\n          options = $.extend(true, context.defaults, dataSettings, context.settings);\n\n      context._setRules($el, options);\n    }\n  }, {\n    key: \"_updateOptions\",\n    value: function _updateOptions(el, params) {\n      var options = params;\n      options.windowOffsetTop = $(window).scrollTop();\n      options.startPoint = $.isNumeric(options.startPoint) ? options.startPoint : $(options.startPoint).offset().top;\n      options.endPoint = $.isNumeric(options.endPoint) ? options.endPoint : $(options.endPoint).offset().top;\n      options.parentWidth = $(options.parentSelector).width();\n      options.parentPaddingLeft = parseInt($(options.parentSelector).css('padding-left'));\n      options.parentOffsetLeft = $(options.parentSelector).offset().left;\n      options.targetHeight = options.targetSelector ? $(options.targetSelector).outerHeight() : 0;\n      options.stickyHeight = el.outerHeight();\n    }\n  }, {\n    key: \"_setRules\",\n    value: function _setRules(el, params) {\n      var context = this;\n      var options = params;\n\n      context._kill(el, options);\n\n      context._updateOptions(el, options);\n\n      if (!el.hasClass(options.classMap.kill)) {\n        if (options.windowOffsetTop >= options.startPoint - options.targetHeight - options.stickyOffsetTop && options.windowOffsetTop <= options.endPoint - options.targetHeight - options.stickyOffsetTop) {\n          context._add(el, options);\n\n          context._top(el, options);\n\n          context._parentSetHeight(options);\n        } else {\n          context._reset(el);\n\n          context._parentRemoveHeight(options);\n        }\n\n        if (options.windowOffsetTop >= options.endPoint - options.targetHeight - options.stickyHeight - options.stickyOffsetTop - options.stickyOffsetBottom) {\n          context._bottom(el, options);\n        }\n      }\n    }\n  }, {\n    key: \"_add\",\n    value: function _add(el, params) {\n      var options = params;\n      el.css({\n        position: options.styles.position,\n        left: options.parentOffsetLeft + options.parentPaddingLeft,\n        width: options.parentWidth\n      });\n    }\n  }, {\n    key: \"_top\",\n    value: function _top(el, params) {\n      var options = params;\n      el.css({\n        top: options.stickyOffsetTop + options.targetHeight\n      });\n    }\n  }, {\n    key: \"_bottom\",\n    value: function _bottom(el, params) {\n      var options = params;\n      el.css({\n        top: options.endPoint - options.windowOffsetTop - options.stickyHeight - options.stickyOffsetBottom\n      });\n    }\n  }, {\n    key: \"_reset\",\n    value: function _reset(el) {\n      el.css({\n        position: '',\n        top: '',\n        bottom: '',\n        left: '',\n        width: ''\n      });\n    }\n  }, {\n    key: \"_kill\",\n    value: function _kill(el, params) {\n      var context = this;\n      var options = params;\n\n      if (window.innerWidth <= options.resolutionsList[options.breakpoint]) {\n        el.addClass(options.classMap.kill);\n\n        context._reset(el);\n\n        context._parentRemoveHeight(options);\n      } else {\n        el.removeClass(options.classMap.kill);\n      }\n    }\n  }, {\n    key: \"_parentSetHeight\",\n    value: function _parentSetHeight(params) {\n      var options = params;\n      $(options.parentSelector).css({\n        height: options.stickyHeight\n      });\n    }\n  }, {\n    key: \"_parentRemoveHeight\",\n    value: function _parentRemoveHeight(params) {\n      var options = params;\n      $(options.parentSelector).css({\n        height: ''\n      });\n    }\n  }]);\n\n  return HSStickyBlock;\n}();\n\n\n\n//# sourceURL=webpack://HSStickyBlock/./src/js/hs-sticky-block.js?");

/***/ })

/******/ })["default"];
});
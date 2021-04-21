(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSHeaderFullscreen"] = factory();
	else
		root["HSHeaderFullscreen"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-header-fullscreen.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-header-fullscreen.js":
/*!****************************************!*\
  !*** ./src/js/hs-header-fullscreen.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Overlay Effect\n\n\nvar _overlayEffect = __webpack_require__(/*! ./observers/overlay-effect */ \"./src/js/observers/overlay-effect.js\");\n\nvar _overlayEffect2 = _interopRequireDefault(_overlayEffect);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar HSHeaderFullscreen = function () {\n\tfunction HSHeaderFullscreen(element, config) {\n\t\t_classCallCheck(this, HSHeaderFullscreen);\n\n\t\tthis.element = element;\n\t\tthis.defaults = {\n\t\t\toverlayClass: 'fullscreen-overlay',\n\t\t\tsectionsContainerSelector: '.fullscreen-content',\n\t\t\tafterOpen: function afterOpen() {},\n\t\t\tafterClose: function afterClose() {}\n\t\t};\n\t\tthis.config = config;\n\t}\n\n\t_createClass(HSHeaderFullscreen, [{\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tvar self = this,\n\t\t\t    element = this.element;\n\t\t\tvar dataSettings = element.attr('data-hs-header-fullscreen-options') ? JSON.parse(element.attr('data-hs-header-fullscreen-options')) : {};\n\n\t\t\tthis.config = $.extend(true, {}, this.defaults, dataSettings);\n\n\t\t\tthis._bindGlobalEvents();\n\n\t\t\tif (element.data('HSHeaderFullscreen')) return;\n\n\t\t\tthis.overlay = $('<div class=\"' + this.config.overlayClass + '\"></div>');\n\n\t\t\tthis.element.append(this.overlay);\n\n\t\t\tthis.effect = new _overlayEffect2.default().init(this.element, this.overlay, this.config.afterOpen, this.config.afterClose);\n\n\t\t\tthis._bindEvents();\n\t\t}\n\t}, {\n\t\tkey: '_bindGlobalEvents',\n\t\tvalue: function _bindGlobalEvents() {\n\t\t\tvar _self = this;\n\n\t\t\t$(window).on('resize.HSHeaderFullscreen', function () {\n\t\t\t\tif (_self.resizeTimeOutId) clearTimeout(_self.resizeTimeOutId);\n\n\t\t\t\t_self.resizeTimeOutId = setTimeout(function () {\n\t\t\t\t\t_self.update();\n\t\t\t\t}, 50);\n\t\t\t});\n\n\t\t\t$(document).on('keyup.HSHeaderFullscreen', function (e) {\n\t\t\t\tif (e.keyCode && e.keyCode === 27) {\n\t\t\t\t\tif (!_self.element) return;\n\n\t\t\t\t\t_self.hide();\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: '_bindEvents',\n\t\tvalue: function _bindEvents() {\n\t\t\tvar _self = this;\n\n\t\t\tthis.invoker = $('[data-target=\"#' + this.element.attr('id') + '\"]');\n\n\t\t\tif (this.invoker.length) {\n\t\t\t\tthis.invoker.off('click.HSHeaderFullscreen').on('click.HSHeaderFullscreen', function (e) {\n\t\t\t\t\t_self[_self.isShown ? 'hide' : 'show']();\n\n\t\t\t\t\te.preventDefault();\n\t\t\t\t});\n\t\t\t}\n\n\t\t\treturn this;\n\t\t}\n\t}, {\n\t\tkey: 'update',\n\t\tvalue: function update() {\n\t\t\tif (!this.effect) return false;\n\n\t\t\tthis.effect.update();\n\n\t\t\treturn this;\n\t\t}\n\t}, {\n\t\tkey: 'show',\n\t\tvalue: function show() {\n\t\t\tif (!this.effect) return false;\n\n\t\t\tthis.effect.show();\n\n\t\t\treturn this;\n\t\t}\n\t}, {\n\t\tkey: 'hide',\n\t\tvalue: function hide() {\n\t\t\tif (!this.effect) return false;\n\n\t\t\tthis.effect.hide();\n\n\t\t\treturn this;\n\t\t}\n\t}, {\n\t\tkey: 'isShown',\n\t\tget: function get() {\n\t\t\treturn this.effect.isShown();\n\t\t}\n\t}, {\n\t\tkey: 'sections',\n\t\tget: function get() {\n\t\t\treturn this.element.find(this.config.sectionsContainerSelector);\n\t\t}\n\t}]);\n\n\treturn HSHeaderFullscreen;\n}();\n\nexports.default = HSHeaderFullscreen;\n\n//# sourceURL=webpack://HSHeaderFullscreen/./src/js/hs-header-fullscreen.js?");

/***/ }),

/***/ "./src/js/observers/overlay-effect.js":
/*!********************************************!*\
  !*** ./src/js/observers/overlay-effect.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar HSHeaderFullscreenOverlayEffect = function () {\n\tfunction HSHeaderFullscreenOverlayEffect() {\n\t\t_classCallCheck(this, HSHeaderFullscreenOverlayEffect);\n\n\t\tthis._isShown = false;\n\t}\n\n\t_createClass(HSHeaderFullscreenOverlayEffect, [{\n\t\tkey: 'init',\n\t\tvalue: function init(element, overlay, afterOpen, afterClose) {\n\t\t\tvar _self = this;\n\n\t\t\tthis.element = element;\n\t\t\tthis.overlay = overlay;\n\t\t\tthis.afterOpen = afterOpen;\n\t\t\tthis.afterClose = afterClose;\n\n\t\t\tthis.overlay.on(\"webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend\", function (e) {\n\t\t\t\tif (_self.isShown() && e.originalEvent.propertyName === 'transform') {\n\t\t\t\t\t_self.afterOpen.call(_self.element, _self.overlay);\n\t\t\t\t} else if (!_self.isShown() && e.originalEvent.propertyName === 'transform') {\n\t\t\t\t\t_self.afterClose.call(_self.element, _self.overlay);\n\t\t\t\t}\n\n\t\t\t\te.stopPropagation();\n\t\t\t\te.preventDefault();\n\t\t\t});\n\n\t\t\tthis.update();\n\n\t\t\tthis.overlay.addClass(this.element.data('overlay-classes'));\n\n\t\t\treturn this;\n\t\t}\n\t}, {\n\t\tkey: 'destroy',\n\t\tvalue: function destroy() {\n\t\t\tthis.overlay.css({\n\t\t\t\t'width': 'auto',\n\t\t\t\t'height': 'auto'\n\t\t\t});\n\n\t\t\tthis.element.removeClass('fullscreen-showed');\n\n\t\t\treturn this;\n\t\t}\n\t}, {\n\t\tkey: 'update',\n\t\tvalue: function update() {\n\t\t\tvar $w = $(window),\n\t\t\t    $wW = $w.width(),\n\t\t\t    $wH = $w.height();\n\n\t\t\tthis.overlay.css({\n\t\t\t\twidth: $wW > $wH ? $wW * 1.5 : $wH * 1.5,\n\t\t\t\theight: $wW > $wH ? $wW * 1.5 : $wH * 1.5\n\t\t\t});\n\n\t\t\treturn this;\n\t\t}\n\t}, {\n\t\tkey: 'show',\n\t\tvalue: function show() {\n\t\t\tthis.element.addClass('fullscreen-showed');\n\t\t\tthis._isShown = true;\n\n\t\t\treturn this;\n\t\t}\n\t}, {\n\t\tkey: 'hide',\n\t\tvalue: function hide() {\n\t\t\tthis.element.removeClass('fullscreen-showed');\n\t\t\tthis._isShown = false;\n\n\t\t\treturn this;\n\t\t}\n\t}, {\n\t\tkey: 'isShown',\n\t\tvalue: function isShown() {\n\t\t\treturn this._isShown;\n\t\t}\n\t}]);\n\n\treturn HSHeaderFullscreenOverlayEffect;\n}();\n\nexports.default = HSHeaderFullscreenOverlayEffect;\n\n//# sourceURL=webpack://HSHeaderFullscreen/./src/js/observers/overlay-effect.js?");

/***/ })

/******/ })["default"];
});
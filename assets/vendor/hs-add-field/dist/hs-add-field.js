(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSAddField"] = factory();
	else
		root["HSAddField"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-add-field.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-add-field.js":
/*!**************************************!*\
  !*** ./src/js/hs-add-field.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSAddField; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSCounter Plugin\n* @version: 2.0.0 (Mon, 25 Nov 2019)\n* @requires: jQuery v3.0 or later\n* @author: HtmlStream\n* @event-namespace: .HSAddField\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\nvar HSAddField = /*#__PURE__*/function () {\n  function HSAddField(element, config) {\n    _classCallCheck(this, HSAddField);\n\n    this.element = element;\n    this.defaults = {\n      createTrigger: '.js-create-field',\n      deleteTrigger: '.js-delete-field',\n      limit: 5,\n      defaultCreated: 1,\n      nameSeparator: '_',\n      addedField: function addedField() {},\n      deletedField: function deletedField() {}\n    };\n    this.config = config;\n    this.flags = {\n      name: 'data-name',\n      \"delete\": 'data-hs-add-field-delete'\n    };\n    this.fieldsCount = 0;\n  }\n\n  _createClass(HSAddField, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var self = this,\n          element = this.element,\n          dataSettings = $(element).attr('data-hs-add-field-options') ? JSON.parse($(element).attr('data-hs-add-field-options')) : {};\n      this.config = Object.assign({}, this.defaults, this.config, dataSettings);\n      this.fieldsCount = this.config.defaultCreated;\n\n      for (var i = 0; i < this.config.defaultCreated; i++) {\n        this.__addField(this.config);\n      }\n\n      $(this.element).on('click', this.config.createTrigger, function () {\n        _this.__addField(_this.config);\n      });\n      $(this.element).on('click', this.config.deleteTrigger, function (e) {\n        _this.__deleteField(_this.config, $(e.currentTarget).attr(_this.flags[\"delete\"]));\n      });\n    }\n  }, {\n    key: \"__addField\",\n    value: function __addField(params) {\n      var settings = params;\n\n      if (this.fieldsCount < settings.limit) {\n        var field = $(settings.template).clone().removeAttr('id').css({\n          display: ''\n        }).appendTo($(settings.container));\n\n        this.__updateFieldsCount();\n\n        this.__renderName();\n\n        this.__renderKeys();\n\n        this.__toggleCreateButton();\n\n        this.config.addedField();\n      }\n    }\n  }, {\n    key: \"__deleteField\",\n    value: function __deleteField(params, index) {\n      var settings = params;\n\n      if (this.fieldsCount > 0) {\n        $(settings.container).children()[index].remove();\n\n        this.__updateFieldsCount();\n\n        this.__renderName();\n\n        this.__renderKeys();\n\n        this.__toggleCreateButton();\n\n        this.config.deletedField();\n      }\n    }\n  }, {\n    key: \"__renderName\",\n    value: function __renderName() {\n      var _this2 = this;\n\n      $(this.config.container).children().each(function (i, el) {\n        var key = i;\n        $(el).find(\"[\".concat(_this2.flags.name, \"]\")).each(function (i, el) {\n          var name = $(el).attr(_this2.flags.name);\n          $(el).attr('name', name + _this2.config.nameSeparator + key);\n        });\n      });\n    }\n  }, {\n    key: \"__renderKeys\",\n    value: function __renderKeys() {\n      var _this3 = this;\n\n      $(this.config.container).children().find(this.config.deleteTrigger).each(function (i, el) {\n        $(el).attr(_this3.flags[\"delete\"], i);\n      });\n    }\n  }, {\n    key: \"__updateFieldsCount\",\n    value: function __updateFieldsCount() {\n      this.fieldsCount = $(this.config.container).children().length;\n    }\n  }, {\n    key: \"__toggleCreateButton\",\n    value: function __toggleCreateButton() {\n      if (this.fieldsCount === this.config.limit) {\n        $(this.config.createTrigger).fadeOut(0);\n      } else {\n        $(this.config.createTrigger).fadeIn(0);\n      }\n    }\n  }]);\n\n  return HSAddField;\n}();\n\n\n\n//# sourceURL=webpack://HSAddField/./src/js/hs-add-field.js?");

/***/ })

/******/ })["default"];
});
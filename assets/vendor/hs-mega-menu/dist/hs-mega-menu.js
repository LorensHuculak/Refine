(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSMegaMenu"] = factory();
	else
		root["HSMegaMenu"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-mega-menu.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-mega-menu.js":
/*!********************************!*\
  !*** ./src/js/hs-mega-menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSMegaMenu; });\n/* harmony import */ var _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/object-assign-deep */ \"./src/js/methods/object-assign-deep.js\");\n/* harmony import */ var _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _methods_get_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/get-type */ \"./src/js/methods/get-type.js\");\n/* harmony import */ var _methods_smart_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/smart-position */ \"./src/js/methods/smart-position.js\");\n/* harmony import */ var _methods_desktop_css_animation_enable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/desktop-css-animation-enable */ \"./src/js/methods/desktop-css-animation-enable.js\");\n/* harmony import */ var _methods_desktop_mouseenter_event_listener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/desktop-mouseenter-event-listener */ \"./src/js/methods/desktop-mouseenter-event-listener.js\");\n/* harmony import */ var _methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./methods/desktop-mouseleave-event-listener */ \"./src/js/methods/desktop-mouseleave-event-listener.js\");\n/* harmony import */ var _methods_desktop_click_event_listener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./methods/desktop-click-event-listener */ \"./src/js/methods/desktop-click-event-listener.js\");\n/* harmony import */ var _methods_mobile_click_event_listener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./methods/mobile-click-event-listener */ \"./src/js/methods/mobile-click-event-listener.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSMegaMenu Plugin\n* @version: 2.0.0 (Mon, 25 Nov 2019)\n* @requires: jQuery v3.0 or later\n* @author: HtmlStream\n* @event-namespace: .HSMegaMenu\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\n\n\n\n\n\n\n\n\n\nvar HSMegaMenu = /*#__PURE__*/function () {\n  function HSMegaMenu(el, settings) {\n    _classCallCheck(this, HSMegaMenu);\n\n    this.el = el;\n    this.defaults = {\n      eventType: 'hover',\n      direction: 'horizontal',\n      breakpoint: 'lg',\n      rtl: false,\n      isMenuOpened: false,\n      sideBarRatio: 1 / 4,\n      pageContainer: $('body'),\n      mobileSpeed: 400,\n      duration: 300,\n      delay: 0,\n      itemOptions: {\n        megaMenuTimeOut: null,\n        desktop: {\n          animation: 'animated',\n          animationIn: 'slideInUp',\n          animationOut: false,\n          position: null,\n          maxWidth: null\n        }\n      },\n      classMap: {\n        rtl: '.hs-rtl',\n        reversed: '.hs-reversed',\n        initialized: '.hs-menu-initialized',\n        mobileState: '.hs-mobile-state',\n        invoker: '.hs-mega-menu-invoker',\n        subMenu: '.hs-sub-menu',\n        hasSubMenu: '.hs-has-sub-menu',\n        hasSubMenuActive: '.hs-sub-menu-opened',\n        megaMenu: '.hs-mega-menu',\n        hasMegaMenu: '.hs-has-mega-menu',\n        hasMegaMenuActive: '.hs-mega-menu-opened'\n      }\n    };\n    this.settings = settings;\n    this.state = null;\n  }\n\n  _createClass(HSMegaMenu, [{\n    key: \"init\",\n    value: function init() {\n      var context = this,\n          $el = $(context.el),\n          defaults = Object.assign({}, context.defaults),\n          dataSettings = $el.attr('data-hs-mega-menu-options') ? JSON.parse($el.attr('data-hs-mega-menu-options')) : {};\n      var settings = {};\n      settings = _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0___default()({}, defaults, settings, dataSettings, context.settings); // Resolution list\n\n      var resolutionsList = {\n        xs: 0,\n        sm: 576,\n        md: 768,\n        lg: 992,\n        xl: 1200\n      }; // Keycodes\n\n      var ESC_KEYCODE = 27,\n          TAB_KEYCODE = 9,\n          ENTER_KEYCODE = 13,\n          SPACE_KEYCODE = 32,\n          ARROW_UP_KEYCODE = 38,\n          ARROW_DOWN_KEYCODE = 40,\n          ARROW_RIGHT_KEYCODE = 39,\n          ARROW_LEFT_KEYCODE = 37; // Prevent scroll\n\n      function preventScroll(keycode) {\n        return function (e) {\n          if (e.which === keycode) {\n            e.preventDefault();\n          }\n        };\n      } // Get Item Settings\n\n\n      function getItemSettings(el) {\n        var $el = el,\n            dataSettings = $el.attr('data-hs-mega-menu-item-options') ? JSON.parse($el.attr('data-hs-mega-menu-item-options')) : {},\n            itemSettings = settings.itemOptions;\n        itemSettings = $.extend(true, itemSettings, dataSettings);\n\n        itemSettings.activeItemClass = function () {\n          return Object(_methods_get_type__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($el, settings) === 'mega-menu' ? settings.classMap.hasMegaMenuActive : settings.classMap.hasSubMenuActive;\n        };\n\n        return itemSettings;\n      } // State Detection\n\n\n      $(window).on('resize', function () {\n        if (window.innerWidth < resolutionsList[settings.breakpoint]) {\n          context.state = 'mobile';\n        } else {\n          context.state = 'desktop';\n        }\n      }).trigger('resize'); // Set RTL\n\n      if (settings.rtl) {\n        $el.addClass(settings.classMap.rtl.slice(1));\n      } // Init Menu Items\n\n\n      $el.find(\"\".concat(settings.classMap.hasMegaMenu, \", \").concat(settings.classMap.hasSubMenu)).each(function () {\n        context.MegaMenuItem($(this), $(this).children(settings.classMap[Object(_methods_get_type__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($(this), settings) === 'mega-menu' ? 'megaMenu' : 'subMenu']), settings);\n      }); // Add Initialized Classes\n\n      $el.addClass(\"\".concat(settings.classMap.initialized.slice(1), \" hs-menu-\").concat(settings.direction)); // *****\n      // Start: ACCESSIBILITY\n      // *****\n\n      var myPreventScrollSpace = preventScroll(SPACE_KEYCODE),\n          myPreventScrollDown = preventScroll(ARROW_DOWN_KEYCODE),\n          myPreventScrollUp = preventScroll(ARROW_UP_KEYCODE);\n      var $items,\n          index,\n          state = null;\n      $(document).on('keyup', function () {\n        window.removeEventListener('keydown', myPreventScrollSpace, false);\n        window.removeEventListener('keydown', myPreventScrollUp, false);\n        window.removeEventListener('keydown', myPreventScrollDown, false);\n      });\n      $(document).on('keyup', \"\".concat(settings.classMap.hasMegaMenu, \", \").concat(settings.classMap.hasSubMenu), function (e) {\n        //\n        // Start: PREVENT SCROLL\n        //\n        e.preventDefault();\n        e.stopPropagation();\n        window.addEventListener('keydown', myPreventScrollSpace, false);\n        window.addEventListener('keydown', myPreventScrollUp, false);\n        window.addEventListener('keydown', myPreventScrollDown, false); //\n        // End: PREVENT SCROLL\n        //\n        //\n        // Start: ELEMENT DETECTION\n        //\n\n        if ($(e.target).hasClass(settings.classMap.invoker.slice(1)) && !$(e.target).closest(\"\".concat(settings.classMap.subMenu, \", \").concat(settings.classMap.megaMenu)).length) {\n          // console.log('Top level');\n          if (state !== 'topLevel') {\n            state = 'topLevel';\n          }\n\n          $items = [].slice.call($(e.target).parent().parent().find(settings.classMap.invoker)).filter(function (item) {\n            if (!$(item).closest(\"\".concat(settings.classMap.subMenu, \", \").concat(settings.classMap.megaMenu)).length) {\n              return $(item).is(':visible');\n            }\n          });\n        } else if ($(e.target).closest(\"\".concat(settings.classMap.subMenu, \", \").concat(settings.classMap.megaMenu)).length && $(e.target).siblings(\"\".concat(settings.classMap.subMenu, \", \").concat(settings.classMap.megaMenu)).length) {\n          // console.log('Has submenu and not top level');\n          if (state !== 'hasSubmenu') {\n            state = 'hasSubmenu';\n          }\n\n          $items = [].slice.call($(e.target).parent().parent().find(settings.classMap.invoker)).filter(function (item) {\n            return $(item).is(':visible');\n          });\n        } else {\n          // console.log('Just element');\n          if (state !== 'simple') {\n            state = 'simple';\n          }\n\n          $items = [].slice.call($(e.target).closest(\"\".concat(settings.classMap.subMenu, \", \").concat(settings.classMap.megaMenu)).find('a, button')).filter(function (item) {\n            return $(item).is(':visible');\n          });\n        } //\n        // End: ELEMENT DETECTION\n        //\n\n\n        index = $items.indexOf(e.target); //\n        // Start: TOP LEVEL\n        //\n        // Left\n\n        if (state === 'topLevel' && e.which === ARROW_LEFT_KEYCODE && index > 0) {\n          index--;\n        } // Right\n\n\n        if (state === 'topLevel' && e.which === ARROW_RIGHT_KEYCODE && index < $items.length - 1) {\n          index++;\n        } // Open Sub\n\n\n        if (state === 'topLevel' && (e.which === ARROW_DOWN_KEYCODE || e.which === SPACE_KEYCODE || e.which === ENTER_KEYCODE)) {\n          if (!$(e.target).siblings(\"\".concat(settings.classMap.megaMenu, \":visible, \").concat(settings.classMap.subMenu, \":visible\")).length) {\n            Object(_methods_desktop_mouseenter_event_listener__WEBPACK_IMPORTED_MODULE_4__[\"default\"])($(e.target).parent(), $(e.target).siblings(), settings, getItemSettings($(e.target).parent()))();\n          } else if ($(e.target).siblings(\"\".concat(settings.classMap.megaMenu, \":visible, \").concat(settings.classMap.subMenu, \":visible\")).length) {\n            $($(e.target).siblings(\"\".concat(settings.classMap.megaMenu, \":visible, \").concat(settings.classMap.subMenu, \":visible\")).find('a')[0]).focus();\n            return;\n          }\n        } // Close Siblings\n\n\n        if (state === 'topLevel' && (e.which === TAB_KEYCODE || e.which === ARROW_RIGHT_KEYCODE || e.which === ARROW_LEFT_KEYCODE) && $(e.target).closest(\"\".concat(settings.classMap.hasMegaMenu, \", \").concat(settings.classMap.hasSubMenu)).parent().find(\"\".concat(settings.classMap.megaMenu, \":visible, \").concat(settings.classMap.subMenu, \":visible\")).length) {\n          Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__[\"default\"])($(e.target).closest(\"\".concat(settings.classMap.hasMegaMenu, \", \").concat(settings.classMap.hasSubMenu)), $(e.target).closest(\"\".concat(settings.classMap.hasMegaMenu, \", \").concat(settings.classMap.hasSubMenu)).parent().find(\"\".concat(settings.classMap.hasMegaMenuActive, \" > \").concat(settings.classMap.megaMenu, \", \").concat(settings.classMap.hasSubMenuActive, \" > \").concat(settings.classMap.subMenu)), settings, getItemSettings($(e.target).closest(\"\".concat(settings.classMap.hasMegaMenu, \", \").concat(settings.classMap.hasSubMenu))))();\n        } //\n        // End: TOP LEVEL\n        //\n        //\n        // Start: HAS SUB-MENU BUT NOT TOP LEVEL\n        //\n        // Up\n\n\n        if (state === 'hasSubmenu' && e.which === ARROW_UP_KEYCODE && index > 0) {\n          index--;\n        } // Down\n\n\n        if (state === 'hasSubmenu' && e.which === ARROW_DOWN_KEYCODE && index < $items.length - 1) {\n          index++;\n        } // Open Sub\n\n\n        if (state === 'hasSubmenu' && (e.which === ARROW_LEFT_KEYCODE || e.which === ARROW_RIGHT_KEYCODE || e.which === SPACE_KEYCODE || e.which === ENTER_KEYCODE)) {\n          if (!$(e.target).siblings(\"\".concat(settings.classMap.megaMenu, \":visible, \").concat(settings.classMap.subMenu, \":visible\")).length) {\n            Object(_methods_desktop_mouseenter_event_listener__WEBPACK_IMPORTED_MODULE_4__[\"default\"])($(e.target).parent(), $(e.target).siblings(), settings, getItemSettings($(e.target).parent()))();\n          } else if ($(e.target).siblings(\"\".concat(settings.classMap.megaMenu, \":visible, \").concat(settings.classMap.subMenu, \":visible\")).length) {\n            $($(e.target).siblings(\"\".concat(settings.classMap.megaMenu, \":visible, \").concat(settings.classMap.subMenu, \":visible\")).find('a')[0]).focus();\n            return;\n          }\n        } // Close Siblings\n\n\n        if (state === 'hasSubmenu' && (e.which === TAB_KEYCODE || e.which === ARROW_DOWN_KEYCODE || e.which === ARROW_UP_KEYCODE) && $(e.target).closest(\"\".concat(settings.classMap.hasMegaMenu, \", \").concat(settings.classMap.hasSubMenu)).parent().find(\"\".concat(settings.classMap.megaMenu, \":visible, \").concat(settings.classMap.subMenu, \":visible\")).length) {\n          Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__[\"default\"])($(e.target).closest(\"\".concat(settings.classMap.hasMegaMenu, \", \").concat(settings.classMap.hasSubMenu)), $(e.target).closest(\"\".concat(settings.classMap.hasMegaMenu, \", \").concat(settings.classMap.hasSubMenu)).parent().find(\"\".concat(settings.classMap.hasMegaMenuActive, \" > \").concat(settings.classMap.megaMenu, \", \").concat(settings.classMap.hasSubMenuActive, \" > \").concat(settings.classMap.subMenu)), settings, getItemSettings($(e.target).closest(\"\".concat(settings.classMap.hasMegaMenu, \", \").concat(settings.classMap.hasSubMenu))))();\n        } //\n        // End: HAS SUB-MENU BUT NOT TOP LEVEL\n        //\n        //\n        // Start: SIMPLE\n        //\n        // Left, Up\n\n\n        if (state === 'simple' && e.which === ARROW_UP_KEYCODE && index > 0) {\n          index--;\n        } // Right, Down\n\n\n        if (state === 'simple' && e.which === ARROW_DOWN_KEYCODE && index < $items.length - 1) {\n          index++;\n        } // Close Siblings\n\n\n        if (state === 'simple' && (e.which === ARROW_RIGHT_KEYCODE || e.which === ARROW_LEFT_KEYCODE) && $(e.target).closest(settings.classMap.hasSubMenu).parent().find(settings.classMap.subMenu).length) {\n          $(e.target).closest(settings.classMap.hasSubMenu).children(settings.classMap.invoker).focus();\n          Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__[\"default\"])($(e.target).closest(settings.classMap.hasSubMenu), $(e.target).closest(settings.classMap.hasSubMenu).parent().find(\"\".concat(settings.classMap.hasSubMenuActive, \" > \").concat(settings.classMap.subMenu)), settings, getItemSettings($(e.target).closest(settings.classMap.hasSubMenu)))();\n          return;\n        } //\n        // End: SIMPLE\n        //\n        // Close Self\n\n\n        if (e.which === ESC_KEYCODE && context.state === 'desktop' && $(e.target).closest(\"\".concat(settings.classMap.hasMegaMenuActive, \", \").concat(settings.classMap.hasSubMenuActive)).length) {\n          $(e.target).closest(\"\".concat(settings.classMap.hasMegaMenuActive, \", \").concat(settings.classMap.hasSubMenuActive)).children(settings.classMap.invoker).focus();\n          Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__[\"default\"])($(e.target).closest(\"\".concat(settings.classMap.hasMegaMenuActive, \", \").concat(settings.classMap.hasSubMenuActive)), $(e.target).closest(\"\".concat(settings.classMap.hasMegaMenuActive, \", \").concat(settings.classMap.hasSubMenuActive)).find(\"\".concat(settings.classMap.megaMenu, \", \").concat(settings.classMap.subMenu)), settings, getItemSettings($(e.target).closest(\"\".concat(settings.classMap.hasMegaMenuActive, \", \").concat(settings.classMap.hasSubMenuActive))))();\n          return;\n        } // Reset index\n\n\n        if (index < 0) {\n          index = 0;\n        }\n\n        $($items[index]).focus();\n      });\n      $(document).on('keyup', function (e) {\n        // Close All\n        if (e.which === TAB_KEYCODE && $(e.target).closest(\"\".concat(settings.classMap.megaMenu, \", \").concat(settings.classMap.subMenu)).length === 0) {\n          Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__[\"default\"])($(\"\".concat(settings.classMap.hasMegaMenuActive, \", \").concat(settings.classMap.hasSubMenuActive)), $(\"\".concat(settings.classMap.megaMenu, \":visible, \").concat(settings.classMap.subMenu, \":visible\")), settings, getItemSettings($(\"\".concat(settings.classMap.hasMegaMenuActive, \", \").concat(settings.classMap.hasSubMenuActive))))();\n        }\n      }); // *****\n      // End: ACCESSIBILITY\n      // *****\n    }\n  }, {\n    key: \"MegaMenuItem\",\n    value: function MegaMenuItem(el, menu, params) {\n      var context = this,\n          settings = params,\n          itemDataSettings = el.attr('data-hs-mega-menu-item-options') ? JSON.parse(el.attr('data-hs-mega-menu-item-options')) : {},\n          $el = el,\n          $menu = menu;\n      var itemSettings = {\n        eventType: itemDataSettings.eventType ? itemDataSettings.eventType : settings.eventType,\n        megaMenuTimeOut: null,\n        desktop: {\n          animation: 'animated',\n          animationIn: 'slideInUp',\n          animationOut: false,\n          position: null,\n          maxWidth: null\n        }\n      };\n      itemSettings = _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0___default()({}, settings, itemSettings, itemDataSettings);\n\n      itemSettings.activeItemClass = function () {\n        return Object(_methods_get_type__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($el, itemSettings) === 'mega-menu' ? itemSettings.classMap.hasMegaMenuActive : itemSettings.classMap.hasSubMenuActive;\n      }; // Set Menu Breakpoint Class\n\n\n      $menu.addClass(Object(_methods_get_type__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($el, itemSettings) === 'mega-menu' ? \"hs-mega-menu-desktop-\".concat(itemSettings.breakpoint) : \"hs-sub-menu-desktop-\".concat(itemSettings.breakpoint)); // Listeners\n\n      var myDesktopCSSAnimationEnable = Object(_methods_desktop_css_animation_enable__WEBPACK_IMPORTED_MODULE_3__[\"default\"])($menu, itemSettings),\n          myDesktopMouseEnterEventListener = Object(_methods_desktop_mouseenter_event_listener__WEBPACK_IMPORTED_MODULE_4__[\"default\"])($el, $menu, settings, itemSettings),\n          myDesktopMouseLeaveEventListener = Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__[\"default\"])($el, $menu, settings, itemSettings),\n          myDesktopClickEventListener = Object(_methods_desktop_click_event_listener__WEBPACK_IMPORTED_MODULE_6__[\"default\"])($el, $menu, settings, itemSettings),\n          myMobileClickEventListener = Object(_methods_mobile_click_event_listener__WEBPACK_IMPORTED_MODULE_7__[\"default\"])($el, $menu, settings, itemSettings);\n\n      var mobileListeners = function mobileListeners() {\n        // Remove Desktop Listeners\n        $menu[0].removeEventListener('animationend', myDesktopCSSAnimationEnable, false);\n        $menu[0].removeEventListener('webkitAnimationEnd', myDesktopCSSAnimationEnable, false);\n        $el[0].removeEventListener('mouseenter', myDesktopMouseEnterEventListener, false);\n        $el[0].removeEventListener('mouseleave', myDesktopMouseLeaveEventListener, false); // $el.children(settings.classMap.invoker)[0].removeEventListener('focus', myDesktopMouseEnterEventListener, false);\n\n        $el.children(itemSettings.classMap.invoker)[0].removeEventListener('click', myDesktopClickEventListener, false); // Add Mobile Listeners\n\n        $el.children(itemSettings.classMap.invoker)[0].addEventListener('click', myMobileClickEventListener, false);\n      },\n          desktopListeners = function desktopListeners() {\n        // Remove Mobile Listeners\n        $el.children(itemSettings.classMap.invoker)[0].removeEventListener('click', myMobileClickEventListener, false); // Add Desktop Listeners\n\n        $menu[0].addEventListener('animationend', myDesktopCSSAnimationEnable, false);\n        $menu[0].addEventListener('webkitAnimationEnd', myDesktopCSSAnimationEnable, false);\n\n        if (itemSettings.eventType === 'hover') {\n          $el[0].addEventListener('mouseenter', myDesktopMouseEnterEventListener, false);\n          $el[0].addEventListener('mouseleave', myDesktopMouseLeaveEventListener, false); // if (!$el.parents().hasClass(settings.classMap.subMenu.slice(1))) {\n          // \t$el.children(settings.classMap.invoker)[0].addEventListener('focus', myDesktopMouseEnterEventListener, false);\n          // }\n        }\n\n        if (itemSettings.eventType === 'click') {\n          $el.children(itemSettings.classMap.invoker)[0].addEventListener('click', myDesktopClickEventListener, false);\n        }\n      };\n\n      if (itemSettings.desktop.maxWidth) {\n        $menu.css('max-width', itemSettings.desktop.maxWidth);\n      }\n\n      if (itemSettings.desktop.position) {\n        $menu.addClass(\"hs-position-\".concat(itemSettings.desktop.position));\n      } // Document Events\n\n\n      $(document).on('click', function (e) {\n        if ($(e.target).closest($menu).length === 0 && $(e.target).closest(itemSettings.classMap.invoker).length === 0 && context.state === 'desktop') {\n          $el.removeClass(itemSettings.activeItemClass().slice(1));\n          $menu.removeClass(itemSettings.desktop.animationIn);\n\n          if (itemSettings.animationOut) {\n            $menu.addClass(itemSettings.desktop.animationOut);\n          } else {\n            $menu.hide();\n          }\n        }\n      }); // Resize and Scroll Events\n\n      $(window).on('resize', function () {\n        if (context.state === 'desktop') {\n          Object(_methods_smart_position__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($menu, itemSettings);\n        }\n      }); // State Detection\n\n      $(window).on('resize', function () {\n        if (context.state === 'mobile') {\n          $menu.removeClass(itemSettings.desktop.animation).css('animation-duration', '');\n          mobileListeners();\n        } else if (context.state === 'desktop') {\n          $menu.addClass(itemSettings.desktop.animation).css('animation-duration', \"\".concat(itemSettings.duration, \"ms\"));\n          desktopListeners();\n        }\n      }).trigger('resize');\n    }\n  }]);\n\n  return HSMegaMenu;\n}();\n\n\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/hs-mega-menu.js?");

/***/ }),

/***/ "./src/js/methods/desktop-click-event-listener.js":
/*!********************************************************!*\
  !*** ./src/js/methods/desktop-click-event-listener.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return desktopClickEventListener; });\n/* harmony import */ var _get_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-type */ \"./src/js/methods/get-type.js\");\n/* harmony import */ var _smart_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-position */ \"./src/js/methods/smart-position.js\");\n/* harmony import */ var _desktop_show__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desktop-show */ \"./src/js/methods/desktop-show.js\");\n/* harmony import */ var _desktop_hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop-hide */ \"./src/js/methods/desktop-hide.js\");\n\n\n\n\nfunction desktopClickEventListener(el, menu, params, itemParams) {\n  return function () {\n    var $siblingInvokers = menu.parent(\"\".concat(params.classMap.hasMegaMenu, \", \").concat(params.classMap.hasSubMenu)).siblings(\"\".concat(params.classMap.hasMegaMenu).concat(params.classMap.hasMegaMenuActive, \", \").concat(params.classMap.hasSubMenu).concat(params.classMap.hasSubMenuActive));\n\n    if ($siblingInvokers.length) {\n      $siblingInvokers.each(function () {\n        var $el = $(this),\n            $menu = $el.children(\"\".concat(params.classMap.megaMenu, \", \").concat(params.classMap.subMenu)),\n            itemDataSettings = $el.attr('data-hs-mega-menu-item-options') ? JSON.parse($el.attr('data-hs-mega-menu-item-options')) : {};\n        var itemSettings = {\n          desktop: {\n            animation: 'animated',\n            animationIn: 'slideInUp',\n            animationOut: 'fadeOut',\n            position: null\n          }\n        };\n        itemSettings = Object.assign({}, itemSettings, itemDataSettings);\n\n        itemSettings.activeItemClass = function () {\n          return Object(_get_type__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($el, params) === 'mega-menu' ? params.classMap.hasMegaMenuActive : params.classMap.hasSubMenuActive;\n        };\n\n        $el.removeClass(itemSettings.activeItemClass().slice(1));\n        Object(_desktop_hide__WEBPACK_IMPORTED_MODULE_3__[\"default\"])($el, $menu, params, itemSettings);\n      });\n    }\n\n    if (menu.is(':hidden')) {\n      el.addClass(itemParams.activeItemClass().slice(1));\n      Object(_desktop_show__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(el, menu, params, itemParams);\n      Object(_smart_position__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(menu, params);\n    } else {\n      el.removeClass(itemParams.activeItemClass().slice(1));\n      Object(_desktop_hide__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(el, menu, params, itemParams);\n    }\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-click-event-listener.js?");

/***/ }),

/***/ "./src/js/methods/desktop-css-animation-enable.js":
/*!********************************************************!*\
  !*** ./src/js/methods/desktop-css-animation-enable.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return desktopCSSAnimationEnable; });\nfunction desktopCSSAnimationEnable(menu, itemParams) {\n  return function (e) {\n    if (menu.hasClass(itemParams.desktop.animationOut)) {\n      menu.removeClass(itemParams.desktop.animationOut).hide();\n    }\n\n    e.preventDefault();\n    e.stopPropagation();\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-css-animation-enable.js?");

/***/ }),

/***/ "./src/js/methods/desktop-hide.js":
/*!****************************************!*\
  !*** ./src/js/methods/desktop-hide.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return desktopHide; });\nfunction desktopHide(el, menu, params, itemParams) {\n  if (!menu.length) {\n    return this;\n  }\n\n  if (itemParams.desktop.animationOut) {\n    menu.removeClass(itemParams.desktop.animationIn).addClass(itemParams.desktop.animationOut).hide();\n  } else {\n    menu.removeClass(itemParams.desktop.animationIn).hide();\n  }\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-hide.js?");

/***/ }),

/***/ "./src/js/methods/desktop-mouseenter-event-listener.js":
/*!*************************************************************!*\
  !*** ./src/js/methods/desktop-mouseenter-event-listener.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return desktopMouseEnterEventListener; });\n/* harmony import */ var _smart_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-position */ \"./src/js/methods/smart-position.js\");\n/* harmony import */ var _desktop_show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desktop-show */ \"./src/js/methods/desktop-show.js\");\n/* harmony import */ var _get_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-type */ \"./src/js/methods/get-type.js\");\n/* harmony import */ var _desktop_hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop-hide */ \"./src/js/methods/desktop-hide.js\");\n\n\n\n\nfunction desktopMouseEnterEventListener(el, menu, params, itemParams) {\n  return function () {\n    if (itemParams.megaMenuTimeOut) {\n      clearTimeout(itemParams.megaMenuTimeOut);\n    }\n\n    var $siblingInvokers = menu.parent(\"\".concat(params.classMap.hasMegaMenu, \", \").concat(params.classMap.hasSubMenu)).siblings(\"\".concat(params.classMap.hasMegaMenu).concat(params.classMap.hasMegaMenuActive, \", \").concat(params.classMap.hasSubMenu).concat(params.classMap.hasSubMenuActive));\n\n    if ($siblingInvokers.length) {\n      $siblingInvokers.each(function () {\n        var $el = $(this),\n            $menu = $el.children(\"\".concat(params.classMap.megaMenu, \", \").concat(params.classMap.subMenu)),\n            itemDataSettings = $el.attr('data-hs-mega-menu-item-options') ? JSON.parse($el.attr('data-hs-mega-menu-item-options')) : {};\n        var itemSettings = {\n          desktop: {\n            animation: 'animated',\n            animationIn: 'slideInUp',\n            animationOut: 'fadeOut',\n            position: null\n          }\n        };\n        itemSettings = Object.assign({}, itemSettings, itemDataSettings);\n\n        itemSettings.activeItemClass = function () {\n          return Object(_get_type__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($el, params) === 'mega-menu' ? params.classMap.hasMegaMenuActive : params.classMap.hasSubMenuActive;\n        };\n\n        $el.removeClass(itemSettings.activeItemClass().slice(1));\n        Object(_desktop_hide__WEBPACK_IMPORTED_MODULE_3__[\"default\"])($el, $menu, params, itemSettings);\n      });\n    }\n\n    el.addClass(itemParams.activeItemClass().slice(1));\n    Object(_desktop_show__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el, menu, params, itemParams);\n    Object(_smart_position__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menu, params);\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-mouseenter-event-listener.js?");

/***/ }),

/***/ "./src/js/methods/desktop-mouseleave-event-listener.js":
/*!*************************************************************!*\
  !*** ./src/js/methods/desktop-mouseleave-event-listener.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return desktopMouseLeaveEventListener; });\n/* harmony import */ var _desktop_hide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desktop-hide */ \"./src/js/methods/desktop-hide.js\");\n\nfunction desktopMouseLeaveEventListener(el, menu, params, itemParams) {\n  return function () {\n    itemParams.megaMenuTimeOut = setTimeout(function () {\n      el.removeClass(itemParams.activeItemClass().slice(1));\n      Object(_desktop_hide__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el, menu, params, itemParams);\n    }, params.delay);\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-mouseleave-event-listener.js?");

/***/ }),

/***/ "./src/js/methods/desktop-show.js":
/*!****************************************!*\
  !*** ./src/js/methods/desktop-show.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return desktopShow; });\nfunction desktopShow(el, menu, params, itemParams) {\n  menu.removeClass(itemParams.desktop.animationOut).show().addClass(itemParams.desktop.animationIn);\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-show.js?");

/***/ }),

/***/ "./src/js/methods/get-type.js":
/*!************************************!*\
  !*** ./src/js/methods/get-type.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getType; });\nfunction getType(el, params) {\n  if (!el || !el.length) {\n    return false;\n  }\n\n  return el.hasClass(params.classMap.hasSubMenu.slice(1)) ? 'sub-menu' : el.hasClass(params.classMap.hasMegaMenu.slice(1)) ? 'mega-menu' : null;\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/get-type.js?");

/***/ }),

/***/ "./src/js/methods/mobile-click-event-listener.js":
/*!*******************************************************!*\
  !*** ./src/js/methods/mobile-click-event-listener.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mobileClickEventListener; });\n/* harmony import */ var _get_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-type */ \"./src/js/methods/get-type.js\");\n/* harmony import */ var _mobile_show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-show */ \"./src/js/methods/mobile-show.js\");\n/* harmony import */ var _mobile_hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-hide */ \"./src/js/methods/mobile-hide.js\");\n\n\n\nfunction mobileClickEventListener(el, menu, params, itemParams) {\n  return function () {\n    var $siblingInvokers = menu.parent(\"\".concat(params.classMap.hasMegaMenu, \", \").concat(params.classMap.hasSubMenu)).siblings(\"\".concat(params.classMap.hasMegaMenu).concat(params.classMap.hasMegaMenuActive, \", \").concat(params.classMap.hasSubMenu).concat(params.classMap.hasSubMenuActive));\n\n    if ($siblingInvokers.length) {\n      $siblingInvokers.each(function () {\n        var $el = $(this),\n            $menu = $el.children(\"\".concat(params.classMap.megaMenu, \", \").concat(params.classMap.subMenu)),\n            itemSettings = {};\n\n        itemSettings.activeItemClass = function () {\n          return Object(_get_type__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($el, params) === 'mega-menu' ? params.classMap.hasMegaMenuActive : params.classMap.hasSubMenuActive;\n        };\n\n        Object(_mobile_hide__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($el, $menu, params, itemSettings);\n      });\n    }\n\n    if (menu.is(':hidden')) {\n      Object(_mobile_show__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el, menu, params, itemParams);\n    } else {\n      Object(_mobile_hide__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(el, menu, params, itemParams);\n    }\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/mobile-click-event-listener.js?");

/***/ }),

/***/ "./src/js/methods/mobile-hide.js":
/*!***************************************!*\
  !*** ./src/js/methods/mobile-hide.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mobileHide; });\nfunction mobileHide(el, menu, params, itemParams) {\n  if (!menu.length) {\n    return this;\n  }\n\n  el.removeClass(itemParams.activeItemClass().slice(1));\n  menu.slideUp(params.mobileSpeed);\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/mobile-hide.js?");

/***/ }),

/***/ "./src/js/methods/mobile-show.js":
/*!***************************************!*\
  !*** ./src/js/methods/mobile-show.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mobileShow; });\nfunction mobileShow(el, menu, params, itemParams) {\n  if (!menu.length) {\n    return this;\n  }\n\n  el.addClass(itemParams.activeItemClass().slice(1));\n  menu.slideDown(params.mobileSpeed);\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/mobile-show.js?");

/***/ }),

/***/ "./src/js/methods/object-assign-deep.js":
/*!**********************************************!*\
  !*** ./src/js/methods/object-assign-deep.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n * OBJECT ASSIGN DEEP\n * Allows deep cloning of plain objects that contain primitives, nested plain objects, or nested plain arrays.\n */\n\n/*\n * A unified way of returning a string that describes the type of the given variable.\n */\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction getTypeOf(input) {\n  if (input === null) {\n    return 'null';\n  } else if (typeof input === 'undefined') {\n    return 'undefined';\n  } else if (_typeof(input) === 'object') {\n    return Array.isArray(input) ? 'array' : 'object';\n  }\n\n  return _typeof(input);\n}\n/*\n * Branching logic which calls the correct function to clone the given value base on its type.\n */\n\n\nfunction cloneValue(value) {\n  // The value is an object so lets clone it.\n  if (getTypeOf(value) === 'object') {\n    return quickCloneObject(value);\n  } // The value is an array so lets clone it.\n  else if (getTypeOf(value) === 'array') {\n      return quickCloneArray(value);\n    } // Any other value can just be copied.\n\n\n  return value;\n}\n/*\n * Enumerates the given array and returns a new array, with each of its values cloned (i.e. references broken).\n */\n\n\nfunction quickCloneArray(input) {\n  return input.map(cloneValue);\n}\n/*\n * Enumerates the properties of the given object (ignoring the prototype chain) and returns a new object, with each of\n * its values cloned (i.e. references broken).\n */\n\n\nfunction quickCloneObject(input) {\n  var output = {};\n\n  for (var key in input) {\n    if (!Object.prototype.hasOwnProperty.call(input, key)) {\n      continue;\n    }\n\n    output[key] = cloneValue(input[key]);\n  }\n\n  return output;\n}\n/*\n * Does the actual deep merging.\n */\n\n\nfunction executeDeepMerge(target) {\n  var _objects = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n  var _options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var options = {\n    arrayBehaviour: _options.arrayBehaviour || 'replace' // Can be \"merge\" or \"replace\".\n\n  }; // Ensure we have actual objects for each.\n\n  var objects = _objects.map(function (object) {\n    return object || {};\n  });\n\n  var output = target || {}; // Enumerate the objects and their keys.\n\n  for (var oindex = 0; oindex < objects.length; oindex++) {\n    var object = objects[oindex];\n    var keys = Object.keys(object);\n\n    for (var kindex = 0; kindex < keys.length; kindex++) {\n      var key = keys[kindex];\n      var value = object[key];\n      var type = getTypeOf(value);\n      var existingValueType = getTypeOf(output[key]);\n\n      if (type === 'object') {\n        if (existingValueType !== 'undefined') {\n          var existingValue = existingValueType === 'object' ? output[key] : {};\n          output[key] = executeDeepMerge({}, [existingValue, quickCloneObject(value)], options);\n        } else {\n          output[key] = quickCloneObject(value);\n        }\n      } else if (type === 'array') {\n        if (existingValueType === 'array') {\n          var newValue = quickCloneArray(value);\n          output[key] = options.arrayBehaviour === 'merge' ? output[key].concat(newValue) : newValue;\n        } else {\n          output[key] = quickCloneArray(value);\n        }\n      } else {\n        output[key] = value;\n      }\n    }\n  }\n\n  return output;\n}\n/*\n * Merge all the supplied objects into the target object, breaking all references, including those of nested objects\n * and arrays, and even objects nested inside arrays. The first parameter is not mutated unlike Object.assign().\n * Properties in later objects will always overwrite.\n */\n\n\nmodule.exports = function objectAssignDeep(target) {\n  for (var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    objects[_key - 1] = arguments[_key];\n  }\n\n  return executeDeepMerge(target, objects);\n};\n/*\n * Same as objectAssignDeep() except it doesn't mutate the target object and returns an entirely new object.\n */\n\n\nmodule.exports.noMutate = function objectAssignDeepInto() {\n  for (var _len2 = arguments.length, objects = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    objects[_key2] = arguments[_key2];\n  }\n\n  return executeDeepMerge({}, objects);\n};\n/*\n * Allows an options object to be passed in to customise the behaviour of the function.\n */\n\n\nmodule.exports.withOptions = function objectAssignDeepInto(target, objects, options) {\n  return executeDeepMerge(target, objects, options);\n};\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/object-assign-deep.js?");

/***/ }),

/***/ "./src/js/methods/smart-position.js":
/*!******************************************!*\
  !*** ./src/js/methods/smart-position.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return smartPosition; });\nfunction smartPosition(el, params) {\n  if (!el && !el.length) return;\n\n  if (!params.rtl) {\n    if (el.offset().left + el.outerWidth() > window.innerWidth) {\n      el.addClass(params.classMap.reversed.slice(1));\n    }\n  } else {\n    if (el.offset().left < 0) {\n      el.addClass(params.classMap.reversed.slice(1));\n    }\n  }\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/smart-position.js?");

/***/ })

/******/ })["default"];
});
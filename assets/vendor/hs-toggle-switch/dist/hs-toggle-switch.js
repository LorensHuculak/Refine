(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSToggleSwitch"] = factory();
	else
		root["HSToggleSwitch"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-toggle-switch.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/countup.js/dist/countUp.min.js":
/*!*****************************************************!*\
  !*** ./node_modules/countup.js/dist/countUp.min.js ***!
  \*****************************************************/
/*! exports provided: CountUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountUp\", function() { return CountUp; });\nvar __assign=undefined&&undefined.__assign||function(){return(__assign=Object.assign||function(t){for(var i,a=1,s=arguments.length;a<s;a++)for(var n in i=arguments[a])Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);return t}).apply(this,arguments)},CountUp=function(){function t(t,i,a){var s=this;this.target=t,this.endVal=i,this.options=a,this.version=\"2.0.4\",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:\",\",decimal:\".\",prefix:\"\",suffix:\"\"},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error=\"\",this.startVal=0,this.paused=!0,this.count=function(t){s.startTime||(s.startTime=t);var i=t-s.startTime;s.remaining=s.duration-i,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(i,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(i,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(i/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(i/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.decimalMult)/s.decimalMult,s.printValue(s.frameVal),i<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var i,a,n,e,r,o=t<0?\"-\":\"\";if(i=Math.abs(t).toFixed(s.options.decimalPlaces),n=(a=(i+=\"\").split(\".\"))[0],e=a.length>1?s.options.decimal+a[1]:\"\",s.options.useGrouping){r=\"\";for(var l=0,h=n.length;l<h;++l)0!==l&&l%3==0&&(r=s.options.separator+r),r=n[h-l-1]+r;n=r}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,function(t){return s.options.numerals[+t]}),e=e.replace(/[0-9]/g,function(t){return s.options.numerals[+t]})),o+s.options.prefix+n+e+s.options.suffix},this.easeOutExpo=function(t,i,a,s){return a*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=__assign({},this.defaults,a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,\"\"===this.options.separator&&(this.options.useGrouping=!1),this.el=\"string\"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error=\"[CountUp] target is null or undefined\"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);\"INPUT\"===this.el.tagName?this.el.value=i:\"text\"===this.el.tagName||\"tspan\"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return\"number\"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error=\"[CountUp] invalid start or end value: \"+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();\n\n//# sourceURL=webpack://HSToggleSwitch/./node_modules/countup.js/dist/countUp.min.js?");

/***/ }),

/***/ "./src/js/hs-toggle-switch.js":
/*!************************************!*\
  !*** ./src/js/hs-toggle-switch.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * HSToggleSwitch Plugin\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @version: 1.0.0 (Mon, 12 Dec 2019)\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @requires: jQuery v3.0 or later, countup.js v2.0.4\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @author: HtmlStream\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @event-namespace: .HSToggleSwitch\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @license: Htmlstream Libraries (https://htmlstream.com/)\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2019 Htmlstream\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */\n\nvar _countup = __webpack_require__(/*! countup.js */ \"./node_modules/countup.js/dist/countUp.min.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar HSToggleSwitch = function () {\n\tfunction HSToggleSwitch(elem, settings) {\n\t\t_classCallCheck(this, HSToggleSwitch);\n\n\t\tthis.elem = elem;\n\t\tthis.defaults = {\n\t\t\tmode: 'toggle-count',\n\t\t\ttargetSelector: undefined,\n\t\t\tisChecked: false,\n\t\t\teventType: 'change'\n\t\t};\n\t\tthis.settings = settings;\n\t\tthis.params = null;\n\t}\n\n\t_createClass(HSToggleSwitch, [{\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tvar context = this,\n\t\t\t    $el = context.elem,\n\t\t\t    dataSettings = $el.attr('data-hs-toggle-switch-options') ? JSON.parse($el.attr('data-hs-toggle-switch-options')) : {};\n\t\t\tvar options = this.params = $.extend(true, context.defaults, dataSettings, context.settings);\n\t\t\tthis.params.isChecked = this.elem.is(':checked');\n\n\t\t\t// Toggle Count\n\t\t\tif (options.mode === 'toggle-count') {\n\t\t\t\tif (options.isChecked) {\n\t\t\t\t\tvar $target = $(options.targetSelector);\n\n\t\t\t\t\toptions.isChecked = true;\n\n\t\t\t\t\t$target.each(function () {\n\t\t\t\t\t\tvar $this = $(this),\n\t\t\t\t\t\t    currentDataSettings = $this.attr('data-hs-toggle-switch-item-options') ? JSON.parse($this.attr('data-hs-toggle-switch-item-options')) : {};\n\n\t\t\t\t\t\t$this.text(currentDataSettings.max);\n\t\t\t\t\t});\n\t\t\t\t}\n\n\t\t\t\t$el.on(options.eventType, function () {\n\t\t\t\t\tcontext._toggleCount();\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\n\t\t// Toggle Count\n\n\t}, {\n\t\tkey: '_toggleCount',\n\t\tvalue: function _toggleCount() {\n\t\t\tvar context = this,\n\t\t\t    options = context.params;\n\n\t\t\tif (options.isChecked) {\n\t\t\t\tcontext._countDownEach();\n\t\t\t} else {\n\t\t\t\tcontext._countUpEach();\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: '_countUpEach',\n\t\tvalue: function _countUpEach() {\n\t\t\tvar context = this,\n\t\t\t    options = context.params,\n\t\t\t    $target = $(options.targetSelector);\n\n\t\t\toptions.isChecked = true;\n\n\t\t\t$target.each(function () {\n\t\t\t\tvar $this = $(this),\n\t\t\t\t    currentDataSettings = $this.attr('data-hs-toggle-switch-item-options') ? JSON.parse($this.attr('data-hs-toggle-switch-item-options')) : {};\n\n\t\t\t\tvar currentDefaults = {\n\t\t\t\t\tduration: .5,\n\t\t\t\t\tuseEasing: false\n\t\t\t\t},\n\t\t\t\t    currentOptions = {};\n\t\t\t\tcurrentOptions = $.extend(true, currentDefaults, currentDataSettings);\n\n\t\t\t\tcontext._countUp($this, currentOptions);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: '_countDownEach',\n\t\tvalue: function _countDownEach() {\n\t\t\tvar context = this,\n\t\t\t    options = context.params,\n\t\t\t    $target = $(options.targetSelector);\n\n\t\t\toptions.isChecked = false;\n\n\t\t\t$target.each(function () {\n\t\t\t\tvar $this = $(this),\n\t\t\t\t    currentDataSettings = $this.attr('data-hs-toggle-switch-item-options') ? JSON.parse($this.attr('data-hs-toggle-switch-item-options')) : {};\n\n\t\t\t\tvar currentDefaults = {\n\t\t\t\t\tduration: .5,\n\t\t\t\t\tuseEasing: false\n\t\t\t\t},\n\t\t\t\t    currentOptions = {};\n\t\t\t\tcurrentOptions = $.extend(true, currentDefaults, currentDataSettings);\n\n\t\t\t\tcontext._countDown($this, currentOptions);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: '_countUp',\n\t\tvalue: function _countUp(el, data) {\n\t\t\tvar defaults = {\n\t\t\t\tstartVal: data.min\n\t\t\t};\n\t\t\tvar options = $.extend(true, defaults, data);\n\n\t\t\tvar countUp = new _countup.CountUp(el[0], data.max, options);\n\n\t\t\tcountUp.start();\n\t\t}\n\t}, {\n\t\tkey: '_countDown',\n\t\tvalue: function _countDown(el, data) {\n\t\t\tvar defaults = {\n\t\t\t\tstartVal: data.max\n\t\t\t};\n\t\t\tvar options = $.extend(true, defaults, data);\n\n\t\t\tvar countUp = new _countup.CountUp(el[0], data.min, options);\n\n\t\t\tcountUp.start();\n\t\t}\n\t}]);\n\n\treturn HSToggleSwitch;\n}();\n\nexports.default = HSToggleSwitch;\n\n//# sourceURL=webpack://HSToggleSwitch/./src/js/hs-toggle-switch.js?");

/***/ })

/******/ })["default"];
});
/*
* HSStickyBlock Plugin
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or laters
* @author: HtmlStream
* @event-namespace: .HSStickyBlock
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2019 Htmlstream
*/

export default class HSStickyBlock {
	constructor(elem, settings) {
		this.elem = elem;
		this.defaults = {
			parentSelector: null,
			parentWidth: null,
			parentPaddingLeft: null,
			parentOffsetLeft: null,
			
			targetSelector: null,
			targetHeight: 0,
			
			stickyHeight: null,
			stickyOffsetTop: 0,
			stickyOffsetBottom: 0,
			
			windowOffsetTop: 0,
			
			startPoint: null,
			endPoint: null,
			
			resolutionsList: {
				xs: 0,
				sm: 576,
				md: 768,
				lg: 992,
				xl: 1200
			},
			breakpoint: 'lg',
			
			styles: {
				position: 'fixed'
			},
			
			classMap: {
				kill: 'hs-kill-sticky'
			}
		};
		this.settings = settings;
		
		this.init();
	}
	
	init() {
		const context = this,
			$el = context.elem,
			dataSettings = $el.attr('data-hs-sticky-block-options') ? JSON.parse($el.attr('data-hs-sticky-block-options')) : {},
			options = $.extend(true, context.defaults, dataSettings, context.settings);
		
		context._setRules($el, options);
		
		$(window).on('resize scroll', function () {
			context.update();
		});
	}
	
	update() {
		const context = this,
			$el = context.elem,
			dataSettings = $el.attr('data-hs-sticky-block-options') ? JSON.parse($el.attr('data-hs-sticky-block-options')) : {},
			options = $.extend(true, context.defaults, dataSettings, context.settings);
		
		context._setRules($el, options);
	}
	
	_updateOptions(el, params) {
		let options = params;
		
		options.windowOffsetTop = $(window).scrollTop();
		options.startPoint = $.isNumeric(options.startPoint) ? options.startPoint : $(options.startPoint).offset().top;
		options.endPoint = $.isNumeric(options.endPoint) ? options.endPoint : $(options.endPoint).offset().top;
		
		options.parentWidth = $(options.parentSelector).width();
		options.parentPaddingLeft = parseInt($(options.parentSelector).css('padding-left'));
		options.parentOffsetLeft = $(options.parentSelector).offset().left;
		
		options.targetHeight = options.targetSelector ? $(options.targetSelector).outerHeight() : 0;
		
		options.stickyHeight = el.outerHeight();
	}
	
	_setRules(el, params) {
		const context = this;
		let options = params;
		
		context._kill(el, options);
		
		context._updateOptions(el, options);
		
		if (!el.hasClass(options.classMap.kill)) {
			if (options.windowOffsetTop >= (options.startPoint - options.targetHeight - options.stickyOffsetTop) && options.windowOffsetTop <= (options.endPoint - options.targetHeight - options.stickyOffsetTop)) {
				context._add(el, options);
				context._top(el, options);
				context._parentSetHeight(options);
			} else {
				context._reset(el);
				context._parentRemoveHeight(options);
			}
			
			if (options.windowOffsetTop >= (options.endPoint - options.targetHeight - options.stickyHeight - options.stickyOffsetTop - options.stickyOffsetBottom)) {
				context._bottom(el, options);
			}
		}
	}
	
	_add(el, params) {
		let options = params;
		
		el.css({
			position: options.styles.position,
			left: options.parentOffsetLeft + options.parentPaddingLeft,
			width: options.parentWidth
		});
	}
	
	_top(el, params) {
		let options = params;
		
		el.css({
			top: options.stickyOffsetTop + options.targetHeight
		});
	}
	
	_bottom(el, params) {
		let options = params;
		
		el.css({
			top: options.endPoint - options.windowOffsetTop - options.stickyHeight - options.stickyOffsetBottom
		});
	}
	
	_reset(el) {
		el.css({
			position: '',
			top: '',
			bottom: '',
			left: '',
			width: ''
		});
	}
	
	_kill(el, params) {
		const context = this;
		let options = params;
		
		if (window.innerWidth <= options.resolutionsList[options.breakpoint]) {
			el.addClass(options.classMap.kill);
			context._reset(el);
			context._parentRemoveHeight(options);
		} else {
			el.removeClass(options.classMap.kill);
		}
	}
	
	_parentSetHeight(params) {
		let options = params;
		
		$(options.parentSelector).css({
			height: options.stickyHeight
		});
	}
	
	_parentRemoveHeight(params) {
		let options = params;
		
		$(options.parentSelector).css({
			height: ''
		});
	}
}

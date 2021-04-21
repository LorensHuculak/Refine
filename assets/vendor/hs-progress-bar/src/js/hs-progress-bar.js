export default class HSProgressBar {
	constructor(elem, settings) {
		this.elem = elem;
		this.defaults = {
			bounds: -100,
			debounce: 10,
			duration: 1000,
			isRtl: false,
			direction: 'horizontal',
			useProgressElement: false,
			indicatorSelector: '.hs-progress-bar-indicator',
			
			afterUpdate: () => {}
		};
		this.settings = settings;
	}
	
	init() {
		const context = this,
			$el = context.elem,
			dataSettings = $el.attr('data-hs-progress-bar-options') ? JSON.parse($el.attr('data-hs-progress-bar-options')) : {};
		let options = $.extend(true, context.defaults, dataSettings, context.settings);
		
		options.init = function () {
			if (options.direction === 'horizontal') {
				context._buildHorizontalProgressBar($el, options);
			} else {
				context._buildVerticalProgressBar($el, options);
			}
		};
		options.elements = function () {
			return $el;
		};
		options.appear = function (el) {
			if (options.direction === 'horizontal') {
				$(el).find(options.indicatorSelector).stop().animate({
					width: `${$(el).data('value')}%`
				}, {
					duration: options.duration,
					complete: function () {
						options.afterUpdate();
					}
				});
			} else {
				$(el).find(options.indicatorSelector).stop().animate({
					height: `${$(el).data('value')}%`
				}, {
					duration: options.duration,
					complete: function () {
						options.afterUpdate();
					}
				});
			}
		};
		
		appear(options);
	}
	
	_buildHorizontalProgressBar(el, params) {
		let options = params;
		
		if (options.useProgressElement) {
			el.attr('data-value', el.attr('value'));
			el.attr('value', 0);
		} else {
			el.attr('data-value', el.find(options.indicatorSelector).length ? Math.round(el.find(options.indicatorSelector).outerWidth() / el.outerWidth() * 100) : 0);
			el.find(options.indicatorSelector).css({
				width: 0
			});
		}
	}
	
	_buildVerticalProgressBar(el, params) {
		let options = params;
		
		if (!el.find(options.indicatorSelector).length) {
			return;
		}
		
		el.attr('data-value', parseInt(el.find(options.indicatorSelector).css('height'), 10) / el.find(options.indicatorSelector).parent().outerHeight() * 100);
		el.find(options.indicatorSelector).css({
			height: 0
		});
	}
}

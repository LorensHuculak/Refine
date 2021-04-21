export default class HSScrollToInOverflowedContainer {
	constructor(elem, settings) {
		this.elem = elem;
		this.defaults = {
			speed: 500,
			targetEl: null
		};
		this.settings = settings;
	}

	init() {
		const context = this,
			$el = context.elem,
			dataSettings = $el.attr('data-hs-scroll-to-in-overflowed-container-options') ? JSON.parse($el.attr('data-hs-scroll-to-in-overflowed-container-options')) : {},
			options = $.extend(true, context.defaults, dataSettings, context.settings);

		context._scrollToTarget($el, options);
	}

	_scrollToTarget(el, params) {
		const options = params;

		el.animate({
			scrollTop: el.scrollTop() - el.offset().top + $(options.targetEl).offset().top
		}, options.speed);

		return this;
	}
}

export default class HSSwitchText {
	constructor(elem, settings) {
		this.elem = elem;
		this.defaults = {
			target: null,
			eventType: 'change',
			afterChange: null,
			startUpdateOnChange: false
		};
		this.settings = settings;
	}
	
	init() {
		const context = this,
			$el = context.elem,
			dataSettings = $el.attr('data-hs-switch-text-options') ? JSON.parse($el.attr('data-hs-switch-text-options')) : {};
		let options = $.extend(true, context.defaults, dataSettings, context.settings);
		
		$el.on(options.eventType, function () {
			if (options.startUpdateOnChange) {
				let newDataSettings = $el.attr('data-hs-switch-text-options') ? JSON.parse($el.attr('data-hs-switch-text-options')) : {};
				options = $.extend(true, options, newDataSettings);
			}
			
			for (let i = 0; i < options.target.length; i++) {
				$(options.target[i].selector).html(options.target[i].text);
			}
			
			if (typeof options.afterChange === "function") {
				options.afterChange();
			}
		});
	}
}

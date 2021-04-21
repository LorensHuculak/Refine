/*
* HSToggleState Plugin
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later
* @author: HtmlStream
* @event-namespace: .HSToggleState
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2019 Htmlstream
*/

export default class HSToggleState {
	constructor(elem, settings) {
		this.elem = elem;
		this.defaults = {
			targetSelector: null,
			slaveSelector: null,
			
			classMap: {
				toggle: 'toggled'
			}
		};
		this.settings = settings;
	}
	
	init() {
		const context = this,
			$el = context.elem,
			dataSettings = $el.attr('data-hs-toggle-state-options') ? JSON.parse($el.attr('data-hs-toggle-state-options')) : {},
			options = $.extend(true, context.defaults, dataSettings, context.settings);
		
		context._prepareObject($el, options);
		
		$el.on('click', function () {
			$el.toggleClass(options.classMap.toggle);
			
			if (options.slaveSelector) {
				if ($el.hasClass(options.classMap.toggle)) {
					$(options.slaveSelector).addClass(options.classMap.toggle);
				} else {
					$(options.slaveSelector).removeClass(options.classMap.toggle);
				}
			}
			
			context._checkState($el, options);
		});
		
		$(options.slaveSelector).on('click', function () {
			$(`[data-hs-toggle-state-slave="${options.slaveSelector}"]`).removeClass(options.classMap.toggle);
		});
	}
	
	_prepareObject(el, params) {
		const options = params;
		
		el.attr('data-hs-toggle-state-slave', options.slaveSelector);
	}
	
	_checkState(el, params) {
		const options = params;
		
		if (el.hasClass(options.classMap.toggle)) {
			$(options.targetSelector).prop('checked', true);
		} else {
			$(options.targetSelector).prop('checked', false);
		}
	}
}

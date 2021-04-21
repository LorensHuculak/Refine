/*
* HSToggleSwitch Plugin
* @version: 1.0.0 (Mon, 12 Dec 2019)
* @requires: jQuery v3.0 or later, countup.js v2.0.4
* @author: HtmlStream
* @event-namespace: .HSToggleSwitch
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2019 Htmlstream
*/

import {CountUp} from 'countup.js';

export default class HSToggleSwitch {
	constructor(elem, settings) {
		this.elem = elem;
		this.defaults = {
			mode: 'toggle-count',
			targetSelector: undefined,
			isChecked: false,
			eventType: 'change'
		};
		this.settings = settings;
		this.params = null;
	}
	
	init() {
		const context = this,
			$el = context.elem,
			dataSettings = $el.attr('data-hs-toggle-switch-options') ? JSON.parse($el.attr('data-hs-toggle-switch-options')) : {};
		let options = this.params = $.extend(true, context.defaults, dataSettings, context.settings);
		this.params.isChecked = this.elem.is(':checked');
		
		// Toggle Count
		if (options.mode === 'toggle-count') {
			if (options.isChecked) {
				let $target = $(options.targetSelector);
				
				options.isChecked = true;
				
				$target.each(function () {
					const $this = $(this),
						currentDataSettings = $this.attr('data-hs-toggle-switch-item-options') ? JSON.parse($this.attr('data-hs-toggle-switch-item-options')) : {};
					
					$this.text(currentDataSettings.max);
				});
			}
			
			$el.on(options.eventType, function () {
				context._toggleCount();
			});
		}
	}
	
	// Toggle Count
	_toggleCount() {
		let context = this,
			options = context.params;
		
		if (options.isChecked) {
			context._countDownEach();
		} else {
			context._countUpEach();
		}
	}
	
	_countUpEach() {
		let context = this,
			options = context.params,
			$target = $(options.targetSelector);
		
		options.isChecked = true;
		
		$target.each(function () {
			const $this = $(this),
				currentDataSettings = $this.attr('data-hs-toggle-switch-item-options') ? JSON.parse($this.attr('data-hs-toggle-switch-item-options')) : {};
			
			let currentDefaults = {
					duration: .5,
					useEasing: false
				},
				currentOptions = {};
			currentOptions = $.extend(true, currentDefaults, currentDataSettings);
			
			context._countUp($this, currentOptions);
		});
	}
	
	_countDownEach() {
		let context = this,
			options = context.params,
			$target = $(options.targetSelector);
		
		options.isChecked = false;
		
		$target.each(function () {
			const $this = $(this),
				currentDataSettings = $this.attr('data-hs-toggle-switch-item-options') ? JSON.parse($this.attr('data-hs-toggle-switch-item-options')) : {};
			
			let currentDefaults = {
					duration: .5,
					useEasing: false
				},
				currentOptions = {};
			currentOptions = $.extend(true, currentDefaults, currentDataSettings);
			
			context._countDown($this, currentOptions);
		});
	}
	
	_countUp(el, data) {
		const defaults = {
			startVal: data.min
		};
		let options = $.extend(true, defaults, data);
		
		const countUp = new CountUp(el[0], data.max, options);
		
		countUp.start();
	}
	
	_countDown(el, data) {
		const defaults = {
			startVal: data.max
		};
		let options = $.extend(true, defaults, data);
		
		const countUp = new CountUp(el[0], data.min, options);
		
		countUp.start();
	}
}

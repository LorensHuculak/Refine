export default class HSQuantityCounter {
	constructor(elem, settings) {
		this.elem = elem;
		this.defaults = {
			classMap: {
				plus: '.js-plus',
				minus: '.js-minus',
				result: '.js-result'
			},
			
			resultVal: null
		};
		this.settings = settings;
	}
	
	init() {
		const context = this,
			$el = context.elem,
			dataSettings = $el.attr('data-hs-quantity-counter-options') ? JSON.parse($el.attr('data-hs-quantity-counter-options')) : {};
		let options = $.extend(true, context.defaults, dataSettings, context.settings);
		
		// Change Default Values
		options.resultVal = parseInt($el.find(options.classMap.result).val());
		
		// Plus Click Events
		$el.find(options.classMap.plus).on('click', function () {
			context._plusClickEvents($el, options);
		});
		
		// Minus Click Events
		$el.find(options.classMap.minus).on('click', function () {
			context._minusClickEvents($el, options);
		});
	}
	
	_plusClickEvents(el, params) {
		let options = params;
		
		options.resultVal += 1;
		
		el.find(options.classMap.result).val(options.resultVal);
	}
	
	_minusClickEvents(el, params) {
		let options = params;
		
		if (options.resultVal >= 1) {
			options.resultVal -= 1;
			
			el.find(options.classMap.result).val(options.resultVal);
		} else {
			return false;
		}
	}
}

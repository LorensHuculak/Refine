/*
* HSCounter Plugin
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later, appear.js v1.0.3
* @author: HtmlStream
* @event-namespace: .HSCounter
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2019 Htmlstream
*/

export default class HSCounter {
	constructor(elem, settings) {
		this.elem = elem;
		this.defaults = {
			bounds: -100,
			debounce: 10,
			time: 1750,
			fps: 60,
			isCommaSeparated: false,
			isReduceThousandsTo: false,
			intervalId: null
		};
		this.settings = settings;
	}

	init() {
		const context = this,
			$el = context.elem,
			dataSettings = $el.attr('data-hs-counter-options') ? JSON.parse($el.attr('data-hs-counter-options')) : {};
		let options = $.extend(true, context.defaults, dataSettings, context.settings);
		const appearSettings = {
			init: function () {
				var value = parseInt($el.text(), 10);

				$el.text('0');
				$el.attr('data-value', value);
			},
			elements: function () {
				return $el;
			},
			appear: function (innerEl) {
				var $item = $(innerEl),
					counter = 1,
					endValue = $item.data('value'),
					iterationValue = parseInt(endValue / (options.time / options.fps), 10);

				if (iterationValue === 0) {
					iterationValue = 1;
				}

				$item.data('intervalId', setInterval(function () {
					if (options.isCommaSeparated) {
						$item.text(context._getCommaSeparatedValue(counter += iterationValue));
					} else if (options.isReduceThousandsTo) {
						$item.text(context._getCommaReducedValue(counter += iterationValue, options.isReduceThousandsTo));
					} else {
						$item.text(counter += iterationValue);
					}

					if (counter > endValue) {
						clearInterval($item.data('intervalId'));

						if (options.isCommaSeparated) {
							$item.text(context._getCommaSeparatedValue(endValue));
						} else if (options.isReduceThousandsTo) {
							$item.text(context._getCommaReducedValue(endValue, options.isReduceThousandsTo));
						} else {
							$item.text(endValue);
						}
					}
				}, options.time / options.fps));
			}
		};
		options = $.extend(true, options, appearSettings);

		appear(options);
	}

	_getCommaReducedValue(value, additionalText) {
		return parseInt(value / 1000, 10) + additionalText;
	}

	_getCommaSeparatedValue(value) {
		value = value.toString();

		switch (value.length) {
			case 4:
				return `${value.substr(0, 1)},${value.substr(1)}`;
				break;
			case 5:
				return `${value.substr(0, 2)},${value.substr(2)}`;
				break;
			case 6:
				return `${value.substr(0, 3)},${value.substr(3)}`;
				break;
			case 7:
				value = `${value.substr(0, 1)},${value.substr(1)}`;
				return `${value.substr(0, 5)},${value.substr(5)}`;
				break;
			case 8:
				value = `${value.substr(0, 2)},${value.substr(2)}`;
				return `${value.substr(0, 6)},${value.substr(6)}`;
				break;
			case 9:
				value = `${value.substr(0, 3)},${value.substr(3)}`;
				return `${value.substr(0, 7)},${value.substr(7)}`;
				break;
			case 10:
				value = `${value.substr(0, 1)},${value.substr(1)}`;
				value = `${value.substr(0, 5)},${value.substr(5)}`;
				return `${value.substr(0, 9)},${value.substr(9)}`;
				break;
			default:
				return value;
		}
	}
}

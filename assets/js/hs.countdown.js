/*
* Countdown wrapper
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later, countdown v2.2.0, circles v0.0.6
* @author: HtmlStream
* @event-namespace: .HSCore.components.HSCountdown
* @license: Htmlstream Libraries (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/

;(function ($) {
	'use strict';

	$.HSCore.components.HSCountdown = {
		defaults: {
			yearsElSelector: '.js-cd-years',
			monthsElSelector: '.js-cd-months',
			daysElSelector: '.js-cd-days',
			hoursElSelector: '.js-cd-hours',
			minutesElSelector: '.js-cd-minutes',
			secondsElSelector: '.js-cd-seconds',

			yearsFormat: '%Y',
			monthsFormat: '%M',
			daysFormat: '%D',
			hoursFormat: '%H',
			minutesFormat: '%M',
			secondsFormat: '%S',

			circles: false,
			circlesIds: [],
			fgColor: '#000000',
			bgColor: '#cccccc',
			additionalText: null,
			fontSize: 16,
			radius: 80,
			value: 0,
			maxValue: 100,
			width: 10,
			duration: 0
		},

		init: function (el, options) {
			if (!el.length) return;

			var context = this,
				defaults = Object.assign({}, context.defaults),
				dataSettings = el.attr('data-hs-countdown-options') ? JSON.parse(el.attr('data-hs-countdown-options')) : {},
				settings = {
					endDate: dataSettings.endDate ? new Date(dataSettings.endDate) : new Date(),
					startDate: dataSettings.startDate ? new Date(dataSettings.startDate) : new Date()
				};
			settings = $.extend(true, defaults, dataSettings, settings, options);

			settings.yearsEl = el.find(settings.yearsElSelector);
			settings.monthsEl = el.find(settings.monthsElSelector);
			settings.daysEl = el.find(settings.daysElSelector);
			settings.hoursEl = el.find(settings.hoursElSelector);
			settings.minutesEl = el.find(settings.minutesElSelector);
			settings.secondsEl = el.find(settings.secondsElSelector);

			/* Start : Init */

			var newCountdown;

			/* End : Init */

			/* Start : custom functionality implementation */

			if (settings.circles) {
				newCountdown = context._initPiesImplementation(el, settings);
			} else {
				newCountdown = context._initBaseImplementation(el, settings);
			}

			/* End : custom functionality implementation */

			return newCountdown;
		},

		// ----- Start : Custom functionality -----

		_initBaseImplementation: function (el, params) {
			var settings = params;

			return el.countdown(settings.endDate, function (e) {
				if (settings.yearsEl.length) {
					settings.yearsEl.text(e.strftime(settings.yearsFormat));
				}

				if (settings.monthsEl.length) {
					settings.monthsEl.text(e.strftime(settings.monthsFormat));
				}

				if (settings.daysEl.length) {
					settings.daysEl.text(e.strftime(settings.daysFormat));
				}

				if (settings.hoursEl.length) {
					settings.hoursEl.text(e.strftime(settings.hoursFormat));
				}

				if (settings.minutesEl.length) {
					settings.minutesEl.text(e.strftime(settings.minutesFormat));
				}

				if (settings.secondsEl.length) {
					settings.secondsEl.text(e.strftime(settings.secondsFormat));
				}
			});
		},

		_initPiesImplementation: function (el, params) {
			var context = this,
				settings = params,
				oneDay = 24 * 60 * 60 * 1000;

			if (settings.yearsEl.length) {
				context._preparePieItem(settings.yearsEl, {
					maxValue: (settings.endDate.getFullYear() - settings.startDate.getFullYear()),
					radius: settings.radius,
					width: settings.strokeWidth,
					fgColor: settings.fgColor,
					bgColor: settings.bgColor,
					additionalText: settings.additionalText,
					fontSize: settings.fontSize
				});
			}

			if (settings.monthsEl.length) {
				context._preparePieItem(settings.monthsEl, {
					maxValue: Math.round(Math.abs((settings.endDate.getTime() - settings.startDate.getTime()) / (oneDay))) / 12,
					radius: settings.radius,
					width: settings.strokeWidth,
					fgColor: settings.fgColor,
					bgColor: settings.bgColor,
					additionalText: settings.additionalText,
					fontSize: settings.fontSize
				});
			}

			if (settings.daysEl.length) {
				context._preparePieItem(settings.daysEl, {
					maxValue: context._getDaysMaxValByFormat(settings.daysFormat, settings.startDate, settings.endDate),
					radius: settings.radius,
					width: settings.strokeWidth,
					fgColor: settings.fgColor,
					bgColor: settings.bgColor,
					additionalText: settings.additionalText,
					fontSize: settings.fontSize
				});
			}

			if (settings.hoursEl.length) {
				context._preparePieItem(settings.hoursEl, {
					maxValue: 60,
					radius: settings.radius,
					width: settings.strokeWidth,
					fgColor: settings.fgColor,
					bgColor: settings.bgColor,
					additionalText: settings.additionalText,
					fontSize: settings.fontSize
				});
			}

			if (settings.minutesEl.length) {
				context._preparePieItem(settings.minutesEl, {
					maxValue: 60,
					radius: settings.radius,
					width: settings.strokeWidth,
					fgColor: settings.fgColor,
					bgColor: settings.bgColor,
					additionalText: settings.additionalText,
					fontSize: settings.fontSize
				});
			}

			if (settings.secondsEl.length) {
				context._preparePieItem(settings.secondsEl, {
					maxValue: 60,
					radius: settings.radius,
					width: settings.strokeWidth,
					fgColor: settings.fgColor,
					bgColor: settings.bgColor,
					additionalText: settings.additionalText,
					fontSize: settings.fontSize
				});
			}

			// init countdown
			return el.countdown(settings.endDate, function (e) {
				// years
				if (settings.yearsEl.length) {
					settings.yearsEl.data('circle').update(e.strftime(settings.yearsFormat));
				}

				// months
				if (settings.monthsEl.length) {
					settings.monthsEl.data('circle').update(e.strftime(settings.monthsFormat));
				}

				// days
				if (settings.daysEl.length) {
					settings.daysEl.data('circle').update(e.strftime(settings.daysFormat));
				}

				// hours
				if (settings.hoursEl.length) {
					settings.hoursEl.data('circle').update(e.strftime(settings.hoursFormat));
				}

				// minutes
				if (settings.minutesEl.length) {
					settings.minutesEl.data('circle').update(e.strftime(settings.minutesFormat));
				}

				// seconds
				if (settings.secondsEl.length) {
					settings.secondsEl.data('circle').update(e.strftime(settings.secondsFormat));
				}
			});
		},

		_preparePieItem: function (el, params) {
			var context = this,
				id = Math.random().toString().slice(2),
				settings = {
					id: 'hs-countdown-element-' + id,
					text: function (value) {
						return Math.round(value) + (params.additionalText || '');
					},
					colors: [params.bgColor, params.fgColor]
				};
			settings = $.extend(settings, params);

			context.defaults.circlesIds.push(id);

			el.attr('id', 'hs-countdown-element-' + id);

			var circle = Circles.create(settings);

			el.data('circle', circle);

			if (settings.fontSize) {
				el.find('.' + circle._textClass).css('font-size', settings.fontSize + 'px');
			}
		},

		_getDaysMaxValByFormat: function (format, startDate, endDate) {
			var oneDay = 24 * 60 * 60 * 1000;

			switch (format) {
				case '%D':
					return Math.round(Math.abs((endDate.getTime() - startDate.getTime()) / (oneDay)));
					break;
				default:
					return 31;
			}
		}

		// ----- End : Custom functionality -----

	}

})(jQuery);

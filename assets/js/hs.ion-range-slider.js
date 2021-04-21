/*
* Ion Range Slider wrapper
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later, Ion.RangeSlider v2.2.0
* @author: HtmlStream
* @event-namespace: .HSCore.components.HSIonRangeSlider
* @license: Htmlstream Libraries (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/

;(function ($) {
	'use strict';

	$.HSCore.components.HSIonRangeSlider = {
		defaults: {
			type: 'single',
			hide_min_max: true,
			hide_from_to: true,
			foreground_target_el: null,

			secondary_target_el: null,
			secondary_val: {
				steps: null,
				values: null
			},
			result_min_target_el: null,
			result_max_target_el: null,

			cusOnChange: null
		},

		init: function (el, options) {
			if (!el.length || el.attr('data-hs-ion-range-slider-options') === undefined) return;

			var context = this,
				defaults = Object.assign({}, context.defaults),
				dataSettings = el.attr('data-hs-ion-range-slider-options') ? JSON.parse(el.attr('data-hs-ion-range-slider-options')) : {},
				settings = {
					onStart: function (data) {
						if (settings.foreground_target_el) {
							var w = (100 - (data.from_percent + (100 - data.to_percent)));

							$(settings.foreground_target_el).css({
								left: data.from_percent + '%',
								width: w + '%'
							});

							$(settings.foreground_target_el + ' > *').css({
								width: $(settings.foreground_target_el).parent().width(),
								transform: 'translateX(-' + data.from_percent + '%)'
							});
						}

						if (settings.result_min_target_el && settings.type === 'single') {
							if ($(settings.result_min_target_el).is('input')) {
								$(settings.result_min_target_el).val(data.from);
							} else {
								$(settings.result_min_target_el).text(data.from);
							}
						} else if (settings.result_min_target_el || settings.result_max_target_el && settings.type === 'double') {
							if ($(settings.result_min_target_el).is('input')) {
								$(settings.result_min_target_el).val(data.from);
							} else {
								$(settings.result_min_target_el).text(data.from);
							}

							if ($(settings.result_min_target_el).is('input')) {
								$(settings.result_max_target_el).val(data.to);
							} else {
								$(settings.result_max_target_el).text(data.to);
							}
						}

						if (settings.grid && settings.type === 'single') {
							$(data.slider).find('.irs-grid-text').each(function (i) {
								var current = $(this);

								if ($(current).text() === data.from) {
									$(data.slider).find('.irs-grid-text').removeClass('current');
									$(current).addClass('current');
								}
							});
						}

						if (settings.secondary_target_el) {
							settings.secondary_val.steps.push(data.max + 1);
							settings.secondary_val.values.push(settings.secondary_val.values[settings.secondary_val.values.length - 1] + 1);

							for (var i = 0; i < settings.secondary_val.steps.length; i++) {
								if (data.from >= settings.secondary_val.steps[i] && data.from < settings.secondary_val.steps[i + 1]) {
									if ($(settings.secondary_target_el).is('input')) {
										$(settings.secondary_target_el).val(settings.secondary_val.values[i]);
									} else {
										$(settings.secondary_target_el).text(settings.secondary_val.values[i]);
									}
								}
							}
						}
					},
					onChange: function (data) {
						if (settings.foreground_target_el) {
							var w = (100 - (data.from_percent + (100 - data.to_percent)));

							$(settings.foreground_target_el).css({
								left: data.from_percent + '%',
								width: w + '%'
							});

							$(settings.foreground_target_el + '> *').css({
								width: $(settings.foreground_target_el).parent().width(),
								transform: 'translateX(-' + data.from_percent + '%)'
							});
						}

						if (settings.result_min_target_el && settings.type === 'single') {
							if ($(settings.result_min_target_el).is('input')) {
								$(settings.result_min_target_el).val(data.from);
							} else {
								$(settings.result_min_target_el).text(data.from);
							}
						} else if (settings.result_min_target_el || settings.result_max_target_el && settings.type === 'double') {
							if ($(settings.result_min_target_el).is('input')) {
								$(settings.result_min_target_el).val(data.from);
							} else {
								$(settings.result_min_target_el).text(data.from);
							}

							if ($(settings.result_min_target_el).is('input')) {
								$(settings.result_max_target_el).val(data.to);
							} else {
								$(settings.result_max_target_el).text(data.to);
							}
						}

						if (settings.grid && settings.type === 'single') {
							$(data.slider).find('.irs-grid-text').each(function (i) {
								var current = $(this);

								if ($(current).text() === data.from) {
									$(data.slider).find('.irs-grid-text').removeClass('current');
									$(current).addClass('current');
								}
							});
						}

						if (settings.secondary_target_el) {
							for (var i = 0; i < settings.secondary_val.steps.length; i++) {
								if (data.from >= settings.secondary_val.steps[i] && data.from < settings.secondary_val.steps[i + 1]) {
									if ($(settings.secondary_target_el).is('input')) {
										$(settings.secondary_target_el).val(settings.secondary_val.values[i]);
									} else {
										$(settings.secondary_target_el).text(settings.secondary_val.values[i]);
									}
								}
							}
						}

						if (options && options.cusOnChange && typeof options.cusOnChange === 'function') {
							options.cusOnChange();
						}
					}
				};
			settings = $.extend(true, defaults, settings, dataSettings, options);

			/* Start : Init */

			var newIonRangeSlider = el.ionRangeSlider(settings),
				newIonRangeSliderInstance = el.data('ionRangeSlider');

			/* End : Init */

			/* Start : custom functionality implementation */

			if (settings.result_min_target_el && settings.type === 'single' && $(settings.result_min_target_el).is('input')) {
				$(settings.result_min_target_el).on('change', function () {
					newIonRangeSliderInstance.update({
						from: $(this).val()
					});
				});
			} else if (settings.result_min_target_el || settings.result_max_target_el && settings.type === 'double' && $(settings.result_min_target_el).is('input') || $(settings.result_max_target_el).is('input')) {
				$(settings.result_min_target_el).on('change', function () {
					newIonRangeSliderInstance.update({
						from: $(this).val()
					});
				});

				$(settings.result_max_target_el).on('change', function () {
					newIonRangeSliderInstance.update({
						to: $(this).val()
					});
				});
			}

			$(window).on('resize', function () {
				$(settings.foreground_target_el + ' > *').css({
					width: $(settings.foreground_target_el).parent().width()
				});
			});

			/* End : custom functionality implementation */

			return newIonRangeSlider;
		}
	};

})(jQuery);

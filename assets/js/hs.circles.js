/*
* Circles wrapper
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later, circles v0.0.6, appear.js v1.0.3
* @author: HtmlStream
* @event-namespace: .HSCore.components.HSCircles
* @license: Htmlstream Libraries (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/

;(function ($) {
	'use strict';

	$.HSCore.components.HSCircles = {
		defaults: {
			radius: 80,
			duration: 1000,
			wrpClass: 'circles-wrap',
			colors: ["#377dff", "#e7eaf3"],
			bounds: -100,
			debounce: 10,
			rtl: false,
			isHideValue: false,
			dividerSpace: null,
			isViewportInit: false,
			fgStrokeLinecap: null,
			fgStrokeMiterlimit: null,
			additionalTextType: null,
			additionalText: null,
			textFontSize: null,
			textFontWeight: null,
			textColor: null,
			secondaryText: null,
			secondaryTextFontWeight: null,
			secondaryTextFontSize: null,
			secondaryTextColor: null
		},

		init: function (el, options) {
			if (!el.length) return;

			var context = this,
				defaults = Object.assign({}, context.defaults),
				dataSettings = el.attr('data-hs-circles-options') ? JSON.parse(el.attr('data-hs-circles-options')) : {},
				settings = {
					id: "circle-" + Math.random().toString().slice(2),
					value: 0,
					text: function (value) {
						if (dataSettings.type === 'iconic') {
							return dataSettings.icon;
						} else {
							if (dataSettings.additionalTextType === 'prefix') {
								if (dataSettings.secondaryText) {
									return (dataSettings.additionalText || "") + (dataSettings.isHideValue ? "" : value) + '<div style="margin-top: ' + (dataSettings.dividerSpace / 2 + 'px' || '0') + '; margin-bottom: ' + (dataSettings.dividerSpace / 2 + 'px' || '0') + ';"></div>' + '<div style="font-weight: ' + dataSettings.secondaryTextFontWeight + '; font-size: ' + dataSettings.secondaryTextFontSize + 'px; color: ' + dataSettings.secondaryTextColor + ';">' + dataSettings.secondaryText + '</div>';
								} else {
									return (dataSettings.additionalText || "") + (dataSettings.isHideValue ? "" : value);
								}
							} else {
								if (dataSettings.secondaryText) {
									return (dataSettings.isHideValue ? "" : value) + (dataSettings.additionalText || "") + '<div style="margin-top: ' + (dataSettings.dividerSpace / 2 + 'px' || '0') + '; margin-bottom: ' + (dataSettings.dividerSpace / 2 + 'px' || '0') + ';"></div>' + '<div style="font-weight: ' + dataSettings.secondaryTextFontWeight + '; font-size: ' + dataSettings.secondaryTextFontSize + 'px; color: ' + dataSettings.secondaryTextColor + ';">' + dataSettings.secondaryText + '</div>';
								} else {
									return (dataSettings.isHideValue ? "" : value) + (dataSettings.additionalText || "");
								}
							}
						}
					}
				};
			settings = $.extend(defaults, settings, dataSettings, options);

			if (settings.isViewportInit) {
				settings.value = 0;
			}

			/* Start : object preparation */

			context.setId(el, settings.id);

			/* End : object preparation */

			var newCircles = Circles.create(settings);

			/* Start : custom functionality implementation */

			el.data('circle', newCircles);

			context.setTextStyles(el, newCircles, settings);

			if (settings.rtl) {
				context.setRtl(el);
			}

			if (settings.fgStrokeLinecap) {
				context.setStrokeLineCap(el, newCircles, settings);
			}

			if (settings.fgStrokeMiterlimit) {
				context.setStrokeMiterLimit(el, newCircles, settings);
			}

			if (settings.isViewportInit) {
				context.initAppear(newCircles, settings);
			}

			/* End : custom functionality implementation */

			return newCircles;
		},

		// ----- Start : Preparation -----
		setId: function (el, id) {
			el.attr('id', id);
		},
		// ----- End : Preparation -----

		// ----- Start : Custom functionality -----
		setTextStyles: function (el, initEl, params) {
			var settings = params;

			el.find('[class="' + (settings.textClass || initEl._textClass) + '"]').css({
				'font-size': settings.textFontSize,
				'font-weight': settings.textFontWeight,
				'color': settings.textColor,
				'line-height': 'normal',
				'height': 'auto',
				'top': '',
				'left': ''
			});
		},

		setRtl: function (el) {
			el.find('svg').css('transform', 'matrix(-1, 0, 0, 1, 0, 0)');
		},

		setStrokeLineCap: function (el, initEl, params) {
			var settings = params;

			el.find('[class="' + initEl._valClass + '"]').attr('stroke-linecap', settings.fgStrokeLinecap);
		},

		setStrokeMiterLimit: function (el, initEl, params) {
			var settings = params;

			el.find('[class="' + initEl._valClass + '"]').attr('stroke-miterlimit', settings.fgStrokeMiterlimit);
		},

		initAppear: function (initEl, params) {
			var settings = params;

			appear({
				bounds: settings.bounds,
				debounce: settings.debounce,
				elements: function () {
					return document.querySelectorAll('#' + settings.id);
				},
				appear: function (el) {
					initEl.update(JSON.parse($(el).attr('data-hs-circles-options')).value);
				}
			});
		}
		// ----- End : Custom functionality -----
	};

})(jQuery);

/*
* Clipboard wrapper
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later, clipboard.js v2.0.4
* @author: HtmlStream
* @event-namespace: .HSCore.components.HSClipboard
* @license: Htmlstream Libraries (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/

;(function ($) {
	'use strict';

	$.HSCore.components.HSClipboard = {
		defaults: {
			type: null,
			contentTarget: null,
			classChangeTarget: null,
			defaultClass: null,
			successText: null,
			successClass: null,
			originalTitle: null
		},

		init: function (el, options) {
			if (!$(el).length) return;

			var context = this,
				$el = $(el),
				defaults = Object.assign({}, context.defaults),
				dataSettings = $el.attr('data-hs-clipboard-options') ? JSON.parse($el.attr('data-hs-clipboard-options')) : {},
				settings = {
					shortcodes: {},
					windowWidth: $(window).width(),
					defaultText: $el.get(0).lastChild.nodeValue,
					title: $el.attr('title'),
					container: !!dataSettings.container ? document.querySelector(dataSettings.container) : false,
					text: function (button) {
						var dataSettings = JSON.parse($(button).attr('data-hs-clipboard-options'));

						return settings.shortcodes[dataSettings.contentTarget];
					}
				};
			settings = $.extend(true, defaults, dataSettings, settings, options);

			/* Start : object preparation */

			if (dataSettings.contentTarget) context.setShortcodes($el, settings);

			/* End : object preparation */

			/* Start : Init */

			var newClipboard = new ClipboardJS(el, settings);

			newClipboard.on('success', function () {
				if (!settings.successText && !settings.successClass) return;

				if (settings.successText) {
					if (settings.type === 'tooltip') {
						$el.attr('data-original-title', settings.successText).tooltip('show');

						$el.on('mouseleave', function () {
							$el.attr('data-original-title', settings.title);
						});
					} else if (settings.type === 'popover') {
						$el.attr('data-original-title', settings.successText).popover('show');

						$el.on('mouseleave', function () {
							$el.attr('data-original-title', settings.title).popover('hide');
						});
					} else {
						$el.get(0).lastChild.nodeValue = ' ' + settings.successText + ' ';

						setTimeout(function () {
							$el.get(0).lastChild.nodeValue = settings.defaultText;
						}, 800);
					}
				}

				if (settings.successClass) {
					if (!settings.classChangeTarget) {
						$el.removeClass(settings.defaultClass).addClass(settings.successClass);

						setTimeout(function () {
							$el.removeClass(settings.successClass).addClass(settings.defaultClass);
						}, 800);
					} else {
						$(settings.classChangeTarget).removeClass(settings.defaultClass).addClass(settings.successClass);

						setTimeout(function () {
							$(settings.classChangeTarget).removeClass(settings.successClass).addClass(settings.defaultClass);
						}, 800);
					}
				}
			});

			/* End : Init */

			return newClipboard;
		},

		// ----- Start : Preparation -----

		setShortcodes: function (el, params) {
			var settings = params;

			if ($(settings.contentTarget).is('input, textarea, select')) {
				settings.shortcodes[settings.contentTarget] = $(settings.contentTarget).val();
			} else {
				settings.shortcodes[settings.contentTarget] = $(settings.contentTarget).html();
			}
		}

		// ----- End : Preparation -----
	};

})(jQuery);

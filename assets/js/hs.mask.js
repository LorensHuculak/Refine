/*
* HSMask Plugin
* @version: 2.0.0 (Thu, 02 Apr 2020)
* @requires: jQuery v3.4.1 or later, jQuery Migrate v3.1.0 or later, jquery.mask.js v1.14.16
* @author: HtmlStream
* @event-namespace: .HSMask
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2020 Htmlstream
*/

;(function ($) {
	'use strict';

	$.HSCore.components.HSMask = {
		defaults: {
			template: null
		},

		init: function (el, options) {
			if (!el.length || el.attr('data-hs-mask-options') === undefined) return;

			var context = this,
				defaults = Object.assign({}, context.defaults),
				dataSettings = el.attr('data-hs-mask-options') ? JSON.parse(el.attr('data-hs-mask-options')) : {},
				settings = {};
			settings = $.extend(true, defaults, settings, dataSettings, options);

			/* Start : Init */

			var newMask = el.mask(settings.template, settings);

			/* End : Init */

			return newMask;
		}
	};

})(jQuery);

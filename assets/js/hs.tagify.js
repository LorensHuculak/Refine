/*
* Tagify wrapper
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later, Tagify v2.27.0
* @author: HtmlStream
* @event-namespace: .HSCore.components.HSValidation
* @license: Htmlstream Libraries (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/
;(function ($) {
	'use strict';

	$.HSCore.components.HSTagify = {
		defaults: {
			clearBtnSelector: null,
			hasManualList: false
		},

		init: function (el, options) {
			if (!el.length) return;

			var context = this,
				defaults = Object.assign({}, context.defaults),
				dataSettings = el.attr('data-hs-tagify-options') ? JSON.parse(el.attr('data-hs-tagify-options')) : {},
				settings = {};
			settings = $.extend(true, defaults, settings, dataSettings, options);

			/* Start : Init */

			var newTagify = el.tagify(settings).data('tagify');

			/* End : Init */

			// Clear Tags
			$(settings.clearBtnSelector).on('click', newTagify.removeAllTags.bind(newTagify));

			// Manual List
			if (settings.hasManualList) {
				context._renderSuggestionsList(el, newTagify);

				el.on('add', function () {
					if (newTagify.suggestedListItems.length === 1) {
						$(newTagify.DOM.dropdown).empty().fadeOut(0);
					}
				});

				el.on('remove', function () {
					if (newTagify.suggestedListItems.length === 0) {
						$(newTagify.DOM.dropdown).fadeIn(0);
					}
				})
			}

			return newTagify;
		},

		_renderSuggestionsList: function (el, initEl) {
			initEl.dropdown.show.call(initEl);
			el.parent()[0].appendChild(initEl.DOM.dropdown);
		}
	};

})(jQuery);

/**
 * HSQuill wrapper.
 *
 * @author Htmlstream
 * @version 2.0
 *
 */
;(function ($) {
	'use strict';

	$.HSCore.components.HSQuill = {
		__proto__: $.fn.quill,

		defaults: {
      theme: "snow"
		},

		init: function (el, options) {
      if (!$(el).length) return;

			var context = this,
        $el = $(el),
				defaults = Object.assign({}, context.defaults),
				dataSettings = $el.attr('data-hs-quill-options') ? JSON.parse($el.attr('data-hs-quill-options')) : {},
				settings = {};
			settings = Object.assign({}, defaults, settings, dataSettings, options);

			/* Start : Init */

			var newQuill = new Quill(el, settings);

			/* End : Init */

			return newQuill;
		}
	};

})(jQuery);

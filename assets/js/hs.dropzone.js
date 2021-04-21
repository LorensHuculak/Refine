/*
* Dropzone wrapper
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later, dropzone v5.5.0
* @author: HtmlStream
* @event-namespace: .HSCore.components.HSDropzone
* @license: Htmlstream Libraries (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/

;(function ($) {
	'use strict';

	$.HSCore.components.HSDropzone = {
		defaults: {
			// Default variables
			url: "../../assets/include/dropzone-upload.html",
			thumbnailWidth: 300,
			thumbnailHeight: 300,
			previewTemplate: $('<div>' +
				'  <div class="col test h-100 px-1 mb-2">' +
				'    <div class="dz-preview dz-file-preview">' +
				'      <div class="d-flex justify-content-end dz-close-icon">' +
				'        <small class="fa fa-times" data-dz-remove></small>' +
				'      </div>' +
				'      <div class="dz-details media">' +
				'        <div class="dz-img">' +
				'         <img class="img-fluid dz-img-inner" data-dz-thumbnail>' +
				'        </div>' +
				'        <div class="media-body dz-file-wrapper">' +
				'         <h6 class="dz-filename">' +
				'          <span class="dz-title" data-dz-name></span>' +
				'         </h6>' +
				'         <div class="dz-size" data-dz-size></div>' +
				'        </div>' +
				'      </div>' +
				'      <div class="dz-progress progress" style="height: 4px;">' +
				'        <div class="dz-upload progress-bar bg-success" role="progressbar" style="width: 0" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" data-dz-uploadprogress></div>' +
				'      </div>' +
				'      <div class="d-flex align-items-center">' +
				'        <div class="dz-success-mark">' +
				'          <span class="fa fa-check-circle"></span>' +
				'        </div>' +
				'        <div class="dz-error-mark">' +
				'          <span class="fa fa-times-circle"></span>' +
				'        </div>' +
				'        <div class="dz-error-message">' +
				'          <small data-dz-errormessage></small>' +
				'        </div>' +
				'      </div>' +
				'    </div>' +
				'  </div>' +
				'</div>').html()
		},

		init: function (el, options) {
			if (!el.length) return;

			var context = this,
				$el = $(el),
				defaults = Object.assign({}, context.defaults),
				dataSettings = $el.attr('data-hs-dropzone-options') ? JSON.parse($el.attr('data-hs-dropzone-options')) : {},
				settings = {
					init: function () {
						var $this = this,
							$message = $($this.element).find('.dz-message');

						$this.on('addedfile', function (file) {
							if (String(file.type).slice(0, 6) !== 'image/') {
								$(file.previewElement).find('.dz-img').replaceWith('<span class="dz-file-initials">' + file.name.substring(0, 1).toUpperCase() + '</span>');
							}

							$message.hide();
						});

						$this.on('removedfile', function () {
							if ($this.files.length <= 0) {
								$message.show();
							}
						});
					}
				};
			settings = Object.assign({}, defaults, settings, dataSettings, options);

			/* Start : object preparation */

			if (settings.previewTemplate[0] === '#') {
				settings.previewTemplate = $(settings.previewTemplate).html();
			}

			/* End : object preparation */

			/* Start : Init */

			var newDropzone = new Dropzone(el, settings);

			/* End : Init */

			return newDropzone;
		}

	};

})(jQuery);

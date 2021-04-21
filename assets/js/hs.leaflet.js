/*
* Leaflet wrapper
* @version: 1.0.0 (Mon, 27 Jan 2020)
* @requires: jQuery v3.0 or later, Leafletjs v1.6.0
* @author: HtmlStream
* @event-namespace: .HSCore.components.HSLeaflet
* @license: Htmlstream Libraries (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/
;(function ($) {
	'use strict';

	$.HSCore.components.HSLeaflet = {
		defaults: {
			map: {
				coords: [51.505, -0.09],
				zoom: 13
			},
			layer: {
				token: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
				id: 'mapbox/streets-v11',
				maxZoom: 18
			},
			marker: null
		},

		init: function (el, options) {
			if (!$(el).length) return;

			var context = this,
				$el = $(el),
				dataSettings = $el.attr('data-hs-leaflet-options') ? JSON.parse($el.attr('data-hs-leaflet-options')) : {},
				settings = {};
			settings = $.extend(true, context.defaults, dataSettings, settings, options);

			/* Start : Init */

			var newLeaflet = L.map(el, settings.map);

			/* End : Init */

			/* Start : custom functionality implementation */

			// View
			newLeaflet.setView(settings.map.coords, settings.map.zoom);

			// Layer
			L.tileLayer(settings.layer.token, settings.layer).addTo(newLeaflet);

			// Marker
			if (settings.marker) {
				for (var i = 0; i < settings.marker.length; i++) {
					settings.marker[i].icon = L.icon(settings.marker[i].icon);

					let marker = L.marker(settings.marker[i].coords, settings.marker[i]).addTo(newLeaflet);

					if (settings.marker[i].popup) {
						marker.bindPopup(settings.marker[i].popup.text);
					}
				}
			}

			/* End : custom functionality implementation */

			return newLeaflet;
		}
	};

})(jQuery);

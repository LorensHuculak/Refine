/*
* Chart.js wrapper
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later, Chart.js v2.8.0
* @author: HtmlStream
* @event-namespace: .HSCore.components.HSValidation
* @license: Htmlstream Libraries (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/
;(function ($) {
	'use strict';

	$.HSCore.components.HSChartJS = {
		defaults: {
			options: {
				responsive: true,
				maintainAspectRatio: false,
				legend: {
					display: false
				},
				tooltips: {
					enabled: false,
					mode: 'nearest',
					prefix: '',
					postfix: '',
					hasIndicator: false
				}
			}
		},

		init: function (el, options) {
			if (!el.length) return;

			var context = this,
				defaults = Object.assign({}, context.defaults),
				dataSettings = el.attr('data-chartjs-options') ? JSON.parse(el.attr('data-chartjs-options')) : {},
				settings = {};
			settings = $.extend(true, dataSettings.type, defaults, dataSettings.type === 'line' ? {
				options: {
					elements: {
						line: {
							borderWidth: 3
						},
						point: {
							pointStyle: 'circle',
							radius: 5,
							hoverRadius: 7,
							borderWidth: 3,
							hoverBorderWidth: 3,
							backgroundColor: '#ffffff',
							hoverBackgroundColor: '#ffffff'
						}
					}
				}
			} : {});
			settings = $.extend(true, settings, {
				options: {
					tooltips: {
						custom: function (tooltipModel) {
							// Tooltip Element
							var tooltipEl = document.getElementById('chartjsTooltip');

							// Create element on first render
							if (!tooltipEl) {
								tooltipEl = document.createElement('div');
								tooltipEl.id = 'chartjsTooltip';
								tooltipEl.classList.add('hs-chartjs-tooltip-wrap');
								tooltipEl.innerHTML = '<div class="hs-chartjs-tooltip"></div>';
								document.body.appendChild(tooltipEl);
							}

							// Hide if no tooltip
							if (tooltipModel.opacity === 0) {
								tooltipEl.style.opacity = 0;
								return;
							}

							// Set caret Position
							tooltipEl.classList.remove('above', 'below', 'no-transform');
							if (tooltipModel.yAlign) {
								tooltipEl.classList.add(tooltipModel.yAlign);
							} else {
								tooltipEl.classList.add('no-transform');
							}

							function getBody(bodyItem) {
								return bodyItem.lines;
							}

							// Set Text
							if (tooltipModel.body) {
								var titleLines = tooltipModel.title || [],
									bodyLines = tooltipModel.body.map(getBody),
									today = new Date();

								var innerHtml = '<header class="hs-chartjs-tooltip-header">';

								titleLines.forEach(function (title) {
									innerHtml += title + ', ' + today.getFullYear();
								});

								innerHtml += '</header><div class="hs-chartjs-tooltip-body">';

								bodyLines.forEach(function (body, i) {
									var oldBody = body[0],
										newBody = oldBody.substring(0, oldBody.length - 3) + (settings.type !== 'doughnut' ? ',' : '') + oldBody.substring(oldBody.length - 3);

									innerHtml += (settings.options.tooltips.hasIndicator ? '<span class="d-inline-block rounded-circle mr-1" style="width: 10px; height: 10px; background-color: '+ tooltipModel.labelColors[0].backgroundColor +'"></span>' : '') + settings.options.tooltips.prefix + (oldBody.length > 3 ? newBody : body) + settings.options.tooltips.postfix;
								});

								innerHtml += '</div>';

								var tooltipRoot = tooltipEl.querySelector('.hs-chartjs-tooltip');
								tooltipRoot.innerHTML = innerHtml;
							}

							// `this` will be the overall tooltip
							var position = this._chart.canvas.getBoundingClientRect();

							// Display, position, and set styles for font
							tooltipEl.style.opacity = 1;
							tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - (tooltipEl.offsetWidth / 2) - 3 + 'px';
							tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - tooltipEl.offsetHeight - 25 + 'px';
							tooltipEl.style.pointerEvents = 'none';
						}
					}
				}
			}, dataSettings, settings, options);

			/* Start : Init */

			var newChartJS = new Chart(el, settings);

			/* End : Init */

			return newChartJS;
		}
	};

})(jQuery);

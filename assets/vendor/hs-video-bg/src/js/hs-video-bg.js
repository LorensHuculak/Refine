/*
* HSVideoBg Plugin
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later
* @author: HtmlStream
* @event-namespace: .HSVideoBg
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2019 Htmlstream
*/

export default class HSVideoBg {
	constructor(elem, settings) {
		this.elem = elem;
		this.defaults = {
			type: 'default',
			videoId: null,
			isLoop: true,
			ratio: 1.5
		};
		this.settings = settings;
	}
	
	init() {
		const context = this,
			$el = context.elem,
			dataSettings = $el.attr('data-hs-video-bg-options') ? JSON.parse($el.attr('data-hs-video-bg-options')) : {};
		let options = $.extend(true, context.defaults, dataSettings, context.settings);
		
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			return;
		}
		
		context._prepareObject($el, options);
		
		if (options.type === 'you-tube') {
			context._APICreating('//www.youtube.com/player_api', 'YT', 'YTDetect').then(() => {
				let newYT;
				
				if (typeof window.onYouTubeIframeAPIReady === 'function') {
					setTimeout(function () {
						newYT = new YT.Player($el.find('.hs-video-bg-video > div')[0], {
							videoId: options.videoId,
							playerVars: {
								autoplay: true,
								controls: 0,
								showinfo: 0,
								enablejsapi: 1,
								modestbranding: 1,
								iv_load_policy: 3,
								loop: options.isLoop,
								playlist: options.videoId,
								origin: window.location.origin
							},
							events: {
								onReady: function (e) {
									e.target.mute();
									
									$(window).on('resize', function () {
										context._ratioCalc($el, options);
									}).trigger('resize');
									
									$el.find('.hs-video-bg-preview').fadeOut(400);
								}
							}
						});
					}, 100);
				} else {
					window.onYouTubeIframeAPIReady = function () {
						newYT = new YT.Player($el.find('.hs-video-bg-video > div')[0], {
							videoId: options.videoId,
							playerVars: {
								autoplay: true,
								controls: 0,
								showinfo: 0,
								enablejsapi: 1,
								modestbranding: 1,
								iv_load_policy: 3,
								loop: options.isLoop,
								playlist: options.videoId,
								origin: window.location.origin
							},
							events: {
								onReady: function (e) {
									e.target.mute();
									
									$(window).on('resize', function () {
										context._ratioCalc($el, options);
									}).trigger('resize');
									
									$el.find('.hs-video-bg-preview').fadeOut(400);
								}
							}
						});
					};
				}
			});
		} else if (options.type === 'vimeo') {
			context._APICreating('//player.vimeo.com/api/player.js', 'Vimeo', 'VimeoDetect').then(() => {
				let newVimeo = new Vimeo.Player($el.find('.hs-video-bg-video')[0], {
					id: options.videoId,
					loop: options.isLoop,
					title: false,
					portrait: false,
					byline: false,
					autoplay: true,
					autopause: false,
					muted: true
				});
				
				newVimeo.play().then(function () {
					$(window).on('resize', function () {
						context._ratioCalc($el, options);
					}).trigger('resize');
					
					$el.find('.hs-video-bg-preview').fadeOut(400);
				});
			});
		} else {
			$(window).on('resize', function () {
				context._ratioCalc($el, options);
			});
			
			setTimeout(function() {
				$(window).trigger('resize');
			});
		}
	}
	
	_prepareObject(el, params) {
		const context = this;
		let options = params;
		
		el.css({
			position: 'relative'
		});
		
		if (options.type === 'you-tube') {
			el.append('<div class="hs-video-bg-video"><div></div></div>');
		} else if (options.type === 'vimeo') {
			el.append('<div class="hs-video-bg-video"></div>');
		} else {
			el.append(`
				<div class="hs-video-bg-video">
					<video poster="" autoplay muted ${options.isLoop ? 'loop' : ''}>
						<source src="${options.videoId}.mp4" type="video/mp4">
						<source src="${options.videoId}.webm" type="video/webm">
						<source src="${options.videoId}.ogv" type="video/ogg">
						Your browser doesn't support HTML5 video.
					</video>
        </div>
			`);
		}
		
		if (options.type === 'you-tube') {
			el.append(`<div class="hs-video-bg-preview" style="background-image: url(//img.youtube.com/vi/${options.videoId}/maxresdefault.jpg);"></div>`);
		} else if (options.type === 'vimeo') {
			$.getJSON(`//www.vimeo.com/api/v2/video/${options.videoId}.json?callback=?`, function (data) {
				el.append(`<div class="hs-video-bg-preview" style="background-image: url(${data[0].thumbnail_large});"></div>`);
			});
		} else {
			return false;
		}
	}
	
	_ratioCalc(el, params) {
		let options = params,
			_ratio = el.outerWidth() / el.outerHeight();
		
		if(options.type === 'you-tube' || options.type === 'vimeo') {
			if (el.outerHeight() < el.outerWidth() && window.innerWidth > 768) {
				el.find('.hs-video-bg-video').css({
					width: _ratio * el.outerWidth() * options.ratio,
					height: _ratio * el.outerHeight() * options.ratio
					// height: window.innerWidth > 1600 ? (options.ratio * el.outerHeight() * 0.4) : (options.ratio * el.outerHeight())
				});
			} else {
				el.find('.hs-video-bg-video').css({
					width: _ratio * el.outerWidth(),
					height: '130%'
				});
			}
		}
	}
	
	_APICreating(scriptUrl, globalName, globalNameDetect) {
		if (window[globalNameDetect]) {
			return Promise.resolve();
		}
		
		return new Promise((resolve, reject) => {
			let script = document.createElement('script'),
				before = document.getElementsByTagName('script')[0];
			
			script.src = scriptUrl;
			before.parentNode.insertBefore(script, before);
			
			script.onload = (() => {
				!globalName || window[globalName] ? resolve() : reject(Error('window.' + globalName + ' undefined'));
			});
			
			script.onerror = () => {
				reject(Error('Error loading ' + globalName || scriptUrl));
			};
		});
	}
}

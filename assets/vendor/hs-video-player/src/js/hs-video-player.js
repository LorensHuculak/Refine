/*
* HSVideoPlayer Plugin
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later
* @author: HtmlStream
* @event-namespace: .HSVideoPlayer
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2019 Htmlstream
*/
import objectAssignDeep from "./methods/object-assign-deep";

export default class HSVideoPlayer {
	constructor(elem, settings) {
		this.elem = elem;
		this.defaults = {
			parentSelector: null,
			targetSelector: null,
			
			classMap: {
				toggle: 'video-player__played'
			},
			
			videoType: 'you-tube',
			videoId: null,
			
			isAutoplay: false,
			isMuted: false,
			
			youTubeAPISrc: '//www.youtube.com/player_api',
			isYouTubeAPICreated: false,
			
			vimeoAPISrc: '//player.vimeo.com/api/player.js',
			isVimeoAPICreated: false
		};
		this.settings = settings;
	}
	
	init() {
		const context = this,
			$el = context.elem,
			dataSettings = $el.attr('data-hs-video-player-options') ? JSON.parse($el.attr('data-hs-video-player-options')) : {};
		let options = objectAssignDeep({}, context.defaults, dataSettings, context.settings);
		
		if (options.videoType === 'you-tube') {
			context._youTubeAPI(options);
		}
		
		if (options.videoType === 'vimeo') {
			context._vimeoAPI(options);
		}
		
		$el.on('click', function () {
			$(options.parentSelector).toggleClass(options.classMap.toggle);
			
			if (options.videoType === 'vimeo') {
				context._vimeoPlayer(options);
			} else if (options.videoType === 'html5') {
				context._html5Player(options);
			} else {
				context._youTubePlayer(options);
			}
		});
	}
	
	_youTubeAPI(params) {
		let options = params;
		
		if (options.isYouTubeAPICreated) {
			return;
		}
		
		let YTScriptTag = document.createElement('script'),
			DOMFirstScriptTag = document.getElementsByTagName('script')[0];
		
		YTScriptTag.src = options.youTubeAPISrc;
		
		DOMFirstScriptTag.parentNode.insertBefore(YTScriptTag, DOMFirstScriptTag);
		
		options.isYouTubeAPICreated = true;
	}
	
	_vimeoAPI(params) {
		let options = params;
		
		if (options.isVimeoAPICreated) {
			return;
		}
		
		let VimeoScriptTag = document.createElement('script'),
			DOMFirstScriptTag = document.getElementsByTagName('script')[0];
		
		VimeoScriptTag.src = options.vimeoAPISrc;
		
		DOMFirstScriptTag.parentNode.insertBefore(VimeoScriptTag, DOMFirstScriptTag);
		
		options.isVimeoAPICreated = true;
	}
	
	_youTubePlayer(params) {
		let options = params;
		
		const YTPlayer = new YT.Player(options.targetSelector.slice(1, options.targetSelector.length), {
			videoId: options.videoId,
			playerVars: {
				origin: window.location.origin,
				autoplay: options.isAutoplay === true ? 1 : 0
			}
		});
	}
	
	_vimeoPlayer(params) {
		let options = params;
		
		let vimeoIframe = document.getElementById(options.targetSelector.slice(1, options.targetSelector.length)),
			vimeoPlayer = new Vimeo.Player(vimeoIframe, {
				id: options.videoId,
				autoplay: options.isAutoplay === true ? 1 : 0,
				muted: options.isMuted === true ? 1 : 0
			});
	}
	
	_html5Player(params) {
		let options = params;
		
		let $html5Iframe = $(options.targetSelector),
			$html5Player = $(`
				<video class="pfx-hero-bg-video__item" playsinline ${options.isAutoplay === true ? 'autoplay ' : ''}${options.isMuted === true ? 'muted ' : ''}${options.isLoop === true ? 'loop' : ''}>
					<source src="${options.videoId}.mp4" type="video/mp4">
					<source src="${options.videoId}.ogg" type="video/ogg">
					<source src="${options.videoId}.webm" type="video/webm">
					Your browser doesn\'t support HTML5 video tag.
				</video>`);
		
		$html5Player.appendTo($html5Iframe);
	}
}

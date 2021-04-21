// Overlay Effect
import HSHeaderFullscreenOverlayEffect from "./observers/overlay-effect";

export default class HSHeaderFullscreen {
	constructor(element, config) {
		this.element = element;
		this.defaults = {
			overlayClass: 'fullscreen-overlay',
			sectionsContainerSelector: '.fullscreen-content',
			afterOpen: function () {},
			afterClose: function () {}
		};
		this.config = config;
	}

	init() {
		const self = this,
			element = this.element;
		let dataSettings = element.attr('data-hs-header-fullscreen-options') ? JSON.parse(element.attr('data-hs-header-fullscreen-options')) : {};

		this.config = $.extend(true, {}, this.defaults, dataSettings);

		this._bindGlobalEvents();

		if (element.data('HSHeaderFullscreen')) return;

		this.overlay = $(`<div class="${this.config.overlayClass}"></div>`);

		this.element.append(this.overlay);

		this.effect = new HSHeaderFullscreenOverlayEffect().init(this.element, this.overlay, this.config.afterOpen, this.config.afterClose);

		this._bindEvents();
	}

	get isShown() {
		return this.effect.isShown();
	}

	get sections() {
		return this.element.find(this.config.sectionsContainerSelector);
	}

	_bindGlobalEvents() {
		const _self = this;

		$(window).on('resize.HSHeaderFullscreen', function () {
			if (_self.resizeTimeOutId) clearTimeout(_self.resizeTimeOutId);

			_self.resizeTimeOutId = setTimeout(function () {
				_self.update();
			}, 50);
		});

		$(document).on('keyup.HSHeaderFullscreen', function (e) {
			if (e.keyCode && e.keyCode === 27) {
				if (!_self.element) return;

				_self.hide();
			}
		});
	}

	_bindEvents() {
		const _self = this;

		this.invoker = $('[data-target="#' + this.element.attr('id') + '"]');

		if (this.invoker.length) {
			this.invoker.off('click.HSHeaderFullscreen').on('click.HSHeaderFullscreen', function (e) {
				_self[_self.isShown ? 'hide' : 'show']();

				e.preventDefault();
			});
		}

		return this;
	}

	update() {
		if (!this.effect) return false;

		this.effect.update();

		return this;
	}

	show() {
		if (!this.effect) return false;

		this.effect.show();

		return this;
	}

	hide() {
		if (!this.effect) return false;

		this.effect.hide();

		return this;
	}
}

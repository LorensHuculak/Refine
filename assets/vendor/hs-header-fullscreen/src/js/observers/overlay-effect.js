export default class HSHeaderFullscreenOverlayEffect {
	constructor() {
		this._isShown = false;
	}
	
	init(element, overlay, afterOpen, afterClose) {
		const _self = this;
		
		this.element = element;
		this.overlay = overlay;
		this.afterOpen = afterOpen;
		this.afterClose = afterClose;
		
		this.overlay.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (e) {
			if (_self.isShown() && e.originalEvent.propertyName === 'transform') {
				_self.afterOpen.call(_self.element, _self.overlay);
			} else if (!_self.isShown() && e.originalEvent.propertyName === 'transform') {
				_self.afterClose.call(_self.element, _self.overlay);
			}
			
			e.stopPropagation();
			e.preventDefault();
		});
		
		this.update();
		
		this.overlay.addClass(this.element.data('overlay-classes'));
		
		return this;
	}
	
	destroy() {
		this.overlay.css({
			'width': 'auto',
			'height': 'auto',
		});
		
		this.element.removeClass('fullscreen-showed');
		
		return this;
	}
	
	update() {
		let $w = $(window),
			$wW = $w.width(),
			$wH = $w.height();
		
		this.overlay.css({
			width: $wW > $wH ? $wW * 1.5 : $wH * 1.5,
			height: $wW > $wH ? $wW * 1.5 : $wH * 1.5
		});
		
		return this;
	}
	
	show() {
		this.element.addClass('fullscreen-showed');
		this._isShown = true;
		
		return this;
	}
	
	hide() {
		this.element.removeClass('fullscreen-showed');
		this._isShown = false;
		
		return this;
	}
	
	isShown() {
		return this._isShown;
	}
}

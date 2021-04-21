export default class HSScrollNavSection {
	constructor(element, config) {
		this.element = element;
		this.config = config;
		this.section = $(this.element.attr('href'));
	}
	
	get offset() {
		let header = this.config.header,
			headerStyles = header.length ? getComputedStyle(header.get(0)) : false,
			headerPosition = header.length ? headerStyles.position : false,
			offset = this.section.offset().top;
		
		if (header.length && (headerPosition === 'fixed' || headerPosition === 'absolute') && parseInt(headerStyles.top) === 0) {
			offset = offset - header.outerHeight() - parseInt(headerStyles.marginTop);
		}
		
		if (this.config.over.length) {
			offset = offset - this.config.over.outerHeight();
		}
		
		return offset;
	}
	
	show(callback) {
		let self = this,
			isCollbackFinished = false;
		
		if (!this.section.length) {
			return;
		}
		
		let timerId = setInterval(() => {
			isCollbackFinished = self.config.beforeShow.call(self.section);
			
			if (isCollbackFinished) {
				clearInterval(timerId);
				
				this.changeHash();
				
				$('html, body').stop().animate({
					scrollTop: self.offset + self.config.customOffsetTop
				}, {
					duration: self.config.duration,
					easing: self.config.easing,
					complete: function () {
						$('html, body').stop().animate({
							scrollTop: self.offset + self.config.customOffsetTop
						}, {
							duration: self.config.duration,
							easing: self.config.easing,
							complete: function () {
								self.config.afterShow.call(self.section);
								if ($.isFunction(callback)) {
									callback();
								}
							}
						});
					}
				});
			}
		}, 100);
	}
	
	changeHash() {
		this.section.attr('id', '');
		$(this.config.sectionClass).removeClass(this.config.activeSectionClass);
		this.section.addClass(this.config.activeSectionClass);
		window.location.hash = this.element.attr('href');
		this.section.attr('id', this.element.attr('href').slice(1));
	}
	
	highlight() {
		let parent = this.element.parent('li');
		
		if (parent.length) {
			parent.addClass(this.config.activeItemClass);
		}
	}
	
	unhighlight() {
		let parent = this.element.parent('li');
		
		if (parent.length) {
			parent.removeClass(this.config.activeItemClass);
		}
	}
}

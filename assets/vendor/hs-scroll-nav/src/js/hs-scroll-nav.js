/*
* HSScrollNav Plugin
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later
* @author: HtmlStream
* @event-namespace: .HSScrollNav
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2019 Htmlstream
*/

import HSScrollNavSection from "../classes/scroll-nav-section";

export default class HSScrollNav {
	constructor(element, config) {
		this.element = element;
		this.defaults = {
			duration: 400,
			easing: 'linear',
			over: $(),
			sectionClass: '.scroll-nav-section',
			customOffsetTop: 0,
			activeItemClass: 'active',
			activeSectionClass: 'active',
			afterShow: function () {},
			beforeShow: function () {return true;},
			header: $('.header')
		};
		this.config = config;
	}
	
	init() {
		const self = this,
			element = this.element,
			dataSettings = $(element).attr('data-hs-scroll-nav-options') ? JSON.parse($(element).attr('data-hs-scroll-nav-options')) : {};
		
		this._items = $();
		this.config = Object.assign({}, this.defaults, this.config, dataSettings);
		
		this._makeItems();
		this._bindEvents();
		
		$(window).on('scroll.HSScrollNav', function () {
			self.highlight();
		}).trigger('scroll.HSScrollNav');
	}
	
	_makeItems() {
		const self = this;
		
		this.element.find('a[href^="#"]').each(function (i, el) {
			const $this = $(el);
			
			if (!$this.data('HSScrollNavSection')) {
				$this.data('HSScrollNavSection', new HSScrollNavSection($this, self.config));
				
				self._items = self._items.add($this);
			}
		});
	}
	
	_bindEvents() {
		const self = this;
		
		this.element.on('click.HSScrollNav', 'a[href^="#"]', function (e) {
			let link = this,
				target = $(this).data('HSScrollNavSection'),
				$parent = $(self.element).parent(),
				parentID = $parent.attr('id'),
				windW = window.innerWidth,
				mobileDestroy = Boolean(self.element[0].dataset.mobileDestroy);
			
			if (windW <= 769 && mobileDestroy === true) {
				$('[data-target="#' + parentID + '"]').trigger('click');
				
				$('[data-target="#' + parentID + '"] > .hamburger__box').removeClass('is-active');
				
				$parent.on('hidden.bs.collapse', function () {
					self._lockHightlight = true;
					if (self.current) self.current.unhighlight();
					link.blur();
					self.current = $(link).data('HSScrollNavSection');
					self.current.highlight();
					
					target.show(function () {
						self._lockHightlight = false;
					});
				});
			} else {
				self._lockHightlight = true;
				if (self.current) self.current.unhighlight();
				link.blur();
				self.current = $(link).data('HSScrollNavSection');
				self.current.highlight();
				
				target.show(function () {
					self._lockHightlight = false;
				});
			}
			
			e.preventDefault();
		});
	}
	
	highlight() {
		let self = this, items, currentItem, current, scrollTop;
		
		if (!this._items.length || this._lockHightlight) {
			return;
		}
		
		scrollTop = $(window).scrollTop();
		
		this._items.each(function (i, el) {
			let Section = $(el).data('HSScrollNavSection'),
				$section = Section.section;
			
			if (scrollTop > Section.offset) {
				current = Section;
			}
		});
		
		if (current && this.current !== current) {
			this.unhighlight();
			current.highlight();
			
			if (this.current) {
				current.changeHash();
			}
			
			this.current = current;
		}
	}
	
	unhighlight() {
		this._items.each(function (i, el) {
			$(el).data('HSScrollNavSection').unhighlight();
		});
	}
}

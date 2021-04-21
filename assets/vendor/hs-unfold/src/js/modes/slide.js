import smartPosition from "../methods/smart-position";

import slideShow from "../methods/slide-show";
import slideHide from "../methods/slide-hide";

export default function slide(el, config) {
	$(config.target).addClass(config.slideEffectClass.slice(1)).css('display', 'none');
	
	if (config.event === 'hover') {
		// Hover
		el.parent(config.wrapperSelector).on({
			mouseenter: function () {
				slideShow($(config.target), config, function() {
					el.addClass(config.invokerActiveClass.slice(1));
				});
				
				if(!config.smartPositionOff) {
					smartPosition($(config.target), el, config);
				}
			},
			mouseleave: function () {
				slideHide($(config.target), config, function() {
					el.removeClass(config.invokerActiveClass.slice(1));
				});
			}
		});
	} else {
		// Click
		el.on('click', function () {
			if (!$(config.target).hasClass(config.hiddenClass.slice(1))) {
				slideHide($(config.target), config, function() {
					el.removeClass(config.invokerActiveClass.slice(1));
				});
			} else {
				slideShow($(config.target), config, function() {
					el.addClass(config.invokerActiveClass.slice(1));
				});
				
				if(!config.smartPositionOff) {
					smartPosition($(config.target), el, config);
				}
			}
		});
	}
}

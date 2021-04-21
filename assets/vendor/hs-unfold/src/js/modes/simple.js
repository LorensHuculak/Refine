import smartPosition from "../methods/smart-position";

import simpleShow from "../methods/simple-show";
import simpleHide from "../methods/simple-hide";

export default function simple(el, config) {
	$(config.target).addClass(config.simpleEffectClass.slice(1));
	
	if (config.event === 'hover') {
		// Hover
		el.parent(config.wrapperSelector).on({
			mouseenter: function () {
				el.addClass(config.invokerActiveClass.slice(1));
				
				simpleShow($(config.target), config);
				
				if(!config.smartPositionOff) {
					smartPosition($(config.target), el, config);
				}
			},
			mouseleave: function () {
				el.removeClass(config.invokerActiveClass.slice(1));
				
				simpleHide($(config.target), config);
			}
		});
	} else {
		// Click
		el.on('click', function () {
			if (!$(config.target).hasClass(config.hiddenClass.slice(1))) {
				el.removeClass(config.invokerActiveClass.slice(1));
				
				simpleHide($(config.target), config);
			} else {
				el.addClass(config.invokerActiveClass.slice(1));
				
				simpleShow($(config.target), config);
				
				if(!config.smartPositionOff) {
					smartPosition($(config.target), el, config);
				}
			}
		});
	}
}

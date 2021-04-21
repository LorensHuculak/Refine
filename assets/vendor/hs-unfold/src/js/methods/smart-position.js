export default function smartPosition(el, invoker, config) {
	const $w = $(window);
	let styles = getComputedStyle(el.get(0)),
		direction = Math.abs(parseInt(styles.left, 10)) < 40 ? 'left' : 'right',
		targetOuterGeometry = el.offset(),
		invokerOffsetTop = invoker.offset().top - $(window).scrollTop();
	
	// Horizontal Axis
	if (direction === 'right') {
		if (targetOuterGeometry.left < 0) {
			el.css({
				left: 'auto',
				right: (parseInt(el.css('right'), 10) - (targetOuterGeometry.left - 10)) * -1
			});
		}
	} else {
		if (targetOuterGeometry.left + el.outerWidth() > $w.width()) {
			el.css({
				right: 'auto',
				left: (parseInt(el.css('left'), 10) - (targetOuterGeometry.left + el.outerWidth() + 10 - $w.width()))
			});
		}
	}
	
	// Vertical Axis
	if (invokerOffsetTop > ($w.height() / 2) && (el.data('hs-target-height') - invoker.offset().top) < 0 && !config.isFullWindow) {
		el.addClass(config.reverseClass.slice(1));
	} else {
		el.removeClass(config.reverseClass.slice(1));
	}
}

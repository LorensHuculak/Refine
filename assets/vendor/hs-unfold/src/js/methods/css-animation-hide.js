export default function cssAnimationHide(target, config, effect) {
	target.removeClass(config.animationIn).addClass(effect);
}

var addRippleEffect = function(press) {
	var target = press.target;
	if (!target.classList.contains('effect-ripple')) return false;
	var rect = target.getBoundingClientRect();
	var ripple = target.querySelector('.ripple');
	if (!ripple) {
		ripple = document.createElement('span');
		ripple.className = 'ripple';
		ripple.style.height = ripple.style.width = Math.max(press.target.offsetWidth, target.offsetHeight) + 'px';
		target.appendChild(ripple);
	}
	ripple.classList.remove('show');
	var top = press.pageY - rect.top - ripple.offsetHeight / 2 - window.scrollY;
	var left = press.pageX - rect.left - ripple.offsetWidth / 2 - window.scrollX;
	ripple.style.top = top + 'px';
	ripple.style.left = left + 'px';
	ripple.classList.add('show');
	return false;
}
document.addEventListener('mousedown', addRippleEffect, false);

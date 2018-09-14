	window.addEventListener("DOMContentLoaded", backgroundAnimation)

	function backgroundAnimation() {
		var size = 256; // Размер области подсветки
		var tabls = document.getElementsByClassName('winstyle');

		for (var i = tabls.length - 1; i >= 0; i--) {
			tabls[i].addEventListener("mouseleave", onMouseLeave)
			tabls[i].addEventListener("mousemove", onMouseMove)
			tabls[i].rect = tabls[i].getBoundingClientRect()
			tabls[i].style.backgroundSize = size+"px"
			tabls[i].style.backgroundPosition = "-10000px -10000px"
		}
		

		function onMouseLeave(e) {
			var tabl = e.currentTarget;
			tabl.style.backgroundPosition = "-10000px -10000px"
		}


		function onMouseMove(e) {
			var x = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft)
			var y = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop)

 			var tabl = e.currentTarget;
			x = x - size / 2 - tabl.rect.left;
			y = y - size / 2 - tabl.rect.top;

			tabl.style.backgroundPosition = x+"px"+" "+y+"px"
		}
	}

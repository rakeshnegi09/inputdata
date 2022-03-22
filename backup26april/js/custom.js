function startTimer(duration) {
	var timer=duration,
	minutes,
	seconds;
	var timeDisplay1=document.querySelector("#timebox1 h5");
	setInterval(function () {
		minutes=parseInt(timer / 60, 10);
		seconds=parseInt(timer % 60, 10);
		minutes=minutes < 10 ? "0" + minutes: minutes;
		seconds=seconds < 10 ? "0" + seconds: seconds;
		timeDisplay1.innerHTML="<div class='timer-flex'><span class='round'>00</span><span class='timer-text'>Ore</span></div><span class='round-dots'>:</span><div class='timer-flex'><span class='round'>" + minutes + "</span><span class='timer-text'>MINUTI</span></div><span class='round-dots'>:</span><div class='timer-flex'><span class='round'>" + seconds + "</span><span class='timer-text'>SECONDI</span></div>";
		if (--timer < 0) {
			timer=duration
		}
	}
	, 1000)
}

var minutes=45 * 60;
startTimer(minutes);

/*! This file is auto-generated */

$('.custom-slider').owlCarousel( {
	nav:true, center: true, items: 1, loop: false, autoplay: false, autoplayTimeout: 3000, autoplaySpeed: 1000, dots: false, margin: 10, responsive: {
		0: {
			items: 1
		}
		, 600: {
			items: 1
		}
		, 760: {
			items: 1
		}
	}
}

)

$('.custom-slider-2').owlCarousel( {
	nav:true, center: true, items: 1, loop: false, autoplay: false, autoplayTimeout: 3000, autoplaySpeed: 1000, dots: false, margin: 10, responsive: {
		0: {
			items: 1
		}
		, 600: {
			items: 1
		}
		, 760: {
			items: 1
		}
	}
}

)
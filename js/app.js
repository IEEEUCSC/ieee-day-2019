$(document).ready(function() {
	anime({
		targets: "#day-title .first-4 path",
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: "easeInOutSine",
		duration: 1500,
		fill: ["#fff", "#035b98"],
		delay: function(el, i) {
			return i * 250;
		},
		update: function(anim) {
			console.log(anim.progress);
		},
		direction: "alternate",
		loop: false
	});

	anime({
		targets: "#day-title .last-3 path",
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: "easeInOutSine",
		duration: 1500,
		fill: ["#fff", "#0098a6"],
		delay: function(el, i) {
			return i * 300;
		},
		update: function(anim) {
			console.log(anim.progress);
		},
		direction: "alternate",
		loop: false
	});

	anime({
		targets: "#day-subtitle path",
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: "easeInOutSine",
		duration: 1000,
		fill: ["#fff", "#0098a6"],
		delay: 1500,
		update: function(anim) {
			console.log(anim.progress);
		},
		direction: "alternate",
		loop: false
	});

	anime({
		targets: "#man-1 path",
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: "easeInOutSine",
		duration: 1000,
		fill: ["#fff", "#0098a6"],
		delay: 2000,
		update: function(anim) {
			console.log(anim.progress);
		},
		direction: "alternate",
		loop: false
	});
});

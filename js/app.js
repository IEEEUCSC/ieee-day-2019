$(document).ready(function() {
	setHeroAnimations();
	setCountdown();
});

function setHeroAnimations() {
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
		fill: ["#fff", "rgb(148, 39, 167)"],
		delay: 2000,
		update: function(anim) {
			console.log(anim.progress);
		},
		direction: "alternate",
		loop: false
	});
	anime({
		targets: "#man-2 path",
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: "easeInOutSine",
		duration: 1000,
		fill: ["#fff", "rgb(148, 39, 167)"],
		delay: 2000,
		update: function(anim) {
			console.log(anim.progress);
		},
		direction: "alternate",
		loop: false
	});
	anime({
		targets: "#man-3 path",
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: "easeInOutSine",
		duration: 1000,
		fill: ["#fff", "rgb(148, 39, 167)"],
		delay: 2000,
		update: function(anim) {
			console.log(anim.progress);
		},
		complete: function() {
			anime({
				targets: "#man-3",
				rotate: {
					value: 180,
					duration: 5000
				}
				// translateX: -250
			});
		},
		direction: "alternate",
		loop: false
	});
}

function setCountdown() {
	var ieeeDay = new Date("Oct 1, 2019 00:00:00").getTime();
	var daysEl = document.getElementById("days");
	var hoursEl = document.getElementById("hours");
	var minsEl = document.getElementById("mins");
	var secsEl = document.getElementById("secs");

	setInterval(function() {
		var now = new Date().getTime();
		var distance = ieeeDay - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var secs = Math.floor((distance % (1000 * 60)) / 1000);
		daysEl.innerText = days;
		hoursEl.innerText = hours;
		minsEl.innerText = mins;
		secsEl.innerText = secs;
	}, 1000);
}

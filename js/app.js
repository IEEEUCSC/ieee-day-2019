$(document).ready(function() {
    // console.log(document.getElementsByTagName("body"));
    // document.getElementsByTagName("body").style.display = "block";
    $("body").show();
    setScrollOut();
    setHeroAnimations();
    setCountdown();
    setTimeout(function() {}, 1000);
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
            // console.log(anim.progress);
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
            // console.log(anim.progress);
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
            // console.log(anim.progress);
        },
        direction: "alternate",
        loop: false
    });

    anime({
        targets: "#man-1 path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1000,
        fill: ["#fff", "#F6A300"],
        delay: 2000,
        update: function(anim) {
            // console.log(anim.progress);
        },
        direction: "alternate",
        loop: false
    });
    anime({
        targets: "#man-2 path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1000,
        fill: ["#fff", "#7DB828"],
        delay: 2000,
        update: function(anim) {
            // console.log(anim.progress);
        },
        direction: "alternate",
        loop: false
    });
    anime({
        targets: "#man-3 path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1000,
        fill: ["#fff", "#BA1826"],
        delay: 2000,
        update: function(anim) {
            // console.log(anim.progress);
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
            // anime({
            //   targets: "#blob path",
            //   strokeDashoffset: [anime.setDashoffset, 0],
            //   easing: "easeInOutSine",
            //   duration: 1000,
            //   fill: ["#fff", "rgb(148, 39, 167)"],
            //   // delay: 2000,
            //   update: function(anim) {
            //     console.log(anim.progress);
            //   },
            //   direction: "alternate",
            //   loop: false
            // });
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
        daysEl.innerText = days + " days";
        hoursEl.innerText = hours + " hours";
        minsEl.innerText = mins + " mins";
        secsEl.innerText = secs + " secs";
    }, 1000);
}

function setScrollOut() {
    ScrollOut({
        onShown: function(el) {
            var jel = $(el);
            // console.log(jel);

            if (jel.hasClass("intro-title")) {
                jel.removeClass("animated fadeInUp delay-500ms");
                void el.offsetWidth;
                jel.addClass("animated fadeInUp delay-500ms");
            }
            if (jel.hasClass("intro-text")) {
                jel.removeClass("animated zoomIn delay-500ms");
                void el.offsetWidth;
                jel.addClass("animated zoomIn delay-500ms");
            }
            if (jel.hasClass("banner-1")) {
                jel.removeClass("animated fadeInUp delay-500ms");
                void el.offsetWidth;
                jel.addClass("animated fadeInUp delay-500ms");
            }
            if (jel.hasClass("about-day-title")) {
                jel.removeClass("animated fadeInRight delay-500ms");
                void el.offsetWidth;
                jel.addClass("animated fadeInRight delay-500ms");
            }
            if (jel.hasClass("about-day-text")) {
                jel.removeClass("animated fadeInUp delay-500ms");
                void el.offsetWidth;
                jel.addClass("animated fadeInUp delay-500ms");
            }
            if (jel.hasClass("balloons")) {
                jel.removeClass("animated fadeInUp delay-500ms");
                void el.offsetWidth;
                jel.addClass("animated fadeInUp delay-500ms");
            }
        }
    });
}

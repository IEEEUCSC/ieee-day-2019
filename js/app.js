$(document).ready(function() {
    // console.log(document.getElementsByTagName("body"));
    // document.getElementsByTagName("body").style.display = "block";
    $("body").show();
    setScrollOut();
    setHeroAnimations();
    setCountdown();
    toggleNavColor();
    scrollToElements();
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
                    value: 90,
                    duration: 3000
                }
                // translateX: -250
            });
            $(".hero-button .btn-see-more").css({
                "background-color": "#035b98",
                // "background-image":
                //     "linear-gradient(to left, #035b98, rgb(0,152, 166))",
                color: "#fff"
            });

            $(".hero-button .btn-register").css({
                "background-color": "rgb(0, 152, 166)",
                // "background-image":
                //     "linear-gradient(to right, #fff, rgb(0,152, 166))",
                color: "#fff"
            });
        },
        direction: "alternate",
        loop: false
    });
}

function setCountdown() {
    var ieeeDay = new Date("Oct 24, 2019 00:00:00").getTime();
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
                jel.removeClass("animated fadeIn delay-500ms");
                void el.offsetWidth;
                jel.addClass("animated fadeIn delay-500ms");
            }
            if (jel.hasClass("about-day-text")) {
                jel.removeClass("animated fadeInLeft delay-500ms");
                void el.offsetWidth;
                jel.addClass("animated fadeInLeft delay-500ms");
            }
            if (jel.hasClass("balloons")) {
                jel.removeClass("animated fadeInUp delay-500ms");
                void el.offsetWidth;
                jel.addClass("animated fadeInUp delay-500ms");
            }
        }
    });
}

function toggleNavColor() {
    document.addEventListener("scroll", function() {
        if (window.pageYOffset > 70) {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }

        if (window.pageYOffset < 500) {
            $(".active-link").removeClass("active-link");
            $("#home-nav").addClass("active-link");
        }

        if (window.pageYOffset > 650) {
            $(".active-link").removeClass("active-link");
            $("#what-nav").addClass("active-link");
        }
        if (window.pageYOffset > 2990) {
            $(".active-link").removeClass("active-link");
            $("#about-nav").addClass("active-link");
        }
        if (window.pageYOffset > 3900) {
            $(".active-link").removeClass("active-link");
            $("#sub-nav").addClass("active-link");
        }

        // console.log(window.pageYOffset);
    });
}

function scrollToElements() {
    $("#home-nav, #home-side-nav").click(function(e) {
        if (
            $(this)
                .attr("id")
                .includes("side")
        ) {
            $(".toggler").click();
        }

        $(".active").removeClass("active");
        $("html, body").animate(
            {
                scrollTop: $("header").offset().top
            },
            1500
        );
        $(this).addClass("active");
    });
    $("#what-nav, #what-side-nav").click(function() {
        if (
            $(this)
                .attr("id")
                .includes("side")
        ) {
            $(".toggler").click();
        }
        $(".active").removeClass("active");
        $("html, body").animate(
            {
                scrollTop: $(".intro").offset().top
            },
            1500
        );
        $(this).addClass("active-linkj");
    });
    $(".hero-button .btn-see-more").click(function() {
        $(".active-link").removeClass("active-link");
        $("html, body").animate(
            {
                scrollTop: $(".intro").offset().top
            },
            1500
        );
        $(this).addClass("active-link");
        // $("#what-nav").addClass("active-link");
    });
    $(".hero-button .btn-register").click(function() {
        $(".active-link").removeClass("active-link");
        $("html, body").animate(
            {
                scrollTop: $(".register").offset().top
            },
            1500
        );
        $(this).addClass("active-link");
        // $("#what-nav").addClass("active-link");
    });
    $("#countdown-nav").click(function() {
        $(".active-link").removeClass("active-link");
        $("html, body").animate(
            {
                scrollTop: $(".countdown").offset().top
            },
            1500
        );
        $(this).addClass("active-link");
    });
    $("#about-nav, #about-side-nav").click(function() {
        if (
            $(this)
                .attr("id")
                .includes("side")
        ) {
            $(".toggler").click();
        }
        $(".active-link").removeClass("active-link");
        $("html, body").animate(
            {
                scrollTop: $(".about-day").offset().top
            },
            1500
        );
        $(this).addClass("active-link");
    });
    $("#sub-nav, #sub-side-nav").click(function() {
        if (
            $(this)
                .attr("id")
                .includes("side")
        ) {
            $(".toggler").click();
        }
        $(".active-link").removeClass("active-link");
        $("html, body").animate(
            {
                scrollTop: $(".subscribe").offset().top
            },
            1500
        );
        $(this).addClass("active-link");
    });
}

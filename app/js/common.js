$(function() {

    // Custom JS

});

$(document).ready(function() {

    //Mask for phone
    $(function() {
        $("#phone").mask("+999-(99)-999-99-99");
    });

    // Animate WOW
    new WOW().init();

    // Hamburger menu button
    var forEach = function(t, o, r) {
        if ("[object Object]" === Object.prototype.toString.call(t))
            for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
        else
            for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
    };
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function(hamburger) {
            hamburger.addEventListener("click", function() {
                this.classList.toggle("is-active");
            }, false);
        });
    }

    // Top slick slider
    $('.top-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        accessibility: false,
        cssEase: 'linear'
    });

});
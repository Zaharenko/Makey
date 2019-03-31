$(document).ready(function() {
    // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
    $("ul.tabs li").click(function() {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function() {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });


    /* Extra class "tab_last" 
       to add border to right side
       of last tab */
    $('ul.tabs li').last().addClass("tab_last");



    //Mask for phone
    $(function() {
        $(".phone").mask("+999 (99) 999-99-99");
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

    // Product slider home page
    $('.product-slider-lazy').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('ul.tabs li').click(function() {
        $(".product-slider-lazy").slick('reinit');
    });

    // Ajax photo
    $('.all-works-service').click(function() {
        if ($(".service-gallery").is(":hidden")) {
            $(".service-gallery").show("slow");
        } else {
            $("#target-service-one").slideDown();
        }
    });

    $('.popup-gallery-service').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Загрузка #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

    //Range Slider
    (function() {

        var parent = document.querySelector(".range-slider");
        if (!parent) return;

        var
            rangeS = parent.querySelectorAll("input[type=range]"),
            numberS = parent.querySelectorAll("input[type=number]");

        rangeS.forEach(function(el) {
            el.oninput = function() {
                var slide1 = parseFloat(rangeS[0].value),
                    slide2 = parseFloat(rangeS[1].value);

                if (slide1 > slide2) {
                    [slide1, slide2] = [slide2, slide1];
                    // var tmp = slide2;
                    // slide2 = slide1;
                    // slide1 = tmp;
                }

                numberS[0].value = slide1;
                numberS[1].value = slide2;
            }
        });

        numberS.forEach(function(el) {
            el.oninput = function() {
                var number1 = parseFloat(numberS[0].value),
                    number2 = parseFloat(numberS[1].value);

                if (number1 > number2) {
                    var tmp = number1;
                    numberS[0].value = number2;
                    numberS[1].value = tmp;
                }

                rangeS[0].value = number1;
                rangeS[1].value = number2;

            }
        });

    })();

});
$(document).ready(function () {


    /* Smooth Scroll */
    $("[data-scroll]").on("click", function (event) {
        var target = $(this.getAttribute('[data-scroll]'));

        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });

    /* Mobile Nav */
    $(".burger").click(function () {
        $(".nav").toggle();
    })
    $(".nav__link--mobile").click(function () {
        $(".nav").hide();
    })

    /* Portfolio Filter */
    $(".nav-btn").click(function () {
        var cat = $(this).attr("data-filter");
        if (cat == "all") {
            $(".portfolio__item").show();
        } else {
            $(".portfolio__item").not("." + cat).hide();
            $(".portfolio__item").filter("." + cat).show();
        }
    });


    /* Modals */
    const modalCall = $("[data-modal]");
    const modalClose = $(".modal__close");
    const slickSlider = $('[data-slider="slick"]');

    modalCall.click(function () {

        let modalId = $(this).data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        slickSlider.slick('setPosition');
    });

    modalClose.click(function () {

        let modalParent = $(this).parents('.modal');

        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    });

    $(".modal").click(function () {
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
    });

    $(".modal__dialog").click(function (event) {
        event.stopPropagation();
    });

    /* Slider: https://kenwheeler.github.io/slick/ */
    slickSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
    $(".slickPrev").click(function () {
        slickSlider.slick("slickPrev");
    });
    $(".slickNext").click(function () {
        slickSlider.slick("slickNext");
    });


    /* Load more works */
    $("#load__more").click(function (event) {
        event.preventDefault();
        $(".portfolio__item--hide").show(500);
        $("#load__more").hide();
    })



});
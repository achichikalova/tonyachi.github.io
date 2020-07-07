$(document).ready(function () {

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

    modalCall.click(function () {

        let modalId = $(this).data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        $("#worksSlider").slick('setPosition');
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
    $('#worksSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: false
    });







});
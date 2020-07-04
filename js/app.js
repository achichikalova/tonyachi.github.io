$(document).ready(function () {

    /* Portfolio Filter */
    $(".nav-btn").click(function () {
        var cat = $(this).attr("data-filter");
        if (cat == "all") {
            $(".portfolio__item").show("1000");
        } else {
            $(".portfolio__item").not("." + cat).hide("1000");
            $(".portfolio__item").filter("." + cat).show("1000");
        }
    });




});
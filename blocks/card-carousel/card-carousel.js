$(document).ready(function () {
    $(".tekno-news-cards-wrapper").find(".cards ul").slick({
        speed : 1000,
        autoplay: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        arrows: false,
     });
});

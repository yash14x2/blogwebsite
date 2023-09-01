$(document).ready(function () {
    var newsCard = document.querySelectorAll(".tekno-news-cards-wrapper .cards-wrapper ul");
    $($(newsCard)).slick({
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

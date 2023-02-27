//banner slick-slider
$(document).ready(function () {
    $('.banner-slider-container').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $('.banner__nav-arrow_left'),
        nextArrow: $('.banner__nav-arrow_right')
    });

    $('.banner__nav-arrow_left').on('click', function () {
        $('.slick-slider').slick('slickPrev');
    });

    $('.banner__nav-arrow_right').on('click', function () {
        $('.slick-slider').slick('slickNext');
    });

    $('.popup__open2').on('click', function () {
        $('#popup').addClass('open');
    });

    $('.popup__close').on('click', function () {
        $('#popup').removeClass('open');
    });
});


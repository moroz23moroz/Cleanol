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
        console.log("click");
    });

    $('.popup__close').on('click', function () {
        $('#popup').removeClass('open');
        console.log("click");
    });
});

// document.querySelector('.banner__nav-arrow_right').addEventListener('click', (e)=>{
//     console.log('right arrow clicked');
// })
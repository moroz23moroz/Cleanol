//banner slick-slider
$(document).ready(function () {
    $('.banner-slider-container').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $('.banner__nav-arrow_left'),
        nextArrow:$('.banner__nav-arrow_right')
    });
});

// document.querySelector('.banner__nav-arrow_right').addEventListener('click', (e)=>{
//     console.log('right arrow clicked');
// })
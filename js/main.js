"use strict";

// // Ильвина начало
// // Блок 8 этапов строительства (галерея карточек)
// const mediaQueryDesktop = window.matchMedia('(min-width: 1024px)');
// const mediaQueryTablet = window.matchMedia('(min-width: 425px)' && '(max-width: 1023px)');
const mediaQueryMobile = window.matchMedia('(max-width: 424px)');
if (mediaQueryMobile.matches) {
    document.querySelector('.why-robot-cleaner__photo_first').src = '../images/why-robot/parking-lot-mobile.png';
    document.querySelector('.why-robot-cleaner__photo_second').src = '../images/why-robot/land-mobile.png';
    document.querySelector('.why-robot-cleaner__photo_third').src = '../images/why-robot/money-mobile.png';
}

// if (mediaQueryDesktop.matches) {
    // alert('Media desktop!')
    new Swiper('.stages__slider',  {
        navigation: {
            nextEl: '.stages__button_next',
            prevEl: '.stages__button_prev'
        },
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            240: {
                slidesPerView: 1.3,
                spaceBetweenSlides: 5,
            },
            768: {
                slidesPerView: 1.8,
                spaceBetweenSlides: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });
// }

// if (mediaQueryTablet.matches) {
//     // alert('Media Tablet!')
//     new Swiper('.stages-of-construction__slider',  {
//     slidesPerView: 1.8,
// });
// }

// // Конец Блок 8 этапов строительства
// // Ильвина конец








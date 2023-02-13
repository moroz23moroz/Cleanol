"use strict";

// // Ильвина начало
// // Блок 8 этапов строительства (галерея карточек)
const mediaQueryDesktop = window.matchMedia('(min-width: 1024px)');
const mediaQueryTablet = window.matchMedia('(min-width: 425px)' && '(max-width: 1023px)');

if (mediaQueryDesktop.matches) {
    // alert('Media desktop!')
    new Swiper('.stages-of-construction__slider',  {
        navigation: {
            nextEl: '.stages-of-construction__button_next',
            prevEl: '.stages-of-construction__button_prev'
        },
        slidesPerView: 4,
    });
}

if (mediaQueryTablet.matches) {
    // alert('Media Tablet!')
    new Swiper('.stages-of-construction__slider',  {
    slidesPerView: 1.8,
});
}

// // Конец Блок 8 этапов строительства
// // Ильвина конец








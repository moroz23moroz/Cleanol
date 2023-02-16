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

//banner slider
new Swiper('.banner-slider-container', {
    navigation: {
        nextEl: '.banner__nav-arrow_right',
        prevEl: '.banner__nav-arrow_left'
    },
    spaceBetween: 10,
})

//vertical slider
const verticalSlider = new Swiper(".vertical-slider", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bulletElement: 'div',
    },
});

const slider = document.querySelector('.vertical-slider').swiper;
slider.on('slideChange', () => {
    toggle();

    let index = slider.activeIndex;
    let numberItem = document.getElementById(`n${index}`);
    let lineItem = document.getElementById(`l${index}`);
    numberItem.classList.add('numbers-wrapper__item_active');
    lineItem.classList.add('lines-wrapper__item_active');
})

const toggle = () => {
    const numberItems = document.querySelectorAll('.numbers-wrapper__item');
    const lineItems = document.querySelectorAll('.lines-wrapper__item')

    for (let numberItem of numberItems) {
        if (numberItem.classList.contains('numbers-wrapper__item_active')) numberItem.classList.remove('numbers-wrapper__item_active')
    }

    for (let lineItem of lineItems) {
        if (lineItem.classList.contains('lines-wrapper__item_active')) lineItem.classList.remove('lines-wrapper__item_active')
    }
}








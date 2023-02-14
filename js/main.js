"use strict";

new Swiper('.stages-of-construction__slider',  {
    navigation: {
        nextEl: '.stages-of-construction__button_next',
        prevEl: '.stages-of-construction__button_prev'
    },
});

// // Ильвина начало
// // Блок 8 этапов строительства (галерея карточек)
// let offset = 0;
// const sliderLine = document.querySelector('.stages-of-construction__container');

// const slideCards = (direction) => {
//     if (direction === 'prev') {
//         offset += 736;
//         if (offset > 768) {
//             offset = 0;
//         }
//         sliderLine.style.left = -offset + 'px';
//     }

//     if (direction === 'next') {
//         offset -= 736;
//         // if (offset < 0) {
//         //     offset = 768;
//         // }
//         sliderLine.style.left = offset + 'px';
//     }

//     // sliderLine.style.left = -offset + 'px';
// }

// document.querySelector('.stages-of-construction__button-prev').addEventListener('click', (direction) => {
//     offset += 736;
//     if (offset > 768) {
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + 'px';
// })

// document.querySelector('.stages-of-construction__button-next').addEventListener('click', () => {
    
// })

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
    numberItem.classList.add('active');
    lineItem.classList.add('lines-wrapper__item_active');
})

const toggle = () => {
    const numberItems = document.querySelectorAll('.numbers-wrapper__item');
    const lineItems = document.querySelectorAll('.lines-wrapper__item')

    for (let numberItem of numberItems) {
        if (numberItem.classList.contains('active')) numberItem.classList.remove('active')
    }

    for (let lineItem of lineItems) {
        if (lineItem.classList.contains('lines-wrapper__item_active')) lineItem.classList.remove('lines-wrapper__item_active')
    }
}








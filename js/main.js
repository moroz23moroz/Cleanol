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








"use strict";

// Ильвина начало
fetch('../data/8stages.json')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => {
        console.log(error)
    });


  document.addEventListener("DOMContentLoaded", () => {
    // const stages = JSON.parse(stagesArr);
    // console.log(stages);
  })

    // листаем карточки
const flipGallery = (direction) => {

    (direction === 'next')
    ? ++newIndex
    : --newIndex;

}

document.querySelector('.stages-of-construction__button-prev').addEventListener('click', () => {
    flipGallery('prev')
})
document.querySelector('.stages-of-construction__button-next').addEventListener('click', () => {
    flipGallery('next')
})

// Ильвина конец
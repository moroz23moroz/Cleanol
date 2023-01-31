"use strict";

// Ильвина начало
// Блок 8 этапов строительства (галерея карточек)

let firstPage = true;

  document.addEventListener("DOMContentLoaded", () => {
    firstPage = true;
    displayCards(firstPage);
    console.log(`dom ${firstPage}`);
  })

  const displayCards = (firstPage) => {
    let startIndex;
    let endIndex;
    let wrapper = document.querySelector('.stages-of-construction__gallery');
    wrapper.innerHTML = '';

    fetch('../data/8stages.json')
    .then((response) => response.json())
    .then((data) => {
        // console.log (data);

        if (firstPage) {
            startIndex = 0;
            endIndex = 4;
        }
        if (!firstPage) {
            startIndex = 4;
            endIndex = 8;
        }
    
        for (let i = startIndex; i < endIndex; i++) {

            const numberCard = document.createElement('span');
            const titleCard = document.createElement('h3');
            const textCard = document.createElement('div');
            const photoCard = document.createElement('img');
    
            numberCard.classList.add('stages-of-construction__number');
            titleCard.classList.add('stages-of-construction__subtitle');
            textCard.classList.add('stages-of-construction__text');
            photoCard.classList.add('stages-of-construction__photo');
    
            wrapper.append(numberCard);
            wrapper.append(titleCard);
            wrapper.append(textCard);
            wrapper.append(photoCard);
    
            numberCard.textContent = data[i].number;
            titleCard.textContent = data[i].title;
            textCard.innerHTML = data[i].text;
            photoCard.src = data[i].photo;
        }
    })
    .catch(error => {
        console.log(error)
    });

  }

    // листаем карточки
const flipGallery = (element, direction) => {
    if(direction === 'next' && element.textContent !== 1) {
        firstPage = false;
    }

    if(direction === 'prev' && element.textContent == 5) {
        firstPage = true;
    }

    // console.log(element.textContent);
    // console.log(`flip ${firstPage}`);

    displayCards (firstPage)
}

document.querySelector('.stages-of-construction__button-prev').addEventListener('click', () => {
    flipGallery(document.querySelector('.stages-of-construction__number'), 'prev')
})
document.querySelector('.stages-of-construction__button-next').addEventListener('click', () => {
    flipGallery(document.querySelector('.stages-of-construction__number'), 'next')
})

// Конец Блок 8 этапов строительства (галерея карточек)
// Ильвина конец

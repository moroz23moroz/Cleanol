"use strict";

// // Блок 8 этапов строительства (галерея карточек)
const mediaQueryMobile = window.matchMedia('(max-width: 424px)');
if (mediaQueryMobile.matches) {
    document.querySelector('.why-robot-cleaner__photo_first').src = '../images/why-robot/parking-lot-mobile.png';
    document.querySelector('.why-robot-cleaner__photo_second').src = '../images/why-robot/land-mobile.png';
    document.querySelector('.why-robot-cleaner__photo_third').src = '../images/why-robot/money-mobile.png';
}

new Swiper('.stages__slider', {
    navigation: {
        nextEl: '.stages__button_next',
        prevEl: '.stages__button_prev'
    },
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        200: {
            slidesPerView: 1.3,
            spaceBetweenSlides: 5,
        },
        768: {
            slidesPerView: 1.8,
            spaceBetweenSlides: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 15,
        }
    }
});

// // Конец Блок 8 этапов строительства

//banner slider
new Swiper('.banner-slider-container', {
    navigation: {
        nextEl: '.banner__nav-arrow_right',
        prevEl: '.banner__nav-arrow_left'
    },
    spaceBetween: 10,
    //for IOS
    IOSEdgeSwipeDetection: true,
    onTouchStart: function()
    {
        return false;
    },
    scrollbarDraggable: true,
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: true
})

// const bannerMobile = window.matchMedia('(max-width: 768px)');

// function changeImage(e) {
//     if (e.matches) {
//         /* the viewport is 768 pixels wide or less */
//         document.querySelector('.banner__slide_1').src = './images/banner/tab_slide_1.png';
//         document.querySelector('.banner__slide_2').src = './images/banner/tab_slide_2.png';
//         document.querySelector('.banner__slide_3').src = './images/banner/tab_slide_3.png';
//         document.querySelector('.banner__nav-arrow_left').src = './images/banner/arrow_left_white.svg';
//         document.querySelector('.banner__nav-arrow_right').src = './images/banner/arrow_right_white.svg';
//     } else {
//         /* the viewport is more than 600 pixels wide */
//         document.querySelector('.banner__slide_1').src = './images/banner/slider_1.png';
//         document.querySelector('.banner__slide_2').src = './images/banner/slider_2.png';
//         document.querySelector('.banner__slide_3').src = './images/banner/slider_3.png';
//         document.querySelector('.banner__nav-arrow_left').src = './images/banner/banner_arrow_left.svg';
//         document.querySelector('.banner__nav-arrow_right').src = './images/banner/banner_arrow_right.svg';
//     }
// }

// bannerMobile.addEventListener('change', changeImage);

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

const smoothScroll = () => {
    const links = document.querySelectorAll('.menu-link')

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            const section = document.querySelector(link.getAttribute('href'))

            if (section) {
                seamless.scrollIntoView(section, {
                    behavior: "smooth",
                    block: "start",
                    inline: "center",
                });
            }
        })
    })
}

smoothScroll()

function validation(form) {

    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')

        errorLabel.textContent = text
        parent.classList.add('error')
        parent.append(errorLabel)
    }


    let result = true;

    const allInputs = form.querySelectorAll('input');

    for (const input of allInputs) {

        removeError(input)

        if (input.dataset.required == "true") {
            if (input.value == "") {
                console.log('ошибка поля');
                createError(input, 'поле не заполнено!')
                result = false
            }
        }

    }
    return result
}

document.querySelector('#form').addEventListener('submit', function (event) {
    event.preventDefault()

    if (validation(this) == true) {
        alert("успешно!")
    }
})

//popup
const openPopupButtons = document.querySelectorAll('.popup__open');
const closePopupButtons = document.querySelectorAll('.popup__close');
const feedbackForm = document.getElementById('popup');
const confirmationForm = document.getElementById('popup_2')
const form = document.getElementById('feedback');

for (let openPopupButton of openPopupButtons) {
    openPopupButton.addEventListener('click', (event) => {
        popupOpen(feedbackForm);
        const popupName = openPopupButton.getAttribute('id').replace('#', '');
        const currentPopup = document.getElementById(popupName);

        currentPopup.addEventListener('click', (event) => {
            if (!event.target.closest('.popup-form')) {
                popupClose(currentPopup);
            }
        })
    })
}

for (let closePopupButton of closePopupButtons) {
    closePopupButton.addEventListener('click', (event) => {
        popupClose(event.target.closest('.popup'));
        event.preventDefault;
    })
}
const popupOpen = (popupActive) => {
    popupActive.classList.add('open');
}
const popupClose = (popupActive) => {
    popupActive.classList.remove('open');
}

//popup form validation
const username = document.getElementById('name');
const email = document.getElementById('email');
const city = document.getElementById('city');
const phoneNumber = document.getElementById('phone_number');
const persDataConfirmation = document.getElementById('personal_data');

const isChecked = () => {
    const letters = /^[А-Яа-я]+$/;
    const mailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneFormat = /(?<=^|\s|>|\;|\:|\))(?:\+|7|8|9|\()[\d\-\(\) ]{8,}\d/;

    let username_result = false;
    let email_result = false;
    let phoneNumber_result = false;
    let city_result = false;
    let persDataConfirmation_result = false;

    document.querySelector('.error_message').innerHTML = "";

    if (username.value == '' || !username.value.match(letters)) {
        document.querySelector('.error_message').innerHTML += "Введите имя<br>";
    } else {
        username_result = true;
    }

    if (email.value == '' || !email.value.match(mailFormat)) {
        document.querySelector('.error_message').innerHTML += "Введите электронную почту<br>";
    } else {
        email_result = true;
    }
    if (city.value == '' || !city.value.match(letters)) {
        document.querySelector('.error_message').innerHTML += "Укажите город<br>";
    } else {
        city_result = true;
    }
    if (phoneNumber.value == '' || !phoneNumber.value.match(phoneFormat)) {
        document.querySelector('.error_message').innerHTML += "Введите номер телефона<br>";
    } else {
        phoneNumber_result = true;
    }
    if (!persDataConfirmation.checked) {
        document.querySelector('.error_message').innerHTML += "Подтвердите свое согласие на обработку персональных данных<br>";
    } else {
        persDataConfirmation_result = true;
    }

    if (username_result == true && email_result == true && phoneNumber_result == true && city_result == true && persDataConfirmation_result == true) {
        console.log('validation submit');
        return true;
    } else {
        console.log('validation failed');
        return false;
    }
}

document.querySelector('.confirm').addEventListener('click', (e) => {
    e.preventDefault();
    if (isChecked() === true) {
        fetch('https://httpbin.org/post', {
                method: 'POST',
                body: new FormData(feedback)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
        form.reset();
        popupClose(feedbackForm);
        popupOpen(confirmationForm);
    }
})
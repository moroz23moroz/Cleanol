//popup
const mainWrapper = document.querySelector('.main');
const openPopupButtons = document.querySelectorAll('.popup__open');
const closePopupButtons = document.querySelectorAll('.popup__close');
const feedbackForm = document.getElementById('popup');
const confirmationForm = document.getElementById('popup_2')
const form = document.getElementById('feedback');

const popupOpen = (popupActive) => {
    popupActive.classList.add('open');
}
const popupClose = (popupActive) => {
    popupActive.classList.remove('open');
}

const closeClosestPopupForm=()=>{
    for (let openPopupButton of openPopupButtons) {
        const popupName = openPopupButton.getAttribute('id').replace('#', '');
        const currentPopup = document.getElementById(popupName);

        currentPopup.addEventListener('click', (event) => {
            if (!event.target.closest('.popup-form')) {
                popupClose(currentPopup);
            }
        })

        currentPopup.addEventListener('touchend', (event) => {
            if (!event.target.closest('.popup-form')) {
                popupClose(currentPopup);
            }
        })
    }
}

mainWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup__open')) {
        popupOpen(feedbackForm);
        closeClosestPopupForm();
    }
})

mainWrapper.addEventListener('touchend', (event) => {
    if (event.target.classList.contains('popup__open')) {
        popupOpen(feedbackForm);
        closeClosestPopupForm();
    }
})


for (let closePopupButton of closePopupButtons) {
    closePopupButton.addEventListener('click', (event) => {
        popupClose(event.target.closest('.popup'));
        event.preventDefault;
    });
}

for (let closePopupButton of closePopupButtons) {
    closePopupButton.addEventListener('touchend', (event) => {
        popupClose(event.target.closest('.popup'));
        event.preventDefault;
    })
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

const sendData=()=>{
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
}

document.querySelector('#feedback').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form submit');
    sendData();
})
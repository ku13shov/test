'use strict'

const submit = document.querySelector('.reg-form__btn');
const email = document.querySelector('#email');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const warnEmail = document.createElement('div');
const warnFirstName = document.createElement('div');
const warnLastName = document.createElement('div');
const pass = document.querySelector('#pass');
const reppass = document.querySelector('#reppass');
const warnReppass = document.createElement('div');
const formWrapper = document.querySelector('.reg-form__wrapper');
const formText = document.querySelector('.reg-form__text');
const formSubtext = document.querySelector('.reg-form__subtext');
const formBox = document.querySelectorAll('.reg-form__box');

const regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regPass = /^(?=.*[a-z,а-я])(?=.*[A-Z,А-Я])(?=.*\d).{8,}$/;


const validateEmail = function() {
    if (!email.value.match(regEmail)) {
        email.classList.add('wrong-email');
        warnEmail.classList.add('warn');
        warnEmail.textContent = 'Please enter a valid e-mail address';
        email.parentElement.append(warnEmail);

        return false;
    } else {
        email.classList.remove('wrong-email');
        warnEmail.remove();

        return true;
    }
}

const validateFirstName = function() {
    if (!firstName.value) {
        firstName.classList.add('wrong-name');
        warnFirstName.classList.add('warn');
        warnFirstName.textContent = 'Please fill in the field';
        firstName.parentElement.append(warnFirstName);

        return false;
    } else {
        firstName.classList.remove('wrong-name');
        warnFirstName.remove();

        return true;
    }
}

const validateLastName = function() {
    if (!lastName.value) {
        lastName.classList.add('wrong-name');
        warnLastName.classList.add('warn');
        warnLastName.textContent = 'Please fill in the field';
        lastName.parentElement.append(warnLastName);

        return false;
    } else {
        lastName.classList.remove('wrong-name');
        warnLastName.remove();

        return true;
    }
}

const validatePass = function() {
    if (!pass.value || !pass.value.match(regPass)) {
        pass.classList.add('wrong-name');
        alert('Password must contain at least 8 characters, uppercase and lowercase letters, and numbers');

        return false;
    } else {
        pass.classList.remove('wrong-name');

        return true;
    }
}

const validateReppass = function() {
    if (!reppass.value) {
        reppass.classList.add('wrong-name');
        warnReppass.classList.add('warn');
        warnReppass.textContent = 'Please fill in the field';
        reppass.parentElement.append(warnReppass);

        return false;
    } 
    if (reppass.value && (reppass.value !== pass.value)) {
        warnReppass.classList.add('warn');
        warnReppass.textContent = 'Passwords do not match';
        reppass.parentElement.append(warnReppass);

        return false;
    } 
    if (reppass.value && (reppass.value === pass.value)) {
        reppass.classList.remove('wrong-name');
        warnReppass.remove();

        return true;
    }
}

//вывод сообщения об успешной регистрации и обнуление полей
const successReg = function() {
    formWrapper.style.position = 'relative';
    formText.classList.add('registered-text');
    formText.textContent = 'Thank You!';
    formSubtext.classList.add('registered-subtext');
    formSubtext.textContent = 'you registered!';
    formBox.forEach(item => item.classList.add('opacity0'));
    submit.classList.add('opacity0');

    firstName.value = lastName.value = email.value = pass.value = reppass.value = '';
}

//анимации кнопки "Complete Signup"
const unSuccessReg = function() {
    submit.classList.add('animation');
    setTimeout(() => {
        submit.classList.remove('animation');
    }, 100);
}

const showFields = function() {
    formBox.forEach((item, i) => {
        setTimeout(() => {
            item.style.opacity = '1';
        }, 700 * i);
    });
}

//повтор анимации svg
const replay = function(myVivus) {
    myVivus.play(myVivus.getStatus() === 'end' ? -1 : 1);
}

const vivusOptions = {
    type: 'oneByOne',
    duration:500,
};

new Vivus('my-svg', vivusOptions,replay);

showFields();


submit.addEventListener('click', (e) => {
    e.preventDefault();

    let resEmail = validateEmail();
    let resFistName = validateFirstName();
    let resLastName = validateLastName();
    let resPass = validatePass();
    let resReppass = validateReppass();

    if (resEmail && resFistName && resLastName && resPass && resReppass) {
        successReg();
    } else {
        unSuccessReg();
    }
});
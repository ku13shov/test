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

const regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;


const validateEmail = function() {
    if (!email.value.match(regEmail)) {
        email.classList.add('wrong-email');
        warnEmail.classList.add('warn');
        warnEmail.textContent = 'Please enter a valid e-mail address';
        email.parentElement.append(warnEmail);
    } else {
        email.classList.remove('wrong-email');
        warnEmail.remove();
    }
}

const validateFirstName = function() {
    if (!firstName.value) {
        firstName.classList.add('wrong-name');
        warnFirstName.classList.add('warn');
        warnFirstName.textContent = 'Please fill in the field';
        firstName.parentElement.append(warnFirstName);
    } else {
        firstName.classList.remove('wrong-name');
        warnFirstName.remove();
    }
}

const validateLastName = function() {
    if (!lastName.value) {
        lastName.classList.add('wrong-name');
        warnLastName.classList.add('warn');
        warnLastName.textContent = 'Please fill in the field';
        lastName.parentElement.append(warnLastName);
    } else {
        lastName.classList.remove('wrong-name');
        warnLastName.remove();
    }
}

const validatePass = function() {
    if (!pass.value || !pass.value.match(regPass)) {
        pass.classList.add('wrong-name');
        alert('Password must contain at least 8 characters, uppercase and lowercase letters, and numbers')
    } else {
        pass.classList.remove('wrong-name');
    }
}

const validateReppass = function() {
    if (!reppass.value) {
        reppass.classList.add('wrong-name');
        warnReppass.classList.add('warn');
        warnReppass.textContent = 'Please fill in the field';
        reppass.parentElement.append(warnReppass);
    } 
    if (reppass.value && (reppass.value !== pass.value)) {
        warnReppass.classList.add('warn');
        warnReppass.textContent = 'Passwords do not match';
        reppass.parentElement.append(warnReppass);
    } 
    if (reppass.value && (reppass.value === pass.value)) {
        reppass.classList.remove('wrong-name');
        warnReppass.remove();
    }
}


submit.addEventListener('click', (e) => {
    e.preventDefault();

    validateEmail();
    validateFirstName();
    validateLastName();
    validatePass();
    validateReppass();
});
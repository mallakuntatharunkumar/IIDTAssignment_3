// script.js

const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    clearErrors();

    let isValid = true;

    if (nameInput.value.trim() === '') {
        isValid = false;
        showError(nameInput, 'Please enter your name');
    }

    if (!isValidEmail(emailInput.value)) {
        isValid = false;
        showError(emailInput, 'Please enter a valid email address');
    }

    if (passwordInput.value.length < 6) {
        isValid = false;
        showError(passwordInput, 'Password must be at least 6 characters long');
    }

    if (confirmPasswordInput.value !== passwordInput.value) {
        isValid = false;
        showError(confirmPasswordInput, 'Passwords do not match');
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    errorElement.style.opacity = 1;
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        message.textContent = '';
        message.style.opacity = 0;
    });
}

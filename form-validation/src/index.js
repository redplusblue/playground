import './style.css';

// Creates form with fields: email, country, zip code, password, confirm password
function form() {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    const form = document.createElement('form');
    form.setAttribute('id', 'form');
    // Email field
    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('id', 'email');
    email.setAttribute('placeholder', 'Email');
    email.setAttribute('invalid', 'true');
    email.classList.add('invalid');
    email.setCustomValidity('Please enter a valid email address!');
    // Email Error Message Div, hidden by default
    const emailError = document.createElement('div');
    emailError.setAttribute('id', 'emailError');
    emailError.setAttribute('class', 'error');
    emailError.textContent = 'Please enter a valid email address!';
    // Country field
    const country = document.createElement('input');
    country.setAttribute('type', 'text');
    country.setAttribute('id', 'country');
    country.setAttribute('placeholder', 'Country');
    country.setAttribute('invalid', 'true');
    country.classList.add('invalid');
    country.setCustomValidity('Please enter a valid country!');
    // Country Error Message Div, hidden by default
    const countryError = document.createElement('div');
    countryError.setAttribute('id', 'countryError');
    countryError.setAttribute('class', 'error');
    countryError.textContent = 'Please enter a valid country!';
    // Zip Code field
    const zip = document.createElement('input');
    zip.setAttribute('type', 'number');
    zip.setAttribute('id', 'zip');
    zip.setAttribute('placeholder', 'Zip Code');
    zip.setAttribute('invalid', 'true');
    zip.classList.add('invalid');
    zip.setCustomValidity('Please enter a valid zip code!');
    // Zip Code Error Message Div, hidden by default
    const zipError = document.createElement('div');
    zipError.setAttribute('id', 'zipError');
    zipError.setAttribute('class', 'error');
    zipError.textContent = 'Please enter a valid zip code!';
    // Password field
    const password = document.createElement('input');
    password.setAttribute('type', 'password');
    password.setAttribute('id', 'password');
    password.setAttribute('placeholder', 'Password');
    password.setAttribute('invalid', 'true');
    password.classList.add('invalid');
    password.setCustomValidity('Please enter a valid password!');
    // Password Error Message Div, hidden by default
    const passwordError = document.createElement('div');
    passwordError.setAttribute('id', 'passwordError');
    passwordError.setAttribute('class', 'error');
    passwordError.textContent = 'Please enter a valid password!';
    // Confirm Password field
    const confirmPassword = document.createElement('input');
    confirmPassword.setAttribute('type', 'password');
    confirmPassword.setAttribute('id', 'confirmPassword');
    confirmPassword.setAttribute('placeholder', 'Confirm Password');
    confirmPassword.setAttribute('invalid', 'true');
    confirmPassword.classList.add('invalid');
    confirmPassword.setCustomValidity('Passwords do not match!');
    // Confirm Password Error Message Div, hidden by default
    const confirmPasswordError = document.createElement('div');
    confirmPasswordError.setAttribute('id', 'confirmPasswordError');
    confirmPasswordError.setAttribute('class', 'error');
    confirmPasswordError.textContent = 'Passwords do not match!';
    // Submit button
    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    submit.setAttribute('id', 'submit');
    // Submit is disabled by default
    submit.setAttribute('disabled', 'disabled');

    form.appendChild(email);
    form.appendChild(emailError);
    form.appendChild(country);
    form.appendChild(countryError);
    form.appendChild(zip);
    form.appendChild(zipError);
    form.appendChild(password);
    form.appendChild(passwordError);
    form.appendChild(confirmPassword);
    form.appendChild(confirmPasswordError);
    form.appendChild(submit);
    content.appendChild(form);

    return content;
}

document.body.appendChild(form());

const submit = document.getElementById('submit');
// Add event listeners to fields to check for valid input
// Email
const emailField = document.getElementById('email');
emailField.addEventListener('input', (e) => {
    const email = e.target.value;
    const emailError = document.getElementById('emailError');
    // Regexp: email address format
    if (!email.match(/^[^@]+@[^@.]+\.[a-z]+$/i)) {
        emailError.style.display = 'block';
        emailField.setCustomValidity('Please enter a valid email address!');
        emailField.classList.add('invalid');
    } else {
        emailError.style.display = 'none';
        emailField.removeAttribute('invalid');
        emailField.classList.remove('invalid');
        emailField.classList.add('valid');
        emailField.setCustomValidity('');
    }
});


// Country
const countryField = document.getElementById('country');
countryField.addEventListener('input', (e) => {
    const country = e.target.value;
    const countryError = document.getElementById('countryError');
    if (!country.match(/^[a-zA-Z]+$/)) {
        countryField.setCustomValidity('Please enter a valid country!');
        countryError.style.display = 'block';
    } else {
        countryField.removeAttribute('invalid');
        countryField.setCustomValidity('');
        countryField.classList = 'valid';
        countryError.style.display = 'none';
    }
});

// Zip Code
const zipField = document.getElementById('zip');
zipField.addEventListener('input', (e) => {
    const zip = e.target.value;
    const zipError = document.getElementById('zipError');
    // Regexp: 5 digits, optional 4 digits
    if (!zip.match(/^[0-9]{5}(?:-[0-9]{4})?$/)) {
        zipError.style.display = 'block';
        zipField.setCustomValidity('Please enter a valid zip code!');
        zipField.setAttribute('invalid', 'true');
        zipField.classList.add('invalid');
    } else {
        zipError.style.display = 'none';
        zipField.removeAttribute('invalid');
        zipField.setCustomValidity('');
        zipField.classList = 'valid';
    }
});

// Password and Confirm Password
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

passwordField.addEventListener('input', (e) => {
    const password = e.target.value;
    // Regexp: At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
        passwordError.style.display = 'block';
        passwordField.setAttribute('invalid', 'true');
        passwordField.classList.add('invalid');
        passwordField.setCustomValidity('Please enter a valid password!');
    } else {
        passwordError.style.display = 'none';
        passwordField.removeAttribute('invalid');
        passwordField.classList = 'valid';
        passwordField.setCustomValidity('');
    }
});
confirmPasswordField.addEventListener('input', (e) => {
    const confirmPassword = e.target.value;
    if (password.value !== confirmPassword) {
        confirmPasswordField.setAttribute('invalid', 'true');
        confirmPasswordError.style.display = 'block';
        confirmPasswordField.setCustomValidity('Passwords do not match!');
        confirmPasswordField.classList.add('invalid');
    } else {
        confirmPasswordField.removeAttribute('invalid');
        confirmPasswordError.style.display = 'none';
        confirmPasswordField.classList = 'valid';
        confirmPasswordField.setCustomValidity('');
    }
});

let currForm = document.getElementById('form');
// If all fields are valid, enable submit button
currForm.addEventListener('input', (e) => {
    const submit = document.getElementById('submit');
    // Check the :invalid pseudo-class for each field
    if (email.validity.valid && country.validity.valid && zip.validity.valid && password.validity.valid && confirmPassword.validity.valid) {
        // Enable submit button
        console.log('valid');
        submit.removeAttribute('disabled');
    } else {
        console.log('invalid');
    }
});
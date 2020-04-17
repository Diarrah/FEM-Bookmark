// Form validation
let form = document.querySelector('.form-control'),
    wrapper = document.querySelector('.form-invalid-wrapper'),
    email = wrapper.querySelector('input'),
    message = wrapper.querySelector('small');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailVal = email.value.trim();

    if (emailVal === '') {
        wrapper.classList.add('error')
        message.innerText = `Email cannot be blank`;
    } else if (!validateEmail(emailVal)) {
        wrapper.classList.add('error')
        message.innerText = `Whoops, looks like that's not an email`;
    } else {
        wrapper.className = 'form-invalid-wrapper';
    }
})

function validateEmail(email) {
    let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valid.test(String(email).toLowerCase());
}


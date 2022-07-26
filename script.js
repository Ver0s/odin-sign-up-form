const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');


confirmPassword.addEventListener('input', () => {
    if (password.value !== confirmPassword.value) {
        password.style.border = '2px solid red';
        confirmPassword.style.border = '2px solid red';
    } else {
        password.style.border = '2px solid green';
        confirmPassword.style.border = '2px solid green';
    }
})

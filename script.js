const password = document.getElementById('password');
const confPassword = document.getElementById('conf-password');

confPassword.addEventListener('input', (e) => {
    addRemoveClass();
})

password.addEventListener('input', (e) => {
    addRemoveClass();
})

function addRemoveClass() {
    if (password.value === confPassword.value && password.checkValidity()) {
        confPassword.setCustomValidity("");
    } else {
        confPassword.setCustomValidity("Invalid field.");
    }
}



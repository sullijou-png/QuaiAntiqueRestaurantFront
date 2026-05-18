// implementer le js de votre page d'inscription ici

const inputNom = document.getElementById("NameInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ConfirmPasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");
inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

function validateForm() {
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const emailOk = validateEmail(inputEmail);
    const passwordOk = validatePassword(inputPassword);
    const validationPasswordOk = validatePasswordMatch(inputPassword, inputValidationPassword);
    const formIsValid = nomOk && prenomOk && emailOk && passwordOk && validationPasswordOk;

    if(formIsValid)
        btnValidation.removeAttribute("disabled");
    else
        btnValidation.setAttribute("disabled", "disabled");
}

function validateEmail(input) {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (regexEmail.test(input.value)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return  false;
    }
}


function validateRequired(input) {
    if (input.value != '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}
function validatePasswordMatch(pw, confirmPw) {
    if (confirmPw.value !== '' && pw.value === confirmPw.value) {
        confirmPw.classList.add("is-valid");
        confirmPw.classList.remove("is-invalid");
        return true;
    } else {
        confirmPw.classList.add("is-invalid");
        confirmPw.classList.remove("is-valid");
        return false;
    }
}

function validatePassword(input){

    //Définir mon regex

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

    const passwordUser = input.value;

    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");        input.classList.add("is-invalid");
        return false;
    }   
}
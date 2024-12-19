const dqs = (element) => document.querySelector(element);

const formElement = dqs(".form-container");
const userNameInput = dqs("#user-name");
const userEmailInput = dqs("#user-email");
const userPasswordInput = dqs("#user-password");
const userPasswordConfirmationInput = dqs("#user-password-confirmation");
const buttonElement = dqs("button");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInputs();
});

function checkInputs() {
    const nameValue = userNameInput.value;
    const emailValue = userEmailInput.value;
    const passwordValue = userPasswordInput.value;
    const passwordConfirmationValue = userPasswordConfirmationInput.value;

    if (nameValue === "") {
        setErrorFor(userNameInput, "O nome do usuário deve ser preenchido!");
    } else {
        setSuccessFor(userNameInput);
    }

    if (emailValue === "") {
        setErrorFor(userEmailInput, "O email do usuário deve ser preenchido!");
    } else if (!checkEmail(emailValue)) {
        //verifica se o email é válido de acordo com o regex
        setErrorFor(userEmailInput, "Por favor insira um email valido!");
    } else {
        setSuccessFor(userEmailInput);
    }

    if (passwordValue === "") {
        setErrorFor(userPasswordInput, "A senha do usuário deve ser preenchida!");
    } else if (passwordValue.length < 8) {
        setErrorFor(userPasswordInput, "A senha deve ter no mínimo 8 caracteres!");
    } else {
        setSuccessFor(userPasswordInput);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(userPasswordConfirmationInput, "A confirmação de senha deve ser preenchida!");
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(userPasswordConfirmationInput, "As senhas devem ser iguais!");
    } else {
        setSuccessFor(userPasswordConfirmationInput);
    }
}

function setErrorFor(input, message) {
    const formElement = input.parentElement; //pegando o pai do input
    const small = formElement.querySelector("small"); //pegando a tag small

    small.innerText = message; //alterando o conteúdo da tag small

    formElement.className = "form-item error"; //alterando o nome da classe
}

function setSuccessFor(input) {
    const formElement = input.parentElement; //pegando o pai do input

    formElement.className = "form-item success"; //alterando o nome da classe
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

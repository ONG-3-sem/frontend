// Variáveis dos botões e dos formulários
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var btnBack = document.querySelector("#btnBack");  // Caso tenha um botão 'Voltar'
var signinForm = document.querySelector("#signinForm");
var signupForm = document.querySelector("#signupForm");
var body = document.querySelector("body");

// Função para alternar entre as telas de Login e Cadastro com animação
btnSignin.addEventListener("click", function () {
    body.classList.add("sign-in-js");
    body.classList.remove("sign-up-js");
    // Caso queira ocultar o formulário de signup ao clicar no botão de login
    signupForm.style.display = "none";
    signinForm.style.display = "block";
});

btnSignup.addEventListener("click", function () {
    body.classList.add("sign-up-js");
    body.classList.remove("sign-in-js");
    // Caso queira ocultar o formulário de login ao clicar no botão de signup
    signinForm.style.display = "none";
    signupForm.style.display = "block";
});

// Botão de "Voltar" para retornar ao login
btnBack.addEventListener("click", function () {
    body.classList.remove("sign-up-js");
    body.classList.add("sign-in-js");
    signupForm.style.display = "none";
    signinForm.style.display = "block";
});

// Função de validação simples para o formulário de login
function validateSignin() {
    var email = signinForm.querySelector("#signinEmail").value;
    var password = signinForm.querySelector("#signinPassword").value;
    if (email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Impede o envio do formulário
    }
    return true; // Permite o envio do formulário
}

// Função de validação simples para o formulário de cadastro
function validateSignup() {
    var name = signupForm.querySelector("#signupName").value;
    var email = signupForm.querySelector("#signupEmail").value;
    var password = signupForm.querySelector("#signupPassword").value;
    if (name === "" || email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Impede o envio do formulário
    }
    return true; // Permite o envio do formulário
}

// Adicionando validação antes do envio dos formulários
signinForm.addEventListener("submit", function (event) {
    if (!validateSignin()) {
        event.preventDefault(); // Previne o envio do formulário
    }
});

signupForm.addEventListener("submit", function (event) {
    if (!validateSignup()) {
        event.preventDefault(); // Previne o envio do formulário
    }
});

// Efeito de transição suave ao mudar entre login e cadastro
body.classList.add("transition-enabled");

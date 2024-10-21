// Função para exibir o formulário de login
function showLogin() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');

    // Mostra o login, oculta o cadastro
    loginForm.classList.add('active');
    registerForm.classList.remove('active');

    // Atualiza os botões
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
}

// Função para exibir o formulário de cadastro
function showRegister() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');

    // Mostra o cadastro, oculta o login
    registerForm.classList.add('active');
    loginForm.classList.remove('active');

    // Atualiza os botões
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
}

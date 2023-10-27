const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const forma = document.getElementById('forma');

const email = forma.querySelector('[name="email"]'),
    pas = forma.querySelector('[name="password"]'),
    tel = forma.querySelector('[name="telegramId"]');

registerBtn.addEventListener('click', () => {
    event.preventDefault();

    if((email.value !== '') && (pas.value !== '') && (tel.value !== '')){
        container.classList.add("active");
    }
    if(email.value === ''){
        email.placeholder = 'Введите email';
    }
    if(pas.value === ''){
        pas.placeholder = 'Введите пароль';
    }
    if(tel.value === ''){
        tel.placeholder = 'Введите TelegramID';
    }
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
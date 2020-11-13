// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');

const listUsers = [
  {
    id: '01',
    email: 'maks@mail.com',
    password: '12345',
    displayName: 'MaksJS'
  },
  {
    id: '02',
    email: 'kate@mail.com',
    password: '123456',
    displayName: 'KateKillMaks'
  }
];

const setUsers = {
  user: null,
  logIn(email, password) {
  
  },
  logOut() {
    console.log('Выход');
  },
  signUp(email, password) {
    if (!this.getUser(email)) {
      listUsers.push({email, password, displayName: email});
    } else {
      alert('Пользователь уже зарегистрирован!');
    }
  },
  getUser(email) {
    return listUsers.find(item => item.email === email)
  }
};

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  
  setUsers.logIn(emailValue, passwordValue);
});

loginSignup.addEventListener('click', (event) => {
  event.preventDefault();
   
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  
  setUsers.signUp(emailValue, passwordValue);
});
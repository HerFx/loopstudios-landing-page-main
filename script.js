const burger = document.querySelector('.burger');
const nav = document.getElementById('nav-ul');
const navClose = document.querySelector('.nav-close');

burger.addEventListener('click', () => {
    nav.classList.toggle('show');
});

navClose.addEventListener('click', () => {
    nav.classList.toggle('show');
})
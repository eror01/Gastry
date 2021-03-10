const hamburgerMenu = document.querySelector('.hamburger-menu');
const header = document.querySelector('.header');
const form = document.querySelector('.book__form')

hamburgerMenu.addEventListener('click', () => {
    header.classList.toggle('change');
});

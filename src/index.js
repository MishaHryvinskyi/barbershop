const menu = document.querySelector('.menu-js');
const menuOpenBtn = document.querySelector('.btn-open-js');
const menuCloseBtn = document.querySelector('.btn-close-js');

menuOpenBtn.addEventListener('click', menuOpen);
menuCloseBtn.addEventListener('click', menuClose);

function menuOpen() {
    menu.classList.add('open');
}

function menuClose() {
    menu.classList.remove('open');
}
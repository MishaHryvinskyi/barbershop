const menu = document.querySelector('.menu-js');

export function menuOpen() {
    menu.classList.add('open');
}

export function menuClose() {
    menu.classList.remove('open');
}
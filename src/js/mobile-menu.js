const menu = document.querySelector('.menu-js');
const menuClose = document.querySelector('.close-menu');
const menuLinks = menu.querySelectorAll('a');

export function menuToggle() {
    menu.classList.toggle('open');
    menuClose.classList.toggle('visible');

    const isMenuOpen = menu.classList.contains('open');
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    document.body.style.height = isMenuOpen ? '100vh' : '';
}

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
        menuClose.classList.remove('visible');
        document.body.style.overflow = '';
        document.body.style.height = '';
    });
});
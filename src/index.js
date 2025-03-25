import { checkVisibility } from "./js/title-animation";
import { menuClose, menuOpen } from "./js/mobile-menu";

const menuOpenBtn = document.querySelector('.btn-open-js');
const menuCloseBtn = document.querySelector('.btn-close-js');

menuOpenBtn.addEventListener('click', menuOpen);
menuCloseBtn.addEventListener('click', menuClose);
window.addEventListener("scroll", checkVisibility);

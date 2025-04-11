import { checkVisibility } from "./js/title-animation";
import { menuToggle } from "./js/mobile-menu";

const menuOpenBtn = document.querySelector('.btn-open-js');

menuOpenBtn.addEventListener('click', menuToggle);
window.addEventListener("scroll", checkVisibility);

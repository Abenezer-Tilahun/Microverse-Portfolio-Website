const overlay = document.querySelector('.overlay');
const Menulinks = document.querySelectorAll('.Menu-link');
const btnCloseMenu = document.querySelector('.close-menu');
const btnOpenMenu = document.querySelector('.open-menu');
const mobileMenu = document.querySelector('.parent_main');
const logo = document.querySelector('.logo');

for (let i = 0; i < Menulinks.length; i += 1) {
  Menulinks[i].addEventListener('click', closeMenu);
}
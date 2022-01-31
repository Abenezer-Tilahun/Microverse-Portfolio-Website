// Mobile menu start////////////////////
const overlay = document.querySelector('.overlay');
const Menulinks = document.querySelectorAll('.Menu-link');
const btnCloseMenu = document.querySelector('.close-menu');
const btnOpenMenu = document.querySelector('.open-menu');
const mobileMenu = document.querySelector('.parent_main');
const logo = document.querySelector('.logo');

function openMenu() {
  overlay.classList.remove('hidden');
  mobileMenu.classList.add('blur');
  logo.classList.add('blur');
}

function closeMenu() {
  overlay.classList.add('hidden');
  mobileMenu.classList.remove('blur');
  logo.classList.remove('blur');
}

btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);

for (let i = 0; i < Menulinks.length; i += 1) {
  Menulinks[i].addEventListener('click', closeMenu);
}

// Mobile menu end////////////////////
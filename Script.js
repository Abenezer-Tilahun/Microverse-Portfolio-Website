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
const nameID = document.getElementById('name');
  const img = document.getElementById('img');
  const companyName = document.getElementById('companyName');
  const job = document.getElementById('job');
  const year = document.getElementById('data');
  const descrition = document.getElementById('description');
  const tags = document.getElementById('tags');
  const button1 = document.querySelector('#btn-1');
  const button2 = document.querySelector('#btn-2');
  const button3 = document.querySelector('#btn-3');
  const button4 = document.querySelector('#btn-4');
  const btnClosePop = document.querySelector('.popup-close-btn');
  const popupOverlay = document.querySelector('.popup-overlay');
  const popup = document.getElementById('popup');
  function openPopUp() {
    popup.classList.remove('hidden');
  }
  function changePopup(order) {
    tags.innerHTML = '';
    const project = data[`project${order}`];
    nameID.innerHTML = project.name;
    img.src = project.img;
    companyName.innerHTML = project.companyName;
    job.innerHTML = project.job;
    year.innerHTML = project.year;
    descrition.innerHTML = project.decription;
    const tagsLength = project.tags.length;
    for (let i = 0; i < tagsLength; i += 1) {
      const element = document.createElement('li');
      element.innerHTML = `${project.tags[i]}`;
      tags.appendChild(element);
    }
    openPopUp();
  }
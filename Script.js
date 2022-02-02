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

// Popup Window start////////////////////
const data = {
  project1: {
    name: 'Tonic',
    img: 'images/section-work/snapshoot4.png',
    companyName: 'CANOPY',
    job: 'Back End Dev',
    year: 2022,
    decription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javaScript'],
    sourceLink: 'https://github.com/Abenezer-Tilahun/Microverse-Portfolio-Website',
    demoLink: 'https://abenezer-tilahun.github.io/Microverse-Portfolio-Website/',
  },

  project2: {
    name: 'Multi-Post Stories',
    img: 'images/section-work/snapshoot3.png',
    companyName: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2022,
    decription:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming <br> their friends.',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
    sourceLink: 'https://github.com/Abenezer-Tilahun/Microverse-Portfolio-Website',
    demoLink: 'https://abenezer-tilahun.github.io/Microverse-Portfolio-Website/',
  },

  project3: {
    name: 'Facebook 360',
    img: 'images/section-work/snapshoot.png',
    companyName: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2022,
    decription:
      'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
    sourceLink: 'https://github.com/Abenezer-Tilahun/Microverse-Portfolio-Website',
    demoLink: 'https://abenezer-tilahun.github.io/Microverse-Portfolio-Website/',
  },
  project4: {
    name: 'Uber Navigation',
    img: 'images/section-work/snapshoot1.png',
    companyName: 'Uber',
    job: 'Lead Developer',
    year: 2022,
    decription:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
    sourceLink: 'https://github.com/Abenezer-Tilahun/Microverse-Portfolio-Website',
    demoLink: 'https://abenezer-tilahun.github.io/Microverse-Portfolio-Website/',
  },
};

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

function closePopUp() {
  popup.classList.add('hidden');
}

button1.addEventListener('click', () => {
  openPopUp();
  changePopup(1);
});

button2.addEventListener('click', () => {
  openPopUp();
  changePopup(2);
});

button3.addEventListener('click', () => {
  openPopUp();
  changePopup(3);
});

button4.addEventListener('click', () => {
  openPopUp();
  changePopup(4);
});

popupOverlay.addEventListener('click', closePopUp);
btnClosePop.addEventListener('click', closePopUp);

// Popup Window end /////////////////////
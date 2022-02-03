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
const sourceLink = document.querySelector('.btn-element-SRC');
const demoLink = document.querySelector('.btn-element-LIVE');
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
  sourceLink.action = project.sourceLink;
  demoLink.action = project.demoLink;
  openPopUp();
  for (let i = 0; i < data.length; i += 1) {
    document.querySelector('popup').innerHTML = `
    <div class="card popup desk">
      <div>
        <div class="card-content desk">
          <h3 class="heading-secondary desk">${project[i].nameID}</h3>
          <span> <a onclick="closePopUp()" href="javascript:void(0)" class="popup-close-btn">X</a></span>
      </div>
      <ul class="card-info desk">
      <li id="companyName">${project[i].companyName}CANOPY</li>
      <li><img src="images/section-work/Counter.svg" alt="dot" class="card-info-dot" /></li>
      <li class="input-text" id="job"> ${project[i].job} Back End Dev</li>
      <li><img src="images/section-work/Counter.svg" alt="dot" class="card-info-dot" /></li>
      <li class="input-text" id="data">${project[i].year} 2022</li>
    </ul>
      </div>
      <div class="card-img desk" id="img">
          <img src="${project[i].img}" class="flex-item1" alt="${project[i].nameID} project screenshot"/>
          <img src="${project[i].img}" class="desk-item1" alt="${project[i].nameID} project screenshot"/>
      </div>
      <div class="desk-pop">
          <div class="first">
            <p "text-secondary mob desk" id="description">
              ${project[i].description}
            </p>
          </div>
          <div class="second">
              <ul "card-tags desk" id="tags">
              ${tags}
              </ul>
              <ul class="line">
              ${tags}
              </ul>
              <div class="btn-element">
                <a href="${project[i].seeLive}" class="btn-element-LIVE">See Live
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                </a>
                <a href="${project[i].seeSource}" class="btn-element-SRC">See Source
                  <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>
            </div>
          </div>
      </div>
      </div>
  `;
  }
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

const contactForm = document.querySelector('.contact_form');
const emailInput = document.querySelector('.email_address');
const validationMessage = document.querySelector('.validation_message');
contactForm.addEventListener('submit', (event) => {
  const strInput = emailInput.value;
  if (/[A-Z]/.test(strInput)) {
    validationMessage.innerHTML = 'Your email address should not contain upper case letters';
    validationMessage.classList.add('shake');
    event.preventDefault();
  }
});

contactForm.addEventListener('input', () => {
  const formInfo = {
    name: document.querySelector('.contact_name').value,
    email: document.querySelector('.email_address').value,
    message: document.querySelector('.contact_message').value,
  };

  localStorage.setItem('contactForm', JSON.stringify(formInfo));
});

const formObj = JSON.parse(localStorage.getItem('contactForm'));
document.querySelector('.contact_name').value = formObj.name;
document.querySelector('.email_address').value = formObj.email;
document.querySelector('.contact_message').value = formObj.message;
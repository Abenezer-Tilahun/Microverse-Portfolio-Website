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
    name: 'Budget-App',
    img: 'images/section-work/budget-app.PNG',
    companyName: 'Ruby on Rails',
    job: 'Back End Dev',
    year: 2022,
    decription:
      'A Budget-app is mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    tags: ['Html', 'Scss', 'Ruby on Rails'],
    sourceLink: 'https://github.com/Abenezer-Tilahun/Budget-app',
    demoLink: 'https://budget-app21.herokuapp.com',
  },

  project2: {
    name: 'Meal-App',
    img: 'images/section-work/Meal-app.PNG',
    companyName: 'React FrameWork',
    job: 'Front End Dev',
    year: 2022,
    decription:
      'A web application based on an external API. The web application has 3 user interfacesSearch for food, recepies, and full detailed information on how to prepare them.',
    tags: ['Html', 'React and Redux', 'Css', 'JavaScript'],
    sourceLink: 'https://github.com/Abenezer-Tilahun/MealApp',
    demoLink: 'https://abenezer-tilahun.github.io/MealApp/',
  },

  project3: {
    name: 'Air-Quality-Data App',
    img: 'images/section-work/Air-quality.png',
    companyName: 'React FrameWork',
    job: 'Front End Dev',
    year: 2022,
    decription:
      'Air quality data app, In this web app you will be able to see what the current air quality data is and also can tracks the data of air pollution based on gas percentage of air.',
    tags: ['Html', 'React and Redux', 'Css', 'JavaScript'],
    sourceLink: 'https://github.com/Abenezer-Tilahun/Air-Quality-Data',
    demoLink: 'https://air-quality-data.netlify.app',
  },
  project4: {
    name: 'Creative-Hub',
    img: 'images/section-work/Creative-hub.PNG',
    companyName: 'Website',
    job: 'Website Design',
    year: 2022,
    decription:
      ' A website for a Creative-Hub festival I developed as part of my capstone project for the Microverse program module 1. The website is for an upcoming Creative-Hub festival for Software developers Rising, an extreme Software company that is having their event in Ethiopia (Africa).',
    tags: ['Html', 'Css', 'JavaScript'],
    sourceLink: 'https://github.com/Abenezer-Tilahun/Creative-Hub-Conference-page',
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
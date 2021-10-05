'use strict';
const mainTitle = document.querySelector('.main-title');
const mainTitleLast = document.querySelector('.last-name');
const scrollBtn = document.querySelector('.scroll-btn-a');
const section1 = document.querySelector('.section-1');
const svgGirlProgrammer = document.querySelector('svg');
const photo = document.querySelector('profile-photo');
let loader = document.querySelector('.loader');
const canvas = document.getElementById('c');

const cntxt = canvas.getContext('2d');

canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);

let binaryNum = '01';

binaryNum = binaryNum.split('');

const fontSize = 18;
const columns = Math.round(canvas.width / fontSize);

const drops = [];

Array(columns)
  .fill(0)
  .forEach(function (num, i) {
    drops[i] = 1;
  });

const draw = function () {
  cntxt.fillStyle = 'rgba(0, 0, 0, 0.05)';
  cntxt.fillRect(0, 0, canvas.width, canvas.height);

  cntxt.fillStyle = 'rgba(12, 236, 221, 0.3)';
  cntxt.font = fontSize + 'px arial';

  drops.forEach(function (num, i) {
    // generate 0 and 1 radomly
    const text = binaryNum[Math.floor(Math.random() * binaryNum.length)];
    cntxt.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
      drops[i] = 0;

    //incrementing Y coordinate
    drops[i]++;
  });
};
setInterval(draw, 80);

//----------- SCROLL DOWN BUTTON ----------------

scrollBtn.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

// svgCircle.addEventListener('load', function (e) {
//   setTimeout(e => {
//     e.target.style.right = '1000px';
//   }, 2000);
// });
// const tl = new TimeLineMax();

// tl.fromTo(photo, 1, { height: '0%' }, { height: '50%' });

const genRandom = function (max, min) {
  return Math.trunc(Math.random() * (max - min) + 1) + min;
};

//------------------------- LOADER --------------------------------

// window.addEventListener('load', function () {
//   loader.parentElement.removeChild(loader);
//   this.document.body.removeAttribute('hidden');
// });

//////////

// document.onreadystatechange = function () {
//   const state = document.readyState;
//   if (state === 'interactive') {
//     document.querySelector('.page').style.visibility = 'hidden';
//   } else if (state === 'complete') {
//     setTimeout(() => {
//       document.querySelector('.page').style.visibility = 'visible';
//       removeLoader = loader.parentElement.removeChild(loader);
//     }, 1100);
//   }
// };

// ------------------------- TYPE EFFECT-----------------------------
const firstName = 'Luciana';
const lastName = 'Mascarenhas';

const splitFirstName = firstName.split('');
const splitLastName = lastName.split('');
// console.log(splitLastName);
let loopTimer, loopTimer2;

const frameLoop = function () {
  const loopTimer = setTimeout('frameLoop()', 100);
  if (splitFirstName.length > 0) {
    mainTitle.innerHTML += splitFirstName.shift();
  } else {
    clearTimeout(loopTimer);
  }
};

setTimeout(() => {
  frameLoop();
}, 200);

const frameLoopLast = function () {
  const loopTimer2 = setTimeout('frameLoopLast()', 100);
  if (splitLastName.length > 0) {
    mainTitleLast.innerHTML += splitLastName.shift();
  } else {
    clearTimeout(loopTimer2);
  }
};

setTimeout(() => {
  frameLoopLast();
}, 910);

// LANGUAGE SWITCHER
const language = {
  english: {
    subtitle: '<em>Full-stack developer.</em>',
    scrollDown: 'Scroll down',
    aboutTitle: 'About',
    aboutText:
      "<p> I am a full-stack developer recently graduated from Le Wagon (Best coding bootcamp according to switch up). There I had the opportunity to collaborate designing, implementing and shipping to production projects using Figma, Ruby on Rails, HTML, CSS, SASS, Bootstrap, Javascript(ES6), SQL, Git, Github e Heroku . You can check it out on the projects section down below. </p><p>Learn to code is fascinating. From the front-end up to the back-end and its beauty, the possibility of turning real-life problems into code finding a solution that makes your life easier, it fascinates me. Always open to learn new things, love to challenge myself and truly believe that there's nothing we can't learn.</p>",
    toolsTitle: 'Tools',
    projectsTitle: 'Projects',
    leafsText: 'Help the enviroment while earn some cashback.',
    petbnbText:
      'Find a safe and comfortable place for your pet while you are away.',
    footerText:
      'I am available and ready to be part of your team.<br/> I’m just a few clicks away, are you sure you gonna miss it?',
  },

  portuguese: {
    subtitle: '<em>Desenvolvedora Full-stack.</em>',
    scrollDown: 'Deslize',
    aboutTitle: 'Sobre',
    aboutText:
      '<p> Sou uma desenvolvedora Full-stack recentemente graduada pela Le Wagon (Considerado melhor bootcamp de programação de acordo com switch up). Tive a oportunidade de colaborar projetando, implementando e enviando para produção projetos utilizando Figma, Ruby on Rails, HTML, CSS, SASS, Bootstrap, Javascript(ES6), SQL, Git, Github e Heroku. Você pode estar conferindo esses projetos nas sessões seguintes.</p><p>Aprender a programar é fascinante. Do front-end ao back-end, a possibilidade de transformar problemas da vida real em código e solucioná-los, tornando a vida muito mais fácil, me fascina. Sempre disposta a aprender coisas novas, amo me desafiar e acredito que não há nada que não se possa aprender.</p>',
    toolsTitle: 'Ferramentas',
    projectsTitle: 'Projetos',
    leafsText:
      'Preserve o meio ambiente! Faça parte dessa mudança e ainda ganhe cash back.',
    petbnbText:
      'Encontre um lugar seguro e confortável para seu animalzinho enquanto estiver fora.',
    footerText:
      'Estou disponível e pronta para fazer parte do seu time.<br/> Estou apenas a alguns cliques de distância, certeza que vai deixar passar?',
  },
};

const portuguese = document.querySelector('.reload-pt');
const english = document.querySelector('.reload-en');

portuguese.addEventListener('click', function () {
  if (
    window.location.hash === '#en' ||
    window.location.hash === '#pt' ||
    window.location.hash === ''
  ) {
    document.querySelector('.header-h4').innerHTML =
      language.portuguese.subtitle;
    document.querySelector('.scroll-btn-a').textContent =
      language.portuguese.scrollDown;
    document.querySelector('.section-text h2').textContent =
      language.portuguese.aboutTitle;
    document.querySelector('.section-text .about-text').innerHTML =
      language.portuguese.aboutText;
    document.querySelector('.section-2-title h2').textContent =
      language.portuguese.toolsTitle;
    document.querySelector('.cards-title h2').textContent =
      language.portuguese.projectsTitle;
    document.querySelector('.petbnb-text').textContent =
      language.portuguese.petbnbText;
    document.querySelector('.leafs-text').textContent =
      language.portuguese.leafsText;
    document.querySelector('.div--footer p').innerHTML =
      language.portuguese.footerText;
    this.classList.remove('opacity-pt');
    english.classList.add('opacity-en');
  }
});

english.addEventListener('click', function (e) {
  if (
    window.location.hash === '#pt' ||
    window.location.hash === '#en' ||
    window.location.hash === ''
  ) {
    document.querySelector('.header-h4').innerHTML = language.english.subtitle;
    document.querySelector('.scroll-btn-a').textContent =
      language.english.scrollDown;
    document.querySelector('.section-text h2').textContent =
      language.english.aboutTitle;
    document.querySelector('.section-text .about-text').innerHTML =
      language.english.aboutText;
    document.querySelector('.section-2-title h2').textContent =
      language.english.toolsTitle;
    document.querySelector('.cards-title h2').textContent =
      language.english.projectsTitle;
    document.querySelector('.petbnb-text').textContent =
      language.english.petbnbText;
    document.querySelector('.leafs-text').textContent =
      language.english.leafsText;
    document.querySelector('.div--footer p').innerHTML =
      language.english.footerText;
    this.classList.remove('opacity-en');
    portuguese.classList.add('opacity-pt');
  }
});

// 'use strict';
// import 'matchmedia-polyfill';
// import 'matchmedia-polyfill/matchMedia.addListener';
const mainTitle = document.querySelector('.main-title');
const mainTitleLast = document.querySelector('.last-name');
// console.log((mainTitleSpan.innerHTML = 2));
const scrollBtn = document.querySelector('.scroll-btn-a');
const section1 = document.querySelector('.section-1');
const svgGirlProgrammer = document.querySelector('svg');
const photo = document.querySelector('profile-photo');
let loader = document.querySelector('.loader');
const canvas = document.getElementById('c');

const cntxt = canvas.getContext('2d');

// window.addEventListener('resize', function () {
//   // this.matchMedia.reload();
//   this.location.reload();
//   // or this.matchMedia.reload() to stop reloading when scrolling
// });
canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);
// canvas.width = document.body.clientWidth;
// canvas.height = window.screen.height;
// canvas.width = window.screen.width;
// canvas.height = window.innerHeight;

// canvas.width = window.innerWidth;
// if (matchMedia('only screen and (max-width: 480px)').matches) {
//   canvas.height = window.screen.height;
//   canvas.width = window.screen.width;
//   // smartphone/iphone... maybe run some small-screen related dom scripting?
// }

let binaryNum = '01';

binaryNum = binaryNum.split('');
// console.log(binaryNum);

const fontSize = 18;
const columns = Math.round(canvas.width / fontSize);
// console.log(columns);

const drops = [];

Array(columns)
  .fill(0)
  .forEach(function (num, i) {
    drops[i] = 1;
  });

// console.log(columns);

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

// SCROLL DOWN BUTTON

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

// console.log(genRandom(10, 20));

// LOADER --------------------------------

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

// frameLoop();
// AOS.init();

// you = Person.new("you")
// wanna_do_something? ? you.find(way) : you.find(excuse)

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
    subtitle: 'Full-stack developer.',
    scrollDown: 'Scroll down',
    aboutTitle: 'About',
    aboutText:
      "<p> I am a full-stack developer recently graduated from Le Wagon (Best coding bootcamp according to switch up). There I had the opportunity to gain knowledge in nice, important tools and also designed, implemented and shipped to production a clone of airbnb and a rails prototype. Both tools and projects you can check it out down below on the following sections. </p><p>Learn to code is fascinating. From the front-end up to the back-end and its beauty, the possibility of turning real-life problems into code finding a solution that makes your life easier, it fascinates me. As a lifelong learner while I keep improving my knowledge on the tools i've learned, i am learning and always open to learn new ones.</p>",
    toolsTitle: 'Tools',
    projectsTitle: 'Projects',
    footerText:
      'I am available and ready to be part of your team. I’m just a click away, are you sure you gonna miss it?',
  },

  portuguese: {
    subtitle: 'Desenvolvedora Full-stack.',
    scrollDown: 'Deslize',
    aboutTitle: 'Sobre',
    aboutText:
      '<p> Sou uma desenvolvedora full-stack recentement graduada pela Le Wagon (Considerado melhor bootcamp de programação de acordo com switch up). No bootcamp tive a oportunidade de ganhar bastante conhecimento em importantes ferramentas de programação, além de projetar, implementar e enviar para produção um clone do airbnb e um protótipo do rails, os quais você pode dar uma conferida nas sessões seguintes.</p><p>Aprender a programar é fascinante. Do front-end ao back-end, a possibilidade de transformar problemas da vida real em código e solucioná-los, tornando a vida do usuário muito mais fácil, me fascina. Como uma eterna aprendiz, enquanto busco sempre melhorar meu conhecimento nas ferramentas que aprendi, eu estou aprendendo e aberta a aprender novas tecnologias.</p>',
    toolsTitle: 'Ferramentas',
    projectsTitle: 'Projetos',
    footerText:
      'Estou disponível e pronta para fazer parte do seu time. Estou apenas a alguns cliques de distäncia, coisa pouca, tem certeza que vai deixar passar?',
  },
};
const portuguese = document.querySelector('.reload-pt');
const english = document.querySelector('.reload-en');
const reload = document.querySelectorAll('[data-reload]');

portuguese.addEventListener('click', function () {
  if (
    window.location.hash === '#en' ||
    window.location.hash === '#pt' ||
    window.location.has === ''
  ) {
    // console.log(window.location.hash);
    document.querySelector('.header-h4').textContent =
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
    document.querySelector('.div--footer p').textContent =
      language.portuguese.footerText;

    this.classList.remove('opacity-pt');
    english.classList.add('opacity-en');
  }
});

english.addEventListener('click', function (e) {
  // window.location.reload(true);
  if (
    window.location.hash === '#pt' ||
    window.location.hash === '#en' ||
    window.location.has === ''
  ) {
    document.querySelector('.header-h4').textContent =
      language.english.subtitle;
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
    document.querySelector('.div--footer p').textContent =
      language.english.footerText;
    this.classList.remove('opacity-en');
    portuguese.classList.add('opacity-pt');
  }
});

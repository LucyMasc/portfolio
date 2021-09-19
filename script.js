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

window.addEventListener('resize', function () {
  // this.matchMedia.reload();
  this.location.reload();
  // or this.matchMedia.reload() to stop reloading when scrolling
});
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
console.log(binaryNum);

const fontSize = 18;
const columns = Math.round(canvas.width / fontSize);
console.log(columns);

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

console.log(genRandom(10, 20));

// LOADER --------------------------------

// window.addEventListener('load', function () {
//   loader.parentElement.removeChild(loader);
//   this.document.body.removeAttribute('hidden');
// });

//////////

document.onreadystatechange = function () {
  const state = document.readyState;
  if (state === 'interactive') {
    document.querySelector('.page').style.visibility = 'hidden';
  } else if (state === 'complete') {
    setTimeout(() => {
      document.querySelector('.page').style.visibility = 'visible';
      removeLoader = loader.parentElement.removeChild(loader);
    }, 1100);
  }
};

// frameLoop();
// AOS.init();

// you = Person.new("you")
// wanna_do_something? ? you.find(way) : you.find(excuse)

// ------------------------- TYPE EFFECT------------------------------
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
}, 1100);

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
}, 1800);

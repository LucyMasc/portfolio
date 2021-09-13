const scrollBtn = document.querySelector('.scroll-btn-a');
const section1 = document.querySelector('.section-1');
const svgCircle = document.querySelector('svg');
const photo = document.querySelector('profile-photo');

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

AOS.init();

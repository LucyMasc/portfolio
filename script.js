const scrollBtn = document.querySelector('.scroll-btn-a');
const section1 = document.querySelector('.section-1');

scrollBtn.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

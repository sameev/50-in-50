const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const progress = document.querySelector('#progress');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextBtn.addEventListener('click', () => {
  if (currentActive === 1) prevBtn.disabled = false;
  if (currentActive < circles.length) currentActive++;
  if (currentActive === circles.length) nextBtn.disabled = true;

  update();
});

prevBtn.addEventListener('click', () => {
  if (currentActive === circles.length) nextBtn.disabled = false;
  if (currentActive > 1) currentActive--;
  if (currentActive === 1) prevBtn.disabled = true;

  update();
});

const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
};

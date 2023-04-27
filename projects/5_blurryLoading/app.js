const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

let loadProgress = 0;
let interval = setInterval(blurring, 30);

function blurring() {
  loadProgress++;

  if (loadProgress > 99) {
    clearInterval(interval);
  }

  loadText.innerHTML = `${loadProgress}%`;
  loadText.style.opacity = scale(loadProgress, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(loadProgress, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

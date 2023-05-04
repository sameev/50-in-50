const container = document.querySelector('.container');
const leftSplit = document.querySelector('.left');
const rightSplit = document.querySelector('.right');

container.classList.remove('preload');

const leftEnter = () => {
  container.classList.add('hover-left');
};

const leftLeave = () => {
  container.classList.remove('hover-left');
};

const rightEnter = () => {
  container.classList.add('hover-right');
};

const rightLeave = () => {
  container.classList.remove('hover-right');
};

leftSplit.addEventListener('mouseenter', leftEnter);
leftSplit.addEventListener('mouseleave', leftLeave);

rightSplit.addEventListener('mouseenter', rightEnter);
rightSplit.addEventListener('mouseleave', rightLeave);

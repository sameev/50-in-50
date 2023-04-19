const panels = document.querySelectorAll('.panel');
let currentActive = document.querySelector('.active');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    currentActive.classList.remove('active');
    panel.classList.add('active');
    currentActive = panel;
  });
});

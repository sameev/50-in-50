const searchBtn = document.querySelector('.btn');
const searchContainer = document.querySelector('.search');
const searchInput = document.querySelector('.input');

searchBtn.addEventListener('click', () => {
  // searchContainer.classList.contains('active')
  //   ? searchContainer.classList.remove('active')
  //   : searchContainer.classList.add('active');

  searchContainer.classList.toggle('active');
  searchInput.focus();
});

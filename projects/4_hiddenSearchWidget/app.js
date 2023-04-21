const searchBtn = document.querySelector('.btn');
const searchContainer = document.querySelector('.search');

searchBtn.addEventListener('click', () => {
  searchContainer.classList.contains('active')
    ? searchContainer.classList.remove('active')
    : searchContainer.classList.add('active');
});

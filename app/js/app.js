const navToggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');

// toggle Navigation
navToggle.addEventListener('click', function () {
  links.classList.toggle('nav__show');
});

// Modal
function onClick(element) {
  document.getElementById('img01').src = element.src;
  document.getElementById('modal01').style.display = 'block';
}

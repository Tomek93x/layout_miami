document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    document.body.classList.toggle('body--locked', nav.classList.contains('open'));
  });
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      document.body.classList.remove('body--locked');
    });
  });
});

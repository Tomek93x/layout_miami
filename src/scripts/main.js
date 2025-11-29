'use strict';

function handleMenuState() {
  // Sprawdzamy hash w URL
  if (window.location.hash === '#menu') {
    // Używamy nazwy klasy zgodnej z CSS
    document.body.classList.add('page__body--no-scroll');

    const menu = document.getElementById('menu');
    if (menu) {
      // Resetujemy style inline, jeśli CSS obsługuje animację (zalecane)
      // LUB zostawiamy tak jak masz, jeśli CSS tego nie robi
      menu.style.opacity = '1';
      menu.style.visibility = 'visible';
      menu.style.transform = 'translateX(0)';
    }
  } else {
    document.body.classList.remove('page__body--no-scroll');

    const menu = document.getElementById('menu');
    if (menu) {
      menu.style.opacity = '0';
      menu.style.visibility = 'hidden';
      menu.style.transform = 'translateX(100%)';
    }
  }
}

window.addEventListener('hashchange', handleMenuState);

document.addEventListener('DOMContentLoaded', function() {
  handleMenuState();

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Formularz wysłany!');
    });
  }
});

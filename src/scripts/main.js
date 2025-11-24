'use strict';

window.addEventListener('hashchange', () => {
  // Gdy menu jest otwarte (hash == #menu), blokuj scroll strony
  if (window.location.hash === '#menu') {
    document.body.classList.add('locked-scroll');
  } else {
    document.body.classList.remove('locked-scroll');
  }
});

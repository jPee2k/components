const $nav = document.querySelector('.navigation');
const $button = document.querySelector('.navigation__toggle');

const switchAttributes = () => {
  if ($nav.classList.contains('navigation--shown')) {
    // open menu
    $button.setAttribute('aria-expanded', 'true');
    $button.setAttribute('aria-label', 'close menu');
  } else {
    // close menu
    $button.setAttribute('aria-expanded', 'false');
    $button.setAttribute('aria-label', 'open menu');
  }
};

const closeMenu = () => {
  $nav.classList.remove('navigation--shown');
  switchAttributes();
};

document.addEventListener('click', (evt) => {
  if (evt.target.closest('.navigation__toggle')) {
    $nav.classList.toggle('navigation--shown');
    switchAttributes();
  }

  if (!evt.target.closest('.navigation')) {
    closeMenu();
  }
});

closeMenu();

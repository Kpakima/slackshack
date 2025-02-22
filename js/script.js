const body = document.querySelector('body');
const headerNavEl = document.querySelector('.header__nav');
const mobileBtnEl = document.querySelector('.header__mobile-btn');

const openMobileMenu = function () {
  headerNavEl.classList.toggle('open-mobile-menu');
  mobileBtnEl.classList.toggle('switch-icon');
  body.classList.toggle('body-overflow');
};

mobileBtnEl.addEventListener('click', openMobileMenu);

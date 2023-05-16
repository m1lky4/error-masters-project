// modal menu open+add hide for X and burger

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    burgerBtn: document.querySelector('.burger'),
    mobileMenuCloseBtn: document.querySelector('.mobile-menu-close-btn'),
  };

  refs.openMenuBtn.addEventListener('click', openModal);
  refs.closeMenuBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.menu.classList.add('is-open');
    refs.burgerBtn.classList.add('hidden');
    refs.mobileMenuCloseBtn.classList.remove('hidden');
  }
  function closeModal() {
    refs.menu.classList.remove('is-open');
    refs.burgerBtn.classList.remove('hidden');
    refs.mobileMenuCloseBtn.classList.add('hidden');
  }
})();

// add class CURRENT for link in nav
window.addEventListener(
  'load',
  currenPage(window.location.pathname.split('/').pop())
);

function currenPage(location) {
  const homeLink = document.querySelector('.mobile-link-home');
  const shoppingLink = document.querySelector('.mobile-link-shoping');
  if (location === 'index.html') {
    homeLink.classList.add('current');
    return;
  } else if (location === 'shopping-list.html') {
    homeLink.classList.remove('current');
    shoppingLink.classList.add('current');
  }
}

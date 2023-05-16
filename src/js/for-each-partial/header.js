const themeSwitcher = document.getElementById('theme-switch');

themeSwitcher.checked = true;
setThemeOnLoad();
themeSwitcher.addEventListener('change', clickHandler);

function clickHandler() {
  const currentClass = document.body.className;
  console.log(currentClass);
  if (currentClass === 'light') {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    localStorage.setItem('theme', 'light');
  }
}

function setThemeOnLoad() {
  const savedTheme = localStorage.getItem('theme');

  document.body.className = savedTheme;
  if (document.body.classList.contains('dark')) {
    themeSwitcher.checked = false;
  }
}
///////////////////////////////////////////////////////////////////////////////////////
window.addEventListener(
  'load',
  currenPage(window.location.pathname.split('/').pop())
);

function currenPage(location) {
  const homeLink = document.querySelector('.link-home');
  const shoppingLink = document.querySelector('.link-shoping');
  if (location === 'index.html') {
    homeLink.classList.add('current');
    return;
  } else if (location === 'shopping-list.html') {
    homeLink.classList.remove('current');
    shoppingLink.classList.add('current');
  }
}

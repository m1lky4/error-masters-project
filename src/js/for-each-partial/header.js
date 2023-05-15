const themeSwitcher = document.getElementById('theme-switch');

// light theme is default, that's why themeSwitcher is unchecked
themeSwitcher.checked = true;
setThemeOnLoad();
themeSwitcher.addEventListener('change', clickHandler);

function clickHandler() {
  // if you change theme to dark, add 'dark' class and remove previus, add this change to local storage
  // if you select light theme do the same work but add 'light' class
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
  // this helpful function should call every time when you update page, to check what theme was seted to local storage
  // you should get data from LS and set saved theme to body
  // dont forget about themeSwitcher, if current theme is dark, it should be checked
  const savedTheme = localStorage.getItem('theme');
  console.log(savedTheme);
  document.body.className = savedTheme;
  if (document.body.classList.contains('dark')) {
    themeSwitcher.checked = false;
  }
}

window.addEventListener('load', currenPage(window.location.pathname));

function currenPage(location) {
  const homeLink = document.querySelector('.link-home');
  const shoppingLink = document.querySelector('.link-shoping');
  if (location === '/index.html') {
    homeLink.classList.add('current');
    return;
  } else if (location === '/shopping-list.html') {
    shoppingLink.classList.add('current');
  }
}

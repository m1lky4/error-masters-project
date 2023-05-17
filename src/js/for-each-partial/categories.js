import { BookAPI } from '../api/book.service.js';
import { createBookCardMarkup } from '../for-each-partial/create-markup-bookcard.js';
import { formatCategoryTitle } from '../helpers/format_category_title.js';
import { renderTopBookList } from '../for-each-partial/main.js';
import { createImmediateSkeleton } from '../for-each-partial/skeleton.js';

const bookAPI = new BookAPI();
const all = document.querySelector('.all');
const categoryList = document.querySelector('.list-categories');
const mainContent = document.querySelector('.category-markup-list');
const titleOfCategory = document.querySelector('.title-category-markup');
const categoryMarkupList = document.querySelector('.category-markup-list');





categoryMarkupList.addEventListener('click', seeMoreBtnList);

async function seeMoreBtnList(e) {
    if (e.target.nodeName !== 'BUTTON') return;
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  mainContent.innerHTML = createImmediateSkeleton();
  const liElements = e.target.closest('li');
  const targetParagraph = liElements.querySelector('.category-markup-subtitle').textContent.trim();
  titleOfCategory.innerHTML = formatCategoryTitle(targetParagraph);
  const response = await bookAPI.getBooksWithSelectedCategory(targetParagraph);

  if (!response) return;

  mainContent.innerHTML = createBookCardMarkup(response);
}

async function renderCategoryList() {
  const response = await bookAPI.getBooksCategoryList();

  if (!response) return console.log('Error');

  categoryList.insertAdjacentHTML(
    'beforeend',
    createCategoryItemMarkup(response)
  );
}

async function renderBookCardsByCategory(e) {
  mainContent.innerHTML = createImmediateSkeleton();
  if (e.target.nodeName !== 'LI') return;
 if (e.target.classList.contains('all')) {
  const data = await bookAPI.getTopBooksList();
   titleOfCategory.innerHTML = formatCategoryTitle('All categories');
     if (categoryList.querySelector('.active')) {
    categoryList.querySelector('.active').classList.remove('active');
  }
  e.target.classList.add('active');
  if (window.innerWidth < 767) {
    renderTopBookList(data, 1);
  } else if (window.innerWidth >= 767 && window.innerWidth < 1440) {
    renderTopBookList(data, 3);
  } else if (window.innerWidth >= 1440) {
    renderTopBookList(data, 5);
   }
   return;
  }
  const selectedCategory = e.target.textContent;

  const response = await bookAPI.getBooksWithSelectedCategory(selectedCategory);
  if (!response) return console.log('Error');

  mainContent.innerHTML = createBookCardMarkup(response);

  titleOfCategory.innerHTML = formatCategoryTitle(selectedCategory);
  if (categoryList.querySelector('.active')) {
    categoryList.querySelector('.active').classList.remove('active');
  }
  e.target.classList.add('active');
}

function createCategoryItemMarkup(categories) {
  return categories
    .map(category => {
      return `<li class="categories-item">${category.list_name}</li>`;
    })
    .join('');
}

renderCategoryList();

categoryList.addEventListener('click', renderBookCardsByCategory);

all.addEventListener('click', async e => {
    
  mainContent.innerHTML = createImmediateSkeleton();

  const data = await bookAPI.getTopBooksList();

  if (window.innerWidth < 767) {
    renderTopBookList(data, 1);
  } else if (window.innerWidth >= 767 && window.innerWidth <= 1440) {
    renderTopBookList(data, 3);
  } else if (window.innerWidth >= 1440) {
    renderTopBookList(data, 5);
  }
});


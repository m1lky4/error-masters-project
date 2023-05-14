import { BookAPI } from '../api/book.service.js';
import { createBookCardMarkup } from '../for-each-partial/create-markup-bookcard.js';
import { formatCategoryTitle } from '../helpers/format_category_title.js';
// import { createTopBookList } from '../for-each-partial/book_list_markup.js';
const bookAPI = new BookAPI();
const categoryList = document.querySelector('.list-categories');
const mainContent = document.querySelector('.category-markup-list');
const titleOfCategory = document.querySelector('.title-category-markup');
// const titleOfAllCategories = document.querySelector('.title-of-categories');

// async function renderTopBooks(e) {
//   if (e.target.nodeName !== 'LI') return;
//   const selectedCategory = e.target.textContent;

//   const response = await bookAPI.getTopBooksList(selectedCategory);
//   if (!response) return console.log('Error');

//   mainContent.innerHTML = createTopBookList(response);
//   titleOfAllCategories.innerHTML = formatCategoryTitle(selectedCategory);
//   if (titleOfAllCategories.querySelector('.active')) {
//     titleOfAllCategories.querySelector('.active').classList.remove('active');
//   }
//   e.target.classList.add('active');
// }
// renderTopBooks();

async function renderCategoryList() {
  const response = await bookAPI.getBooksCategoryList();

  if (!response) return console.log('Error');

  categoryList.insertAdjacentHTML(
    'beforeend',
    createCategoryItemMarkup(response)
  );
}

async function renderBookCardsByCategory(e) {
  if (e.target.nodeName !== 'LI') return;

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

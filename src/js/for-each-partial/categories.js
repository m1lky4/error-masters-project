import { BookAPI } from '../api/book.service.js';
import { createBookCardMarkup } from '../for-each-partial/create-markup-bookcard.js';
import { formatCategoryTitle } from '../helpers/format_category_title.js';
import { createTopBookList } from '../for-each-partial/book_list_markup.js';
import { renderTopBookList } from '../for-each-partial/main.js';
import {createImmediateSkeleton} from '../for-each-partial/skeleton.js'

const bookAPI = new BookAPI();
const categoryList = document.querySelector('.list-categories');
const mainContent = document.querySelector('.category-markup-list');
const titleOfCategory = document.querySelector('.title-category-markup');
const btnLoadMore = document.querySelector('.category-markup-button');
const categoryMarkupList = document.querySelector('.category-markup-list');
const titleOfCategories = document.querySelector('.title-of-categories');
const  titleCategoryMarkup = document.querySelector('.title-category-markup');

categoryMarkupList.addEventListener('click', seeMoreBtnList)

async function seeMoreBtnList(e) {
    mainContent.innerHTML = createImmediateSkeleton();

    if (e.target.nodeName !== 'BUTTON') return;
    const liElements = e.target.closest("li");
    const targetParagraph = liElements.querySelector('.category-markup-subtitle')
    console.log(targetParagraph);
    targetParagraph.style.textTransform = 'none'
    const textTransformedLi = targetParagraph.innerText.trim()
    const response = await bookAPI.getBooksWithSelectedCategory(textTransformedLi);
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

titleOfCategories.addEventListener('click', async (e) => {
    
    mainContent.innerHTML = createImmediateSkeleton();

    data = await bookAPI.getTopBooksList();

    if (window.innerWidth < 767) {
    renderTopBookList(data, 1);
  } else if (window.innerWidth >= 767 && window.innerWidth <= 1199) {
    renderTopBookList(data, 3);
  } else if (window.innerWidth >= 1200) {
    renderTopBookList(data, 5);
    }
    const selectedTopic = e.target.textContent;
  
     e.target.classList.add('active');

console.log(selectedTopic);
//   titleOfCategories.innerHTML = formatCategoryTitle(selectedTopic);
//   if (titleOfCategories.querySelector('.active')) {
//     titleOfCategories.querySelector('.active').classList.remove('active');
//   }
//     e.target.classList.add('active');

})

  

import debounce from 'lodash.debounce';
import { createBookCardMarkup } from './create-markup-bookcard';
import { BookAPI } from '../api/book.service';
const bookAPI = new BookAPI();
export function createTopBookList(param /*limit*/) {
  const bookList = param
    .map(({ list_name, books }) => {
      return `
        <li class="category-markup-item">
            <p class="category-markup-subtitle">
              ${list_name}
            </p>
            <ul class="books-list-markup">
            ${createBookCardMarkup(books /*.slice(0, limit)*/)}
            </ul>
            <button class="category-markup-button" type="submit">
              SEE MORE
            </button>
          </li>
        `;
    })
    .join('');

  return bookList;
}

async function renderTopBookList(limit) {
  const response = await bookAPI.getTopBooksList();
  if (!response) return console.log('Error');
  const markup = createTopBookList(response, limit);
  const categoryMarkupList = document.querySelector('.category-markup-list');
  categoryMarkupList.innerHTML = markup;
}
renderTopBookList();

// function formatResponse(e) {
//   if (e.target.innerWidth < 767) {
//     renderTopBookList(1);
//   } else if (e.target.innerWidth >= 767 && e.target.innerWidth <= 1199) {
//     renderTopBookList(3);
//   } else if (e.target.innerWidth >= 1200) {
//     renderTopBookList(5);
//   }
// }

// window.addEventListener('resize', debounce(formatResponse, 300));

// window.addEventListener('load', e => {
//   console.log(e);
//   if (window.innerWidth < 767) {
//     renderTopBookList(1);
//   } else if (window.innerWidth >= 767 && window.innerWidth <= 1199) {
//     renderTopBookList(3);
//   } else if (window.innerWidth >= 1200) {
//     renderTopBookList(5);
//   }
// });

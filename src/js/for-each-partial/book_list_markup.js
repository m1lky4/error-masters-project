import { createBookCardMarkup } from './create-markup-bookcard';

export function createTopBookList(param, limit) {
  const bookList = param
    .map(({ list_name, books }) => {
      return `
        <li class="category-markup-item">
            <p class="category-markup-subtitle">
              ${list_name}
            </p>
            <ul class="books-list-markup">
            ${createBookCardMarkup(books.slice(0, limit))}
            </ul>
            <button class="category-markup-button" type="submit">
              See more
            </button>
          </li>
        `;
    })
    .join('');

  return bookList;
}

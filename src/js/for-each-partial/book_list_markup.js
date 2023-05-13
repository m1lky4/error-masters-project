export function renderBookList(param) {
  const bookList = param
    .map(() => {
      return `
        <li class="category-markup-item">
            <p class="category-markup-subtitle">
              Combined Print and E-Book Fiction
            </p>
            <ul class="books-list-markup">
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

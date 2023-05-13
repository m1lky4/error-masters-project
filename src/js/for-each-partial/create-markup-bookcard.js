export function markupPictureBookCard(param) {
  const markup = param
    .map(data => {
      return `<li class="book-item">
        <img
          class="book-images"
          src="${src}"
          alt="${desc}"
        />
        <h3 class="book-full-name">${nameBook}</h3>
        <p class="book-author">${author}</p>
      </li>`;
    })
    .join('');
  return markup;
}

export function createBookCardMarkup(param) {
  const markup = param
    .map(data => {
      return `<li class="book-item" data-id='${data._id}'>
        <img
          class="book-images"
          src="${data.book_image}"
          alt="${data.title}"
        />
        <h3 class="book-full-name">${data.title}</h3>
        <p class="book-author">${data.author}</p>
      </li>`;
    })
    .join('');
  return markup;
}

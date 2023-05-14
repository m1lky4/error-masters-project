export function createBookCardMarkup(param) {
  const markup = param
    .map(data => {
      return `<li class="book-item" date-id='${data._id}'>
      <div class="scale-images mask mask-one mask-one-frame">
        <img
          class="book-images mask-img"
          src="${data.book_image}"
          alt="${data.title}"
        />
        <p class="quick-view">quick view</p>
        </div>
        <h3 class="book-full-name">${data.title}</h3>
        <p class="book-author">${data.author}</p>
      </li>`;
    })
    .join('');
  return markup;
}

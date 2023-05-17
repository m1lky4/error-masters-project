import { BookAPI } from '../api/book.service';
const bookApi = new BookAPI();

let selectedBooks = {};

const shoppingListArray =
  JSON.parse(localStorage.getItem('shoppingList')) || [];
console.log(shoppingListArray);
const shoppingList = document.querySelector('.shopping-list');

function addToFavorites(book) {
  favoriteBooks.push(book);
  localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
  renderFavorites();
}

function renderFavorites() {
  if (!shoppingList) return;

  shoppingList.innerHTML = '';

  if (selectedBooks.length === 0) {
    shoppingList.innerHTML = `
    <div class="some-book-centr">
      <p class="some-book">
        This page is empty, add some books<br />and proceed to order.
      </p>
      <div class="stack-of-books">
        <img
            src="https://lh3.googleusercontent.com/pw/AJFCJaXF-_bnsOB3uXSYccYIy6OIbasPGhK58TIG0KTbIRDMPOMP1TtEGd2v8e9EsOOUcZtpOjn5ToZTgfcrfJbF-r0KEa0DReOlQZhvZF8xlygQIOy7rBEg9YFDmqIH1RQ9sjRUPPvATZYh0PGnOM4RpkEm=w323-h241-s-no?authuser=0"
            alt="stack of books"
            width="265"
            height="198"
          />
      </div>
     </div>
      `;
  } else {
    shoppingList.innerHTML = booksOnPage
      .map(book => {
        return `
          <li class="shopping-list-book">
            <img class="shopping-book-img" src="${book.book_image}" alt="${book.title}" width="100" height="142" />
            <div class="shopping-book-info">
              <div class="shopping-book-title">
                <h3>${book.title}</h3>
                <p>${book.category}</p>
              </div>
              <a href="#" class="remove_book" data-id="${book._id}">
              <svg class="remove_book" data-id="${book._id}" width="33" height="33">
                <path fill="#4f2ee8" style="fill: var(--color1, #4f2ee8)" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
                <path fill="none" stroke="#fff" style="stroke: var(--color2, #fff)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="1.1429" d="M13.714 9.143h4.571M9.143 11.429h13.714M21.333 11.429l-0.534 8.015c-0.080 1.202-0.12 1.804-0.38 2.26-0.229 0.401-0.574 0.724-0.989 0.925-0.472 0.229-1.075 0.229-2.28 0.229h-2.3c-1.205 0-1.808 0-2.28-0.229-0.416-0.201-0.761-0.524-0.989-0.925-0.26-0.456-0.3-1.057-0.38-2.26l-0.534-8.015M14.476 14.857v3.809M17.524 14.857v3.809"></path>
            </svg>
              </a>
            </div>
            <div class="shopping-book-box">
              <p class="shopping-book-description">${book.description}</p>
              <div class="shopping-book-author">
                <p>${book.author}</p>
                <ul class="shopping-book-retailers">
                  <li class="books-retailers-icon">
                    <a href="#">
                      <svg class="amazon_logo-icon" width="32" height="14">
                        <use href="./images/blocks.svg#icon-Amazon_logo"></use>
                      </svg>
                    </a>
                  </li>
                  <li class="books-retailers-icon">
                    <a href="#">
                      <svg class="icon-book-opened" width="20" height="20">
                        <use href="./images/blocks.svg#icon-book-opened"></use>
                      </svg>
                    </a>
                  </li>
                  <li class="books-retailers-icon">
                    <a href="#">
                      <svg class="icon-books-cl" width="20" height="20">
                        <use href="./images/blocks.svg#icon-books-cl"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        `;
      })
      .join('');
    document.querySelectorAll('.remove_book').forEach(b => {
      b.addEventListener('click', removeBookFromFavorite);
    });
  }
}

(async () => {
  const books = await bookApi.getTopBooksList();
  const selectedId = shoppingListArray.map(b => b.id);
  selectedBooks = books.reduce((acc, b) => {
    b.books.forEach(book => {
      if (selectedId.includes(book._id)) {
        acc.push(book);
      }
    });
    return acc;
  }, []);
  console.log(selectedBooks);

  const options = {
    totalItems: selectedBooks.length,
    itemsPerPage: booksPerPage,
    visiblePages: 10,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  if (selectedBooks.length === 0) {
    document.querySelector('.tui-pagination').style.display = 'none';
  } else {
    document.querySelector('.tui-pagination').style.display = 'block';
  }

  const container = document.getElementById('pagination');
  paginator = new Pagination(container, options);
  paginator.getCurrentPage();
  updateBooksOnPage(paginator.getCurrentPage());
  paginator.on('afterMove', ({ page }) => updateBooksOnPage(page));

  renderFavorites();
})();

import { BookAPI } from '../api/book.service';
const bookApi = new BookAPI();

let selectedBooks = {};

const shoppingListArray =
  JSON.parse(localStorage.getItem('shoppingList')) || [];
console.log(shoppingListArray);
const shoppingList = document.querySelector('.shopping-list');
const container = document.getElementById('pagination');
let options;
let paginator;

let booksPerPage = 3;

let booksOnPage = [];

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
              
<span class="remove_book" data-id="${book._id}">
<svg class="trash-svg" width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
<path d="M7.25 1.75H12.75M1.75 4.5H18.25M16.4167 4.5L15.7738 14.1427C15.6774 15.5894 15.6291 16.3128 15.3167 16.8613C15.0416 17.3441 14.6266 17.7323 14.1265 17.9747C13.5585 18.25 12.8335 18.25 11.3836 18.25H8.61643C7.1665 18.25 6.44153 18.25 5.87348 17.9747C5.37336 17.7323 4.95841 17.3441 4.68332 16.8613C4.37085 16.3128 4.32263 15.5894 4.22618 14.1427L3.58333 4.5M8.16667 8.625V13.2083M11.8333 8.625V13.2083" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
              
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

function removeBookFromFavorite(e) {
  const id = e.target.getAttribute('data-id');
  console.log(id);
  // const updatedBooks = shoppingListArray.filter(b => b.id !== id);
  // console.log(updatedBooks);
  const updatedBooks = shoppingListArray.map(book => {
    if (book.id === id) {
      shoppingListArray.splice(id, 1);
      localStorage.setItem('shoppingList', JSON.stringify(shoppingListArray));
    }
    console.log(shoppingListArray);
    options.totalItems = JSON.parse(
      localStorage.getItem('shoppingList')
    ).length;
    paginator = new Pagination(container, options);
    if (options.totalItems <= 3) {
      document.querySelector('.tui-pagination').style.display = 'none';
    } else {
      document.querySelector('.tui-pagination').style.display = 'block';
    }
  });
  // localStorage.setItem('shoppingList', JSON.stringify(updatedBooks));
  selectedBooks = selectedBooks.filter(b => b._id !== id);
  updateBooksOnPage(paginator.getCurrentPage());
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

  options = {
    totalItems: selectedBooks.length,
    itemsPerPage: booksPerPage,
    visiblePages: 2,
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

  if (selectedBooks.length <= 3) {
    document.querySelector('.tui-pagination').style.display = 'none';
  } else {
    document.querySelector('.tui-pagination').style.display = 'block';
  }
  paginator = new Pagination(container, options);
  paginator.getCurrentPage();
  updateBooksOnPage(paginator.getCurrentPage());
  paginator.on('afterMove', ({ page }) => updateBooksOnPage(page));

  renderFavorites();
})();

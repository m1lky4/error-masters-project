import { BookAPI } from '../api/book.service';
import { createSkeletonShopList } from '/src/js/for-each-partial/shopping-skeleton';
const bookApi = new BookAPI();
const Pagination = require('tui-pagination');

let selectedBooks = {};

const shoppingListArray =
  JSON.parse(localStorage.getItem('shoppingList')) || [];
console.log(shoppingListArray);
const shoppingList = document.querySelector('.shopping-list');

let paginator;

let booksPerPage = 4;

let booksOnPage = [];

function addToFavorites(book) {
  favoriteBooks.push(book);
  localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
  renderFavorites();
}
shoppingList.innerHTML = createSkeletonShopList();

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
                <p>${book.list_name}</p>
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
                       <svg id="icon-Amazon_logo" class="amazon_logo-icon" width="32" height="14" viewBox="0 0 106 32">
                        <path d="M65.759 24.999c-6.154 4.536-15.073 6.956-22.753 6.956-10.768 0-20.462-3.983-27.796-10.607-0.576-0.521-0.060-1.231 0.631-0.825 7.915 4.605 17.701 7.375 27.809 7.375 6.818 0 14.317-1.411 21.213-4.338 1.042-0.443 1.913 0.682 0.894 1.438z"></path>
                        <path d="M68.318 22.072c-0.784-1.005-5.2-0.475-7.182-0.24-0.604 0.074-0.696-0.452-0.152-0.83 3.517-2.475 9.288-1.761 9.961-0.931 0.673 0.834-0.175 6.619-3.48 9.38-0.507 0.424-0.991 0.198-0.765-0.364 0.742-1.853 2.406-6.006 1.618-7.016z"></path>
                        <path d="M61.274 3.528v-2.406c0-0.364 0.277-0.608 0.608-0.608h10.773c0.346 0 0.622 0.249 0.622 0.608v2.060c-0.005 0.346-0.295 0.797-0.811 1.512l-5.582 7.97c2.074-0.051 4.264 0.258 6.145 1.318 0.424 0.24 0.539 0.59 0.572 0.936v2.568c0 0.35-0.387 0.761-0.793 0.549-3.314-1.738-7.716-1.927-11.381 0.018-0.373 0.203-0.765-0.203-0.765-0.553v-2.438c0-0.392 0.005-1.060 0.396-1.655l6.467-9.274h-5.628c-0.346 0-0.622-0.244-0.622-0.604z"></path>
                        <path d="M21.978 18.541h-3.277c-0.313-0.023-0.562-0.258-0.585-0.558v-16.82c0-0.337 0.281-0.604 0.631-0.604h3.056c0.318 0.014 0.572 0.258 0.595 0.562v2.199h0.060c0.797-2.125 2.296-3.116 4.315-3.116 2.051 0 3.333 0.991 4.255 3.116 0.793-2.125 2.595-3.116 4.527-3.116 1.374 0 2.876 0.567 3.794 1.839 1.037 1.415 0.825 3.471 0.825 5.273l-0.005 10.616c0 0.337-0.281 0.608-0.632 0.608h-3.273c-0.327-0.023-0.59-0.286-0.59-0.608v-8.915c0-0.71 0.065-2.48-0.092-3.153-0.244-1.129-0.977-1.447-1.927-1.447-0.793 0-1.623 0.53-1.959 1.378s-0.304 2.268-0.304 3.222v8.915c0 0.337-0.281 0.608-0.631 0.608h-3.273c-0.332-0.023-0.59-0.286-0.59-0.608l-0.005-8.915c0-1.876 0.309-4.637-2.019-4.637-2.355 0-2.263 2.692-2.263 4.637v8.915c0 0.337-0.281 0.608-0.631 0.608z"></path>
                        <path d="M82.552 0.205c4.863 0 7.495 4.176 7.495 9.486 0 5.13-2.909 9.201-7.495 9.201-4.775 0-7.375-4.176-7.375-9.38 0-5.236 2.632-9.307 7.375-9.307zM82.58 3.639c-2.415 0-2.568 3.291-2.568 5.342 0 2.056-0.032 6.444 2.54 6.444 2.54 0 2.66-3.54 2.66-5.697 0-1.42-0.060-3.116-0.489-4.462-0.369-1.171-1.102-1.627-2.143-1.627z"></path>
                        <path d="M96.353 18.541h-3.264c-0.327-0.023-0.59-0.286-0.59-0.608l-0.005-16.825c0.028-0.309 0.3-0.549 0.632-0.549h3.038c0.286 0.014 0.521 0.207 0.585 0.47v2.572h0.060c0.917-2.3 2.203-3.397 4.467-3.397 1.47 0 2.904 0.53 3.826 1.982 0.857 1.346 0.857 3.609 0.857 5.236v10.588c-0.037 0.295-0.309 0.53-0.632 0.53h-3.287c-0.3-0.023-0.549-0.244-0.581-0.53v-9.136c0-1.839 0.212-4.531-2.051-4.531-0.797 0-1.53 0.535-1.895 1.346-0.461 1.028-0.521 2.051-0.521 3.185v9.058c-0.005 0.337-0.29 0.608-0.641 0.608z"></path>
                        <path d="M52.687 10.507v-0.71c-2.369 0-4.872 0.507-4.872 3.3 0 1.415 0.733 2.374 1.991 2.374 0.922 0 1.747-0.567 2.268-1.489 0.645-1.134 0.613-2.199 0.613-3.476zM55.992 18.495c-0.217 0.194-0.53 0.207-0.774 0.078-1.088-0.903-1.281-1.323-1.881-2.185-1.798 1.835-3.070 2.383-5.402 2.383-2.757 0-4.905-1.701-4.905-5.107 0-2.66 1.443-4.471 3.494-5.356 1.779-0.784 4.264-0.922 6.163-1.139v-0.424c0-0.779 0.060-1.701-0.396-2.374-0.401-0.604-1.166-0.853-1.839-0.853-1.249 0-2.365 0.641-2.637 1.968-0.055 0.295-0.272 0.585-0.567 0.599l-3.181-0.341c-0.267-0.060-0.562-0.277-0.489-0.687 0.733-3.854 4.213-5.015 7.329-5.015 1.595 0 3.678 0.424 4.937 1.632 1.595 1.489 1.443 3.476 1.443 5.638v5.107c0 1.535 0.636 2.208 1.235 3.038 0.212 0.295 0.258 0.65-0.009 0.871-0.668 0.558-1.858 1.595-2.512 2.176l-0.009-0.009z"></path>
                        <path d="M9.721 10.507v-0.71c-2.369 0-4.872 0.507-4.872 3.3 0 1.415 0.733 2.374 1.991 2.374 0.922 0 1.747-0.567 2.268-1.489 0.645-1.134 0.613-2.199 0.613-3.476zM13.026 18.495c-0.217 0.194-0.53 0.207-0.774 0.078-1.088-0.903-1.281-1.323-1.881-2.185-1.798 1.835-3.070 2.383-5.402 2.383-2.756 0-4.905-1.701-4.905-5.107 0-2.66 1.443-4.471 3.494-5.356 1.779-0.784 4.264-0.922 6.163-1.139v-0.424c0-0.779 0.060-1.701-0.396-2.374-0.401-0.604-1.166-0.853-1.839-0.853-1.249 0-2.365 0.641-2.637 1.968-0.055 0.295-0.272 0.585-0.567 0.599l-3.181-0.341c-0.267-0.060-0.562-0.277-0.489-0.687 0.733-3.854 4.213-5.015 7.329-5.015 1.595 0 3.678 0.424 4.937 1.632 1.595 1.489 1.443 3.476 1.443 5.638v5.107c0 1.535 0.636 2.208 1.235 3.038 0.212 0.295 0.258 0.65-0.009 0.871-0.668 0.558-1.858 1.595-2.512 2.176l-0.009-0.009z"></path>
                      </svg>
                    </a>
                  </li>
                  <li class="books-retailers-icon">
                    <a href="#">
                      <svg id="icon-book-opened" class="icon-book-opened" width="20" height="20" viewBox="0 0 32 32">
                        <path d="M30.372 7.482h-2.114c-3.066-1.369-5.668-2.072-7.743-2.072-2.687 0-3.945 1.171-4.514 2.064-0.569-0.893-1.826-2.064-4.514-2.064-2.075 0-4.678 0.704-7.744 2.072h-2.114c-0.899 0-1.628 0.729-1.628 1.628v15.851c0 0.9 0.729 1.628 1.628 1.628h28.743c0.899 0 1.628-0.729 1.628-1.628v-15.851c0-0.899-0.729-1.628-1.628-1.628zM15.559 8.471c-0.005 0.025-0.007 0.051-0.007 0.076v14.95c-0.712-0.822-1.905-1.451-3.901-1.451-3.563 0-8.034 1.953-9.631 2.709v-15.553c1.368-0.696 2.645-1.265 3.836-1.719 2.186-0.831 4.074-1.258 5.63-1.258 1.909 0 2.952 0.639 3.517 1.258 0.326 0.357 0.494 0.707 0.573 0.924-0.009 0.036-0.015 0.062-0.016 0.064zM29.979 24.754c-1.597-0.756-6.069-2.709-9.631-2.709-1.996 0-3.189 0.629-3.901 1.451-0.026 0.030-0.056 0.058-0.081 0.089v-14.993c0.008-0.035 0.027-0.099 0.059-0.183 0.080-0.216 0.251-0.568 0.581-0.927 0.568-0.619 1.611-1.258 3.508-1.258 1.556 0 3.443 0.426 5.63 1.258 1.192 0.453 2.468 1.022 3.835 1.719v15.552h0z"></path>
                      </svg>
                    </a>
                  </li>
                  <li class="books-retailers-icon">
                    <a href="#">
                      <svg id="icon-books-cl" class="icon-books-cl" width="20" height="20" viewBox="0 0 32 32">
                        <path d="M29.717 11.056c-0.129-0.973-0.148-2.648 0.756-3.211 0.016-0.010 0.028-0.025 0.042-0.038 0.739-0.236 1.25-0.568 0.849-1.014l-10.897-3.283-17.644 2.453c0 0-2.021 0.289-1.84 3.428 0.098 1.709 0.634 2.548 1.102 2.96l-1.448 0.436c-0.402 0.446 0.109 0.778 0.848 1.014 0.014 0.013 0.026 0.028 0.042 0.038 0.903 0.563 0.886 2.238 0.756 3.211-3.244 0.921-2.079 1.221-2.079 1.221l0.712 0.172c-0.5 0.452-0.998 1.31-0.904 2.937 0.181 3.139 1.84 3.355 1.84 3.355l11.546 3.753 17.428-4.221c0 0 1.165-0.301-2.080-1.222-0.13-0.971-0.149-2.646 0.756-3.211 0.017-0.010 0.029-0.025 0.042-0.038 0.739-0.236 1.25-0.568 0.848-1.014l-0.758-0.229c0.505-0.305 1.264-1.101 1.383-3.169 0.082-1.423-0.289-2.256-0.719-2.746l1.497-0.362c0 0.001 1.165-0.3-2.079-1.221zM15.14 11.016l14.31-2.941c-0.471 0.863-0.452 2.044-0.374 2.803 0.017 0.172 0.037 0.329 0.056 0.448l-14.116 3.511 0.123-3.821zM2.551 14.071l14.31 2.941 0.123 3.821-14.115-3.511c0.019-0.119 0.038-0.276 0.056-0.448 0.078-0.758 0.098-1.94-0.374-2.803zM1.978 9.24c-0.018-0.835 0.131-1.439 0.432-1.746 0.191-0.196 0.417-0.237 0.572-0.237 0.082 0 0.141 0.011 0.145 0.011l11.395 3.715-0.124 3.848-11.202-3.14c-0.021-0.006-0.049-0.010-0.070-0.011-0.044-0.003-1.096-0.1-1.147-2.44zM13.425 26.823l-11.202-3.141c-0.021-0.006-0.048-0.010-0.070-0.011-0.045-0.003-1.097-0.1-1.148-2.439-0.018-0.836 0.131-1.439 0.432-1.747 0.192-0.196 0.418-0.237 0.572-0.237 0.082 0 0.141 0.011 0.145 0.011 0 0 0 0 0 0l11.395 3.716-0.124 3.848zM28.104 22.868c0.018 0.172 0.037 0.329 0.056 0.448l-14.116 3.512 0.123-3.821 3.018-0.62 0.446 0.108 1.67-0.543 9.176-1.886c-0.472 0.863-0.452 2.044-0.374 2.803zM28.882 17.675c-0.026 0.001-0.051 0.004-0.076 0.012l-11.202 3.14-0.124-3.848 11.379-3.711c0.001-0 0.424-0.094 0.734 0.221 0.3 0.307 0.449 0.911 0.432 1.746-0.053 2.34-1.105 2.437-1.143 2.44z"></path>
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
  const updatedBooks = shoppingListArray.filter(b => b.id !== id);
  console.log(updatedBooks);
  localStorage.setItem('shoppingList', JSON.stringify(updatedBooks));
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

function updateBooksOnPage(page) {
  const startIndex = (page - 1) * booksPerPage;
  booksOnPage = [];
  for (let index = startIndex; index < startIndex + booksPerPage; index++) {
    booksOnPage.push(selectedBooks[index]);
  }
  booksOnPage = booksOnPage.filter(b => b);
  renderFavorites();
}

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire64ec"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire64ec"] = parcelRequire;
}

var $1SyV6 = parcelRequire("1SyV6");
const $c0cecc0ef3c23d0b$var$bookApi = new (0, $1SyV6.BookAPI)();
let $c0cecc0ef3c23d0b$var$selectedBooks = {};
const $c0cecc0ef3c23d0b$var$shoppingListArray = JSON.parse(localStorage.getItem("shoppingList")) || [];
console.log($c0cecc0ef3c23d0b$var$shoppingListArray);
const $c0cecc0ef3c23d0b$var$shoppingList = document.querySelector(".shopping-list");
function $c0cecc0ef3c23d0b$var$addToFavorites(book) {
    favoriteBooks.push(book);
    localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
    $c0cecc0ef3c23d0b$var$renderFavorites();
}
function $c0cecc0ef3c23d0b$var$renderFavorites() {
    if (!$c0cecc0ef3c23d0b$var$shoppingList) return;
    $c0cecc0ef3c23d0b$var$shoppingList.innerHTML = "";
    if ($c0cecc0ef3c23d0b$var$selectedBooks.length === 0) $c0cecc0ef3c23d0b$var$shoppingList.innerHTML = `
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
    else {
        $c0cecc0ef3c23d0b$var$shoppingList.innerHTML = booksOnPage.map((book)=>{
            return `
          <li class="shopping-list-book">
            <img class="shopping-book-img" src="${book.book_image}" alt="${book.title}" width="100" height="142" />
            <div class="shopping-book-info">
              <div class="shopping-book-title">
                <h3>${book.title}</h3>
                <p>${book.category}</p>
              </div>
              <a href="#">
                <svg class="book__add-cart-icon" width="28" height="28">
                  <use href="./images/blocks.svg#icon-blocks1"></use>
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
        }).join("");
        document.querySelectorAll(".remove_book").forEach((b)=>{
            b.addEventListener("click", removeBookFromFavorite);
        });
    }
}
(async ()=>{
    const books = await $c0cecc0ef3c23d0b$var$bookApi.getTopBooksList();
    const selectedId = $c0cecc0ef3c23d0b$var$shoppingListArray.map((b)=>b.id);
    $c0cecc0ef3c23d0b$var$selectedBooks = books.reduce((acc, b)=>{
        b.books.forEach((book)=>{
            if (selectedId.includes(book._id)) acc.push(book);
        });
        return acc;
    }, []);
    console.log($c0cecc0ef3c23d0b$var$selectedBooks);
    const options = {
        totalItems: $c0cecc0ef3c23d0b$var$selectedBooks.length,
        itemsPerPage: booksPerPage,
        visiblePages: 10,
        page: 1,
        centerAlign: false,
        firstItemClassName: "tui-first-child",
        lastItemClassName: "tui-last-child",
        template: {
            page: '<a href="#" class="tui-page-btn">{{page}}</a>',
            currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
            moveButton: '<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',
            disabledMoveButton: '<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',
            moreButton: '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'
        }
    };
    if ($c0cecc0ef3c23d0b$var$selectedBooks.length === 0) document.querySelector(".tui-pagination").style.display = "none";
    else document.querySelector(".tui-pagination").style.display = "block";
    const container = document.getElementById("pagination");
    paginator = new Pagination(container, options);
    paginator.getCurrentPage();
    updateBooksOnPage(paginator.getCurrentPage());
    paginator.on("afterMove", ({ page: page  })=>updateBooksOnPage(page));
    $c0cecc0ef3c23d0b$var$renderFavorites();
})();


parcelRequire("apzhc");
parcelRequire("4kqVL");
parcelRequire("1SyV6");
parcelRequire("3BkfS");
parcelRequire("5vuhd");
parcelRequire("aAEAp");
parcelRequire("9r705");


//# sourceMappingURL=shopping-list.35ecfb92.js.map

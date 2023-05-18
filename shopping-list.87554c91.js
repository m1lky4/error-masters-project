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
const $c0cecc0ef3c23d0b$var$container = document.getElementById("pagination");
let $c0cecc0ef3c23d0b$var$options;
let $c0cecc0ef3c23d0b$var$paginator;
let $c0cecc0ef3c23d0b$var$booksPerPage = 3;
let $c0cecc0ef3c23d0b$var$booksOnPage = [];
function $c0cecc0ef3c23d0b$var$addToFavorites(book) {
    favoriteBooks.push(book);
    localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
    $c0cecc0ef3c23d0b$var$renderFavorites();
}
function $c0cecc0ef3c23d0b$var$renderFavorites() {
    if (!$c0cecc0ef3c23d0b$var$shoppingList) return;
    $c0cecc0ef3c23d0b$var$shoppingList.innerHTML = "";
    if ($c0cecc0ef3c23d0b$var$selectedBooks.length === 0) $c0cecc0ef3c23d0b$var$shoppingList.innerHTML = `
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
    else {
        $c0cecc0ef3c23d0b$var$shoppingList.innerHTML = $c0cecc0ef3c23d0b$var$booksOnPage.map((book)=>{
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
        }).join("");
        document.querySelectorAll(".remove_book").forEach((b)=>{
            b.addEventListener("click", $c0cecc0ef3c23d0b$var$removeBookFromFavorite);
        });
    }
}
function $c0cecc0ef3c23d0b$var$removeBookFromFavorite(e) {
    const id = e.target.getAttribute("data-id");
    console.log(id);
    // const updatedBooks = shoppingListArray.filter(b => b.id !== id);
    // console.log(updatedBooks);
    const updatedBooks = $c0cecc0ef3c23d0b$var$shoppingListArray.map((book)=>{
        if (book.id === id) {
            $c0cecc0ef3c23d0b$var$shoppingListArray.splice(id, 1);
            localStorage.setItem("shoppingList", JSON.stringify($c0cecc0ef3c23d0b$var$shoppingListArray));
        }
        console.log($c0cecc0ef3c23d0b$var$shoppingListArray);
        $c0cecc0ef3c23d0b$var$options.totalItems = JSON.parse(localStorage.getItem("shoppingList")).length;
        $c0cecc0ef3c23d0b$var$paginator = new Pagination($c0cecc0ef3c23d0b$var$container, $c0cecc0ef3c23d0b$var$options);
        if ($c0cecc0ef3c23d0b$var$options.totalItems <= 3) document.querySelector(".tui-pagination").style.display = "none";
        else document.querySelector(".tui-pagination").style.display = "block";
    });
    // localStorage.setItem('shoppingList', JSON.stringify(updatedBooks));
    $c0cecc0ef3c23d0b$var$selectedBooks = $c0cecc0ef3c23d0b$var$selectedBooks.filter((b)=>b._id !== id);
    updateBooksOnPage($c0cecc0ef3c23d0b$var$paginator.getCurrentPage());
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
    $c0cecc0ef3c23d0b$var$options = {
        totalItems: $c0cecc0ef3c23d0b$var$selectedBooks.length,
        itemsPerPage: $c0cecc0ef3c23d0b$var$booksPerPage,
        visiblePages: 2,
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
    if ($c0cecc0ef3c23d0b$var$selectedBooks.length <= 3) document.querySelector(".tui-pagination").style.display = "none";
    else document.querySelector(".tui-pagination").style.display = "block";
    $c0cecc0ef3c23d0b$var$paginator = new Pagination($c0cecc0ef3c23d0b$var$container, $c0cecc0ef3c23d0b$var$options);
    $c0cecc0ef3c23d0b$var$paginator.getCurrentPage();
    updateBooksOnPage($c0cecc0ef3c23d0b$var$paginator.getCurrentPage());
    $c0cecc0ef3c23d0b$var$paginator.on("afterMove", ({ page: page  })=>updateBooksOnPage(page));
    $c0cecc0ef3c23d0b$var$renderFavorites();
})();


parcelRequire("apzhc");
parcelRequire("1SyV6");
parcelRequire("3BkfS");
parcelRequire("bX8LR");
parcelRequire("eRVVq");
parcelRequire("aAEAp");
parcelRequire("9r705");
parcelRequire("coELb");


//# sourceMappingURL=shopping-list.87554c91.js.map

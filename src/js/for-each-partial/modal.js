import { BookAPI } from '../api/book.service';
const bookApi = new BookAPI();

const body = document.body;
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const modalCloseBtn = document.querySelector('button[data-modal-close-btn]');
const modalImg = document.querySelector('.modal-img');
const modalText = document.querySelector('.modal-text');
const modalShopList = document.querySelector('.modal-shop-list');
const shoppingBtn = document.querySelector('.modal-shopping-btn');
const congratulationsText = document.querySelector('.congratulations-text');

let bookId;
if (localStorage.getItem('shoppingList') === null) {
  const shoppingList = localStorage.setItem('shoppingList', JSON.stringify([]));
}

body.classList.remove('modal-open');

function openModal() {
  backdrop.classList.remove('is-hidden');
  modal.classList.remove('is-hidden');

  body.classList.add('modal-open');

  backdrop.addEventListener('click', closeModalOnBackdropClick);
  modalCloseBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', closeModalOnEsc);

  shoppingBtn.addEventListener('click', addToShoppingList);
}

function closeModal() {
  body.classList.remove('modal-open');

  backdrop.classList.add('is-hidden');
  modal.classList.add('is-hidden');

  backdrop.removeEventListener('click', closeModal);
  modalCloseBtn.removeEventListener('click', closeModal);

  document.removeEventListener('keydown', closeModalOnEsc);

  shoppingBtn.removeEventListener('click', addToShoppingList);
}
function closeModalOnBackdropClick(e) {
  if (e.target === backdrop) {
    closeModal();
  }
}
function closeModalOnEsc(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

export function onModal(event) {
  if (event.target.closest('li').classList.contains('book-item')) {
    const bookItem = event.target.closest('li');
    bookId = bookItem.getAttribute('data-id');
    showBookDetails(bookId);
    updateButton();
    const localList = JSON.parse(localStorage.getItem('shoppingList'));
    if (localList !== []) {
      localList.map(el => {
        if (el.id === bookId) {
          return (shoppingBtn.textContent = 'REMOVE FROM THE SHOPPING LIST');
        } else {
          return;
        }
      });
    }
  }
}

async function showBookDetails(bookId) {
  try {
    const book = await bookApi.getBookByID(bookId);
    if (book) {
      modalImg.innerHTML = `<img src="${book.book_image}" alt="${book.title}" class="modal-book-img"/>`;
      modalText.innerHTML = `
        <h3 class="modal-book-title">${book.title}</h3>
        <p class="modal-book-author"> ${book.author}</p>
        <p class="modal-book-desc">${book.description}</p>
      `;
      const listItems = modalShopList.getElementsByTagName('li');
      listItems[0].querySelector('a').href = book.buy_links[0].url;
      listItems[1].querySelector('a').href = book.buy_links[1].url;
      listItems[2].querySelector('a').href = book.buy_links[4].url;
      openModal();
    } else {
      console.error('File not found.');
    }
  } catch (error) {
    console.error('Error in getting data:', error);
  }
}
function updateLocalStorage(shoppingList) {
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}
function addToShoppingList() {
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  const bookIndex = shoppingList.findIndex(item => item.id === bookId);

  if (shoppingBtn.textContent === 'ADD TO SHOPPING LIST') {
    let book = {
      id: bookId,
    };
    shoppingList.push(book);
    shoppingBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
    congratulationsText.textContent =
      'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
  } else {
    shoppingBtn.textContent = 'ADD TO SHOPPING LIST';
    shoppingList.splice(bookIndex, 1);
    congratulationsText.textContent = '';
  }
  updateLocalStorage(shoppingList);
}
function updateLocalStorage(shoppingList) {
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

function updateButton() {
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  const shopIndex = shoppingList.filter(({ id }) => id !== bookId);
  if (shopIndex === -1) {
    shoppingBtn.textContent = 'REMOVE FROM THE SHOPPING LIST';
  } else {
    shoppingBtn.textContent = 'ADD TO SHOPPING LIST';
  }
}


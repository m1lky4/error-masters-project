import {BookAPI} from '../api/book.service'
const example = new BookAPI();

const body = document.body;
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const modalOpenBtn = document.querySelector('button[data-modal-open-btn]');
const modalCloseBtn = document.querySelector('button[data-modal-close-btn]');
const modalImg = document.querySelector('.modal-img');
const modalText = document.querySelector('.modal-text');
const modalShopList = document.querySelector('.modal-shop-list');
const shoppingBtn = document.querySelector('.modal-shopping-btn');
const congratulationsText = document.querySelector('.congratulations-text');

// let shoppingList = [];
let shoppingBook = {};
let bookId = null;

function openModal() {
  backdrop.classList.remove('is-hidden');
  modal.classList.remove('is-hidden');

  backdrop.addEventListener('click', closeModalOnBackdropClick);
  modalCloseBtn.addEventListener('click', closeModal);
  
  document.addEventListener('keydown', closeModalOnEsc);
}

function closeModal() {
  backdrop.classList.add('is-hidden');
  modal.classList.add('is-hidden');

  backdrop.removeEventListener('click', closeModal);
  modalCloseBtn.removeEventListener('click', closeModal);

  document.removeEventListener('keydown', closeModalOnEsc);
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

modalOpenBtn.addEventListener('click', openModal);

// ================================================

modalOpenBtn.addEventListener('click', async (e) => {
  // const bookID = 'YOUR_BOOK_ID_HERE'; // Замініть на фактичний ідентифікатор книги
  if (e.target.nodeName === 'IMG') {
    bookId = e.target.parentNode.parentNode.parentNode.id;
  } else if (e.target.nodeName === 'A') {
    bookId = e.target.parentNode.id;
  } else {
    bookId = e.target.parentNode.parentNode.id;
  }

  try {
    const bookData = await example.getBookByID(bookID);

    // Оновлення модального вікна з отриманими даними
    modalImg.innerHTML = `<img src="${bookData.image}" alt="${bookData.title}" />`;
    modalText.innerHTML = `
      <h3>${bookData.title}</h3>
      <p>Автор: ${bookData.author}</p>
      <p>${bookData.description}</p>
    `;

    // Оновлення посилань на торговельні майданчики
    modalShopList.innerHTML = `<li>
    <a href="${bookData.shopLinks.amazon}" class="modal-shop-link" target="_blank">
      <img src="./images/modal-images/amazon.png" alt="logo">
    </a>
  </li>
  <li>
    <a href="${bookData.shopLinks.appleBook}" class="modal-shop-link" target="_blank">
      <img src="./images/modal-images/appleBook.png" alt="logo">
    </a>
  </li>
  <li>
    <a href="${bookData.shopLinks.bookShop}" class="modal-shop-link" target="_blank">
      <img src="./images/modal-images/bookShop.png" alt="logo">
    </a>
  </li>
`;

shoppingBook = {
  id: bookID,
  title: bookData.title,
  author: bookData.author
};
openModal();
} catch (error) {
console.error('Помилка отримання даних про книгу', error);
}
});

// shoppingBtn.addEventListener('click', addToShoppingList);

// // Функція додавання книги до списку покупок
// function addToShoppingList() {
// if (shoppingBook.id) {
// shoppingList.push(shoppingBook);
// congratulationsText.textContent = 'Книга додана до списку покупок!';
// saveShoppingList();
// }
// }

// // Функція збереження списку покупок в локальне сховище
// function saveShoppingList() {
// localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
// }

// // Функція завантаження списку покупок з локального сховища
// function loadShoppingList() {
// const savedShoppingList = localStorage.getItem('shoppingList');
// if (savedShoppingList) {
// shoppingList = JSON.parse(savedShoppingList);
// }
// }



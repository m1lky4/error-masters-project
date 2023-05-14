// import axios from 'axios';
import { BookAPI } from '../api/book.service';
const bookApi = new BookAPI();

const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const modalOpenBtn = document.querySelector('button[data-modal-open-btn]');
const modalCloseBtn = document.querySelector('button[data-modal-close-btn]');
const modalImg = document.querySelector('.modal-img');
const modalText = document.querySelector('.modal-text');
const modalShopList = document.querySelector('.modal-shop-list');
// const shoppingBtn = document.querySelector('.modal-shopping-btn');
// const congratulationsText = document.querySelector('.congratulations-text');

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

export function onModal(event) {
  console.log(event.target.closest('li'));
  if (event.target.closest('li').classList.contains('book-item')) {
        const bookItem = event.target.closest('li');
        const bookId = bookItem.getAttribute('data-id');
        showBookDetails(bookId);
      }
}

async function showBookDetails(bookId) {
  try {
    const book = await bookApi.getBookByID(bookId);
    console.log(book);
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

const body = document.body;
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const modalOpenBtn = document.querySelector('button[data-modal-open-btn]');
const modalCloseBtn = document.querySelector('button[data-modal-close-btn]');

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

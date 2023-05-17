import { log } from 'console';

const refs = {
  signInButton: document.querySelector('[name="sign-in"]'),
  signUpButton: document.querySelector('[name="sign-up"]'),
  signForm: document.querySelector('.registration-form'),
  passwordFild: document.querySelector('[name="user_password"]'),
  closeButton: document.querySelector('.registration-close-btn'),
  openModalButton: document.querySelector('.sign-up'),
  passwordShowButton: document.querySelector(`.show-password-text`),
  allFormInputs: document.querySelectorAll('.form-input-filds'),
  modalBackdrop: document.querySelector('.registration-backdrop'),
};

export const {
  signInButton,
  signUpButton,
  signForm,
  passwordShowButton,
  passwordFild,
  allFormInputs,
  closeButton,
  modalBackdrop,
  openModalButton,
} = refs;

export const allFields = allFormInputs;

signInButton.addEventListener('click', onSignInButtonClick);
signUpButton.addEventListener('click', onSignUpButtonClick);
passwordShowButton.addEventListener('click', onShowPasswordButtonClick);

openModalButton.addEventListener('click', onLoginButtonClick);

function onLoginButtonClick() {
  modalBackdrop.classList.remove('registration-is-hiden');
  closeButton.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscapeClick);
}

function onSignInButtonClick() {
  removeAndAddClasses(signUpButton, signInButton);
  changeStyle('none', 'sign in');
  resetInputs();
}

function onSignUpButtonClick() {
  removeAndAddClasses(signInButton, signUpButton);
  changeStyle('block', 'sign up');
  resetInputs();
}

function onShowPasswordButtonClick(evt) {
  evt.preventDefault();
  if (passwordFild.type === 'password') {
    passwordFild.type = 'text';
    return;
  }
  passwordFild.type = 'password';
}

function removeAndAddClasses(elementForRemove, elementForAdd) {
  elementForAdd.classList.add(`switch-sign-active`);
  elementForRemove.classList.remove(`switch-sign-active`);
}

function changeStyle(display, innerText) {
  signForm.elements.user_name.style.display = display;
  signForm.elements.submit_btn.innerText = innerText;
}

export function resetInputs() {
  allFormInputs.forEach(input => {
    input.classList.remove('input-error');
    input.value = '';
    input.closest('li').querySelector('span').innerText = '';
  });
}

function onBackdropClick(evt) {
  if (evt.target !== modalBackdrop) return;
  closeModal();
}

export function closeModal() {
  modalBackdrop.classList.add('registration-is-hiden');

  closeButton.removeEventListener('click', closeModal);
  modalBackdrop.removeEventListener('click', onBackdropClick);
  document.removeEventListener('keydown', onEscapeClick);
}

function onEscapeClick({ key }) {
  if (key !== 'Escape') return;
  closeModal();
}

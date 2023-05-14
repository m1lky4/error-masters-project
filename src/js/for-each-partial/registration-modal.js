refs = {
  signInButton: document.querySelector('[name="sign-in"]'),
  signUpButton: document.querySelector('[name="sign-up"]'),
  signForm: document.querySelector('.registration-form'),
  passwordFild: document.querySelector('[name="user_password"]'),
  passwordShowButton: document.querySelector(`.show-password-text`),
  allFormInputs: document.querySelectorAll('.form-input-filds'),
};

export const {
  signInButton,
  signUpButton,
  signForm,
  passwordShowButton,
  passwordFild,
  allFormInputs,
} = refs;

signInButton.addEventListener('click', onSignInButtonClick);
signUpButton.addEventListener('click', onSignUpButtonClick);
passwordShowButton.addEventListener('click', onShowPasswordButtonClick);

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

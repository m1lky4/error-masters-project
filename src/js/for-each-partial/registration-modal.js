refs = {
  signInButton: document.querySelector('[name="sign-in"]'),
  signUpButton: document.querySelector('[name="sign-up"]'),
  signForm: document.querySelector('.registration-form'),
};

const { signInButton, signUpButton, signForm } = refs;

signInButton.addEventListener('click', onSignInButtonClick);
signUpButton.addEventListener('click', onSignUpButtonClick);

function onSignInButtonClick() {
  removeAndAddClasses(signUpButton, signInButton);
  changeStyle('none', 'sign in');
}

function onSignUpButtonClick() {
  removeAndAddClasses(signInButton, signUpButton);
  changeStyle('block', 'sign up');
}

function removeAndAddClasses(elementForRemove, elementForAdd) {
  elementForAdd.classList.add(`switch-sign-active`);
  elementForRemove.classList.remove(`switch-sign-active`);
}

function changeStyle(display, innerText) {
  signForm.elements.user_email.style.display = display;
  signForm.elements.submit_btn.innerText = innerText;
}

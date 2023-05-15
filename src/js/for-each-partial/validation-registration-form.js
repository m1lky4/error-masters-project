import { signForm } from './registration-modal';
import validator from 'validator';
import { resetInputs } from './registration-modal';

const refs = {
  passwordErrorMassage: document.querySelector('[name="password_error"]'),
  emailErrorMassage: document.querySelector('[name="email_error"]'),
  nameErrorMessage: document.querySelector(`[name="name_error"]`),
};
const { passwordErrorMassage, emailErrorMassage, nameErrorMessage } = refs;

signForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();
  const password = evt.target.elements.user_password.value;
  const email = evt.target.elements.user_email.value;
  const name = evt.target.elements.user_name.value;
  const depend = evt.target.elements.submit_btn.innerText;
  const formData = {};

  const passwordStatus = passwordFildValidate(password);
  const emailStatus = emailFildValidate(email);
  const nameStatus = nameFildValidate(name);

  if (passwordStatus && emailStatus && nameStatus) {
    formData.depend = depend;
    formData.name = name;
    formData.email = email;
    formData.password = password;
    resetInputs();
  }

  if (depend === 'SIGN IN' && emailStatus && passwordStatus) {
    formData.depend = depend;
    formData.email = email;
    formData.password = password;
    resetInputs();
  }
  console.log(formData);
}

function nameFildValidate(name) {
  if (!validator.isAlpha(name) || name.length < 2) {
    const message = 'Uncorrect User Name';
    nameErrorMessage.innerText = message;
    signForm.elements.user_name.classList.add('input-error');
    return false;
  }
  nameErrorMessage.innerText = '';
  signForm.elements.user_name.classList.remove('input-error');
  return true;
}

function emailFildValidate(email) {
  if (!validator.isEmail(email)) {
    const massage = 'Uncorrect Email';
    emailErrorMassage.innerText = massage;
    signForm.elements.user_email.classList.add('input-error');
    return false;
  }
  emailErrorMassage.innerText = '';
  signForm.elements.user_email.classList.remove('input-error');
  return true;
}

function passwordFildValidate(password) {
  if (!validator.isStrongPassword(password)) {
    const massage = 'Weak password';
    passwordErrorMassage.innerText = massage;
    signForm.elements.user_password.classList.add('input-error');
    return false;
  }
  passwordErrorMassage.innerText = '';
  signForm.elements.user_password.classList.remove('input-error');
  return true;
}
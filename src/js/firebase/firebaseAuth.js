import { signForm } from '../for-each-partial/registration-modal';
import { resetInputs } from '../for-each-partial/registration-modal';
import { auth, db } from './firebase';
import { closeModal } from '../for-each-partial/registration-modal';
import {
  nameFildValidate,
  emailFildValidate,
  passwordFildValidate,
} from '../for-each-partial/validation-registration-form';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  collection,
  getDoc,
  setDoc,
  onSnapshot,
  doc,
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const guideList = document.querySelector('.guides');
const accountDetails = document.querySelector('.account-details');
let currentUser = null;
let currentUserName = null;

const setupUI = user => {
  const loggedOutLinks = document.querySelectorAll('.logged-out');
  const loggedInLinks = document.querySelectorAll('.logged-in');

  if (user) {
    getDoc(doc(db, 'users', user.uid)).then(doc => {
      const html = `
        <div class="padding">${doc.data().name || currentUserName}</div>
        <div class="dropdown-child">
            <button type="submit" class="btn-logout header-log-out padding">LogOut</button>
        </div>
        `;
      accountDetails.innerHTML = html;
      const logout = document.querySelector('.btn-logout');
      logout.addEventListener('click', evt => {
        evt.preventDefault();
        auth.signOut();
      });
    });
    if (window.innerWidth < 767) {
      loggedInLinks.forEach(item => (item.style.display = 'none'));
    } else {
      loggedInLinks.forEach(item => (item.style.display = 'flex'));
    }
    // loggedInLinks.forEach(item => (item.style.display = 'flex'));
    loggedOutLinks.forEach(item => (item.style.display = 'none'));
  } else {
    accountDetails.innerHTML = '';
    if (window.innerWidth < 767) {
      loggedInLinks.forEach(item => (item.style.display = 'none'));
    }
    // loggedInLinks.forEach(item => (item.style.display = 'none'));
    // loggedOutLinks.forEach(item => (item.style.display = 'flex'));

  }
};

const setupGuides = data => {
  if (data.length) {
    const filterBookByCurrentUser = data.filter(doc => {
      const book = doc.data();

      if (book.owner == currentUser) {
        return book;
      }
    });
    const markup = filterBookByCurrentUser
      .map(book => {
        const data = book.data();
        return `
        <details>
            <summary class="collapsible-header grey lighten-4" style="background-color: darkgray; width: 500px; margin-left: 10px;">
            ${data.title}
            </summary>
            <p class="collapsible-body white" style="background-color: aliceblue; width: 500px; margin-left: 10px;">
            ${data.description}
            </p>
        </details>
    `;
      })
      .join('');

    guideList.innerHTML = markup;
  }
};

auth.onAuthStateChanged(user => {
  if (user) {
    localStorage.setItem('isLoggedIn', true);
    currentUser = user.uid;
    const query = collection(db, 'books');
    onSnapshot(
      query,
      snapshot => {
        setupGuides(snapshot.docs);
        setupUI(user);
      },
      err => {
        console.log(err.message);
      }
    );
  } else {
    localStorage.setItem('isLoggedIn', false);
    currentUser = null;
    setupUI();
    setupGuides([]);
  }
});

signForm.addEventListener('submit', evt => {
  evt.preventDefault();

  const password = evt.target.elements.user_password.value;
  const email = evt.target.elements.user_email.value;
  const name = evt.target.elements.user_name.value;
  const depend = evt.target.elements.submit_btn.innerText;
  const formData = {};

  const passwordStatus = passwordFildValidate(password);
  const emailStatus = emailFildValidate(email);
  const nameStatus = nameFildValidate(name);

  if (depend === 'SIGN IN' && emailStatus && passwordStatus) {
    formData.depend = depend;
    formData.email = email;
    formData.password = password;

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(cred => {
        resetInputs();
        closeModal();
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  if (depend === 'SIGN UP' && emailStatus && passwordStatus && nameStatus) {
    formData.depend = depend;
    formData.name = name;
    formData.email = email;
    formData.password = password;

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(cred => {
        return setDoc(doc(db, 'users', cred.user.uid), {
          name: formData.name,
        });
      })
      .then(() => {
        resetInputs();
        closeModal();
      })
      .catch(error => {
        console.log(error.message);
      });
  }
});

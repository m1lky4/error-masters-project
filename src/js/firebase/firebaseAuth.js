import { signForm } from '../for-each-partial/registration-modal';
import { resetInputs } from '../for-each-partial/registration-modal';
import { auth, db } from './firebase';
import { closeModal } from '../for-each-partial/registration-modal';
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
        <div>Email: ${user.email}</div>
        <div>Name: ${doc.data().name || currentUserName}</div>
        `;
      accountDetails.innerHTML = html;
    });

    loggedInLinks.forEach(item => (item.style.display = 'block'));
    loggedOutLinks.forEach(item => (item.style.display = 'none'));
  } else {
    accountDetails.innerHTML = '';
    loggedInLinks.forEach(item => (item.style.display = 'none'));
    loggedOutLinks.forEach(item => (item.style.display = 'block'));
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
  } else {
    guideList.innerHTML = '<h3>Login to view books</h3>';
  }
};

auth.onAuthStateChanged(user => {
  if (user) {
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
    currentUser = null;
    setupUI();
    setupGuides([]);
  }
});

const logout = document.querySelector('.btn-logout');
logout.addEventListener('click', evt => {
  evt.preventDefault();

  auth.signOut();
});

signForm.addEventListener('submit', evt => {
  evt.preventDefault();

  const password = evt.target.elements.user_password.value;
  const email = evt.target.elements.user_email.value;
  const name = evt.target.elements.user_name.value;
  const depend = evt.target.elements.submit_btn.innerText;
  const formData = {};

  if (password && email && name) {
    formData.depend = depend;
    formData.name = name;
    formData.email = email;
    formData.password = password;
    resetInputs();
  }

  if (depend === 'SIGN IN') {
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

  if (depend === 'SIGN UP') {
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

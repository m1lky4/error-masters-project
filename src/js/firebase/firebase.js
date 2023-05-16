import { signForm } from '../for-each-partial/registration-modal';
import { resetInputs } from '../for-each-partial/registration-modal';
import {
  nameFildValidate,
  emailFildValidate,
  passwordFildValidate,
} from '../for-each-partial/validation-registration-form';
import { closeModal } from '../for-each-partial/registration-modal';

// ===========setup materialize components========
const guideList = document.querySelector('.guides');
const accountDetails = document.querySelector('.account-details');
let currentUser = null;
let currentUserName = null;

const setupUI = user => {
  const loggedOutLinks = document.querySelectorAll('.logged-out');
  const loggedInLinks = document.querySelectorAll('.logged-in');

  if (user) {
    console.log(user);
    // Інформація про обліковий запис
    getDoc(doc(db, 'users', user.uid)).then(doc => {
      const html = `
        <div>Email: ${user.email}</div>
        <div>Name: ${doc.data().name || currentUserName}</div>
        `;
      accountDetails.innerHTML = html;
    });

    // Елементи інтерфейсу користувача
    loggedInLinks.forEach(item => (item.style.display = 'block'));
    loggedOutLinks.forEach(item => (item.style.display = 'none'));
  } else {
    //hide acc info
    accountDetails.innerHTML = '';
    //toggle UI elements
    loggedInLinks.forEach(item => (item.style.display = 'none'));
    loggedOutLinks.forEach(item => (item.style.display = 'block'));
  }
};

//setup guides
const setupGuides = data => {
  if (data.length) {
    const filterBookByCurrentUser = data.filter(doc => {
      const book = doc.data();

      if (book.owner == currentUser) {
        console.log(book);
        return book;
      }
    });
    // const query = collection(db, 'books');
    // onSnapshot(query, data => data.docs.map(doc => console.log(doc)));
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

// ===================new firebase================
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  onSnapshot,
  doc,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCqf7IbxQGzKEnVt10HxkceW7bQtKvtVFQ',
  authDomain: 'theerrormasters-8c68c.firebaseapp.com',
  projectId: 'theerrormasters-8c68c',
  storageBucket: 'theerrormasters-8c68c.appspot.com',
  messagingSenderId: '440951672891',
  appId: '1:440951672891:web:27c33f78cbda1a63290c1e',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signupForm = document.querySelector('#signup-form');

//listen for auth status change
auth.onAuthStateChanged(user => {
  if (user) {
    currentUser = user.uid;
    // console.log(currentUser);
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

// create new book
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', evt => {
  evt.preventDefault();

  addDoc(collection(db, 'books'), {
    owner: currentUser,
    title: createForm.title.value,
    description: createForm.description.value,
  })
    .then(() => {
      //close the modal and reset the form
      createForm.reset();
    })
    .catch(error => {
      console.log(error.message);
    });
});

//logout (Marina)
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

  if (depend === 'SIGN IN') {
    //   if (depend === 'SIGN IN' && emailStatus && passwordStatus) {
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

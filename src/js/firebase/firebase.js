import { signForm } from '../for-each-partial/registration-modal';
import { resetInputs } from '../for-each-partial/registration-modal';
// import {
//   nameFildValidate,
//   emailFildValidate,
//   passwordFildValidate,
// } from '../for-each-partial/validation-registration-form';
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
    // console.log(user);
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
        // console.log(book);
        return book;
      }
    });
    // const query = collection(db, 'books');
    // onSnapshot(query, data => data.docs.map(doc => console.log(doc)));
    const markup = filterBookByCurrentUser
      .map(book => {
        const data = book.data();
        // console.log(book.id);
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
  updateDoc,
  deleteField,
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  onSnapshot,
  doc,
  deleteDoc,
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

// const signupForm = document.querySelector('#signup-form');

//listen for auth status change
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

export function addBookToCollection({
  uid,
  title,
  description,
  author,
  book_image,
  buy_links,
}) {
  addDoc(collection(db, 'books'), {
    uid,
    owner: currentUser,
    title,
    description,
    author,
    book_image,
    buy_links,
  })
    .then(() => {
      //close the modal and reset the form
      // createForm.reset();
    })
    .catch(error => {
      console.log(error.message);
    });
}

export async function deleteBookFromCollection(uid) {
  // data => console.log(data.id);
  // await deleteDoc(doc(db, 'books', book.id));
  const cityRef = collection(db, 'books');
  onSnapshot(cityRef, async data => {
    const bookToDelete = data.docs[0].id;
    console.log(bookToDelete);
    await deleteDoc(doc(db, 'books', bookToDelete));
  });
  console.log(collection(db, 'books'));
}

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

  // const passwordStatus = passwordFildValidate(password);
  // const emailStatus = emailFildValidate(email);
  // const nameStatus = nameFildValidate(name);

  if (password && email && name) {
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

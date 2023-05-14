// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/storage';
// import 'firebase/compat/firestore';
// const firebaseConfig = {
//   apiKey: 'AIzaSyCgjEFXQidkD_gtSEs09jDck9M1Ax9vjRc',
//   authDomain: 'the-error-masters.firebaseapp.com',
//   databaseURL:
//     'https://the-error-masters-default-rtdb.europe-west1.firebasedatabase.app',
//   projectId: 'the-error-masters',
//   storageBucket: 'the-error-masters.appspot.com',
//   messagingSenderId: '926729610661',
//   appId: '1:926729610661:web:60731048c7f8671080744c',
// };
// export default firebase.initializeApp(firebaseConfig);

// Індус
// =========================================================================
// const username = document.querySelector('#username');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// import app from './firebase';
// const signUp = document.querySelector('#signUp');
// const login = document.querySelector('#login');
// console.log(login);
// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getDatabase, set, ref, update } from 'firebase/database';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from 'firebase/auth';

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyCKPJSd6DrfPHIRFfx7DhFHQYjLf1SWwQg',
//   authDomain: 'the-error-masters-d4291.firebaseapp.com',
//   databaseURL:
//     'https://the-error-masters-d4291-default-rtdb.europe-west1.firebasedatabase.app',
//   projectId: 'the-error-masters-d4291',
//   storageBucket: 'the-error-masters-d4291.appspot.com',
//   messagingSenderId: '1081307963164',
//   appId: '1:1081307963164:web:1bc1e1915552a443dfe4d9',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const auth = getAuth();
// console.log(auth);

// signUp.addEventListener('click', e => {
//   e.preventDefault();

//   var email = document.querySelector('#email').value;
//   var password = document.querySelector('#password').value;
//   var username = document.querySelector('#username').value;

//   createUserWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       // Signed in
//       const user = userCredential.user;
//       set(ref(database, 'users/' + user.uid), {
//         username: username,
//         email: email,
//       });
//       alert('User Create');
//       // ...
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;

//       alert('Error message1');
//       // ..
//     });
// });

// login.addEventListener('click', e => {
//   e.preventDefault();

//   var email = document.querySelector('#email').value;
//   var password = document.querySelector('#password').value;

//   signInWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       // Signed in
//       const user = userCredential.user;

//       const dt = new Date();

//       update(ref(database, 'users/' + user.uid), {
//         last_login: dt,
//       });

//       alert('Welcome syka');
//       // ...
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;

//       alert('Error message2');
//     });
// });

// // const user = auth.currentUser;
// // console.log(user);
// onAuthStateChanged(auth, user => {
//   console.log(user);
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     console.log(uid);
//     email.style.display = 'none';
//     // bla bla bla
//     // ...
//   } else {
//     // User is signed out
//     // ...
//     // bla bla bla
//   }
// });

// remove.addEventListener('click', e => {
//   const auth = getAuth();
//   signOut(auth)
//     .then(() => {
//       const dto = new Date();

//       update(ref(database, 'users/' + user.uid), {
//         last_logout: dto,
//       });
//       // Sign-out successful.const errorCode = error.code;
//       alert('out');
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;

//       alert('Error message3');
//       // An error happened.
//     });
// });

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCgjEFXQidkD_gtSEs09jDck9M1Ax9vjRc',
  authDomain: 'the-error-masters.firebaseapp.com',
  databaseURL:
    'https://the-error-masters-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'the-error-masters',
  storageBucket: 'the-error-masters.appspot.com',
  messagingSenderId: '926729610661',
  appId: '1:926729610661:web:60731048c7f8671080744c',
};
export default firebase.initializeApp(firebaseConfig);

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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

export { auth, db, app };

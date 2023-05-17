// import { db } from './firebase';
// import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';

// export function addBookToCollection({
//   uid,
//   title,
//   description,
//   author,
//   book_image,
//   buy_links,
// }) {
//   addDoc(collection(db, 'books'), {
//     uid,
//     owner: currentUser,
//     title,
//     description,
//     author,
//     book_image,
//     buy_links,
//   })
//     .then(() => {
//       // createForm.reset();
//     })
//     .catch(error => {
//       console.log(error.message);
//     });
// }

// export async function deleteBookFromCollection(uid) {
//   const querySnapshot = await getDocs(collection(db, 'books'));
//   querySnapshot.forEach(doc => {
//     const book = doc.data();
//     if (book.uid === uid && book.owner === currentUser) {
//       deleteDoc(doc(db, 'books', doc.id))
//         .then(() => {
//           console.log('Book deleted successfully');
//         })
//         .catch(error => {
//           console.log(error.message);
//         });
//     }
//   });
// }

// ПРАЦЮЮ НАД ЦИМ !!!

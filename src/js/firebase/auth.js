// import app from './firebase';
// async function createUserWithEmailAndPassword({ email, username, password }) {
//   console.log(app);
//   try {
//     await app.auth().createUserWithEmailAndPassword(email, username, password);

//     const user = await app.auth().currentUser;
//     await user.updateProfile({
//       displayName: username,
//     });
//     console.log(user.displayName);
//     console.log(user.email);
//     console.log(user.uid);
//   } catch (error) {
//     console.log(error);
//   }
// }

// createUserWithEmailAndPassword({
//   email: 'sodglasen@f.com',
//   username: 'gdergreg',
//   password: 'gdferager',
// });

// async function signInWithEmailAndPassword({ email, password }) {
//   try {
//     await app.auth().signInWithEmailAndPassword(email, password);
//     // const email = app.email;
//   } catch (error) {
//     // console.log(error);
//   }
// }

// // signInWithEmailAndPassword({
// //   email: 'f2@f.com',
// //   username: 'gergreg',
// //   password: 'gferager',
// // });

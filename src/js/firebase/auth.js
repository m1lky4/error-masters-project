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
//   email: 'f3@f.com',
//   username: 'gergreg',
//   password: 'gferager',
// });

// async function signInWithEmailAndPassword({ email, password }) {
// 	try {
// 		await app.auth()
// 			.signInWithEmailAndPassword(email, password)
// 		// const email = app.email;

// 	} catch (error) {
// 		// console.log(error);
// 	}
// }

// signInWithEmailAndPassword({
//   email: 'f2@f.com',
//   username: 'gergreg',
//   password: 'gferager',
// });
// ===========
import app from './firebase';

async function createUserWithEmailAndPassword({ email, username, password }) {
  console.log(app);
  try {
    await app.auth().createUserWithEmailAndPassword(email, password);

    const user = await app.auth().currentUser;
    await user.updateProfile({
      displayName: username,
    });
    console.log(user.displayName);
    console.log(user.email);
    console.log(user.uid);
  } catch (error) {
    console.log(error);
    throw error; // Додатково кидаємо помилку для обробки вище
  }
}

createUserWithEmailAndPassword({
  email: 'komanda_v_nas@govno.com',
  username: 'gergreg',
  password: 'gferager',
});

async function signInWithEmailAndPassword({ email, password }) {
  try {
    await app.auth().signInWithEmailAndPassword(email, password);
    const currentUser = app.auth().currentUser;
    console.log(currentUser.email);
  } catch (error) {
    console.log(error);
    throw error; // Додатково кидаємо помилку для обробки вище
  }
}

signInWithEmailAndPassword({
  email: 'f2@f.com',
  password: 'gferager',
});

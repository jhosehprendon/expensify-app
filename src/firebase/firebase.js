import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBAE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


//   database.ref().set({
//     name: 'Jhosehp',
//     age: 30,
//     isSingle: false,
//     location: {
//         city: 'Bogota',
//         country: 'Colombia'
//     }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//     console.log('This failed', e);
//   })
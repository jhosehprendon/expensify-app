import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC018GZezGIuDKNPWcsw-OAZANs0JI8mJg",
    authDomain: "expensify-71c9d.firebaseapp.com",
    databaseURL: "https://expensify-71c9d.firebaseio.com",
    projectId: "expensify-71c9d",
    storageBucket: "expensify-71c9d.appspot.com",
    messagingSenderId: "138634578559"
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
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "<your api key here>",
    authDomain: "<your auth domain here>",
    databaseURL: "<your database url here>",
    projectId: "<your project id here>",
    storageBucket: "<your storage bucket here>",
    messagingSenderId: "<your messaging sender id here>",
    appId: "<your app id here>"
});

const db = firebase.firestore();
const auth = firebase.auth;

// eslint-disable-next-line no-restricted-globals
if (location.hostname === 'localhost') {
  db.useEmulator('localhost', 8080);
  auth().useEmulator('http://localhost:9099/', { disableWarnings: true });
}

export default firebase;
export { db, auth };

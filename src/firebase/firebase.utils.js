import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBTfJEdTTo6088uldIhM9xapCouLYkLQ_I",
    authDomain: "crwn-db-83de3.firebaseapp.com",
    projectId: "crwn-db-83de3",
    storageBucket: "crwn-db-83de3.appspot.com",
    messagingSenderId: "659742886412",
    appId: "1:659742886412:web:f819d6dccc41ac8f7ebc29",
    measurementId: "G-5VP94WSY0L"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
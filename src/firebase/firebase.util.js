import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDwDT7gi1p6siDKSYHd0fRsHU51WXxTWRo",
    authDomain: "crwn-db-c579c.firebaseapp.com",
    databaseURL: "https://crwn-db-c579c.firebaseio.com",
    projectId: "crwn-db-c579c",
    storageBucket: "crwn-db-c579c.appspot.com",
    messagingSenderId: "940790935891",
    appId: "1:940790935891:web:d242d5070aedd707a671a6",
    measurementId: "G-C2D84NNZJC"
  };

// initilize the app
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// set up google account authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
// signInWithPopup could let developer choose the provider, could be google, twitter, etc.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

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

// get the authenticated user information from google authentication, and save it in the firebase database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if no existed user authentication
  if (!userAuth) {
    return;
  }

  // .doc, .collection just give back a reference to the query object, includes the path to the target object.
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // more information about the queried data
  const snapShot = await userRef.get();

  // if existed, then
  // check if the authentication has not been registered in the database, then created a new one
  if (!snapShot.exists){
    const { displayName, email } = userAuth;
    const creatAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        creatAt,
        ...additionalData
      });
    }
    catch(error) {
      console.log("error creating user: ", error.message);
    }
  }

  // do nothing if the user is not authenticated or the authenticated user data has already saved in the database

  // return the user reference to do other things we need
  return userRef;
}

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

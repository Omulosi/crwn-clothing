import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDTcAMNc99qpy1ePWfWMtMTK75I5oKtGYA",
  authDomain: "crwn-db-230d2.firebaseapp.com",
  projectId: "crwn-db-230d2",
  storageBucket: "crwn-db-230d2.appspot.com",
  messagingSenderId: "836256539648",
  appId: "1:836256539648:web:784dbb25730ead728524e5",
  measurementId: "G-40Z2JXFMMD",
};

export const createuserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // Add data if it does not exist in DB
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user");
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// Trigger google popup whener this provider isused for authentication
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;

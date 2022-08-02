import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Firebase FireStore
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwP6zV4IhiSDwDIaE5efeNVPc1BjwMas4",
  authDomain: "crown-db-57278.firebaseapp.com",
  projectId: "crown-db-57278",
  storageBucket: "crown-db-57278.appspot.com",
  messagingSenderId: "390341811807",
  appId: "1:390341811807:web:c8e8f33e3d6801665645ea",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// FireStore DB
export const db = getFirestore(firebaseApp);
export const createUserDocumentFromAuth = async (userAuth) => {
  // docRef refers to a document location in a Firestore database
  const userDocRef = doc(db, "users", userAuth.uid); // db, collection_name, unique_id
  console.log(userDocRef);

  // Doc Snapshot contains data read from a doc in your Firestore database and also allow us to access data
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  // exists() property to explicitly verify a document's existence.
  console.log(userSnapshot.exists());

  // if user does'not exist
  // create / set the docu with the data from useAuth in collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  // if user data exist
  return userDocRef;
};

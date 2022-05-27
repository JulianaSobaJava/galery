import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeZbhCF3kh9PFiLXKJZHEjEOplYa--wLo",
  authDomain: "galery-581f2.firebaseapp.com",
  projectId: "galery-581f2",
  storageBucket: "galery-581f2.appspot.com",
  messagingSenderId: "478577143070",
  appId: "1:478577143070:web:d8954cee3808ea2cb52d0f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const projectStorage = app.storage();

const projectFirestore = app.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectStorage, projectFirestore, timestamp };

import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9HPiMuybNyFczfwCw2hhJCbNqkgeDSM0",
  authDomain: "et-homes-5c2e0.firebaseapp.com",
  projectId: "et-homes-5c2e0",
  storageBucket: "et-homes-5c2e0.appspot.com",
  messagingSenderId: "1053061660379",
  appId: "1:1053061660379:web:4767debae705d63ebb56fe",
  measurementId: "G-8FS4Y0RGRB",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { db, auth, storage, provider };

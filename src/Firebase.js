import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAzj-qRnqRZ9DNryXNljvCE5ugv32s1lFs",
    authDomain: "ethio-homes-51f7d.firebaseapp.com",
    projectId: "ethio-homes-51f7d",
    storageBucket: "ethio-homes-51f7d.appspot.com",
    messagingSenderId: "266443645152",
    appId: "1:266443645152:web:84aa51537a67bcd7dcb085",
    measurementId: "G-SW8Z5GQQSY"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export {db, auth, storage}
import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDncqpKl8M3kHVzuzwXqxDTpEuQj4TOpI",
    authDomain: "fir-31b71.firebaseapp.com",
    projectId: "fir-31b71",
    storageBucket: "fir-31b71.appspot.com",
    messagingSenderId: "207123194706",
    appId: "1:207123194706:web:e3787b0cadbb0ab444908b",
    measurementId: "G-P4FYPRS47W"
  };


export const Firebase = firebase.initializeApp(firebaseConfig)
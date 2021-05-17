import firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";

import 'firebase/auth'

  var firebaseConfig = {
    apiKey: "AIzaSyCQDTs5oQNHMT2HnaBXA7dWwBjRyej8QYY",
    authDomain: "react-expense-applicatio-387bc.firebaseapp.com",
    projectId: "react-expense-applicatio-387bc",
    storageBucket: "react-expense-applicatio-387bc.appspot.bcom",
    messagingSenderId: "14005040933",
    appId: "1:14005040933:web:3b8d71a8448a144d538ccc",
    measurementId: "G-PPELGYSP2X"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;
  export const auth = firebase.auth();
  export const db = getFirestore();

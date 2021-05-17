import firebase from "firebase";
require("firebase/firestore");

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

  const db=firebase.firestore();

  export const auth=firebase.auth();
  export const firestore=firebase.firestore;
  export default db;
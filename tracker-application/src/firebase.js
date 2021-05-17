import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCQDTs5oQNHMT2HnaBXA7dWwBjRyej8QYY",
  authDomain: "react-expense-applicatio-387bc.firebaseapp.com",
  databaseURL:
    "https://react-expense-applicatio-387bc-default-rtdb.firebaseio.com",
  projectId: "react-expense-applicatio-387bc",
  storageBucket: "react-expense-applicatio-387bc.appspot.com",
  messagingSenderId: "14005040933",
  appId: "1:14005040933:web:3b8d71a8448a144d538ccc",
  measurementId: "G-PPELGYSP2X",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

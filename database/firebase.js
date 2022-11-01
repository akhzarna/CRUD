import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBTI8cc7gZNgYHXjfuLOKbdTFuBvPJga8I",
  authDomain: "bsebb-aebae.firebaseapp.com",
  projectId: "bsebb-aebae",
  storageBucket: "bsebb-aebae.appspot.com",
  messagingSenderId: "145961837615",
  appId: "1:145961837615:web:c2669ca7e90b18497a12da"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};

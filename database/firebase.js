import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCUPzkgmdxU6xK4-YJ3-PgIhk_3LE0b1Uw",
  authDomain: "home-44f28.firebaseapp.com",
  projectId: "home-44f28",
  storageBucket: "home-44f28.appspot.com",
  messagingSenderId: "833104399944",
  appId: "1:833104399944:web:1b1bf65868cd7fae28927d"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
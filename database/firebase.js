import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  aapiKey: "AIzaSyCiqU0ON2_lCM-GEWmSVjvxojkdIinVYfc",
  authDomain: "bseb-c0fee.firebaseapp.com",
  projectId: "bseb-c0fee",
  storageBucket: "bseb-c0fee.appspot.com",
  messagingSenderId: "179410805430",
  appId: "1:179410805430:web:a8c4e7e47dd42f000e3c17",
  measurementId: "G-QHFX360C3Q"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};

import firebase from "firebase";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDnyb-cL-52yX3b1AW29f2hX2Z326tDvjk",
  authDomain: "linkedin-clone-293cd.firebaseapp.com",
  projectId: "linkedin-clone-293cd",
  storageBucket: "linkedin-clone-293cd.appspot.com",
  messagingSenderId: "103480656442",
  appId: "1:103480656442:web:8dbe038628b7aacbfbeb03",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.fireStore();
const auth = firebase.auth();

export { db, auth };

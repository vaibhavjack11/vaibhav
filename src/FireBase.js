import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdqTaGCyEmDjAZqzro-RXSniMrTu9-uT0",
  authDomain: "rtomanagement-82457.firebaseapp.com",
  projectId: "rtomanagement-82457",
  storageBucket: "rtomanagement-82457.appspot.com",
  messagingSenderId: "268448581219",
  appId: "1:268448581219:web:cecac109453d06dbc15a56",
  measurementId: "G-NC8P4VFD08",
};

const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();

export { db, fire };

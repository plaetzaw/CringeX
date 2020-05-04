import firebase from "firebase/app";
import "firebase/storage";

/* Your web app's Firebase configuration */
const firebaseConfig = {
  apiKey: "AIzaSyC0mIxdP755YizzAjio3JpfvPaIEY0Gb-c",
  authDomain: "cringex-46ee6.firebaseapp.com",
  databaseURL: "https://cringex-46ee6.firebaseio.com",
  projectId: "cringex-46ee6",
  storageBucket: "cringex-46ee6.appspot.com",
  messagingSenderId: "130932762622",
  appId: "1:130932762622:web:4c068f3a0ace16912e02af",
  measurementId: "G-94HZ0H5ZGC",
};
/* // Initialize Firebase */
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { firebase, storage as default };

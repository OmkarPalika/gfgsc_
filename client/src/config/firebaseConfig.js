import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyAuy32bznPl2zuhQaFagFlUolmALTi5cfY",
  authDomain: "gfgsc-new.firebaseapp.com",
  projectId: "gfgsc-new",
  storageBucket: "gfgsc-new.appspot.com",
  messagingSenderId: "874564218949",
  appId: "1:874564218949:web:3559de1a606d141097b32c",
  measurementId: "G-54FLJ8RDS9"
=======
  apiKey: "AIzaSyAG7ZcUbMn7ExVlIix3BBAvWbtE_8ctCtc",
  authDomain: "gfgsc-88d2f.firebaseapp.com",
  projectId: "gfgsc-88d2f",
  storageBucket: "gfgsc-88d2f.appspot.com",
  messagingSenderId: "699126970418",
  appId: "1:699126970418:web:4a8233ad462ef77a50242b",
  measurementId: "G-1ZNJYGXMKX"
>>>>>>> d098abb31da788da7bc1b3bd1a51c17107121227
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const firebase = { app, analytics, auth };

export default firebase;

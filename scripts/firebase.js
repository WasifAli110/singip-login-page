// firebase ka sara kam idher hoga

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword, // signup
  signInWithEmailAndPassword, // login
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWPr367Ehb2GbeyxR6oeLMvYPEZRC_Uc8",
  authDomain: "login-singup-page-610b4.firebaseapp.com",
  projectId: "login-singup-page-610b4",
  storageBucket: "login-singup-page-610b4.appspot.com",
  messagingSenderId: "518366930056",
  appId: "1:518366930056:web:c4f7adfc632af904ea6b3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// def of authentication
// the process or action of verifying the identity of a user or process.

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// export let testing = "shehzad"

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};

// d/b signup & signin & login
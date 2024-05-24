// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTNSiaGug0P3K4ebCXk_94ri4tOOqhQ98",
  authDomain: "bl2wpn.firebaseapp.com",
  projectId: "bl2wpn",
  storageBucket: "bl2wpn.appspot.com",
  messagingSenderId: "735926140821",
  appId: "1:735926140821:web:757f754ca5edd3d24cc09c",
  measurementId: "G-6K0M0GLL5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
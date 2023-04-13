import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBAHWjWiBQZlph-cRZpEj9B-R-Kd4k-PQo",
  authDomain: "adopet-d9654.firebaseapp.com",
  projectId: "adopet-d9654",
  storageBucket: "adopet-d9654.appspot.com",
  messagingSenderId: "448383600489",
  appId: "1:448383600489:web:31560c86f398616e13dff8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

export const auth = getAuth()
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
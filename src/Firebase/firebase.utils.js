import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, signOut} from 'firebase/auth'


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

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);
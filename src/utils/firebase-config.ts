// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsdj4UpPSvkFiF7wfj9H4VJBC9nVxhPiQ",
  authDomain: "mrandy-portfolio.firebaseapp.com",
  projectId: "mrandy-portfolio",
  storageBucket: "mrandy-portfolio.appspot.com",
  messagingSenderId: "445811407942",
  appId: "1:445811407942:web:c3bd16b6243e3e4cbd5e47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Storage
export const storage = getStorage(app);

// Initialize firestore db
export const db = getFirestore(app);

// Initialize auth from firebase
export const auth = getAuth(app);

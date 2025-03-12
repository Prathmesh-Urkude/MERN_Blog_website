// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5578d.firebaseapp.com",
  projectId: "mern-blog-5578d",
  storageBucket: "mern-blog-5578d.firebasestorage.app",
  messagingSenderId: "125501752682",
  appId: "1:125501752682:web:5f4452ad06826a0dac5113",
  measurementId: "G-7C26CVEL7Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



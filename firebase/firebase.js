import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJsVAkv-zbisi7-wyRYWVK0Eg_rIo9AVI",
  authDomain: "petfinder-9a284.firebaseapp.com",
  projectId: "petfinder-9a284",
  storageBucket: "petfinder-9a284.appspot.com",
  messagingSenderId: "365015473209",
  appId: "1:365015473209:web:ff4ed3e3e878ff5fb581e8",
};

// Init Firebase
initializeApp(firebaseConfig);

// Init Services
export const auth = getAuth();
export const database = getFirestore();

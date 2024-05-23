import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBMLNQ-oL6oaE24QiLiRi0KX27cafmJB5E",
    authDomain: "cookingappdatabase.firebaseapp.com",
    projectId: "cookingappdatabase",
    storageBucket: "cookingappdatabase.appspot.com",
    messagingSenderId: "989772326015",
    appId: "1:989772326015:web:17016a4fca3bdc7ad70b4a",
    measurementId: "G-DMF49SE6RM"
};

const app = initializeApp(firebaseConfig);

export const FIREBASE_STORE = getFirestore(app);
export const FIREBASE_AUTH = getAuth(app);
export const FIREBASE_DATABASE = getDatabase(app);
export const FIREBASE_STORAGE = getStorage(app);

export const db = getFirestore(app);

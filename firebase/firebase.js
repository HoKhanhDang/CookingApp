import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyARqq_7VP6CXy9B_XPMSLVhdO_ZgpzCkhw",
    authDomain: "fb-cooking-app.firebaseapp.com",
    projectId: "fb-cooking-app",
    storageBucket: "fb-cooking-app.appspot.com",
    messagingSenderId: "69778010630",
    appId: "1:69778010630:web:d5b3fb455fa4543533c987",
    measurementId: "G-E5FTXJJK6M"
};

const app = initializeApp(firebaseConfig);

export const FIREBASE_STORE = getFirestore(app);
export const FIREBASE_AUTH = getAuth(app);
export const FIREBASE_DATABASE = getDatabase(app);
export const FIREBASE_STORAGE = getStorage(app);

export const db = getFirestore(app);

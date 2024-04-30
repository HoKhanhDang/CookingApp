import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

export const db = getFirestore(app);
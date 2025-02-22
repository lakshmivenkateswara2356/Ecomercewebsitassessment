// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB8zpj-gKHLLpZfbO2Gw6cHi7sc7NiggJ8",
    authDomain: "clevrees-3dc35.firebaseapp.com",
    projectId: "clevrees-3dc35",
    storageBucket: "clevrees-3dc35.firebasestorage.app",
    messagingSenderId: "377070238215",
    appId: "1:377070238215:web:e534b4361ba785e0b908a2",
    measurementId: "G-LWYC2LZ1NP"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



  

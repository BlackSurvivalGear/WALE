// WÁLÉ Firebase client bootstrap.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAShCH9OTqqr89Niozfv_86fMiRvExREgg",
  authDomain: "wale-5bbdd.firebaseapp.com",
  projectId: "wale-5bbdd",
  storageBucket: "wale-5bbdd.firebasestorage.app",
  messagingSenderId: "765785458258",
  appId: "1:765785458258:web:8131a35a1f75610379c18b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

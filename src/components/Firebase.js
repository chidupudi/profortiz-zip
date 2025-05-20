// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFjJq6pSbcYaTf-bkqYoLuQ7QEdTz3M34",
  authDomain: "profortiz-56e25.firebaseapp.com",
  projectId: "profortiz-56e25",
  storageBucket: "profortiz-56e25.firebasestorage.app",
  messagingSenderId: "323362572680",
  appId: "1:323362572680:web:5a955e42c7bca25a95d23d",
  measurementId: "G-GE7VJY796Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, db, analytics };
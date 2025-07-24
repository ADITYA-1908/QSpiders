//! connect your project with firebase
import { initializeApp } from "firebase/app";
//! manage Firebase Authentication.
import { getAuth } from "firebase/auth";
// //! access to Firebase Firestore, which is a NoSQL cloud database.
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};
//! initializes your Firebase app
const app = initializeApp(firebaseConfig);

//! initialized app and exports it.
//! operations like adding, reading, updating, or deleting
export const db = getFirestore(app);
//!export Authentication
export const auth = getAuth(app);

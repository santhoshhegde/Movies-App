// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "movies-app-34f3c.firebaseapp.com",
  projectId: "movies-app-34f3c",
  storageBucket: "movies-app-34f3c.firebasestorage.app",
  messagingSenderId: "660784606912",
  appId: "1:660784606912:web:13052456136e7f0a57c725",
  measurementId: "G-CE71PG0CNE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

/*
firebase deploy
firebase init
firebase login
npm install -g firebase-tools 
*/

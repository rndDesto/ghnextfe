// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2AsOY6xoY3XQvgvsLh3C1ueR4Sci2BcU",
  authDomain: "ghfepilot.firebaseapp.com",
  projectId: "ghfepilot",
  storageBucket: "ghfepilot.appspot.com",
  messagingSenderId: "517293952235",
  appId: "1:517293952235:web:527c5a4def0a5f2191c2ae",
  measurementId: "G-59BXYZVZ3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
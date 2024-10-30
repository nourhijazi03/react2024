// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQnkzIKBDebvvqF31pMIkQcnrnlSszI74",
  authDomain: "backend1-5c959.firebaseapp.com",
  databaseURL:
    "https://backend1-5c959-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "backend1-5c959",
  storageBucket: "backend1-5c959.firebasestorage.app",
  messagingSenderId: "133948742234",
  appId: "1:133948742234:web:e4b935d7f90714ff495663",
  measurementId: "G-JVCL9D11PB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;

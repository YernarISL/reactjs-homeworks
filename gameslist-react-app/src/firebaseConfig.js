// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7CiTlauA7BlVF6NUPZzXiSa7SleT4m40",
  authDomain: "games-list-bb857.firebaseapp.com",
  projectId: "games-list-bb857",
  storageBucket: "games-list-bb857.firebasestorage.app",
  messagingSenderId: "477509101806",
  appId: "1:477509101806:web:12a032fbe2c7743c666bff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }
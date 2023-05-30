// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVvD8KXKoeCsggkUkBq1iVDiprBTRkQTY",
  authDomain: "web-slutprojekt-12ddb.firebaseapp.com",
  projectId: "web-slutprojekt-12ddb",
  storageBucket: "web-slutprojekt-12ddb.appspot.com",
  messagingSenderId: "22916191463",
  appId: "1:22916191463:web:9db596d1d6d3f21d25fe42",
  measurementId: "G-EYR4784J9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
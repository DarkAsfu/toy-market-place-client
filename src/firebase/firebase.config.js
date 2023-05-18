// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmNHfRUHc0wdPUKTTkayhSqevTR35ntyw",
  authDomain: "toy-car-trader.firebaseapp.com",
  projectId: "toy-car-trader",
  storageBucket: "toy-car-trader.appspot.com",
  messagingSenderId: "246904850611",
  appId: "1:246904850611:web:588b9f2327204bda6408c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
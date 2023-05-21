// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3batoW9JCTjyZ0DxLWoTZU8FVZ1Bv11A",
  authDomain: "whereiswaldo-ad1a0.firebaseapp.com",
  projectId: "whereiswaldo-ad1a0",
  storageBucket: "whereiswaldo-ad1a0.appspot.com",
  messagingSenderId: "299762424493",
  appId: "1:299762424493:web:c4bb3e1ad6900157ff8424",
  measurementId: "G-31YKF3QB3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
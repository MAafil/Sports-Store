// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAko7iCLqWF3_iDEMdRg5HfYyDLakdo61E",
  authDomain: "javascript4-a0773.firebaseapp.com",
  projectId: "javascript4-a0773",
  storageBucket: "javascript4-a0773.appspot.com",
  messagingSenderId: "594934894204",
  appId: "1:594934894204:web:2e509f8cccadbd2afdc3f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

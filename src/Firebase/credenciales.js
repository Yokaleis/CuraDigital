// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxBaEhWZ3ugntHrfiylFBQy1fz4f_TBek",
  authDomain: "urgentcare-2941d.firebaseapp.com",
  projectId: "urgentcare-2941d",
  storageBucket: "urgentcare-2941d.firebasestorage.app",
  messagingSenderId: "1007647518295",
  appId: "1:1007647518295:web:b9463bd189a6ca39233d12"
};

// Initialize Firebase
const appFirebaseCD = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebaseCD);
export default appFirebaseCD;
export const auth = getAuth(appFirebaseCD);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBCqURUrp0WuuPKAahNiv-Lv8v9mcQfzrk",
  authDomain: "cook-391705.firebaseapp.com",
  projectId: "cook-391705",
  storageBucket: "cook-391705.appspot.com",
  messagingSenderId: "604183858597",
  appId: "1:604183858597:web:ad9d9278b18c109a456c4c"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { auth, db, storage };
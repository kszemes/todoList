import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {firebaseConfig} from "./firebaseConfig.js";


// Your web app's Firebase configuration
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// adatbázis eléréshez kell egy referencia
export const db = getFirestore(app);
export const auth = getAuth(app);
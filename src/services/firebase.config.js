import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgpG69t_YMBH-kWTyoZc9e0oevuZJm64Y",
  authDomain: "react-firebase-a7101.firebaseapp.com",
  projectId: "react-firebase-a7101",
  storageBucket: "react-firebase-a7101.firebasestorage.app",
  messagingSenderId: "287674206127",
  appId: "1:287674206127:web:299ce41b47fa87a673515a",
  measurementId: "G-1C2591HT91",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

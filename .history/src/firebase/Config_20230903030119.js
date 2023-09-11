import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDVzwQ4huqytbmkGwq2u31QMG3cpus4DDI",
  authDomain: "contact-application-ce4fe.firebaseapp.com",
  projectId: "contact-application-ce4fe",
  storageBucket: "contact-application-ce4fe.appspot.com",
  messagingSenderId: "802585250249",
  appId: "1:802585250249:web:489b8b06430f370a978018"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
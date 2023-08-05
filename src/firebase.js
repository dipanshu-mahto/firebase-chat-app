import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClaJuO11eWEUGVtAGTkjREqdz98OV7HZQ",
  authDomain: "chat-app-73124.firebaseapp.com",
  projectId: "chat-app-73124",
  storageBucket: "chat-app-73124.appspot.com",
  messagingSenderId: "210485220026",
  appId: "1:210485220026:web:f13088761045f537e92883"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

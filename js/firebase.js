import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwBweYth4f-SnFLNqoh9Sw2JjE19nNLuA",
  authDomain: "peminjaman-barang-687a3.firebaseapp.com",
  projectId: "peminjaman-barang-687a3",
  storageBucket: "peminjaman-barang-687a3.firebasestorage.app",
  messagingSenderId: "420809674682",
  appId: "1:420809674682:web:7dcf78e1961c97c5715783",
  measurementId: "G-2E9J737GX1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

import { auth, db } from "./firebase.js";
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Email dan password wajib diisi");
    return;
  }

  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const user = cred.user;

    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef);

    // 🔥 AUTO CREATE USER DOCUMENT
    if (!snap.exists()) {
      await setDoc(userRef, {
        email: user.email,
        role: "user",
        departemen: "",
        createdAt: serverTimestamp()
      });
      console.log("User document created");
    }

    window.location.href = "dashboard.html";

  } catch (err) {
    alert(err.message);
    console.error(err);
  }
};

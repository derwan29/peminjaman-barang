import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

window.login = async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  const cred = await signInWithEmailAndPassword(auth, email, password);
  const snap = await getDoc(doc(db, "users", cred.user.uid));

  const role = snap.data().role;
  location.href = role === "admin" ? "dashboard.html" : "peminjaman.html";
};

import { auth, db } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

export function requireAuth(needAdmin=false){
  onAuthStateChanged(auth, async user => {
    if(!user) return location.href="index.html";
    if(needAdmin){
      const snap = await getDoc(doc(db,"users",user.uid));
      if(snap.data().role!=="admin") location.href="peminjaman.html";
    }
  });
}

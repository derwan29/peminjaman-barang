import { db } from "./firebase.js";
import { collection, addDoc, getDocs, deleteDoc, doc } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

export async function loadBarang(){
  const snap = await getDocs(collection(db,"barang"));
  list.innerHTML="";
  snap.forEach(d=>{
    list.innerHTML+=`
      <li>${d.data().nama} (${d.data().stok})
      <button onclick="hapus('${d.id}')">Hapus</button></li>`;
  });
}

window.tambahBarang = async ()=>{
  await addDoc(collection(db,"barang"),{
    nama:nama.value, stok:+stok.value, kondisi:kondisi.value
  });
  loadBarang();
};

window.hapus = async id=>{
  await deleteDoc(doc(db,"barang",id));
  loadBarang();
};

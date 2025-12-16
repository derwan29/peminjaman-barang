import { db, auth } from "./firebase.js";
import { collection, addDoc, getDocs, updateDoc, doc } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

window.pinjam = async ()=>{
  await addDoc(collection(db,"peminjaman"),{
    user_id: auth.currentUser.uid,
    barang_id: barang.value,
    tanggal_pinjam: tglPinjam.value,
    tanggal_kembali: tglKembali.value,
    status: "dipinjam"
  });
  load();
};

async function load(){
  const snap = await getDocs(collection(db,"peminjaman"));
  table.innerHTML="";
  snap.forEach(d=>{
    const x=d.data();
    table.innerHTML+=`
      <tr><td>${x.barang_id}</td><td>${x.status}</td>
      <td>${x.status==="dipinjam"
        ?`<button onclick="kembali('${d.id}')">Kembalikan</button>`:""}</td></tr>`;
  });
}
window.kembali = async id=>{
  await updateDoc(doc(db,"peminjaman",id),{status:"dikembalikan"});
  load();
};

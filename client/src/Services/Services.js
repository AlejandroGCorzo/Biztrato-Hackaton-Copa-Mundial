import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { TEAMSS } from "../redux/info/infoActions";

const firebaseConfig = {
  apiKey: "AIzaSyBsALI3iBxUgETpqw9uIHmwvtpKqwicCPo",
  authDomain: "hackaton-ad555.firebaseapp.com",
  projectId: "hackaton-ad555",
  storageBucket: "hackaton-ad555.appspot.com",
  messagingSenderId: "274343359124",
  appId: "1:274343359124:web:d27e5c406d4ee3244efa81"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const col = collection(db, "campeon");

export const getTotalVotes = async () => {
  const snapshot = await getDocs(col);
  const data = snapshot.docs.map(doc => ({ ...doc.data() }));
  return data;
}

export const setVote = async (vote) => {
  try {
    const docRef = doc(db, "campeon", vote);
    const snapDoc = await getDoc(docRef);
    const { votos } = snapDoc.data();
    await updateDoc(docRef, { votos: votos + 1 });
  } catch (error) {
    console.error("Hubo un problema en la conexión con Firebase: ", error)
  }
}

export const setData = async () => {
  const teams = await TEAMSS()
  console.log(teams)
  const set = async (team) => {
    await setDoc(doc(db, "campeon", team), { pais: team, votos: 0 })
  }
  teams.forEach(team => set(team.name))
}
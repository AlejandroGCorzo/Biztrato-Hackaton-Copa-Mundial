import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

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

export const getTotalVotes = async () => {

}

export const setVote = async (vote) => {
  const col = collection(db, "votos");
  const res = await addDoc(col, vote);
  return res;
}
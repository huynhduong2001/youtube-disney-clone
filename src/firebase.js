import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwgSYFx_wTm_lmiOK7KAiIVZP29FbPOvA",
  authDomain: "disneyplus-clone-5d7de.firebaseapp.com",
  projectId: "disneyplus-clone-5d7de",
  storageBucket: "disneyplus-clone-5d7de.appspot.com",
  messagingSenderId: "610863952184",
  appId: "1:610863952184:web:d0eb272e1e59cfa2c011cd",
  measurementId: "G-5B4BCREM12",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBuNAjsmjNe2s4d09Jt0j2Z82R8au2mCo",
  authDomain: "technovision-48d0a.firebaseapp.com",
  projectId: "technovision-48d0a",
  storageBucket: "technovision-48d0a.appspot.com",
  messagingSenderId: "991841608606",
  appId: "1:991841608606:web:471df4647a0d7fc0ce6c8f",
  measurementId: "G-KFWMD94F6Q",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);

export { app };
export { auth };
export default db;
export { provider };

import { initializeApp } from "firebase/app";
import {GoogleAuthProvider , getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDRnNDqyUG1rfUHm0kcWJCFdVvifPgBCZQ",
  authDomain: "react-auth-a4481.firebaseapp.com",
  projectId: "react-auth-a4481",
  storageBucket: "react-auth-a4481.appspot.com",
  messagingSenderId: "534602419305",
  appId: "1:534602419305:web:713628e852b96d14b9a6f8",
  measurementId: "G-6FDJL2RVQ0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export default app;

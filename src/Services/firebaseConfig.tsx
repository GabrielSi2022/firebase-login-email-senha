
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4G14vK2cwsIj4bJRHKC6h6q2Iy70yMtI",
  authDomain: "fir-aut-b2751.firebaseapp.com",
  projectId: "fir-aut-b2751",
  storageBucket: "fir-aut-b2751.appspot.com",
  messagingSenderId: "22565063484",
  appId: "1:22565063484:web:842c737142b762200f2c39"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
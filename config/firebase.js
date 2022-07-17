// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCJmKLU45ZzEhAYHN45HnGo34StWAJq3NU",
  authDomain: "skrate-5bcb1.firebaseapp.com",
  projectId: "skrate-5bcb1",
  storageBucket: "skrate-5bcb1.appspot.com",
  messagingSenderId: "782138687639",
  appId: "1:782138687639:web:52310524dfb4fa7bb3a9d2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

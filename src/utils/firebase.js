// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCMKxk_uHMRhnJm-AiTaD_GxPEa-snaEiA",
  authDomain: "netflix-gpt-2bf32.firebaseapp.com",
  projectId: "netflix-gpt-2bf32",
  storageBucket: "netflix-gpt-2bf32.appspot.com",
  messagingSenderId: "30136824617",
  appId: "1:30136824617:web:7a25463551ad7675743d38",
  measurementId: "G-HZRY2HLHMR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(); 

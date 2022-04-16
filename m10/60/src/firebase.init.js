// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6YRaZNk_YiSxkys7grNIRMK_GWMKTrd0",
  authDomain: "genius-car60.firebaseapp.com",
  projectId: "genius-car60",
  storageBucket: "genius-car60.appspot.com",
  messagingSenderId: "1080015435508",
  appId: "1:1080015435508:web:c526f83f7de8b1eb74d0a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
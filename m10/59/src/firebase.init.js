// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2E3vq9SX9d7FTnkhqpTlP7YrGCnW-rN4",
  authDomain: "ema-john-f8dcc.firebaseapp.com",
  projectId: "ema-john-f8dcc",
  storageBucket: "ema-john-f8dcc.appspot.com",
  messagingSenderId: "205729095839",
  appId: "1:205729095839:web:c8996c5173855ea85ec2aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
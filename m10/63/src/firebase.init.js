// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyQxeI59Mv0MdgPEnIy0Fi_WeBVYxQ9YE",
  authDomain: "political-consultant62.firebaseapp.com",
  projectId: "political-consultant62",
  storageBucket: "political-consultant62.appspot.com",
  messagingSenderId: "701950812939",
  appId: "1:701950812939:web:2d9e22799daabc4afaf80e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
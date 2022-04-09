import './App.css';
import app from './firebase.init';
import {getAuth, GithubAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})
  const provider = new GithubAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch((error) => {
      console.error('error', error);
    })
  }
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      setUser({})
    })
    .catch(error => {
      setUser({});
    })
  }
  return (
    <div className="App">
      {
        user.email ? <button onClick={handleSignOut}> SignOut </button> :
        <button onClick={handleSignIn}> SignIn </button>
      }
      
      <h2>Name: {user.displayName}</h2>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;

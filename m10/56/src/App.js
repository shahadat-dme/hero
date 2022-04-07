import './App.css';
import app from './firebase.init';
import {getAuth, GithubAuthProvider, signInWithPopup} from 'firebase/auth'

const auth = getAuth(app)

function App() {
  const provider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.log('error',error);
    })
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google SignIn</button>
    </div>
  );
}

export default App;

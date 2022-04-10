import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import app from './firebase.init';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('')
  const [registered, setRegistered] = useState(false)
  const [password, setPassword] = useState('')
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('')
  const [name, setName] = useState('');

  const handleNameBlur= event =>{
    setName(event.target.value);
  }

  const handleEmailBlur = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  }
  const handlePasswordBlur = (event) => {
    // console.log(event.target.value);
    setPassword(event.target.value);
  }
  const handleRegisteredChange = (event) => {
    setRegistered(event.target.checked);
  }
  const handleFormSubmit = event => {
    // console.log('form submitted', email, password);
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/.test(password)){
      setError('please set validation password')
      return;
    }
    setValidated(true);
    if(registered){
      signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      })
    }
    else{
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setEmail('');
        setPassword('');
    
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
      event.preventDefault();
      }
    }
    const handlePasswordReset = () => {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log('email sent')
        })
    }
  
    const setUserName = () =>{
      updateProfile(auth.currentUser, {
        displayName: name
      })
      .then(() =>{
        console.log('updating name');
      })
      .catch(error =>{
        setError(error.message);
      })
    }
    const verifyEmail = () => {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          console.log('Email Verification Sent');
        })
    }
  return (
    <div>
      <div className="registration w-50 mx-auto mt-5">
        <h2 className="text-primary">Please {registered ? 'Login' : 'Register'}!!</h2>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          { !registered && <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control onBlur={handleNameBlur} type="text" placeholder="Your Name" required />
            <Form.Control.Feedback type="invalid">
              Please provide your name.
            </Form.Control.Feedback>
          </Form.Group>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered?" />
          </Form.Group>

          <p className="text-danger">{error}</p>
          <Button onClick={handlePasswordReset} variant="link">Forget Password?</Button>
          <br />
          <Button variant="primary" type="submit">
            {registered ? 'Login' : 'Register'}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;

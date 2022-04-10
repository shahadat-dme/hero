import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import app from './firebase.init';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';



const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('')

  const handleEmailBlur = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  }
  const handlePassworwBlur = (event) => {
    // console.log(event.target.value);
    setPassword(event.target.value);
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

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);

  })
  .catch((error) => {
    console.log(error);
    // const errorCode = error.code;
    // const errorMessage = error.message;

  });

  }
  return (
    <div className="">
      <div className='registration w-50 mx-auto mt-5'>
        <h2 className='text-primary'>Please Registration</h2>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type='invalid'>
            Please provide a valid email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePassworwBlur} type="password" placeholder="Password" required/>
          <Form.Control.Feedback type='invalid'>
            Please provide a valid password
          </Form.Control.Feedback>
        </Form.Group>
        <p className='text-danger'>{error}</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>
  );
}

export default App;

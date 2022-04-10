// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import app from './firebase.init';
import { getAuth } from "firebase/auth";



const auth = getAuth(app);

function Form() {
    const handleEmailChange = (event) => {
        // console.log('Something Typed');
        console.log(event.target.value);
    }
    const handleEmailBlur = (event) => {
        console.log(event.target.value);
    }
    const handlePassworwBlur = (event) => {
        console.log(event.target.value);
    }
    const handleFormSubmit = event => {
        console.log('form submitted');
        event.preventDefault();
    }
    return (
        <div className="App">
            <form onSubmit={handleFormSubmit}>
                {/* <input onChange={handleEmailChange} type='email' name='' id=''/> */}
                <input onBlur={handleEmailBlur} type='email' name='' id='' />
                <br />
                <input onBlur={handlePassworwBlur} type='password' name='' id='' />
                <br />
                <input type='submit' value='Login' />
            </form>
        </div>
    );
}

export default Form;

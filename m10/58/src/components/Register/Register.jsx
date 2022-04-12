import React from 'react'

const Register = () => {
    return (
        <div>
            <h2>Please Register now</h2>
            <form>
                <input type="text" placeholder='Your Name' />
                <br />
                <input type='email' placeholder='Your Email' />
                <br />
                <input type='password' name='' id='' placeholder='password' />
                <input type='submit' value="Register" />
            </form>
        </div>
    )
}

export default Register
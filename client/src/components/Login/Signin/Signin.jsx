import React, { useState } from 'react';
import './Signin.css';

function Signin({handleSignIn, errorMessage}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const checkUser = () => {
        handleSignIn(email, password)
    }

    return (
        <div className="signin">
            <div className="login__form">
                <input
                    className="login__username"
                    placeholder="Email" 
                    type="text"
                    onChange={e => setEmail(e.target.value)}/>
                <br/>
                <br/>
                <input
                    className="login__password"
                    placeholder="Password" 
                    type="password"
                    onChange={e => setPassword(e.target.value)}/>
                <br/>
                <br/>
                <input
                    className="login__submit"
                    value="Sign In"
                    type="submit"
                    onClick={checkUser}/>
            </div>
            <div className="errorMessage">
                <br/>
                <br/>
                <h4 >{errorMessage}</h4>
            </div>
        </div>
    )
}

export default Signin

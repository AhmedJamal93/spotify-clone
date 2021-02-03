import React, { useState } from 'react';
import './Signin.css';

function Signin({handleSignIn}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const checkUser = () => {
        handleSignIn(email, password)
    }

    return (
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
                    type="text"
                    onChange={e => setPassword(e.target.value)}/>
                    <br/>
                    <br/>
                <input
                    className="login__submit"
                    value="Sign In"
                    type="submit"
                    onClick={checkUser}/>
        </div>
    )
}

export default Signin

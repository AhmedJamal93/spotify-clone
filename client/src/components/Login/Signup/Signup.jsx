import React, { useState } from 'react';
import './Signup.css';

function Signup({handleSignUp}) {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const checkUser = () => {
        handleSignUp(first, last, email, password)
    }

    return (
        <div
            className="login__form">
                <input
                    className="login__firstname"
                    placeholder="First Name" 
                    type="text"
                    required
                    onChange={(e) => setFirst(e.target.value)}
                    onClick={(e) => setFirst(e.target.value)}/>
                <br/>
                <br/>
                <input
                    className="login__lastname"
                    placeholder="Last Name" 
                    type="text"
                    required
                    onChange={(e) => setLast(e.target.value)}
                    onClick={(e) => setLast(e.target.value)}/>
                <br/>
                <br/>
                <input
                    className="login__username"
                    placeholder="Email" 
                    type="text"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    onClick={(e) => setEmail(e.target.value)}/>                
                <br/>
                <br/>
                <input
                    className="login__password"
                    placeholder="Password" 
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    onClick={(e) => setPassword(e.target.value)}/>                
                <br/>
                <br/>
                <input
                    className="login__submit"
                    value="Sign Up"
                    type="submit"
                    onClick={checkUser}/>
        </div>
    )
}

export default Signup

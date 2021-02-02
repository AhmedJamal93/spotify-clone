import React from 'react';
import './Signup.css';

function Signup() {
    return (
        <div>
            <form 
                className="login__form" 
                action="">
                <input
                    className="login__firstname"
                    placeholder="First Name" 
                    type="text"/>
                <br/>
                <br/>
                <input
                    className="login__lastname"
                    placeholder="Last Name" 
                    type="text"/>
                <br/>
                <br/>
                <input
                    className="login__username"
                    placeholder="Email" 
                    type="text"/>
                <br/>
                <br/>
                <input
                    className="login__password"
                    placeholder="Password" 
                    type="text"/>
                <br/>
                <br/>
                <input
                    className="login__submit"
                    value="Sign Up"
                    type="submit"/>
            </form>  
        </div>
    )
}

export default Signup

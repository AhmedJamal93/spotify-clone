import React from 'react';
import './Signin.css';

function Signin() {
    return (
        <div>
            <form 
                className="login__form" 
                action="">
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
                    value="Sign In"
                    type="submit"/>
            </form>  
        </div>
    )
}

export default Signin

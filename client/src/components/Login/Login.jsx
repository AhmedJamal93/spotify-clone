import React from 'react';
import './Login.css';
import LoginTab from './LoginTab/LoginTab';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import logo from '../images/spotify-logo.svg'

function Login({handleLoginChange, loginActive}) {


    return (
        <div className="login">
            <img 
                className="login__logo" 
                src={logo} 
                alt="Spotify Logo White"
            />
            <div className="login__register">
                <LoginTab
                    title="Sign In" 
                    loginActive={loginActive}
                    index={0}
                    handleLoginChange={handleLoginChange}/>
                <LoginTab
                    title="Sign Up" 
                    loginActive={loginActive}
                    index={1}
                    handleLoginChange={handleLoginChange}/>
            </div>
            <br/>
            <div className="login__signinForm">
                {loginActive === 0 && 
                <Signin />
                }
                {loginActive === 1 && 
                <Signup />
                }
            </div>
        </div>
    )
}

export default Login

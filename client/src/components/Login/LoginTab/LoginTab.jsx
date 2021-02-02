import React from 'react';
import './LoginTab.css'

function LoginTab({title, index, handleLoginChange, loginActive}) {

    const changeIndex = () => {
        handleLoginChange(index)
    }

    return (
        <div onClick={changeIndex} className={`login__tab ${loginActive === index && 'active'}`}>
            <h4>{title}</h4>
        </div>
    )
}

export default LoginTab
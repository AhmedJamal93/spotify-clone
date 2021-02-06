import React from 'react';
import './Menu.css';

function Menu({handleSignOut}) {
    return (
        <div 
            className="menu"
            onClick={handleSignOut}>
            <h4>Logout</h4>
        </div>
    )
}

export default Menu

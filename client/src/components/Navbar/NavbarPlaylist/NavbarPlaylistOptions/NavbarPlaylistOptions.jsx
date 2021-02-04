import React from 'react';
import './NavbarPlaylistOptions.css';

function NavbarPlaylistOptions({title}) {
    
    // const changeIndex = () => {
    //     handleNavbarChange(index)
    // }
    
    return (
        <div 
            className={`navbarOption `}
            
        >
            
            <h4>{title}</h4>
        </div>
    )
}

export default NavbarPlaylistOptions
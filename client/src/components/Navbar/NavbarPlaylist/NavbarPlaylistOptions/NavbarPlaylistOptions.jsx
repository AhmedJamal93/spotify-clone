import React from 'react';
import './NavbarPlaylistOptions.css';

function NavbarPlaylistOptions({title, index, handleNavbarChange, navbarActive}) {
    
    const changeIndex = () => {
        handleNavbarChange(index, title)
    }
    
    return (
        <div 
            className={`navbarPlaylistOption ${navbarActive === index && 'playlistActive'}`}
            onClick={changeIndex}
        >
            <h4>{title}</h4>
        </div>
    )
}

export default NavbarPlaylistOptions
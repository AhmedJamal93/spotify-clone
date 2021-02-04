import React from 'react';
import './NavbarPlaylistOptions.css';

function NavbarPlaylistOptions({title, handlePlaylistChange, index, playlistActive, handleNavbarChange, navbarActive}) {
    
    const changeIndex = () => {
        handleNavbarChange(index)
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
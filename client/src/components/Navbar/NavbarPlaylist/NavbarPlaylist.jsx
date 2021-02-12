import React from 'react';
import './NavbarPlaylist.css'
import NavbarPlaylistOption from './NavbarPlaylistOptions/NavbarPlaylistOptions';

function NavbarPlaylist({handleNavbarChange, navbarActive, playlists}) {

    return (
        <div className="navbarPlaylist">
            <div className="navbarPlaylist__header">
                YOUR LIBRARY
            </div>
            <div className="navbarPlaylist__options">
                {playlists.map((playlist, i) => {
                    return(
                        <NavbarPlaylistOption
                            key={i}
                            title={playlist.title}
                            handleNavbarChange={handleNavbarChange}
                            index={i+3}
                            navbarActive={navbarActive}/>
                    )
                })}
            </div>
        </div>
    )
}

export default NavbarPlaylist

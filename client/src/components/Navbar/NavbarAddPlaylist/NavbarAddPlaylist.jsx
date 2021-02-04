import React from 'react';
import './NavbarAddPlaylist.css';

function NavbarAddPlaylist({Icon}) {
    return (
        <div className="navbarAddPlaylist">
            <Icon className="navbarAddPlaylist__icon"/>
            <h4 className="navbarAddPlaylist__text">New Playlist</h4>
        </div>
    )
}

export default NavbarAddPlaylist

import React from 'react';
import './NavbarPlaylist.css'
import NavbarPlaylistOption from './NavbarPlaylistOptions/NavbarPlaylistOptions';

function NavbarPlaylist() {
    return (
        <div className="navbarPlaylist">
            <div className="navbarPlaylist__header">
                YOUR LIBRARY
                <NavbarPlaylistOption
                    title='Made For You'/>
                <NavbarPlaylistOption
                    title='Recently Played'/>
                <NavbarPlaylistOption
                    title='Liked Songs'/>
                <NavbarPlaylistOption
                    title='Albums'/>
                <NavbarPlaylistOption
                    title='Artists'/>
                <NavbarPlaylistOption
                    title='Podcasts'/>
            </div>
        </div>
    )
}

export default NavbarPlaylist

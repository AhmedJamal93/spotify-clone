import React from 'react';
import './NavbarPlaylist.css'
import NavbarPlaylistOption from './NavbarPlaylistOptions/NavbarPlaylistOptions';

function NavbarPlaylist({handlePlaylistChange, playlistActive, handleNavbarChange, navbarActive}) {
    return (
        <div className="navbarPlaylist">
            <div className="navbarPlaylist__header">
                YOUR LIBRARY
            </div>
            <div className="navbarPlaylist__options">
                <NavbarPlaylistOption
                    title='Made For You'
                    handleNavbarChange={handleNavbarChange}
                    index={3}
                    navbarActive={navbarActive}/>
                <NavbarPlaylistOption
                    title='Recently Played'
                    handleNavbarChange={handleNavbarChange}
                    index={4}
                    navbarActive={navbarActive}/>
                <NavbarPlaylistOption
                    title='Liked Songs'
                    handleNavbarChange={handleNavbarChange}
                    index={5}
                    navbarActive={navbarActive}/>
                <NavbarPlaylistOption
                    title='Albums'
                    handleNavbarChange={handleNavbarChange}
                    index={6}
                    navbarActive={navbarActive}/>
                <NavbarPlaylistOption
                    title='Artists'
                    handleNavbarChange={handleNavbarChange}
                    index={7}
                    navbarActive={navbarActive}/>
                <NavbarPlaylistOption
                    title='Podcasts'
                    handleNavbarChange={handleNavbarChange}
                    index={8}
                    navbarActive={navbarActive}/>
            </div>
        </div>
    )
}

export default NavbarPlaylist

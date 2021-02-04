import React from 'react';
import './Navbar.css';
import NavbarOption from './NavbarOption/NavbarOption';
import NavbarPlaylist from './NavbarPlaylist/NavbarPlaylist';
import NavbarAddPlaylist from './NavbarAddPlaylist/NavbarAddPlaylist';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import RadioIcon from '@material-ui/icons/Radio';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Navbar({handleNavbarChange, handlePlaylistChange, navbarActive, playlistActive}) {
    return (
        <div className="navbar">
            <div className="navbar__options">
                <NavbarOption 
                    index={0}
                    handleNavbarChange={handleNavbarChange}
                    navbarActive={navbarActive}
                    className="home"
                    title="Home"
                    Icon={HomeIcon}/>
                <NavbarOption
                    index={1} 
                    handleNavbarChange={handleNavbarChange}
                    navbarActive={navbarActive}
                    title="Browse"
                    Icon={ListIcon}/>
                <NavbarOption
                    index={2} 
                    handleNavbarChange={handleNavbarChange}
                    navbarActive={navbarActive}
                    title="Radio"
                    Icon={RadioIcon}/>
            </div>
            <div className="navbar__playlists">
                <NavbarPlaylist 
                    // handlePlaylistChange={handlePlaylistChange}
                    // playlistActive={playlistActive}
                    handleNavbarChange={handleNavbarChange}
                    navbarActive={navbarActive}
                    />
            </div>
            <div className="navbarPlaylists__add">
                <NavbarAddPlaylist
                    Icon={AddCircleOutlineIcon} />
            </div>
        </div>
    )
}

export default Navbar

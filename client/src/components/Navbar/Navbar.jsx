import React from 'react';
import './Navbar.css';
import NavbarOption from './NavbarOption/NavbarOption';
import NavbarPlaylist from './NavbarPlaylist/NavbarPlaylist';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import RadioIcon from '@material-ui/icons/Radio';

function Navbar({handleNavbarChange, navbarActive}) {
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
                <NavbarPlaylist />
            </div>
        </div>
    )
}

export default Navbar

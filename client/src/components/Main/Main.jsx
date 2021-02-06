import React from 'react';
import './Main.css';
import Search from './Search/Search';
import Profile from './Profile/Profile';

function Main({header, first, last, handleOpenMenu, menuOpen, handleSignOut}) {
    return (
        <div className="main">
            <div className="main__search">
                <Search />
                <Profile 
                    first={first}
                    last={last}
                    handleOpenMenu={handleOpenMenu}
                    menuOpen={menuOpen}
                    handleSignOut={handleSignOut}/>
            </div>
            <div className="main__header">
                <h1>{header}</h1>
            </div>
        </div>
    )
}

export default Main

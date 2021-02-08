import React from 'react';
import './Main.css';
import Search from './Search/Search';
import Profile from './Profile/Profile';
import SingleCard from './SingleCard/SingleCard';

function Main({header, first, last, handleOpenMenu, menuOpen, handleSignOut, trending, handleSearch, search}) {
    return (
        <div className="main">
            <div className="main__search">
                <Search 
                    handleSearch={handleSearch}
                    search={search}/>
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
            <div className="main__music">
                {trending.map((single, i) => {
                    return(
                        <SingleCard 
                            track={single.strTrack}
                            album={single.strAlbum}
                            artist={single.strArtist}
                            cover={single.strAlbumThumb}/>
                     )
                })}
                
            </div>
        </div>
    )
}

export default Main

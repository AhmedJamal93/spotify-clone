import React from 'react';
import './Main.css';
import Search from './Search/Search';
import Profile from './Profile/Profile';
import SingleCard from './SingleCard/SingleCard';


function Main({header, first, last, handleOpenMenu, menuOpen, handleSignOut, trending, handleSearch, search, searchResults, navbarActive}) {
    
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
            
            {navbarActive != null && 
            <div>
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
            }
            {searchResults && 
            <div>    
                <div className="main__header">
                    <h1>Search</h1>
                </div>
                <div className="main__musicSearch">
                    {searchResults.map((single, i) => {
                        return(
                                <SingleCard 
                                    track={single.title}
                                    album={single.album.title}
                                    artist={single.artist.name}
                                    cover={single.album.cover}/>
                        )
                    })}
                </div>
            </div>
            }

            
        </div>
    )
}

export default Main

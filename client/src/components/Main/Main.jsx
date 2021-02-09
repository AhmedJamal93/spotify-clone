import React from 'react';
import './Main.css';
import Search from './Search/Search';
import Profile from './Profile/Profile';
import SingleCard from './SingleCard/SingleCard';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';


function Main({header, first, last, handleOpenMenu, menuOpen, handleSignOut, trending, handleSearch, search, searchResults}) {
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
            
            {!search && 
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
                {/* <Carousel 
                plugins={[
                    'arrows',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                         numberOfSlides: 2
                        }
                      }
                    ]}> */}
                    {searchResults.map((single, i) => {
                        return(
                                <SingleCard 
                                    track={single.title}
                                    album={single.album.title}
                                    artist={single.artist.name}
                                    cover={single.album.cover}/>
                        )
                    })}
                    {/* </Carousel> */}
                </div>
            </div>
            }

            
        </div>
    )
}

export default Main

import React from 'react';
import './SingleCard.css';

function SingleCard({track, album, artist, cover}) {
    return (
        <div className="singleCard">
            <img className="singleCard__image" src={cover} alt=""/>
            <h5 className="singleCard__track">{track}</h5>
            <h5 className="singleCard__artist">{artist}</h5>
            <h5 className="singleCard__album">{album}</h5>
        </div>
    )
}

export default SingleCard

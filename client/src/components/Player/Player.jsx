import React from 'react';
import './Player.css';
import SongDetails from './SongDetails/SongDetails';
import PlayerOptions from './PlayerOptions/PlayerOptions';
import PlayerRight from './PlayerRight/PlayerRight';

function Player() {
    return (
        <div className="player">
            <SongDetails />
            <PlayerOptions />
            <PlayerRight />
        </div>
    )
}

export default Player

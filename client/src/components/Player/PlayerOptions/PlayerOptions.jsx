import React from 'react';
import './PlayerOptions.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';

function PlayerOptions() {
    return (
        <div className="playeroptions">
            <ShuffleIcon />
            <SkipPreviousIcon />
            <PlayCircleOutlineIcon className="play"/>
            <SkipNextIcon />
            <RepeatIcon />
        </div>
    )
}

export default PlayerOptions

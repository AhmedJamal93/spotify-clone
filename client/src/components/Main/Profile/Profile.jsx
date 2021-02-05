import React from 'react';
import './Profile.css';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Profile({first, last}) {
    return (
        <div className="profile">
            <Avatar 
                className="profile__avatar"/>
            <h4 className="profile__text">{`${first} ${last}`}</h4>
            <ExpandMoreIcon 
                className="profile__expand"/> 
        </div>
    )
}

export default Profile

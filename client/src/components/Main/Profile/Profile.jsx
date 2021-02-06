import React from 'react';
import './Profile.css';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from './Menu/Menu';


function Profile({first, last, handleOpenMenu, menuOpen, handleSignOut}) {

    return (
        <div className="profile">
            <div className="profile__main">
                <Avatar 
                    className="profile__avatar"/>
                <h4 className="profile__text">{`${first} ${last}`}</h4>
                <ExpandMoreIcon 
                    className="profile__expand"
                    onClick={handleOpenMenu}/> 
            </div>
            {menuOpen && 
            <div className="profile__menu">
                <Menu 
                    handleSignOut={handleSignOut}/>
            </div>
             }
        </div>
        
    )
}

export default Profile

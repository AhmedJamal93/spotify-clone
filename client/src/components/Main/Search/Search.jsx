import React from 'react';
import './Search.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Search() {
    return (
        <div className="search">
            <ArrowBackIosIcon 
                className="search__backArrow"/>
            <ArrowForwardIosIcon 
                className="search__forwardArrow"/>
            <input
                className="search__input"
                placeholder={`Search`} 
                type="text"/>
                
        </div>
    )
}

export default Search

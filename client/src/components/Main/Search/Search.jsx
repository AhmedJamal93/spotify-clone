import React, {useState} from 'react';
import './Search.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';

function Search({handleSearch, search}) {

    const [searchTerm, setSearchTerm] = useState('')

    const setQuery = () => {
        handleSearch(searchTerm)
    }

    return (
        <div className="search">
            <ArrowBackIosIcon 
                className="search__backArrow"/>
            <ArrowForwardIosIcon 
                className="search__forwardArrow"/>
            <input
                className="search__input"
                placeholder={`Search`} 
                type="text"
                onChange={e => setSearchTerm(e.target.value)}
                />
            <SearchIcon 
                className="search__icon"
                onClick={setQuery}/>
        </div>
    )
}

export default Search

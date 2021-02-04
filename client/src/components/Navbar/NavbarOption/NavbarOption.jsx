import React from 'react';
import './NavbarOption.css';

function NavbarOption({Icon, title, index, handleNavbarChange, navbarActive}) {
    
    const changeIndex = () => {
        handleNavbarChange(index)
    }
    
    return (
        <div 
            className={`navbarOption ${navbarActive === index && 'navbarActive'}`}
            onClick={changeIndex}
        >
            <Icon className="navbarOption__icon"/>
            <h4>{title}</h4>
        </div>
    )
}

export default NavbarOption

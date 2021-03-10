import React from 'react';
import logo from '../../img/logo.png'
import './Header.css'

const Header = () => {
    return (
        <header className='center'>
            <img src={logo} alt=''/>
        </header>
    )
}

export default Header;
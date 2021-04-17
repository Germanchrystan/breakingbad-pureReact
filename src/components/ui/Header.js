import React from 'react';
import logo from '../../img/logo.png'
import {Link} from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <div>
            <header className='center'>
                <img src={logo} alt=''/>
            </header>
            <hr/>
            <div>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/characters">Characters</Link></li>
                    <li><Link to="/episodes">Episodes</Link></li>
                </ul>
            </div>
            <hr/>
        </div>
    )
}

export default Header;
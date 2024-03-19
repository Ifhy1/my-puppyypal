import React from 'react';
import logo from './logo.jpg';

const Header = () => {
    return (
        <header>
           <img src={logo} alt="Puppypal Logo" />
            <h1>Puppypal</h1>
            <nav>
                <ul>
                    <li> About</li>
                    <li>Features</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
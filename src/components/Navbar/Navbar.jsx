import React from 'react';
import './Navbar.css';
import searchLogo from '../../assets/searchlogo.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container" style={{ height: '100%' }}>
                <ul className="navbar-nav">
                    <li><a href="#home" className="active">HOME</a></li>
                    <li><a href="#about">ABOUT US</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#pages">PAGES</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#news">NEWS</a></li>
                    <li><a href="#shop">SHOP</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li className="search-icon-container">
                        <img src={searchLogo} alt="Search" className="search-logo" />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

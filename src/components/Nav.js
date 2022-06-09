import React from 'react';
import NavItem from './NavItem';

function Nav(props) {
    return (
        <nav className="navbar">
            <ul className="nav mr-auto">
                <NavItem link="/" title="Home"/>
                <NavItem link="#aboutLink" title="About"/>
                <NavItem link="#experienceLink" title="Experience"/>
                <NavItem link="#portfolioLink" title="Portfolio"/>
            </ul>
        </nav>
    )
}

export default Nav;
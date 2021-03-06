import React from 'react';


function NavItem(props) {
    return (
        <li className='nav-item'>
            <a className='nav-link' data-scroll href={props.link}>{props.title}</a>
        </li>
    )
}

export default NavItem;
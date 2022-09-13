import React from 'react';
import "../styles/menu.scss"

const Menu = () => {
    return (
        <div className="menu">
        <ul>
            <li>
            <a href="/" className="title">My orders</a>
            </li>
            <li>
            <a href="/">My account</a>
            </li>
            <li>
            <a href="/" className="title">Sign out</a>
            </li>
        </ul>
        </div>
    )
}

export default Menu;
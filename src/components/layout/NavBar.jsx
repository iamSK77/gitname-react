import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "./NavBar.scss";

const NavBar = ({ icon, title}) => {


return (
    <div className="navbar">
        <h1>
            <i className={icon}></i>
            {title}
        </h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
    </div>
);
}

NavBar.defaultProps = {
    title: 'GitName',
    icon: 'fab fa-github'
};

NavBar.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired
};

export default NavBar;

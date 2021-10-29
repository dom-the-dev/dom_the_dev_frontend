import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({navOpen}) => (
    <ul>
        <li>home</li>
        <li>about</li>
        <li>blog</li>
        <li>contact</li>
    </ul>
);

NavBar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
};


export default NavBar;

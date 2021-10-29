import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Navbar.module.scss'

const NavBar = ({navOpen}) => (
    <ul className={`${styles.navbar} ${navOpen ? styles.navbarShow : null}`}>
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

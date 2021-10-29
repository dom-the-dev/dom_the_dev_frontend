import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Burger.module.scss'

const Burger = ({navOpen, setNavOpen}) => {

    return (
        <button onClick={() => setNavOpen(!navOpen)}
                type="button"
                className={`${styles.burger} ${navOpen ? styles.burgerClose : null}`}
        >

            {navOpen ? 'open' : 'closed'}
            <div className={`${styles.burgerPatty} ${styles.burgerPatty1}`}/>
            <div className={`${styles.burgerPatty} ${styles.burgerPatty2}`}/>
            <div className={`${styles.burgerPatty} ${styles.burgerPatty3}`}/>
        </button>
    );
};

Burger.propTypes = {
    navOpen: PropTypes.bool.isRequired,
    setNavOpen: PropTypes.func.isRequired,
};

export default Burger;
